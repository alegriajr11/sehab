import { Module } from '@nestjs/common';
import { CumplimientoHospitalizacionService } from './cumplimiento_hospitalizacion.service';
import { CumplimientoHospitalizacionController } from './cumplimiento_hospitalizacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionEntity } from '../criterio_hospitalizacion.entity';
import { CumplimientoHospitalizacionEntity } from '../cumplimiento_hospitalizacion.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionEntity, CumplimientoHospitalizacionEntity, EvaluacionResEntity])],
  exports: [CumplimientoHospitalizacionService],
  providers: [CumplimientoHospitalizacionService],
  controllers: [CumplimientoHospitalizacionController]
})
export class CumplimientoHospitalizacionModule {}
