import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioDiagnostVascularEntity } from '../criterio_diagnost_vascular.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioDiagnostVascularRepository } from '../criterio_diagnost_vascular.repository';
import { DiagnosticoVascularEntity } from '../diagnostico_vascular.entity';
import { DiagnosticoVascularRepository } from '../diagnostico_vascular.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioDiagnostVascularDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/diagnostico_vascular_dto/criterio_diagnostico_vascular.dto';


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


//METODO AGREGAR CRITERIO-GIAGNOSTICO VASCULAR
async create(diag_vas_id: number, dto: CriterioDiagnostVascularDto): Promise<any> {
    const diagnostVascular = await this.diagnosticoVascularRepository.findOne({ where: { diag_vas_id: diag_vas_id} });
    if (!diagnostVascular) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
    //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
    const criterioDiagnostVascular = this.criterioDiagnostVascularRepository.create(dto)
    //ASIGNAMOS EL ESTANDAR AL CRITERIO
    criterioDiagnostVascular.diagnostico_vascular = diagnostVascular
    //GUARDAR LOS DATOS EN LA BD
    await this.criterioDiagnostVascularRepository.save(criterioDiagnostVascular)
    return new MessageDto('El criterio ha sido Creado Correctamente');
}

//ENCONTRAR POR ID - CRITERIO GIAGNOSTICO VASCULAR
async findById(crivac_id: number): Promise<CriterioDiagnostVascularEntity> {
    const cri_diagnos_vascu = await this.criterioDiagnostVascularRepository.findOne({ where: { crivac_id } });
    if (!cri_diagnos_vascu) {
        throw new NotFoundException(new MessageDto('El Criterio No Existe'));
    }
    return cri_diagnos_vascu;
}

//ELIMINAR CRITERIO GIAGNOSTICO VASCULAR
async delete(id: number): Promise<any> {
    const cri_diagnos_vascu = await this.findById(id);
    await this.criterioDiagnostVascularRepository.delete(cri_diagnos_vascu.crivac_id)
    return new MessageDto(`Criterio Eliminado`);
}
}   
