import { Module } from '@nestjs/common';
import { CumplimientoQuimioterapiaService } from './cumplimiento_quimioterapia.service';
import { CumplimientoQuimioterapiaController } from './cumplimiento_quimioterapia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioQuimioterapiaEntity } from '../criterio_quimioterapia.entity';
import { CumplimientoQuimioterapiaEntity } from '../cumplimiento_quimioterapia.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioQuimioterapiaEntity, CumplimientoQuimioterapiaEntity,EvaluacionResEntity])],
  exports: [CumplimientoQuimioterapiaService],
  providers: [CumplimientoQuimioterapiaService],
  controllers: [CumplimientoQuimioterapiaController]
})
export class CumplimientoQuimioterapiaModule {}
