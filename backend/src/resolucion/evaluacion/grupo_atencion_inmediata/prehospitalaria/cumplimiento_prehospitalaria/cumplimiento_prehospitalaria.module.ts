import { Module } from '@nestjs/common';
import { CumplimientoPrehospitalariaService } from './cumplimiento_prehospitalaria.service';
import { CumplimientoPrehospitalariaController } from './cumplimiento_prehospitalaria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioPrehospitalariaEntity } from '../criterio_prehospitalaria.entity';
import { CumplimientoPrehospitalariaEntity } from '../cumplimiento_prehospitalaria.entity';
import { EvaluacionResEntity } from 'src/resolucion/evaluacion/evaluacion_res/evaluacion_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioPrehospitalariaEntity, CumplimientoPrehospitalariaEntity, EvaluacionResEntity])],
  exports: [CumplimientoPrehospitalariaService],
  providers: [CumplimientoPrehospitalariaService],
  controllers: [CumplimientoPrehospitalariaController]
})
export class CumplimientoPrehospitalariaModule {}
