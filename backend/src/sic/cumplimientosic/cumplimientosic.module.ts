import { Module } from '@nestjs/common';
import { CumplimientosicService } from './cumplimientosic.service';
import { CumplimientosicController } from './cumplimientosic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriosicEntity } from '../criteriosic.entity';
import { CumplimientoSicEntity } from '../cumplimientosic.entity';
import { EvaluacionSicEntity } from '../evaluacionsic.entity';
import { IndicadorEntity } from '../indicador.entity';
import { CumplimientoEstandarSicEntity } from '../cumplimientoestandar.entity';
import { CriterioEstandarSicEntity } from '../criteriosEstandar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriteriosicEntity, CumplimientoSicEntity,CriterioEstandarSicEntity,CumplimientoEstandarSicEntity, EvaluacionSicEntity,IndicadorEntity,CriteriosicEntity])],
  providers: [CumplimientosicService],
  controllers: [CumplimientosicController]
})
export class CumplimientosicModule {}
