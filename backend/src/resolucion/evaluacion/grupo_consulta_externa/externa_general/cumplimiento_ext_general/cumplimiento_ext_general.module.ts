import { Module } from '@nestjs/common';
import { CumplimientoExtGeneralService } from './cumplimiento_ext_general.service';
import { CumplimientoExtGeneralController } from './cumplimiento_ext_general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioExternaGeneralEntity } from '../criterio_ext_general.entity';
import { CumplimientoExternaGeneralEntity } from '../cumplimiento_ext_general.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioExternaGeneralEntity, CumplimientoExternaGeneralEntity, EvaluacionResEntity])],
  exports: [CumplimientoExtGeneralService],
  providers: [CumplimientoExtGeneralService],
  controllers: [CumplimientoExtGeneralController]
})
export class CumplimientoExtGeneralModule {}
