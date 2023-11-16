import { Module } from '@nestjs/common';
import { CumplimientoCuidInterAdultoService } from './cumplimiento_cuid_inter_adulto.service';
import { CumplimientoCuidInterAdultoController } from './cumplimiento_cuid_inter_adulto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidIntermAdultoEntity } from '../criterio_cuid_inter_adulto.entity';
import { CumplimientoCuidInterAdultoEntity } from '../cumplimiento_cuid_inter_adulto.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioCuidIntermAdultoEntity, CumplimientoCuidInterAdultoEntity, EvaluacionResEntity])],
  exports: [CumplimientoCuidInterAdultoService],
  providers: [CumplimientoCuidInterAdultoService],
  controllers: [CumplimientoCuidInterAdultoController]
})
export class CumplimientoCuidInterAdultoModule {}
