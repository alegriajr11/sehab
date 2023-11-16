import { Module } from '@nestjs/common';
import { CumplimientoServicioFarmaceuticoService } from './cumplimiento_servicio_farmaceutico.service';
import { CumplimientoServicioFarmaceuticoController } from './cumplimiento_servicio_farmaceutico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioSerFarmaceuticoEntity } from '../criterios_s_farmaceutico.entity';
import { CumplimientoSerFarmaceuticoEntity } from '../cumplimiento_s_farmaceutico.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioSerFarmaceuticoEntity, CumplimientoSerFarmaceuticoEntity, EvaluacionResEntity])],
  exports: [CumplimientoServicioFarmaceuticoService],
  providers: [CumplimientoServicioFarmaceuticoService],
  controllers: [CumplimientoServicioFarmaceuticoController]
})
export class CumplimientoServicioFarmaceuticoModule {}
