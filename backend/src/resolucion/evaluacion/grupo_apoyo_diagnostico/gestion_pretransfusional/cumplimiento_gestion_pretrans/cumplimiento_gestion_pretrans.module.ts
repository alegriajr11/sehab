import { Module } from '@nestjs/common';
import { CumplimientoGestionPretransService } from './cumplimiento_gestion_pretrans.service';
import { CumplimientoGestionPretransController } from './cumplimiento_gestion_pretrans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';
import { CriterioGestionPretransfusionalEntity } from '../criterio_gestion_pretrans.entity';
import { CumplimientoGestionPretransfusionalEntity } from '../cumplimiento_gestion_pretrans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioGestionPretransfusionalEntity, CumplimientoGestionPretransfusionalEntity,EvaluacionResEntity])],
  exports: [CumplimientoGestionPretransService],
  providers: [CumplimientoGestionPretransService],
  controllers: [CumplimientoGestionPretransController]
})
export class CumplimientoGestionPretransModule {}
