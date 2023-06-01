import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioUrgenciasEntity } from '../criterio_urgencias.entity';
import { UrgenciasEntity } from '../urgencias.entity';
import { UrgenciasRepository } from '../urgencias.repository';
import { CriterioUrgenciasRepository } from '../criterio_urgencias.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosUrgenciasService {

    constructor(
        @InjectRepository(CriterioUrgenciasEntity)
        private readonly criterioUrgenciasRepository: CriterioUrgenciasRepository,
        @InjectRepository(UrgenciasEntity)
        private readonly urgenciasRepository: UrgenciasRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioUrgenciasEntity[]> {
            const cri_urge = await this.criterioUrgenciasRepository.createQueryBuilder('criterio')
            .select(['criterio', 'urgencias.urg_nombre_estandar'])
            .innerJoin('criterio.urgencias', 'urgencias')
            .where('urgencias.urg_id = :urge_est', {urge_est : id})
            .getMany()
            if (!cri_urge) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_urge
        }
}
