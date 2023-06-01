import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioMuestraLabClinicoEntity } from '../criterio_tom_muestras.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MuestrasLabClinicoEntity } from '../tom_muestras.entity';
import { CriterioMuestraLabClinicoRepository } from '../criterio_tom_muestras.repository';
import { MuestrasLabClinicoRepository } from '../tom_muestras.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosTomMuestrasService {

    constructor(
        @InjectRepository(CriterioMuestraLabClinicoEntity)
        private readonly criterioMuestraLabClinicoRepository: CriterioMuestraLabClinicoRepository,
        @InjectRepository(MuestrasLabClinicoEntity)
        private readonly muestrasLabClinicoRepository: MuestrasLabClinicoRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioMuestraLabClinicoEntity[]> {
            const cri_tom_mues = await this.criterioMuestraLabClinicoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'tom_mue_lab_clinico.mue_lab_cli_nombre_estandar'])
            .innerJoin('criterio.tom_mue_lab_clinico', 'tom_mue_lab_clinico')
            .where('tom_mue_lab_clinico.mue_lab_cli_id = :mues_est', { mues_est : id})
            .getMany()
            if (!cri_tom_mues) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_tom_mues
        }
}
