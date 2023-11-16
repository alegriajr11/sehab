import { Module } from '@nestjs/common';
import { CumplimientoLabHistotecnologiaService } from './cumplimiento_lab_histotecnologia.service';
import { CumplimientoLabHistotecnologiaController } from './cumplimiento_lab_histotecnologia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioLabHistotecnologiaEntity } from '../criterio_lab_histotec.entity';
import { CumplimientoLabHistotecnEntity } from '../cumplimiento_lab_histotec.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioLabHistotecnologiaEntity, CumplimientoLabHistotecnEntity,EvaluacionResEntity])],
  exports: [CumplimientoLabHistotecnologiaService],
  providers: [CumplimientoLabHistotecnologiaService],
  controllers: [CumplimientoLabHistotecnologiaController]
})
export class CumplimientoLabHistotecnologiaModule {}
