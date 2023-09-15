import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioIndEntity } from './criterioind.entity';
import { CriterioIndRepository } from './criterioind.repository';
import { EtapaInd } from './etapaind.entity';
import { EtapaIndRepository } from './etapaind.repository';
import { calificacionindDto } from './dto/calificacionind.dto';
import { CalificacionIndEntity } from './calificacionind.entity';
import { CalificacionIndRepository } from './calificacionind.repository';
import { TokenDto } from 'src/auth/dto/token.dto';
import { PayloadInterface } from 'src/auth/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { EvaluacionIndependientesEntity } from './evaluacion-independientes.entity';
import { EvaluacionIndependientesRepository } from './evaluacion-independientes.repository';


@Injectable()
export class SpIndService {

    constructor(
        @InjectRepository(EtapaInd)

        private etapaIndRepository: EtapaIndRepository,
        @InjectRepository(CriterioIndEntity)
        private criterioIndRepository: CriterioIndRepository,
        private readonly jwtService: JwtService,
        @InjectRepository(CalificacionIndEntity)
        private calificacionIndRepository: CalificacionIndRepository,
        @InjectRepository(EvaluacionIndependientesEntity)
        private evaluacionIndependientesRepository: EvaluacionIndependientesRepository,
        private readonly auditoria_registro_services: AuditoriaRegistroService

    ) { }

    //LISTAR ETAPAS DE IND
    async getall(): Promise<EtapaInd[]> {
        const criterios = await this.etapaIndRepository.find();
        if (!criterios.length) throw new NotFoundException(new MessageDto('No hay etapas en la lista'))
        return criterios;
    }

    async findById(eta_id: number): Promise<EtapaInd> {
        const eta = await this.etapaIndRepository.findOne({ where: { eta_id } });
        if (!eta) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return eta;
    }

    async findByIdcalificacion(cal_id: number): Promise<CalificacionIndEntity> {
        const calificacion = await this.calificacionIndRepository.findOne({ where: { cal_id } });
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return calificacion;
    }

    //CREAR CALIFICACION SP INDEPENDIENTES
    async createCalificacionSpInd(payloads: { dto: calificacionindDto, tokenDto: TokenDto }): Promise<any> {
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
            const criterio = await this.criterioIndRepository.findOne({ where: { cri_id: dto.cri_id } });
            if (!criterio) {
                throw new Error('El criterio no ha sido creado');
            }

            //Asignacion del nombre criterio a la constante nombre criterio
            const nombre_criterio = criterio.cri_nombre;

            // SE BUSCA LA EVALUACION QUE SE ASIGNA A LA CALIFICACION
            const evaluacion_ind = await this.evaluacionIndependientesRepository.findOne({ where: { eva_id: dto.eva_id }, relations: ['eval_acta_ind'] });
            if (!evaluacion_ind) {
                throw new Error('La evaluación no ha sido creada');
            }

            //ASIGNO EL ACTA ID
            const acta_idSpInd = evaluacion_ind.eval_acta_ind.act_id;

            // ASIGNO LA CALIFICACION EN ASIGNADOO
            dto.cal_asignado = 'true';


            // CREAMOS EL DTO DE LA CALIFICACION
            const calificacion = await this.calificacionIndRepository.create(dto);

            // ASIGNAMOS LA FORANEA DE CALIFICACION CON CRITERIO_CALIFICACION
            calificacion.criterio_cal = criterio;
            // ASIGNAMOS LA FORANEA DE CUMPLIMIENTO CON EVALUACIÓN_SIC CREADA
            //calificacion. = evaluacion_sic;

            // GUARDAMOSLA CALIFICACION EN LA BASE DE DATOS
            await this.calificacionIndRepository.save(calificacion);

            // ASIGNAR LA AUDITORIA DEL CUMPLIMIENTO ASIGNADO AL CRITERIO
            await this.auditoria_registro_services.logCreateCalificacionSpInd(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                dto.cal_nota,
                nombre_criterio,
                acta_idSpInd,
                year,
            );
            return new MessageDto('Calificacion Asignada');
        } catch (error) {
            // Aquí puedes manejar el error, por ejemplo, lanzar una excepción personalizada o registrar el error en un registro de errores.
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }

    //ACTUALIZACION CALIFICACION SP INDEPENDIENTES
    async update(id: number, dto: calificacionindDto): Promise<any> {

        try {
            const calificacion = await this.findByIdcalificacion(id);
            if (!calificacion)
                throw new NotFoundException(new MessageDto('El Criterio No Existe'));

            dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
            dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;


            await this.calificacionIndRepository.save(calificacion);

            return new MessageDto(`La calificacion ha sido Actualizada`);

        } catch (error) {
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }
}
