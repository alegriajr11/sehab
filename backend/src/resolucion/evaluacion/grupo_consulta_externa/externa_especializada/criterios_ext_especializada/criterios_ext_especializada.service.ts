import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioEspecializadaEntity } from '../criterio_especializada.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ExternaEspecializadaEntity } from '../especializada.entity';
import { ExternaEspecializadaRepository } from '../especializada.repository';
import { CriterioEspecializadaRepository } from '../criterio_especializada.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosExtEspecializadaService {

    constructor(
        @InjectRepository(CriterioEspecializadaEntity)
        private readonly criterioEspecializadaRepository: CriterioEspecializadaRepository,
        @InjectRepository(ExternaEspecializadaEntity)
        private readonly externaEspecializadaRepository: ExternaEspecializadaRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioEspecializadaEntity[]> {
            const cri_espe = await this.criterioEspecializadaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'externa_especializada.exte_nombre_estandar'])
            .innerJoin('criterio.externa_especializada', 'externa_especializada')
            .where('externa_especializada.exte_id = :espe_est', {espe_est : id})
            .getMany()
            if (!cri_espe) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_espe
        }
}
