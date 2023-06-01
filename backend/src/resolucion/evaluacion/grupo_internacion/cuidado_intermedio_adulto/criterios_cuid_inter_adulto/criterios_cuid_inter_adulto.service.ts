import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntermAdultoEntity } from '../criterio_cuid_inter_adulto.entity';
import { CuidIntermAdultoEntity } from '../cuid_inter_adulto.entity';
import { CriterioCuidIntermAdultoRepository } from '../criterio_cuid_inter_adulto.repository';
import { CuidIntermAdultoRepository } from '../cuid_inter_adulto.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCuidInterAdultoService {

    constructor(
        @InjectRepository(CriterioCuidIntermAdultoEntity)
        private readonly criterioCuidIntermAdultoRepository: CriterioCuidIntermAdultoRepository,
        @InjectRepository(CuidIntermAdultoEntity)
        private readonly cuidIntermAdultoRepository: CuidIntermAdultoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntermAdultoEntity[]> {
            const cri_cuid_inter = await this.criterioCuidIntermAdultoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_inter_adulto.cuid_inter_adult_nombre_estandar'])
            .innerJoin('criterio.cuid_inter_adulto', 'cuid_inter_adulto')
            .where('cuid_inter_adulto.cuid_inter_adult_id = :inter_adul_est', {inter_adul_est : id})
            .getMany()
            if (!cri_cuid_inter) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_inter
        }
}
