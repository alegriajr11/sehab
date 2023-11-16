import { Module } from '@nestjs/common';
import { CumplimientoLabClinicoService } from './cumplimiento_lab_clinico.service';
import { CumplimientoLabClinicoController } from './cumplimiento_lab_clinico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';
import { CriterioLabClinicoEntity } from '../criterio_lab_clinico.entity';
import { CumplimientoLabClinicoEntity } from '../cumplimiento_lab_clinico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioLabClinicoEntity, CumplimientoLabClinicoEntity,EvaluacionResEntity])],
  exports: [CumplimientoLabClinicoService],
  providers: [CumplimientoLabClinicoService],
  controllers: [CumplimientoLabClinicoController]
})
export class CumplimientoLabClinicoModule {}
