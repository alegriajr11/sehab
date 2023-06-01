import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioLabUterinaEntity } from '../criterio_lab_citologia_uterina.entity';
import { CriterioLabUterinaRepository } from '../criterio_lab_citologia_uterina.repository';
import { LabCitologiaUterinaEntity } from '../lab_citologia_uterina.entity';
import { LabCitologiaUterinaRepository } from '../lab_citologia_uterina.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosLabCitologiaService {

    constructor(
        @InjectRepository(CriterioLabUterinaEntity)
        private readonly criterioLabUterinaRepository: CriterioLabUterinaRepository,
        @InjectRepository(LabCitologiaUterinaEntity)
        private readonly labCitologiaUterinaRepository: LabCitologiaUterinaRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioLabUterinaEntity[]> {
            const cri_lab_cito_ute = await this.criterioLabUterinaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'lab_cit_uterina.labcit_uter_nombre_estandar'])
            .innerJoin('criterio.lab_cit_uterina', 'lab_cit_uterina')
            .where('lab_cit_uterina.labcit_uter_id = :uter_est', { uter_est : id})
            .getMany()
            if (!cri_lab_cito_ute) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_lab_cito_ute
        }
}
