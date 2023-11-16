import { Module } from '@nestjs/common';
import { CumplimientoUrgenciasService } from './cumplimiento_urgencias.service';
import { CumplimientoUrgenciasController } from './cumplimiento_urgencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioUrgenciasEntity } from '../criterio_urgencias.entity';
import { CumplimientoUrgenciasEntity } from '../cumplimiento_urgencias.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioUrgenciasEntity, CumplimientoUrgenciasEntity, EvaluacionResEntity])],
  exports: [CumplimientoUrgenciasService],
  providers: [CumplimientoUrgenciasService],
  controllers: [CumplimientoUrgenciasController]
})
export class CumplimientoUrgenciasModule {}
