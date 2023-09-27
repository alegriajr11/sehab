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
    async create(eva_id: number,crip_id: number, dto: CalificacionPamDto ): Promise<any> {
        const evaluacion = await this.evaluacionPamecRepository.findOne({ where: { eva_id: eva_id } });
        if (!evaluacion) throw new NotFoundException(new MessageDto('La evaluacion no ha sido creada'))
        const criterio = await this.criterioPamRepository.findOne({ where: { crip_id: crip_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creada'))
        const calificacion = this.calificacionPamRepository.create(dto)
        //asigna la evaluacion a la calificacion
        calificacion.cal_evaluacion_pam = evaluacion
        //asigna eñ criterio a la evaluacion
        calificacion.criteriopam_calificacion = criterio
        await this.calificacionPamRepository.save(calificacion)
        return new MessageDto('La calificacionha sido Creada');
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


        await this.calificacionPamRepository.save(calificacion);

        return new MessageDto(`La calificacion ha sido Actualizada`);
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }
}
