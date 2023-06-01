import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioLabHistotecnologiaEntity } from '../criterio_lab_histotec.entity';
import { CriterioLabHistotecnologiaRepository } from '../criterio_lab_histotec.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { LabHistotecnologiaEntity } from '../lab_histotecnologia.entity';
import { LabHistotecnologiaRepository } from '../lab_histotecnologia.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosLabHistotecnologiaService {

    constructor(
        @InjectRepository(CriterioLabHistotecnologiaEntity)
        private readonly criterioLabHistotecnologiaRepository: CriterioLabHistotecnologiaRepository,
        @InjectRepository(LabHistotecnologiaEntity)
        private readonly labHistotecnologiaRepository: LabHistotecnologiaRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioLabHistotecnologiaEntity[]> {
            const cri_lab_hidtec = await this.criterioLabHistotecnologiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'lab_histotecnologia.labhisto_nombre_estandar'])
            .innerJoin('criterio.lab_histotecnologia', 'lab_histotecnologia')
            .where('lab_histotecnologia.labhisto_id = :histo_est', { histo_est : id})
            .getMany()
            if (!cri_lab_hidtec) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_lab_hidtec
        }
}
