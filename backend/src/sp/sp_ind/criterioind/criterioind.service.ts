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

    ){}

    async findByEta(id: number): Promise<CriterioIndEntity[]>{
        const etapas = await this.criterioIndRepository.createQueryBuilder('criterio')
        .select(['criterio', 'eta_item.eta_nombre'])
        .innerJoin('criterio.eta_item', 'eta_item')
        .where('eta_item.eta_id = :eta', {eta: id})
        .getMany()
        if(!etapas) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return etapas;
    }

    async findCri(cri_id: number): Promise<CriterioIndEntity>{
        const criterio = await this.criterioIndRepository.findOne({where: {cri_id}})
        if(!criterio) throw new NotFoundException(new MessageDto('No Existe el criterio'))
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
        const {cri_nombre} = dto;
        const exists = await this.criterioIndRepository.findOne({where: [{cri_nombre: cri_nombre}]});
        if(exists) throw new BadRequestException(new MessageDto('Ese Criterio ya existe'));
        const etapa = await this.etapaindRepository.findOne({where: {eta_id: item_id}});
        if(!etapa) throw new InternalServerErrorException(new MessageDto('La actividad no ha sido creada'))
        const criterio = this.criterioIndRepository.create(dto)
        criterio.eta_item = etapa
        await this.criterioIndRepository.save(criterio)
        return new MessageDto('El criterio ha sido Creado');
    }
}
