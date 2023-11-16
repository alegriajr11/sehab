import { Module } from '@nestjs/common';
import { CumplimientoHospSaludMentalService } from './cumplimiento_hosp_salud_mental.service';
import { CumplimientoHospSaludMentalController } from './cumplimiento_hosp_salud_mental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionMentalEntity } from '../criterio_hosp_salud_mental.entity';
import { CumplimientoHospitalizacionMentalEntity } from '../cumplimiento_hosp_salud_mental.entity';
import { EvaluacionResVerificacionRepository } from 'src/resolucion/evaluacion/evaluacion_resolucion_verificacion/evaluacion_res.repository';


@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionMentalEntity, CumplimientoHospitalizacionMentalEntity, EvaluacionResVerificacionRepository])],
  exports: [CumplimientoHospSaludMentalService],
  providers: [CumplimientoHospSaludMentalService],
  controllers: [CumplimientoHospSaludMentalController]
})
export class CumplimientoHospSaludMentalModule {}
