import { Module } from '@nestjs/common';
import { CumplimientoConsPsicoactivasService } from './cumplimiento_cons_psicoactivas.service';
import { CumplimientoConsPsicoactivasController } from './cumplimiento_cons_psicoactivas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioConsumoPsicoactivasEntity } from '../criterio_cuid_cons_psicoact.entity';
import { CumplimientoConsPsicoactivasEntity } from '../cumplimiento_cuid_cons_psicoact.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioConsumoPsicoactivasEntity, CumplimientoConsPsicoactivasEntity, EvaluacionResEntity])],
  exports: [CumplimientoConsPsicoactivasService],
  providers: [CumplimientoConsPsicoactivasService],
  controllers: [CumplimientoConsPsicoactivasController]
})
export class CumplimientoConsPsicoactivasModule {}
