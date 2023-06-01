import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioQuimioterapiaEntity } from '../criterio_quimioterapia.entity';
import { QuimioterapiaEntity } from '../quimioterapia.entity';
import { CriterioQuimioterapiaRepository } from '../criterio_quimioterapia.repository';
import { QuimioterapiaRepository } from '../quimioterapia.repository';

@Injectable()
export class CriterioQuimioterapiaService {

    constructor(
        @InjectRepository(CriterioQuimioterapiaEntity)
        private readonly criterioQuimioterapiaRepository: CriterioQuimioterapiaRepository,
        @InjectRepository(QuimioterapiaEntity)
        private readonly quimioterapiaRepository: QuimioterapiaRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioQuimioterapiaEntity[]> {
            const cri_quimio = await this.criterioQuimioterapiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'quimioterapia.quim_nombre_estandar'])
            .innerJoin('criterio.quimioterapia', 'quimioterapia')
            .where('quimioterapia.quim_id = :quim_est', { quim_est : id})
            .getMany()
            if (!cri_quimio) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_quimio
        }
}
