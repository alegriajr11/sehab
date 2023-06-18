import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioQuimioterapiaEntity } from '../criterio_quimioterapia.entity';
import { QuimioterapiaEntity } from '../quimioterapia.entity';
import { CriterioQuimioterapiaRepository } from '../criterio_quimioterapia.repository';
import { QuimioterapiaRepository } from '../quimioterapia.repository';
import { CriterioQuimioterapiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/quimioterapia_dto/criterio_quimioterapia.dto';

@Injectable()
export class CriterioQuimioterapiaService {

    constructor(
        @InjectRepository(CriterioQuimioterapiaEntity)
        private readonly criterioQuimioterapiaRepository: CriterioQuimioterapiaRepository,
        @InjectRepository(QuimioterapiaEntity)
        private readonly quimioterapiaRepository: QuimioterapiaRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioQuimioterapiaEntity[]> {
        const cri_quimio = await this.criterioQuimioterapiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'quimioterapia.quim_nombre_estandar'])
            .innerJoin('criterio.quimioterapia', 'quimioterapia')
            .where('quimioterapia.quim_id = :quim_est', { quim_est: id })
            .getMany()
        if (!cri_quimio) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_quimio
    }

    //CREAR CRITERIO
    async create(quim_id: number, dto: CriterioQuimioterapiaDto): Promise<any> {
        const quimioterapia = await this.quimioterapiaRepository.findOne({ where: { quim_id: quim_id } });
        if (!quimioterapia) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioquimioterapia = this.criterioQuimioterapiaRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioquimioterapia.quimioterapia = quimioterapia
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioQuimioterapiaRepository.save(criterioquimioterapia)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO PQUIMIOTERAPIA
    async findById(criquim_id: number): Promise<CriterioQuimioterapiaEntity> {
        const cri_quimio = await this.criterioQuimioterapiaRepository.findOne({ where: { criquim_id } });
        if (!cri_quimio) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return cri_quimio;
    }

    //ELIMINAR CRITERIO QUIMIOTERAPIA
    async delete(id: number): Promise<any> {
        const cri_quimio = await this.findById(id);
        await this.criterioQuimioterapiaRepository.delete(cri_quimio.criquim_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    
    //ACTUALIZAR CRITERIOS QUIMIOTERAPIA
    async updateQuimio(id: number, dto: CriterioQuimioterapiaDto): Promise<any> {
        const criterio_quimioterapia = await this.findById(id);
        if (!criterio_quimioterapia) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        } 
        dto.criquim_modalidad ? criterio_quimioterapia.criquim_modalidad = dto.criquim_modalidad : criterio_quimioterapia.criquim_modalidad = criterio_quimioterapia.criquim_modalidad;
        dto.criquim_complejidad ? criterio_quimioterapia.criquim_complejidad = dto.criquim_complejidad : criterio_quimioterapia.criquim_complejidad = criterio_quimioterapia.criquim_complejidad;
        criterio_quimioterapia.criquim_articulo = dto.criquim_articulo !== undefined ? dto.criquim_articulo : "";
        criterio_quimioterapia.criquim_seccion = dto.criquim_seccion !== undefined ? dto.criquim_seccion : "";
        criterio_quimioterapia.criquim_apartado = dto.criquim_apartado !== undefined ? dto.criquim_apartado : "";
        dto.criquim_nombre_criterio ? criterio_quimioterapia.criquim_nombre_criterio = dto.criquim_nombre_criterio : criterio_quimioterapia.criquim_nombre_criterio = criterio_quimioterapia.criquim_nombre_criterio;

        await this.criterioQuimioterapiaRepository.save(criterio_quimioterapia);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
