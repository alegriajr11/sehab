import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioLabClinicoEntity } from '../criterio_lab_clinico.entity';
import { LabClinicoEntity } from '../laboratorio_clinico.entity';
import { CriterioLabClinicoRepository } from '../criterio_lab_clinico.repository';
import { LabClinicoRepository } from '../laboratorio_clinico.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioLabClinicoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/laboratorio_clinico_dto/criterio_lab_clinico.dto';

@Injectable()
export class CriteriosLabClinicoService {

    constructor(
        @InjectRepository(CriterioLabClinicoEntity)
        private readonly criterioLabClinicoRepository: CriterioLabClinicoRepository,
        @InjectRepository(LabClinicoEntity)
        private readonly labClinicoRepository: LabClinicoRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioLabClinicoEntity[]> {
        const cri_lab_clin = await this.criterioLabClinicoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'lab_clinico.labclin_nombre_estandar'])
            .innerJoin('criterio.lab_clinico', 'lab_clinico')
            .where('lab_clinico.labclin_id = :lab_cli_est', { lab_cli_est: id })
            .getMany()
        if (!cri_lab_clin) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_lab_clin
    }

    //METODO AGREGAR CRITERIO-HEMODINamia
    async create(labclin_id: number, dto: CriterioLabClinicoDto): Promise<any> {
        const labclinico = await this.labClinicoRepository.findOne({ where: { labclin_id: labclin_id } });
        if (!labclinico) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriolabclinico = this.criterioLabClinicoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriolabclinico.lab_clinico = labclinico
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioLabClinicoRepository.save(criteriolabclinico)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO LABORATORIO CLINICO
    async findById(cri_lab_cli_id: number): Promise<CriterioLabClinicoEntity> {
        const cri_lab_cli = await this.criterioLabClinicoRepository.findOne({ where: { cri_lab_cli_id } });
        if (!cri_lab_cli) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return cri_lab_cli;
    }

    //ELIMINAR CRITERIO LABORATORIO CLINICO
    async delete(id: number): Promise<any> {
        const cri_lab_cli = await this.findById(id);
        await this.criterioLabClinicoRepository.delete(cri_lab_cli.cri_lab_cli_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
