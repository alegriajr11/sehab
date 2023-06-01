import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioDiagnostVascularEntity } from '../criterio_diagnost_vascular.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioDiagnostVascularRepository } from '../criterio_diagnost_vascular.repository';
import { DiagnosticoVascularEntity } from '../diagnostico_vascular.entity';
import { DiagnosticoVascularRepository } from '../diagnostico_vascular.repository';
import { MessageDto } from 'src/common/message.dto';


@Injectable()
export class CriterioDiagnostVascularService {
    constructor(
        @InjectRepository(CriterioDiagnostVascularEntity)
        private readonly criterioDiagnostVascularRepository: CriterioDiagnostVascularRepository,
        @InjectRepository(DiagnosticoVascularEntity)
        private readonly diagnosticoVascularRepository: DiagnosticoVascularRepository,
    ) { }

//LISTANDO CRITERIOS POR ESTANDAR
async getCriterioForEstandar(id: number): Promise<CriterioDiagnostVascularEntity[]> {
    const cri_diagnos_vascu = await this.criterioDiagnostVascularRepository.createQueryBuilder('criterio')
    .select(['criterio', 'diagnostico_vascular.diag_vas_nombre_estandar'])
    .innerJoin('criterio.diagnostico_vascular', 'diagnostico_vascular')
    .where('diagnostico_vascular.diag_vas_id = :dial_est', { dial_est : id})
    .getMany()
    if (!cri_diagnos_vascu) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    return cri_diagnos_vascu
}
}   
