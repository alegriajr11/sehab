import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CreatePrestadorDto } from 'src/prestador/dto/create-prestador.dto';
import { DominioPrestadorDto } from 'src/prestador/dto/dominioPrestador.dto';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { CumplimientoEstandarSicDto } from 'src/usuario/dto/Sic/cumplimientoEstandar.dto';
import { CumplimientoSicDto } from 'src/usuario/dto/Sic/cumplimientosic.dto';
import { In } from 'typeorm';
import { CriterioEstandarSicEntity } from '../criteriosEstandar.entity';
import { CriterioEstandarSicRepository } from '../criteriosEstandar.repository';
import { CriteriosicEntity } from '../criteriosic.entity';
import { CriterioSicRepository } from '../criteriosic.repository';
import { CumplimientoEstandarSicEntity } from '../cumplimientoestandar.entity';
import { CumplimientoEstandarSicRepository } from '../cumplimientoEstandar.repository';
import { CumplimientoSicEntity } from '../cumplimientosic.entity';
import { CumplimientoSicRepository } from '../cumplimientosic.repository';
import { DominioEntity } from '../dominio.entity';
import { DominioRepository } from '../dominio.repository';
import { IndicadorEntity } from '../indicador.entity';
import { IndicadorRepository } from '../indicador.repository';

@Injectable()
export class CriteriosicCumplimientoService {

    constructor(
        @InjectRepository(CriterioEstandarSicEntity)
        private readonly criterioEstandarSicRepository: CriterioEstandarSicRepository,
        @InjectRepository(CumplimientoEstandarSicEntity)
        private readonly cumplimientoEstandarSicRepository: CumplimientoEstandarSicRepository,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(DominioEntity)
        private readonly dominioRepository: DominioRepository,
        @InjectRepository(IndicadorEntity)
        private readonly indicadorRepository: IndicadorRepository,
        @InjectRepository(CriteriosicEntity)
        private readonly criterioSicRepository: CriterioSicRepository,
        @InjectRepository(CumplimientoSicEntity)
        private readonly cumplimientoSicRepository: CumplimientoSicRepository,
    ) { }


    //ENCONTRAR CRITERIO ESTANDAR POR ID
    async findByIdEstandarSic(crie_id: number): Promise<CriterioEstandarSicEntity> {
        const criterioEstandarsic = await this.criterioEstandarSicRepository.findOne({ where: { crie_id } });
        if (!criterioEstandarsic) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterioEstandarsic;
    }

    //CREAR CUMPLIMIENTO ESTANDAR 
    async createCumplimientoEstandar(dto: CumplimientoEstandarSicDto): Promise<any> {
        const { crie_id, pre_cod_habilitacion } = dto

        const criterio_estandarsic = await this.criterioEstandarSicRepository.findOne({ where: { crie_id: crie_id } });
        if (!criterio_estandarsic) {
            throw new InternalServerErrorException(new MessageDto('El criterio no ha sido creado'))
        }

        const prestador = await this.prestadorRepository.findOne({ where: { pre_cod_habilitacion: pre_cod_habilitacion } })
        if (!prestador) {
            throw new InternalServerErrorException(new MessageDto('El Prestador no ha sido creado'))
        }
        const cumpl_cri = await this.cumplimientoEstandarSicRepository.findOne({ where: { criterioestandar_sic: criterio_estandarsic } })
        const cumpl_pres = await this.cumplimientoEstandarSicRepository.findOne({ where: { prestadores: prestador } })

        
        const cumplimiento = await this.cumplimientoEstandarSicRepository.create(dto)

        cumplimiento.criterioestandar_sic = criterio_estandarsic
        cumplimiento.prestadores = prestador

        await this.cumplimientoEstandarSicRepository.save(cumplimiento)
        return new MessageDto('Cumplimiento Asignado');
    }

    //ENCONTRAR CUMPLIMIENTO ESTANDAR POR CRI_ID CUMPLIDO
    async findByIdCumpl(crie_id: number): Promise<CumplimientoEstandarSicEntity> {
        const criterio_estandarsic = await this.criterioEstandarSicRepository.findOne({ where: { crie_id: crie_id } });
        const cumplimientoEstandar = await this.cumplimientoEstandarSicRepository.findOne({ where: { criterioestandar_sic: criterio_estandarsic } });
        if (!cumplimientoEstandar) {
            throw new NotFoundException(new MessageDto('El Cumplimiento No Existe'));
        }
        return cumplimientoEstandar;
    }
}
