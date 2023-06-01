/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CriterioTerapiasService } from './criterio_terapias.service';
import { TerapiasEntity } from '../terapias.entity';
import { CriterioRadioterapiaEntity } from '../../radioterapia/criterio_radioterapia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioTerapiasController } from './criterio_terapias.controller';
import { CriterioTerapiaEntity } from '../criterios_terapias.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioTerapiaEntity, TerapiasEntity])],
    controllers: [CriterioTerapiasController],
    providers: [CriterioTerapiasService],
    exports: [CriterioTerapiasService]
    
})
export class CriterioTerapiasModule {}
