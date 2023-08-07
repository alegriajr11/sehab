import { Injectable, NotFoundException } from '@nestjs/common';
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

@Injectable()
export class CalificacionpamecService {

    constructor(
        @InjectRepository(ActividadEntity)
        private readonly actividadRepository: ActividadRepository,
        @InjectRepository(CalificacionpamEntity)
        private readonly calificacionPamRepository: CalificacionPamRepository,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(CriteriopamEntity)
        private readonly criterioPamRepository: CriterioPamRepository,
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
}
