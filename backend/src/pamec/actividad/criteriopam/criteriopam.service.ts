import { Injectable } from '@nestjs/common';
import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { ActividadEntity } from 'src/pamec/actividad.entity';
import { ActividadRepository } from 'src/pamec/actividad.repository';
import { CriteriopamEntity } from 'src/pamec/criteriopam.entity';
import { CriterioPamRepository } from 'src/pamec/criteriopam.repository';
import { CriterioPamDto } from 'src/usuario/dto/Pamec/criteriopam.dto';

@Injectable()
export class CriteriopamService {

    constructor(
        @InjectRepository(CriteriopamEntity)
        private readonly criteriopamRepository: CriterioPamRepository,
        @InjectRepository(ActividadEntity)
        private readonly actividadRepository: ActividadRepository,
    ) { }

    async findByAct(act_id: number): Promise<CriteriopamEntity[]> {
        const criterios = await this.criteriopamRepository.createQueryBuilder('criteriopam')
            .select(['criteriopam', 'crip_actividad.act_nombre'])
            .innerJoin('criteriopam.crip_actividad', 'crip_actividad')
            .where('crip_actividad.act_id = :act', { act: act_id })
            .getMany()
        if (!criterios) throw new NotFoundException(new MessageDto('No Existe'));
        return criterios;
    }

    async getall(): Promise<CriteriopamEntity[]>{
        const usuario = await this.criteriopamRepository.find()
        if(!usuario.length) throw new NotFoundException(new MessageDto('No hay Criterios en la lista'))
        return usuario
    }

    async findByCri(crip_id: number): Promise<CriteriopamEntity> {
        const criterio = await this.criteriopamRepository.findOne({ where: { crip_id } })
        if (!criterio) {
            throw new NotFoundException(new MessageDto('El criterio No Existe'));
        }
        return criterio
    }

    async findAct(act_id: number): Promise<ActividadEntity> {
        const actividad = await this.actividadRepository.findOne({ where: { act_id } })
        if (!actividad) {
            throw new NotFoundException(new MessageDto('El criterio No Existe'));
        }
        return actividad
    }

    async delete(id: number): Promise<any> {
        const criterio = await this.findByCri(id);
        await this.criteriopamRepository.delete(criterio.crip_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    async update(id: number, dto: CriterioPamDto): Promise<any> {

        const criterio = await this.findByCri(id);
        if (!criterio)
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));

        dto.crip_nombre ? criterio.crip_nombre = dto.crip_nombre : criterio.crip_nombre = criterio.crip_nombre;
        dto.crip_desarrollo_etapas ? criterio.crip_desarrollo_etapas = dto.crip_desarrollo_etapas : criterio.crip_desarrollo_etapas = criterio.crip_desarrollo_etapas;

        await this.criteriopamRepository.save(criterio);

        return new MessageDto(`El Criterio ha sido Actualizado`);
    }

    async create(act_id: number, dto: CriterioPamDto): Promise<any> {
        const {crip_nombre} = dto;
        const exists = await this.criteriopamRepository.findOne({where: [{crip_nombre: crip_nombre}]});
        if(exists) throw new BadRequestException(new MessageDto('Ese Criterio ya existe'));
        const actividad = await this.actividadRepository.findOne({where: {act_id: act_id}});
        console.log(act_id)
        if(!actividad) throw new InternalServerErrorException(new MessageDto('La actividad no ha sido creada'))
        const criterio = this.criteriopamRepository.create(dto)
        criterio.crip_actividad = actividad
        await this.criteriopamRepository.save(criterio)
        return new MessageDto('El criterio ha sido Creado');
    }


}
