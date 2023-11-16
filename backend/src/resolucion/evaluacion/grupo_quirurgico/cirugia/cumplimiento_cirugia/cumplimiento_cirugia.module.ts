import { Module } from '@nestjs/common';
import { CumplimientoCirugiaService } from './cumplimiento_cirugia.service';
import { CumplimientoCirugiaController } from './cumplimiento_cirugia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCirugiaEntity } from '../criterio_cirugia.entity';
import { CumplimientoCirugiaEntity } from '../cumplimiento_cirugia.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioCirugiaEntity, CumplimientoCirugiaEntity, EvaluacionResEntity])],
  exports: [CumplimientoCirugiaService],
  providers: [CumplimientoCirugiaService],
  controllers: [CumplimientoCirugiaController]
})
export class CumplimientoCirugiaModule {}
