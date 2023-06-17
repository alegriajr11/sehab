import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioRadioterapiaEntity } from '../criterio_radioterapia.entity';
import { RadioterapiaEntity } from '../radioterapia.entity';
import { RadioterapiaRepository } from '../radioterapia.repository';
import { CriterioRadioterapiaRepository } from '../criterio_radioterapia.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioRadioterapiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/radioterapia_dto/criterio_radioterapia.dto';

@Injectable()
export class CriterioRadioterapiaService {


    constructor(
        @InjectRepository(CriterioRadioterapiaEntity)
        private readonly criterioRadioterapiaRepository: CriterioRadioterapiaRepository,
        @InjectRepository(RadioterapiaEntity)
        private readonly radioterapiaRepository: RadioterapiaRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioRadioterapiaEntity[]> {
        const cri_radio = await this.criterioRadioterapiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'radioterapia.radi_nombre_estandar'])
            .innerJoin('criterio.radioterapia', 'radioterapia')
            .where('radioterapia.radi_id = :radio_est', { radio_est: id })
            .getMany()
        if (!cri_radio) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_radio
    }



    async create(radi_id: number, dto: CriterioRadioterapiaDto): Promise<any> {
        const radioterapia = await this.radioterapiaRepository.findOne({ where: { radi_id: radi_id } });
        if (!radioterapia) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioradioterapia = this.criterioRadioterapiaRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioradioterapia.radioterapia = radioterapia
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioRadioterapiaRepository.save(criterioradioterapia)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }


    //ENCONTRAR POR ID - CRITERIO RADIOTERAPIA
    async findById(crirad_ter_id: number): Promise<CriterioRadioterapiaEntity> {
        const criterio_radioterapia = await this.criterioRadioterapiaRepository.findOne({ where: { crirad_ter_id } });
        if (!criterio_radioterapia) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_radioterapia;
    }

    //ELIMINAR CRITERIO RADIOTERAPIA
    async delete(id: number): Promise<any> {
        const criterio_radioterapia = await this.findById(id);
        await this.criterioRadioterapiaRepository.delete(criterio_radioterapia.crirad_ter_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
