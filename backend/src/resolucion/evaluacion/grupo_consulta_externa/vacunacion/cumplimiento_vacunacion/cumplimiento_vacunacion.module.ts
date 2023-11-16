import { Module } from '@nestjs/common';
import { CumplimientoVacunacionService } from './cumplimiento_vacunacion.service';
import { CumplimientoVacunacionController } from './cumplimiento_vacunacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioVacunacionEntity } from '../criterio_vacunacion.entity';
import { CumplimientoVacunacionEntity } from '../cumplimiento_vacunacion.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioVacunacionEntity, CumplimientoVacunacionEntity, EvaluacionResEntity])],
  exports: [CumplimientoVacunacionService],
  providers: [CumplimientoVacunacionService],
  controllers: [CumplimientoVacunacionController]
})
export class CumplimientoVacunacionModule {}
