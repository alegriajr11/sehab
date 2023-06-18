import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioMuestraLabClinicoEntity } from '../criterio_tom_muestras.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MuestrasLabClinicoEntity } from '../tom_muestras.entity';
import { CriterioMuestraLabClinicoRepository } from '../criterio_tom_muestras.repository';
import { MuestrasLabClinicoRepository } from '../tom_muestras.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioMuestraLabClinicoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/toma_muestras_laboratorio_clinico_dto/criterio_tom_muestras.dto';

@Injectable()
export class CriteriosTomMuestrasService {

    constructor(
        @InjectRepository(CriterioMuestraLabClinicoEntity)
        private readonly criterioMuestraLabClinicoRepository: CriterioMuestraLabClinicoRepository,
        @InjectRepository(MuestrasLabClinicoEntity)
        private readonly muestrasLabClinicoRepository: MuestrasLabClinicoRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioMuestraLabClinicoEntity[]> {
        const cri_tom_mues = await this.criterioMuestraLabClinicoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'tom_mue_lab_clinico.mue_lab_cli_nombre_estandar'])
            .innerJoin('criterio.tom_mue_lab_clinico', 'tom_mue_lab_clinico')
            .where('tom_mue_lab_clinico.mue_lab_cli_id = :mues_est', { mues_est: id })
            .getMany()
        if (!cri_tom_mues) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_tom_mues
    }

    //CREAR CRITERIO
    async create(mue_lab_cli_id: number, dto: CriterioMuestraLabClinicoDto): Promise<any> {
        const tomamuestras = await this.muestrasLabClinicoRepository.findOne({ where: { mue_lab_cli_id: mue_lab_cli_id } });
        if (!tomamuestras) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriotomamuestras = this.criterioMuestraLabClinicoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriotomamuestras.tom_mue_lab_clinico = tomamuestras
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioMuestraLabClinicoRepository.save(criteriotomamuestras)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO LAB CLINICO
    async findById(cri_muest_cli_id: number): Promise<CriterioMuestraLabClinicoEntity> {
        const criterio_mue_lab_cli = await this.criterioMuestraLabClinicoRepository.findOne({ where: { cri_muest_cli_id } });
        if (!criterio_mue_lab_cli) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_mue_lab_cli;
    }

    //ELIMINAR CRITERIO LAB CLINICO
    async delete(id: number): Promise<any> {
        const criterio_mue_lab_cli = await this.findById(id);
        await this.criterioMuestraLabClinicoRepository.delete(criterio_mue_lab_cli.cri_muest_cli_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS TOMA MUESTAS CUELLO UTERINO
    async updateTomaMues(id: number, dto: CriterioMuestraLabClinicoDto): Promise<any> {
        const criterio_tom_muestras = await this.findById(id);
        if (!criterio_tom_muestras) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.cri_muest_cli_modalidad ? criterio_tom_muestras.cri_muest_cli_modalidad = dto.cri_muest_cli_modalidad : criterio_tom_muestras.cri_muest_cli_modalidad = criterio_tom_muestras.cri_muest_cli_modalidad;
        dto.cri_muest_cli_complejidad ? criterio_tom_muestras.cri_muest_cli_complejidad = dto.cri_muest_cli_complejidad : criterio_tom_muestras.cri_muest_cli_complejidad = criterio_tom_muestras.cri_muest_cli_complejidad;
        criterio_tom_muestras.cri_muest_cli_articulo = dto.cri_muest_cli_articulo !== undefined ? dto.cri_muest_cli_articulo : "";
        criterio_tom_muestras.cri_muest_cli_seccion = dto.cri_muest_cli_seccion !== undefined ? dto.cri_muest_cli_seccion : "";
        criterio_tom_muestras.cri_muest_cli_apartado = dto.cri_muest_cli_apartado !== undefined ? dto.cri_muest_cli_apartado : "";
        dto.cri_muest_cli_nombre_criterio ? criterio_tom_muestras.cri_muest_cli_nombre_criterio = dto.cri_muest_cli_nombre_criterio : criterio_tom_muestras.cri_muest_cli_nombre_criterio = criterio_tom_muestras.cri_muest_cli_nombre_criterio;

        await this.criterioMuestraLabClinicoRepository.save(criterio_tom_muestras);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
