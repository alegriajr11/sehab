import { Module } from '@nestjs/common';
import { EvaluacionipsService } from './evaluacionips.service';
import { EvaluacionipsController } from './evaluacionips.controller';
import { EvaluacionipsEntity } from '../evaluacionips.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluacionipsEntity])],
  providers: [EvaluacionipsService],
  controllers: [EvaluacionipsController]
})
export class EvaluacionipsModule {}
