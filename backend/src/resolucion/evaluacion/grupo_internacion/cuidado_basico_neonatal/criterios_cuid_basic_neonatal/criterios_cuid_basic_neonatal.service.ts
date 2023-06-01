import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioCuidBasNeonatalEntity } from '../criterio_cuid_basic_neonatal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CuidBasNeonatalEntity } from '../cuid_basic_neonatal.entity';
import { CriterioCuidBasNeonatalRepository } from '../criterio_cuid_basic_neonatal.repository';
import { CuidBasNeonatalRepository } from '../cuid_basic_neonatal.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCuidBasicNeonatalService {

    constructor(
        @InjectRepository(CriterioCuidBasNeonatalEntity)
        private readonly criterioCuidBasNeonatalRepository: CriterioCuidBasNeonatalRepository,
        @InjectRepository(CuidBasNeonatalEntity)
        private readonly cuidBasNeonatalRepository: CuidBasNeonatalRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidBasNeonatalEntity[]> {
            const cri_cui_neo = await this.criterioCuidBasNeonatalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_bas_neonatal.cuid_neona_nombre_estandar'])
            .innerJoin('criterio.cuid_bas_neonatal', 'cuid_bas_neonatal')
            .where('cuid_bas_neonatal.cuid_neona_id = :neo_est', {neo_est : id})
            .getMany()
            if (!cri_cui_neo) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cui_neo
        }
}
