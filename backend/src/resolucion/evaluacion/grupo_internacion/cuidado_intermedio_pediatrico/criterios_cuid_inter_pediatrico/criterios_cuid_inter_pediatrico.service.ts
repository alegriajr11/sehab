import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioCuidIntermPediatricoEntity } from '../criterio_cuid_inter_pediatrico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CuidIntermPediatricoEntity } from '../cuid_inter_pediatrico.entity';
import { CriterioCuidIntermPediatricoRepository } from '../criterio_cuid_inter_pediatrico.repository';
import { CuidIntermPediatricoRepository } from '../cuid_inter_pediatrico.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCuidInterPediatricoService {

    constructor(
        @InjectRepository(CriterioCuidIntermPediatricoEntity)
        private readonly criterioCuidIntermPediatricoRepository: CriterioCuidIntermPediatricoRepository,
        @InjectRepository(CuidIntermPediatricoEntity)
        private readonly cuidIntermPediatricoRepository: CuidIntermPediatricoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntermPediatricoEntity[]> {
            const cri_cuid_ped = await this.criterioCuidIntermPediatricoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_inter_pediatrico.cuid_inter_pedi_nombre_estandar'])
            .innerJoin('criterio.cuid_inter_pediatrico', 'cuid_inter_pediatrico')
            .where('cuid_inter_pediatrico.cuid_inter_pedi_id = :cui_pedi_est', {cui_pedi_est : id})
            .getMany()
            if (!cri_cuid_ped) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_ped
        }
}
