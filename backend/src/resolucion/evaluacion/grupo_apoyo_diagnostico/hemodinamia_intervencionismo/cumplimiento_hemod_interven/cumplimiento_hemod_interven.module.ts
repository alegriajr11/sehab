import { Module } from '@nestjs/common';
import { CumplimientoHemodIntervenService } from './cumplimiento_hemod_interven.service';
import { CumplimientoHemodIntervenController } from './cumplimiento_hemod_interven.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';
import { CriterioHermoIntervenEntity } from '../criterio_hemo_inter.entity';
import { CumplimientoHermoIntervenEntity } from '../cumplimiento_hemo_inter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHermoIntervenEntity, CumplimientoHermoIntervenEntity,EvaluacionResEntity])],
  exports: [CumplimientoHemodIntervenService],
  providers: [CumplimientoHemodIntervenService],
  controllers: [CumplimientoHemodIntervenController]
})
export class CumplimientoHemodIntervenModule {}
