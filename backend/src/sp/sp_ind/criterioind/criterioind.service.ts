import { Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioIndDto } from 'src/usuario/dto/SpInd/criterioind.dto';
import { CriterioIndEntity } from '../criterioind.entity';
import { CriterioIndRepository } from '../criterioind.repository';
import { EtapaInd } from '../etapaind.entity';
import { EtapaIndRepository } from '../etapaind.repository';
import { CalificacionIndEntity } from '../calificacionind.entity';
import { CalificacionIndRepository } from '../calificacionind.repository';

@Injectable()
export class CriterioindService {

    constructor(
        @InjectRepository(CriterioIndEntity)
        private criterioIndRepository: CriterioIndRepository,
        @InjectRepository(EtapaInd)
        private etapaindRepository: EtapaIndRepository,
        @InjectRepository(CalificacionIndEntity)
        private calificacionIndRepository: CalificacionIndRepository,


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

    async create(item_id: number, dto: CriterioIndDto ): Promise<any> {
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

    //LISTAR TODOS LOS CRITERIOS.
    async getallcriterio(): Promise<CriterioIndEntity[]> {
        const criterio_ind = await this.criterioIndRepository.createQueryBuilder('criterio')
            .select(['criterio', 'calificaciones_cri.cal_asignado', 'calificaciones_cri.cal_nota', 'calificaciones_cri.cal_observaciones', 'eta_item.eta_nombre', 'cal_evaluacion_independientes.cal_id'])
            .innerJoinAndSelect('criterio.calificaciones_cri', 'calificaciones_cri')
            .innerJoinAndSelect('criterio.eta_item', 'eta_item')
            .innerJoinAndSelect('calificaciones_cri.cal_evaluacion_independientes', 'cal_evaluacion_independientes')
            .getMany()
        if (!criterio_ind.length) throw new NotFoundException(new MessageDto('No hay una evaluacion asignada en la lista'))
        return criterio_ind
    }

    //criterio por titulo
    async getallcriterioxtitulo(): Promise<CriterioIndEntity[]> {

        let titulo_uno
        titulo_uno = "COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificaciones_cri.cal_nota', 'calificaciones_cri.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoin('etapa.eta_item', 'eta_item')
            .innerJoinAndSelect('etapa.calificaciones_cri', 'calificaciones_cri')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_uno })
            .getMany()

        return criterio
    }

    async getallcriterioxtitulodos(): Promise<CriterioIndEntity[]> {

        let titulo_dos
        titulo_dos = "CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificaciones_cri.cal_nota', 'calificaciones_cri.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoin('etapa.eta_item', 'eta_item')
            .innerJoinAndSelect('etapa.calificaciones_cri', 'calificaciones_cri')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_dos })
            .getMany()

        return criterio
    }

    async getallcriterioxtitulotres(): Promise<CriterioIndEntity[]> {

        let titulo_tres
        titulo_tres = "REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificaciones_cri.cal_nota', 'calificaciones_cri.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoin('etapa.eta_item', 'eta_item')
            .innerJoinAndSelect('etapa.calificaciones_cri', 'calificaciones_cri')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_tres })
            .getMany()

        return criterio
    }

    async getallcriterioxtitulocuatro(): Promise<CriterioIndEntity[]> {

        let titulo_cuatro
        titulo_cuatro = "DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO"

        const criterio = await this.criterioIndRepository.createQueryBuilder('etapa')
            .select(['etapa', 'calificaciones_cri.cal_nota', 'calificaciones_cri.cal_observaciones', 'eta_item.eta_nombre'])
            .innerJoin('etapa.eta_item', 'eta_item')
            .innerJoinAndSelect('etapa.calificaciones_cri', 'calificaciones_cri')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_cuatro })
            .getMany()

        return criterio
    }


    
    
}