import { Module } from '@nestjs/common';
import { CalificacionipsAjusteService } from './calificacionips_ajuste.service';
import { CalificacionipsAjusteController } from './calificacionips_ajuste.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioAjusteEntity } from '../../criterioajuste.entity';
import { CalificacionAjusteIpsEntity } from '../../calificacionips_ajuste.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioAjusteEntity,CalificacionAjusteIpsEntity])],
  providers: [CalificacionipsAjusteService],
  controllers: [CalificacionipsAjusteController]
})
export class CalificacionipsAjusteModule {}
