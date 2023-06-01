import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioConsumoPsicoactivasEntity } from '../criterio_cuid_cons_psicoact.entity';
import { ConsumoPsicoactivasEntity } from '../cuid_consumo_psicoactivas.entity';
import { CriterioConsumoPsicoactivasRepository } from '../criterio_cuid_cons_psicoact.repository';
import { ConsumoPsicoactivasRepository } from '../cuid_consumo_psicoactivas.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosConsPsicoactivasService {

    constructor(
        @InjectRepository(CriterioConsumoPsicoactivasEntity)
        private readonly criterioConsumoPsicoactivasRepository: CriterioConsumoPsicoactivasRepository,
        @InjectRepository(ConsumoPsicoactivasEntity)
        private readonly consumoPsicoactivasRepository: ConsumoPsicoactivasRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioConsumoPsicoactivasEntity[]> {
            const cri_psico = await this.criterioConsumoPsicoactivasRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cons_psicoactivas.cons_psi_nombre_estandar'])
            .innerJoin('criterio.cons_psicoactivas', 'cons_psicoactivas')
            .where('cons_psicoactivas.cons_psi_id = :psico_est', {psico_est : id})
            .getMany()
            if (!cri_psico) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_psico
        }
}
