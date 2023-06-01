import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidInteNeonatalEntity } from '../criterio_cuid_intens_neonatal.entity';
import { CuidInteNeonatalEntity } from '../cuid_intens_neonatal.entity';
import { CriterioCuidInteNeonatalRepository } from '../criterio_cuid_intens_neonatal.repository';
import { CuidInteNeonatalRepository } from '../cuid_intens_neonatal.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCuidIntensNeonatalService {

    constructor(
        @InjectRepository(CriterioCuidInteNeonatalEntity)
        private readonly criterioCuidInteNeonatalRepository: CriterioCuidInteNeonatalRepository,
        @InjectRepository(CuidInteNeonatalEntity)
        private readonly cuidInteNeonatalRepository: CuidInteNeonatalRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidInteNeonatalEntity[]> {
            const cri_itens_neo = await this.criterioCuidInteNeonatalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_int_neonatal.cuid_int_neona_nombre_estandar'])
            .innerJoin('criterio.cuid_int_neonatal', 'cuid_int_neonatal')
            .where('cuid_int_neonatal.cuid_int_neona_id = :intes_neo_est', {intes_neo_est: id})
            .getMany()
            if (!cri_itens_neo) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_itens_neo
        }
}
