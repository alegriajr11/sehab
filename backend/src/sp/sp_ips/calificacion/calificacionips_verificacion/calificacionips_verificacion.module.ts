import { Module } from '@nestjs/common';
import { CalificacionipsVerificacionService } from './calificacionips_verificacion.service';
import { CalificacionipsVerificacionController } from './calificacionips_verificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionVerificacionIpsEntity } from '../../calificacionips_verificacion.entity';
import { CriterioVerificacionEntity } from '../../criterioverificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioVerificacionEntity,CalificacionVerificacionIpsEntity])],
  providers: [CalificacionipsVerificacionService],
  controllers: [CalificacionipsVerificacionController]
})
export class CalificacionipsVerificacionModule {}
