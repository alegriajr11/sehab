import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioRadioterapiaEntity } from '../criterio_radioterapia.entity';
import { RadioterapiaEntity } from '../radioterapia.entity';
import { RadioterapiaRepository } from '../radioterapia.repository';
import { CriterioRadioterapiaRepository } from '../criterio_radioterapia.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriterioRadioterapiaService {


    constructor(
        @InjectRepository(CriterioRadioterapiaEntity)
        private readonly criterioRadioterapiaRepository: CriterioRadioterapiaRepository,
        @InjectRepository(RadioterapiaEntity)
        private readonly radioterapiaRepository: RadioterapiaRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioRadioterapiaEntity[]> {
            const cri_radio = await this.criterioRadioterapiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'radioterapia.radi_nombre_estandar'])
            .innerJoin('criterio.radioterapia', 'radioterapia')
            .where('radioterapia.radi_id = :radio_est', { radio_est : id})
            .getMany()
            if (!cri_radio) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_radio
        }
}
