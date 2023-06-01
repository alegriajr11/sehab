import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntePediatricoEntity } from '../criterio_cuid_intens_pediatrico.entity';
import { CuidIntePediatricoEntity } from '../cuid_intens_pediatrico.entity';
import { CriterioCuidIntePediatricoRepository } from '../criterio_cuid_intens_pediatrico.repository';
import { CuidIntePediatricoRepository } from '../cuid_intens_pediatrico.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCuidIntensPediatricoService {

    constructor(
        @InjectRepository(CriterioCuidIntePediatricoEntity)
        private readonly criterioCuidIntePediatricoRepository: CriterioCuidIntePediatricoRepository,
        @InjectRepository(CuidIntePediatricoEntity)
        private readonly cuidIntePediatricoRepository: CuidIntePediatricoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntePediatricoEntity[]> {
            const cri_cuid_pedi = await this.criterioCuidIntePediatricoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_int_pediatrico.cuid_int_pedi_nombre_estandar'])
            .innerJoin('criterio.cuid_int_pediatrico', 'cuid_int_pediatrico')
            .where('cuid_int_pediatrico.cuid_int_pedi_id = :pedia_est', {pedia_est : id})
            .getMany()
            if (!cri_cuid_pedi) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_pedi
        }
}
