import { Module } from '@nestjs/common';
import { CriterioRadioOdontService } from './criterio_radio_odont.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioRadiologiaOdontoEntity } from '../criterio_radio_odont.entity';
import { RadiologiaOdontoEntity } from '../radiologia_odont.entity';
import { CriterioRadioOdontController } from './criterio_radio_odont.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioRadiologiaOdontoEntity, RadiologiaOdontoEntity])],
  controllers: [CriterioRadioOdontController],
  providers: [CriterioRadioOdontService],
  exports: [CriterioRadioOdontService]
})
export class CriterioRadioOdontModule {}
