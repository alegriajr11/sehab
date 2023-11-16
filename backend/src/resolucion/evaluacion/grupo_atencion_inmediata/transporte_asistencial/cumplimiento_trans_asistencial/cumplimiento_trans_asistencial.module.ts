import { Module } from '@nestjs/common';
import { CumplimientoTransAsistencialService } from './cumplimiento_trans_asistencial.service';
import { CumplimientoTransAsistencialController } from './cumplimiento_trans_asistencial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioTranspAsistencialEntity } from '../criterio_trans_asistencial.entity';
import { CumplimientoTranspAsistencialEntity } from '../cumplimiento_trans_asistencial.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioTranspAsistencialEntity, CumplimientoTranspAsistencialEntity, EvaluacionResEntity])],
  exports: [CumplimientoTransAsistencialService],
  providers: [CumplimientoTransAsistencialService],
  controllers: [CumplimientoTransAsistencialController]
})
export class CumplimientoTransAsistencialModule { }
