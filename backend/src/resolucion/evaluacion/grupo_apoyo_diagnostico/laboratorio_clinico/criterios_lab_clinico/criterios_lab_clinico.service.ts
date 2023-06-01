import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioLabClinicoEntity } from '../criterio_lab_clinico.entity';
import { LabClinicoEntity } from '../laboratorio_clinico.entity';
import { CriterioLabClinicoRepository } from '../criterio_lab_clinico.repository';
import { LabClinicoRepository } from '../laboratorio_clinico.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosLabClinicoService {

    constructor(
        @InjectRepository(CriterioLabClinicoEntity)
        private readonly criterioLabClinicoRepository: CriterioLabClinicoRepository,
        @InjectRepository(LabClinicoEntity)
        private readonly labClinicoRepository: LabClinicoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioLabClinicoEntity[]> {
            const cri_lab_clin = await this.criterioLabClinicoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'lab_clinico.labclin_nombre_estandar'])
            .innerJoin('criterio.lab_clinico', 'lab_clinico')
            .where('lab_clinico.labclin_id = :lab_cli_est', { lab_cli_est : id})
            .getMany()
            if (!cri_lab_clin) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_lab_clin
        }
}
