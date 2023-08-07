import { Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioIndDto } from 'src/usuario/dto/SpInd/criterioind.dto';
import { CriterioIndEntity } from '../criterioind.entity';
import { CriterioIndRepository } from '../criterioind.repository';
import { EtapaInd } from '../etapaind.entity';
import { EtapaIndRepository } from '../etapaind.repository';

@Injectable()
export class CriterioindService {

    constructor(
        @InjectRepository(CriterioIndEntity)
        private criterioIndRepository: CriterioIndRepository,
        @InjectRepository(EtapaInd)
        private etapaindRepository: EtapaIndRepository

    ) { }

    async findByEta(id: number): Promise<CriterioIndEntity[]> {
        const etapas = await this.criterioIndRepository.createQueryBuilder('criterio')
            .select(['criterio', 'eta_item.eta_nombre'])
            .innerJoin('criterio.eta_item', 'eta_item')
            .where('eta_item.eta_id = :eta', { eta: id })
            .getMany()
        if (!etapas) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return etapas;
    }

    async findCri(cri_id: number): Promise<CriterioIndEntity> {
        const criterio = await this.criterioIndRepository.findOne({ where: { cri_id } })
        if (!criterio) throw new NotFoundException(new MessageDto('No Existe el criterio'))
        return criterio
    }

    async update(id: number, dto: CriterioIndDto): Promise<any> {

        const criterio = await this.findCri(id);
        if (!criterio)
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));

        dto.cri_nombre ? criterio.cri_nombre = dto.cri_nombre : criterio.cri_nombre = criterio.cri_nombre;
        dto.cri_verificacion ? criterio.cri_verificacion = dto.cri_verificacion : criterio.cri_verificacion = criterio.cri_verificacion;

        await this.criterioIndRepository.save(criterio);

        return new MessageDto(`El Criterio ha sido Actualizado`);
    }

    async delete(id: number): Promise<any> {
        const criterio = await this.findCri(id);
        await this.criterioIndRepository.delete(criterio.cri_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    async create(item_id: number, dto: CriterioIndDto): Promise<any> {
        const { cri_nombre } = dto;
        const exists = await this.criterioIndRepository.findOne({ where: [{ cri_nombre: cri_nombre }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese Criterio ya existe'));
        const etapa = await this.etapaindRepository.findOne({ where: { eta_id: item_id } });
        if (!etapa) throw new InternalServerErrorException(new MessageDto('La actividad no ha sido creada'))
        const criterio = this.criterioIndRepository.create(dto)
        criterio.eta_item = etapa
        await this.criterioIndRepository.save(criterio)
        return new MessageDto('El criterio ha sido Creado');
    }

    async getallcriterio(): Promise<CriterioIndEntity[]> {
        const criterio_ind = await this.criterioIndRepository.createQueryBuilder('criterio')
            .select(['criterio', 'calificacion_ind.cal_nota', 'calificacion_ind.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoinAndSelect('criterio.calificacion_ind', 'calificacion_ind')
            .innerJoinAndSelect('criterio.eta_item', 'eta_item')
            .getMany()
        if (!criterio_ind.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return criterio_ind
    }

    //criterio por titulo
    async getallcriterioxtitulo(): Promise<CriterioIndEntity[]> {

        let titulo_uno
        titulo_uno = "COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificacion_ind.cal_nota', 'calificacion_ind.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoinAndSelect('etapa.calificacion_ind', 'calificacion_ind')
            .innerJoin('etapa.eta_item', 'eta_item')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_uno })
            .getMany()
        if (!criterio.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return criterio
    }

    async getallcriterioxtitulodos(): Promise<CriterioIndEntity[]> {

        let titulo_dos
        titulo_dos = "CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificacion_ind.cal_nota', 'calificacion_ind.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoinAndSelect('etapa.calificacion_ind', 'calificacion_ind')
            .innerJoin('etapa.eta_item', 'eta_item')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_dos })
            .getMany()
        if (!criterio.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return criterio
    }

    async getallcriterioxtitulotres(): Promise<CriterioIndEntity[]> {

        let titulo_tres
        titulo_tres = "REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificacion_ind.cal_nota', 'calificacion_ind.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoinAndSelect('etapa.calificacion_ind', 'calificacion_ind')
            .innerJoin('etapa.eta_item', 'eta_item')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_tres })
            .getMany()
        if (!criterio.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return criterio
    }

    async getallcriterioxtitulocuatro(): Promise<CriterioIndEntity[]> {

        let titulo_cuatro
        titulo_cuatro = "DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificacion_ind.cal_nota', 'calificacion_ind.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoinAndSelect('etapa.calificacion_ind', 'calificacion_ind')
            .innerJoin('etapa.eta_item', 'eta_item')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_cuatro })
            .getMany()
        if (!criterio.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return criterio
    }
}
