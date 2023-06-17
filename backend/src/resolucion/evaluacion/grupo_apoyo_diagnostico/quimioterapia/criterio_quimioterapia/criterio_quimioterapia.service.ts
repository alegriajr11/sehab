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

    //ELIMINAR CRITERIO PQUIMIOTERAPIA
    async delete(id: number): Promise<any> {
        const cri_quimio = await this.findById(id);
        await this.criterioQuimioterapiaRepository.delete(cri_quimio.criquim_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
