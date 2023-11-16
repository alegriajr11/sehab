import { Module } from '@nestjs/common';
import { CumplimientoTerapiasService } from './cumplimiento_terapias.service';
import { CumplimientoTerapiasController } from './cumplimiento_terapias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioTerapiaEntity } from '../criterios_terapias.entity';
import { CumplimientoTerapiaEntity } from '../cumplimiento_terapias.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioTerapiaEntity, CumplimientoTerapiaEntity, EvaluacionResEntity])],
  exports: [CumplimientoTerapiasService],
  providers: [CumplimientoTerapiasService],
  controllers: [CumplimientoTerapiasController]
})
export class CumplimientoTerapiasModule {}
