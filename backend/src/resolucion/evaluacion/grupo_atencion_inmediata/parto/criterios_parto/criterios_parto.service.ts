import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioPartoEntity } from '../criterio_parto.entity';
import { PartoEntity } from '../parto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PartoRepository } from '../parto.repository';
import { CriterioPartoRepository } from '../criterio_parto.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosPartoService {

    constructor(
        @InjectRepository(CriterioPartoEntity)
        private readonly criterioPartoRepository: CriterioPartoRepository,
        @InjectRepository(PartoEntity)
        private readonly partoRepository: PartoRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioPartoEntity[]> {
            const cri_parto = await this.criterioPartoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'parto.parto_nombre_estandar'])
            .innerJoin('criterio.parto', 'parto')
            .where('parto.parto_id = :part_est', { part_est : id})
            .getMany()
            if (!cri_parto) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_parto
        }
}
