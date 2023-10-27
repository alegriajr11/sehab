import { Module } from '@nestjs/common';
import { CalificacionipsImplementacionService } from './calificacionips_implementacion.service';
import { CalificacionipsImplementacionController } from './calificacionips_implementacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionImplementacionIpsEntity } from '../../calificacionips_implementacion.entity';
import { CriterioImplementacionEntity } from '../../criterioimplementacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioImplementacionEntity,CalificacionImplementacionIpsEntity])],
  providers: [CalificacionipsImplementacionService],
  controllers: [CalificacionipsImplementacionController]
})
export class CalificacionipsImplementacionModule {}
