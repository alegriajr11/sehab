import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntensAdultoEntity } from '../criterio_cuid_intens_adulto.entity';
import { CuidIntAdultoEntity } from '../cuid_intens_adulto.entity';
import { CriterioCuidIntensAdultoRepository } from '../criterio_cuid_intens_adulto.repository';
import { CuidIntAdultoRepository } from '../cuid_intens_adulto.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCuidIntensAdultoService {

    constructor(
        @InjectRepository(CriterioCuidIntensAdultoEntity)
        private readonly criterioCuidIntensAdultoRepository: CriterioCuidIntensAdultoRepository,
        @InjectRepository(CuidIntAdultoEntity)
        private readonly cuidIntAdultoRepository: CuidIntAdultoRepository,
        ) {}

         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntensAdultoEntity[]> {
            const cri_cui_ite_adu = await this.criterioCuidIntensAdultoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_int_adulto.cuid_int_adult_nombre_estandar'])
            .innerJoin('criterio.cuid_int_adulto', 'cuid_int_adulto')
            .where('cuid_int_adulto.cuid_int_adult_id = :cui_int_adu_est', {cui_int_adu_est : id})
            .getMany()
            if (!cri_cui_ite_adu) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cui_ite_adu
        }
}
