import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { CriterioEstandarSicEntity } from '../criteriosEstandar.entity';
import { CriteriosicEntity } from '../criteriosic.entity';
import { CumplimientoEstandarSicEntity } from '../cumplimientoestandar.entity';
import { CumplimientoSicEntity } from '../cumplimientosic.entity';
import { DominioEntity } from '../dominio.entity';
import { IndicadorEntity } from '../indicador.entity';
import { CriteriosicCumplimientoController } from './criteriosic-cumplimiento.controller';
import { CriteriosicCumplimientoService } from './criteriosic-cumplimiento.service';

@Module({
  imports: [TypeOrmModule.forFeature([PrestadorEntity,DominioEntity, IndicadorEntity, CriteriosicEntity, CumplimientoSicEntity, CriterioEstandarSicEntity, CumplimientoEstandarSicEntity])],
  providers: [CriteriosicCumplimientoService],
  controllers: [CriteriosicCumplimientoController],
  exports: [CriteriosicCumplimientoService]
})
export class CriteriosicCumplimientoModule {}
