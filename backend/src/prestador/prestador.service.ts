/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { MunicipioEntity } from 'src/municipio/municipio.entity';
import { MunicipioRepository } from 'src/municipio/municipio.repository';
import { ClaseEntity } from './clase/clase.entity';
import { ClaseRepository } from './clase/clase.repository';
import { ClasificacionEntity } from './clasificacion/clasificacion.entity';
import { ClasificacionRepository } from './clasificacion/clasificacion.repository';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { PrestadorEntity } from './prestador.entity';
import { PrestadorRepository } from './prestador.repository';
import { TipoEntity } from './tipo/tipo.entity';
import { TipoRepository } from './tipo/tipo.repository';

@Injectable()
export class PrestadorService {
    constructor(
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(MunicipioEntity)
        private readonly municipioRepository: MunicipioRepository,
        @InjectRepository(ClasificacionEntity)
        private readonly clasificacionRepository: ClasificacionRepository,
        @InjectRepository(ClaseEntity)
        private readonly claseRepository: ClaseRepository,
        @InjectRepository(TipoEntity)
        private readonly tipoRepository: TipoRepository
    ){}

    async findById(pre_cod_habilitacion: string): Promise<PrestadorEntity>{
        const prestador = await this.prestadorRepository.findOne({where: {pre_cod_habilitacion}});
        if(!prestador){
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return prestador;
    }

    async findByNombre(nombre: string): Promise<PrestadorEntity> {
        const prestador = await this.prestadorRepository.findOne({
        where: { pre_nombre: nombre },
        });
        return prestador;
    }

    async findByMunicipio(id: string): Promise<PrestadorEntity[]> {
        const prestadores = await this.prestadorRepository.createQueryBuilder('prestador')
        .innerJoin('prestador.pre_municipio','pre_municipio')
        .where('pre_municipio.mun_id = :mun', { mun: id})
        .getMany()
        return prestadores;
    }

    // async getall(): Promise<PrestadorEntity[]>{
    //     const prestadores = await this.prestadorRepository.find({
    //         relations: ['pre_municipio']
    //     })
    //     if(!prestadores.length)throw new NotFoundException(new MessageDto('No hay Prestadores en la lista'))
    //     return prestadores;
    // }

    async getall(): Promise<PrestadorEntity[]>{
        const prestadores = await this.prestadorRepository.createQueryBuilder('prestador')
        .select(['prestador','pre_municipio.mun_nombre'])
        .innerJoin('prestador.pre_municipio','pre_municipio')
        .getMany()
        if(!prestadores.length)throw new NotFoundException(new MessageDto('No hay Prestadores en la lista'))
        return prestadores;
    }

    async create(dto: CreatePrestadorDto): Promise<any> {
        const { pre_cod_habilitacion, pre_nombre, pre_clasificacion, pre_clase, pre_tipo, pre_municipio } = dto;
        const exists = await this.prestadorRepository.findOne({ where: [{ pre_cod_habilitacion: pre_cod_habilitacion }, { pre_nombre: pre_nombre }] });
        if(exists) throw new BadRequestException(new MessageDto('Ese Prestador ya existe'));
        
        
        const clasificacion = await this.clasificacionRepository.findOne({where: {cla_id: pre_clasificacion.cla_id}})
        if(!clasificacion) throw new BadRequestException(new MessageDto('Esa Clasificación no existe'));
        
        const clase = await this.claseRepository.findOne({where: {clas_id: pre_clase.clas_id}})
        if(!clase) throw new BadRequestException(new MessageDto('Esa Clase no existe'));

        const tipo = await this.tipoRepository.findOne({where: {tip_id: pre_tipo.tip_id}})
        if(!tipo) throw new BadRequestException(new MessageDto('Ese Tipo no existe'));

        const municipio = await this.municipioRepository.findOne({where: {mun_id: pre_municipio.mun_id}})
        if(!municipio) throw new BadRequestException(new MessageDto('Ese Municipio no existe'));
        
        const prestador = this.prestadorRepository.create(dto);

        await this.prestadorRepository.save(prestador)
        return new MessageDto('Prestador Creado Exitosamente');

    }

    async delete(id: string):Promise<any>{
        const prestador = await this.findById(id);
        await this.prestadorRepository.delete(prestador.pre_cod_habilitacion)
        return new MessageDto(`Prestador ${prestador.pre_nombre} eliminado`);
    }
}