import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalificacionpamEntity } from '../calificacionpam.entity';
import { CalificacionPamRepository } from '../calificacionpam.repository';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { ActividadEntity } from '../actividad.entity';
import { ActividadRepository } from '../actividad.repository';
import { CriteriopamEntity } from '../criteriopam.entity';
import { CriterioPamRepository } from '../criteriopam.repository';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionPamDto } from 'src/usuario/dto/Pamec/calificacionpam.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from 'src/auth/payload.interface';
import { EvaluacionPamecEntity } from '../evaluacion-pamec.entity';
import { EvaluacionPamecRepository } from '../evaluacion-pamec.repository';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';

@Injectable()
export class CalificacionpamecService {

    constructor(
        @InjectRepository(ActividadEntity)
        private readonly actividadRepository: ActividadRepository,
        @InjectRepository(CalificacionpamEntity)
        private readonly calificacionPamRepository: CalificacionPamRepository,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        private readonly jwtService: JwtService,
        @InjectRepository(CriteriopamEntity)
        private readonly criterioPamRepository: CriterioPamRepository,
        @InjectRepository(EvaluacionPamecEntity)
        private readonly evaluacionPamecRepository: EvaluacionPamecRepository,
        private readonly auditoria_registro_services: AuditoriaRegistroService
        
    ) { }

    //ENCONTRAR CRITERIO POR ID
    async findByIdCriterioPamec(crip_id: number): Promise<CriteriopamEntity> {
        const criterioPamec = await this.criterioPamRepository.findOne({ where: { crip_id } });
        if (!criterioPamec) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterioPamec;
    }
    //ENCONTRAR  POR ID
    async findByIdCalificacionPamec(cal_id: number): Promise<CalificacionpamEntity> {
        const calificacionPamec = await this.calificacionPamRepository.findOne({ where: { cal_id } });
        if (!calificacionPamec) {
            throw new NotFoundException(new MessageDto('La Calificacion No Existe'));
        }
        return calificacionPamec;
    }

    async getall(): Promise<CalificacionpamEntity[]> {
        const cumplimiento_estandar = await this.calificacionPamRepository.createQueryBuilder('calificaciones')
            .select(['calificaciones', 'criteriopam.crip_desarrollo_etapas', 'criteriopam.crip_nombre', 'crip_actividad.act_nombre'])
            .innerJoin('calificaciones.criteriopam', 'criteriopam')
            .innerJoinAndSelect('criteriopam.crip_actividad', 'crip_actividad')
            .getMany()
        if (!cumplimiento_estandar.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return cumplimiento_estandar
    }


    //CREAR CALIFICACION PAMEC
    async createCalificacionPamec(payloads: { dto: CalificacionPamDto, tokenDto: TokenDto }): Promise<any> {
        try {
            const { dto, tokenDto } = payloads;

            const usuario = await this.jwtService.decode(tokenDto.token);

            const payloadInterface: PayloadInterface = {
                usu_id: usuario[`usu_id`],
                usu_nombre: usuario[`usu_nombre`],
                usu_apellido: usuario[`usu_apellido`],
                usu_nombreUsuario: usuario[`usu_nombreUsuario`],
                usu_email: usuario[`usu_email`],
                usu_estado: usuario[`usu_estado`],
                usu_roles: usuario[`usu_roles`]
            };

            const year = new Date().getFullYear().toString();

            // SE BUSCA EL CRITERIO QUE SE ASIGNA A LA CALIFICACION
            const criterio = await this.criterioPamRepository.findOne({ where: { crip_id: dto.crip_id } });
            if (!criterio) {
                throw new Error('El criterio no ha sido creado');
            }

            const nombre_criterio = criterio.crip_nombre;

            // SE BUSCA LA EVALUACION QUE SE ASIGNA A LA CALIFICACION
            const evaluacion_pamec= await this.evaluacionPamecRepository.findOne({ where: { eva_id: dto.eva_id }, relations: ['eval_acta_pamec'] });
            if (!evaluacion_pamec) {
                throw new Error('La evaluación no ha sido creada');
            }

            //ASIGNO EL ACTA ID
            const acta_id_Pamec = evaluacion_pamec.eval_acta_pamec.act_id;

            // ASIGNO LA CALIFICACION EN ASIGNADO
            dto.cal_asignado = '0';
            

            // CREAMOS EL DTO DE LA CALIFICACION
            const calificacion = await this.calificacionPamRepository.create(dto);

            // ASIGNAMOS LA FORANEA DE CALIFICACION CON CRITERIO_CALIFICACION
            calificacion.criteriopam_calificacion = criterio;
            // ASIGNAMOS LA FORANEA DE CUMPLIMIENTO CON EVALUACIÓN_SIC CREADA
            //calificacion. = evaluacion_sic;

            // GUARDAMOS LA CALIFICACION EN LA BASE DE DATOS
            await this.calificacionPamRepository.save(calificacion);

            // ASIGNAR LA AUDITORIA DEL CUMPLIMIENTO ASIGNADO AL CRITERIO
            await this.auditoria_registro_services.logCreateCalificacionSpInd(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                dto.cal_nota,
                nombre_criterio,
                acta_id_Pamec,
                year,
            );
            return new MessageDto('Calificacion Asignada');
        } catch (error) {
            // Aquí puedes manejar el error, por ejemplo, lanzar una excepción personalizada o registrar el error en un registro de errores.
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }

    //ACTUALIZACION CALIFICACION PAMEC
    async update(id: number, dto: CalificacionPamDto): Promise<any> {
        try {
            
        const calificacion = await this.findByIdCalificacionPamec(id);
        if (!calificacion)
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));

        dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
        dto.cal_aplica ? calificacion.cal_aplica = dto.cal_aplica : calificacion.cal_aplica = calificacion.cal_aplica;
        dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;
        dto.cal_asignado = '1';


        await this.calificacionPamRepository.save(calificacion);

        return new MessageDto(`La calificacion ha sido Actualizada`);
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }
}
