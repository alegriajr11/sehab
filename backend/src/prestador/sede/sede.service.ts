import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SedeEntity } from './sede.entity';
import { SedeRepository } from './sede.repository';
import { PrestadorEntity } from '../prestador.entity';
import { PrestadorRepository } from '../prestador.repository';
import { SedeDto } from '../dto/sede.dto';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class SedeService {
    constructor(
        @InjectRepository(SedeEntity)
        private readonly sedeRepository: SedeRepository,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository
    ) { }

    //ENCONTRAR SEDE POR ID PRESTADOR
    async findBySede(id: string): Promise<SedeEntity[]> {
        const prestadores = await this.sedeRepository.createQueryBuilder('prestador')
            .innerJoin('prestador.sede_prestador', 'sede_prestador')
            .where('sede_prestador.pre_cod_habilitacion = :habilitada', { habilitada: id })
            .getMany()
        return prestadores;
    }

    //ENCONTRAR POR ID - CRITERIO PRETANSFUNCIONAL
    async findById(sede_id: number): Promise<SedeEntity> {
        const cri_pre_trans = await this.sedeRepository.findOne({ where: { sede_id } });
        if (!cri_pre_trans) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return cri_pre_trans;
    }

    //CREAR SEDE
    async create(pre_cod_habilitacion: string, dto: SedeDto): Promise<any> {
        const {sede_nombre} = dto;
        const exists = await this.sedeRepository.findOne({where: [{sede_nombre: sede_nombre}]});
        if(exists) throw new BadRequestException(new MessageDto('Esa sede ya existe'));
        const prestador = await this.prestadorRepository.findOne({where: {pre_cod_habilitacion: pre_cod_habilitacion}});
        console.log(pre_cod_habilitacion)
        if(!prestador) throw new InternalServerErrorException(new MessageDto('El prestador no ha sido creado'))
        const sede = this.sedeRepository.create(dto)
        sede.sede_prestador = prestador
        await this.sedeRepository.save(sede)
        return new MessageDto('La sede ha sido Creada');
    }

    //ACTUALIZAR SEDE
    async updateSede(id: number, dto: SedeDto): Promise<any> {
        const sede= await this.findById(id);
        if (!sede) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.sede_numero ? sede.sede_numero = dto.sede_numero : sede.sede_numero = sede.sede_numero;
        dto.sede_nombre ? sede.sede_nombre = dto.sede_nombre : sede.sede_nombre = sede.sede_nombre;
        dto.sede_principal ? sede.sede_principal = dto.sede_principal : sede.sede_principal = sede.sede_principal;
        dto.sede_numero_principal ? sede.sede_numero_principal = dto.sede_numero_principal : sede.sede_numero_principal = sede.sede_numero_principal;
        dto.sede_direccion ? sede.sede_direccion = dto.sede_direccion : sede.sede_direccion = sede.sede_direccion;
        dto.sede_barrio ? sede.sede_barrio = dto.sede_barrio : sede.sede_barrio = sede.sede_barrio;

        await this.sedeRepository.save(sede);

        return new MessageDto(`La sede ha sido Actualizada`);

    }

    //ELIMINAR SEDE
    async delete(id: number): Promise<any> {
        const sede = await this.findById(id);
        await this.sedeRepository.delete(sede.sede_id)
        return new MessageDto(`Criterio Eliminado`);
    }

}
