import { Module } from '@nestjs/common';
import { CumplimientoDialisisService } from './cumplimiento_dialisis.service';
import { CumplimientoDialisisController } from './cumplimiento_dialisis.controller';
import { CriterioDialisisEntity } from '../criterio_dialisis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CumplimientoDialisisEntity } from '../cumplimiento_dialisis.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioDialisisEntity, CumplimientoDialisisEntity,EvaluacionResEntity])],
  providers: [CumplimientoDialisisService],
  controllers: [CumplimientoDialisisController],
  exports: [CumplimientoDialisisService]
})
export class CumplimientoDialisisModule {}
