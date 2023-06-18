import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { MessageDto } from 'src/common/message.dto';
import { CriterioTerapiaEntity } from '../criterios_terapias.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TerapiasEntity } from '../terapias.entity';
import { CriterioTerapiaRepository } from '../criterios_terapias.repository';
import { TerapiaRepository } from '../terapias.repository';
import { CriterioTerapiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/terapias_dto/criterios_terapias.dto';

@Injectable()
export class CriterioTerapiasService {


    constructor(
        @InjectRepository(CriterioTerapiaEntity)
        private readonly criterioTerapiaRepository: CriterioTerapiaRepository,
        @InjectRepository(TerapiasEntity)
        private readonly terapiaRepository: TerapiaRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioTerapiaEntity[]> {
        const cri_tera = await this.criterioTerapiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'terapia.ter_nombre_estandar'])
            .innerJoin('criterio.terapia', 'terapia')
            .where('terapia.ter_id = :tera_est', { tera_est: id })
            .getMany()
        if (!cri_tera) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_tera
    }

    //CREAR CRITERIO
    async create(ter_id: number, dto: CriterioTerapiaDto): Promise<any> {
        const terapia = await this.terapiaRepository.findOne({ where: { ter_id: ter_id } });
        if (!terapia) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioterapia = this.criterioTerapiaRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioterapia.terapia = terapia
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioTerapiaRepository.save(criterioterapia)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO TERAPIA
    async findById(criter_id: number): Promise<CriterioTerapiaEntity> {
        const criterio_terapia = await this.criterioTerapiaRepository.findOne({ where: { criter_id } });
        if (!criterio_terapia) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_terapia;
    }

    //ELIMINAR CRITERIO TERAPIA
    async delete(id: number): Promise<any> {
        const criterio_terapia = await this.findById(id);
        await this.criterioTerapiaRepository.delete(criterio_terapia.criter_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS TERAPIAS
    async updateTerapia(id: number, dto: CriterioTerapiaDto): Promise<any> {
        const criterio_terapia = await this.findById(id);
        if (!criterio_terapia) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.criter_modalidad ? criterio_terapia.criter_modalidad = dto.criter_modalidad : criterio_terapia.criter_modalidad = criterio_terapia.criter_modalidad;
        dto.criter_complejidad ? criterio_terapia.criter_complejidad = dto.criter_complejidad : criterio_terapia.criter_complejidad = criterio_terapia.criter_complejidad;
        criterio_terapia.criter_articulo = dto.criter_articulo !== undefined ? dto.criter_articulo : "";
        criterio_terapia.criter_seccion = dto.criter_seccion !== undefined ? dto.criter_seccion : "";
        criterio_terapia.criter_apartado = dto.criter_apartado !== undefined ? dto.criter_apartado : "";
        dto.criter_nombre_criterio ? criterio_terapia.criter_nombre_criterio = dto.criter_nombre_criterio : criterio_terapia.criter_nombre_criterio = criterio_terapia.criter_nombre_criterio;

        await this.criterioTerapiaRepository.save(criterio_terapia);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
