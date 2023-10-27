import { Module } from '@nestjs/common';
import { CalificacionipsPlaneacionService } from './calificacionips_planeacion.service';
import { CalificacionipsPlaneacionController } from './calificacionips_planeacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionPlaneacionIpsEntity } from '../../calificacionips_planeacion.entity';
import { CriterioPlaneacionEntity } from '../../criterioplaneacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioPlaneacionEntity,CalificacionPlaneacionIpsEntity])],
  providers: [CalificacionipsPlaneacionService],
  controllers: [CalificacionipsPlaneacionController]
})
export class CalificacionipsPlaneacionModule {}
