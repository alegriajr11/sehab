import { Module } from '@nestjs/common';
import { CumplimientoPatologiaService } from './cumplimiento_patologia.service';
import { CumplimientoPatologiaController } from './cumplimiento_patologia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioPatologiaEntity } from '../criterio_patologia.entity';
import { CumplimientoPatologiaEntity } from '../cumplimiento_patologia.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioPatologiaEntity, CumplimientoPatologiaEntity,EvaluacionResEntity])],
  exports: [CumplimientoPatologiaService],
  providers: [CumplimientoPatologiaService],
  controllers: [CumplimientoPatologiaController]
})
export class CumplimientoPatologiaModule {}
