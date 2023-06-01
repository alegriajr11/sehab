import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioCirugiaEntity } from '../criterio_cirugia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CirugiaEntity } from '../cirugia.entity';
import { CirugiaRepository } from '../cirugia.repository';
import { CriterioCirugiaRepository } from '../criterio_cirugia.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosCirugiaService {

    constructor(
        @InjectRepository(CriterioCirugiaEntity)
        private readonly criterioCirugiaRepository: CriterioCirugiaRepository,
        @InjectRepository(CirugiaEntity)
        private readonly cirugiaRepository: CirugiaRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCirugiaEntity[]> {
            const cri_ciru = await this.criterioCirugiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cirugia.ciru_nombre_estandar'])
            .innerJoin('criterio.cirugia', 'cirugia')
            .where('cirugia.ciru_id = :ciru_est', {ciru_est : id})
            .getMany()
            if (!cri_ciru) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_ciru
        }
}
