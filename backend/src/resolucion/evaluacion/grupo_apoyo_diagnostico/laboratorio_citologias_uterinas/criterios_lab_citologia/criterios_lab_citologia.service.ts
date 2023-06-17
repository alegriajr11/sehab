import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioLabUterinaEntity } from '../criterio_lab_citologia_uterina.entity';
import { CriterioLabUterinaRepository } from '../criterio_lab_citologia_uterina.repository';
import { LabCitologiaUterinaEntity } from '../lab_citologia_uterina.entity';
import { LabCitologiaUterinaRepository } from '../lab_citologia_uterina.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioLabUterinaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/laboratorio_citologias_uterinas_dto/criterio_lab_citologia_uterina.dto';

@Injectable()
export class CriteriosLabCitologiaService {

    constructor(
        @InjectRepository(CriterioLabUterinaEntity)
        private readonly criterioLabUterinaRepository: CriterioLabUterinaRepository,
        @InjectRepository(LabCitologiaUterinaEntity)
        private readonly labCitologiaUterinaRepository: LabCitologiaUterinaRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioLabUterinaEntity[]> {
        const cri_lab_cito_ute = await this.criterioLabUterinaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'lab_cit_uterina.labcit_uter_nombre_estandar'])
            .innerJoin('criterio.lab_cit_uterina', 'lab_cit_uterina')
            .where('lab_cit_uterina.labcit_uter_id = :uter_est', { uter_est: id })
            .getMany()
        if (!cri_lab_cito_ute) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_lab_cito_ute
    }

    //METODO AGREGAR CRITERIO-HEMODINamia
    async create(labcit_uter_id: number, dto: CriterioLabUterinaDto): Promise<any> {
        const citouterinas = await this.labCitologiaUterinaRepository.findOne({ where: { labcit_uter_id: labcit_uter_id } });
        if (!citouterinas) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriocitouterinas = this.criterioLabUterinaRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriocitouterinas.lab_cit_uterina = citouterinas
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioLabUterinaRepository.save(criteriocitouterinas)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO CITOLOGIAS UTERINAS
    async findById(cri_lab_ute_id: number): Promise<CriterioLabUterinaEntity> {
        const cri_citolo_ute = await this.criterioLabUterinaRepository.findOne({ where: { cri_lab_ute_id } });
        if (!cri_citolo_ute) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return cri_citolo_ute;
    }

    //ELIMINAR CRITERIO CITOLOGIAS UTERINAS
    async delete(id: number): Promise<any> {
        const cri_citolo_ute = await this.findById(id);
        await this.criterioLabUterinaRepository.delete(cri_citolo_ute.cri_lab_ute_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
