import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHermoIntervenEntity } from '../criterio_hemo_inter.entity';
import { CriterioHermoIntervenRepository } from '../criterio_hemo_inter.repository';
import { HermodIntervenEntity } from '../hemod_interven.entity';
import { HermodIntervenRepository } from '../hemod_interven.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosHemodIntervenService {

    constructor(
        @InjectRepository(CriterioHermoIntervenEntity)
        private readonly criterioHermoIntervenRepository: CriterioHermoIntervenRepository,
        @InjectRepository(HermodIntervenEntity)
        private readonly hermodIntervenRepository: HermodIntervenRepository,
    ) { }

        //LISTANDO CRITERIOS POR ESTANDAR
async getCriterioForEstandar(id: number): Promise<CriterioHermoIntervenEntity[]> {
    const cri_hemo_inter = await this.criterioHermoIntervenRepository.createQueryBuilder('criterio')
    .select(['criterio', 'hermod_interven.hermointer_nombre_estandar'])
    .innerJoin('criterio.hermod_interven', 'hermod_interven')
    .where('hermod_interven.hermointer_id = :dial_est', { dial_est : id})
    .getMany()
    if (!cri_hemo_inter) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    return cri_hemo_inter
}
}
