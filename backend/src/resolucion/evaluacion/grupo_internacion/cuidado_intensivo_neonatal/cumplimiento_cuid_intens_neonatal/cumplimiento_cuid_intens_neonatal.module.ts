import { Module } from '@nestjs/common';
import { CumplimientoCuidIntensNeonatalService } from './cumplimiento_cuid_intens_neonatal.service';
import { CumplimientoCuidIntensNeonatalController } from './cumplimiento_cuid_intens_neonatal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidInteNeonatalEntity } from '../criterio_cuid_intens_neonatal.entity';
import { CumplimientoCuidIntNeonatalEntity } from '../cumplimiento_cuid_intens_neonatal.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioCuidInteNeonatalEntity, CumplimientoCuidIntNeonatalEntity, EvaluacionResEntity])],
  exports: [CumplimientoCuidIntensNeonatalService],
  providers: [CumplimientoCuidIntensNeonatalService],
  controllers: [CumplimientoCuidIntensNeonatalController]
})
export class CumplimientoCuidIntensNeonatalModule {}
