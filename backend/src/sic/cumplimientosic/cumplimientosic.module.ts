import { Module } from '@nestjs/common';
import { CumplimientosicService } from './cumplimientosic.service';
import { CumplimientosicController } from './cumplimientosic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriosicEntity } from '../criteriosic.entity';
import { CumplimientoSicEntity } from '../cumplimientosic.entity';
import { EvaluacionSicEntity } from '../evaluacionsic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriteriosicEntity, CumplimientoSicEntity, EvaluacionSicEntity])],
  providers: [CumplimientosicService],
  controllers: [CumplimientosicController]
})
export class CumplimientosicModule {}
