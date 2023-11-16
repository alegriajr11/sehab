import { Module } from '@nestjs/common';
import { CumplimientoTomMuestrasService } from './cumplimiento_tom_muestras.service';
import { CumplimientoTomMuestrasController } from './cumplimiento_tom_muestras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioMuestraLabClinicoEntity } from '../criterio_tom_muestras.entity';
import { CumplimientoMuestLabClinicoEntity } from '../cumplimiento_tom_muestras.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioMuestraLabClinicoEntity, CumplimientoMuestLabClinicoEntity, EvaluacionResEntity])],
  exports: [CumplimientoTomMuestrasService],
  providers: [CumplimientoTomMuestrasService],
  controllers: [CumplimientoTomMuestrasController]
})
export class CumplimientoTomMuestrasModule {}
