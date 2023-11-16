import { Module } from '@nestjs/common';
import { CumplimientoCuidInterPediatricoService } from './cumplimiento_cuid_inter_pediatrico.service';
import { CumplimientoCuidInterPediatricoController } from './cumplimiento_cuid_inter_pediatrico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidIntermPediatricoEntity } from '../criterio_cuid_inter_pediatrico.entity';
import { CumplimientoCuidInterPediatricoEntity } from '../cumplimiento_cuid_inter_pediatrico.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioCuidIntermPediatricoEntity, CumplimientoCuidInterPediatricoEntity, EvaluacionResEntity])],
  exports: [CumplimientoCuidInterPediatricoService],
  providers: [CumplimientoCuidInterPediatricoService],
  controllers: [CumplimientoCuidInterPediatricoController]
})
export class CumplimientoCuidInterPediatricoModule {}
