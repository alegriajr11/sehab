import { Module } from '@nestjs/common';
import { CumplimientoHospParcialService } from './cumplimiento_hosp_parcial.service';
import { CumplimientoHospParcialController } from './cumplimiento_hosp_parcial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionParcialEntity } from '../criterio_hosp_parcial.entity';
import { CumplimientoHospitalizacionParcialEntity } from '../cumplimiento_hosp_parcial.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionParcialEntity, CumplimientoHospitalizacionParcialEntity, EvaluacionResEntity])],
  exports: [CumplimientoHospParcialService],
  providers: [CumplimientoHospParcialService],
  controllers: [CumplimientoHospParcialController]
})
export class CumplimientoHospParcialModule {}
