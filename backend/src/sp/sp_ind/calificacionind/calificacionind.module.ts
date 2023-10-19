import { Module } from '@nestjs/common';
import { CalificacionindService } from './calificacionind.service';
import { CalificacionindController } from './calificacionind.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioIndEntity } from '../criterioind.entity';
import { CalificacionIndEntity } from '../calificacionind.entity';
import { EvaluacionIndependientesEntity } from '../evaluacion-independientes.entity';
import { EtapaInd } from '../etapaind.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioIndEntity, EvaluacionIndependientesEntity, CalificacionIndEntity,EtapaInd])],
  providers: [CalificacionindService],
  controllers: [CalificacionindController]
}) 
export class CalificacionindModule {

  
}
