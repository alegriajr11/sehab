import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioCuidIntermNeonatalEntity } from '../criterio_cuid_inter_neonatal.entity';
import { CuidIntermNeonatalEntity } from '../cuid_inter_neonatal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntermNeonatalRepository } from '../criterio_cuid_inter_neonatal.repository';
import { CuidIntermNeonatalRepository } from '../cuid_inter_neonatal.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCuidInterNeonatalService {

    constructor(
        @InjectRepository(CriterioCuidIntermNeonatalEntity)
        private readonly criterioCuidIntermNeonatalRepository: CriterioCuidIntermNeonatalRepository,
        @InjectRepository(CuidIntermNeonatalEntity)
        private readonly cuidIntermNeonatalRepository: CuidIntermNeonatalRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntermNeonatalEntity[]> {
            const cri_cuid_neo = await this.criterioCuidIntermNeonatalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_inter_neonatal.cuid_inter_adult_nombre_estandar'])
            .innerJoin('criterio.cuid_inter_neonatal', 'cuid_inter_neonatal')
            .where('cuid_inter_neonatal.cuid_inter_adult_id = :cuid_neo_est', {cuid_neo_est : id})
            .getMany()
            if (!cri_cuid_neo) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_neo
        }
}
