import { Module } from '@nestjs/common';
import { CalificacionpamecController } from './calificacionpamec.controller';
import { CalificacionpamecService } from './calificacionpamec.service';
import { ActividadEntity } from '../actividad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { CalificacionpamEntity } from '../calificacionpam.entity';
import { CriteriopamEntity } from '../criteriopam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrestadorEntity,ActividadEntity,CalificacionpamEntity, CriteriopamEntity])],
  controllers: [CalificacionpamecController],
  providers: [CalificacionpamecService],
  exports: [CalificacionpamecService]
})
export class CalificacionpamecModule {}
