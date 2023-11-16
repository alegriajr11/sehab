import { Module } from '@nestjs/common';
import { CumplimientoMuesCuelloService } from './cumplimiento_mues_cuello.service';
import { CumplimientoMuesCuelloController } from './cumplimiento_mues_cuello.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuelloUterinoEntity } from '../criterio_tom_muest_cuello.entity';
import { CumplimientoCuelloUterinoEntity } from '../cumplimiento_tom_muest_cuello.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioCuelloUterinoEntity, CumplimientoCuelloUterinoEntity, EvaluacionResEntity])],
  exports: [CumplimientoMuesCuelloService],
  providers: [CumplimientoMuesCuelloService],
  controllers: [CumplimientoMuesCuelloController]
})
export class CumplimientoMuesCuelloModule { }
