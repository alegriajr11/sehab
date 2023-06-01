import { Module } from '@nestjs/common';
import { CriterioImgRadIonizantesService } from './criterio_img_rad_ionizantes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioImgRadIonizantesEntity } from '../criterio_img_rad_ionizantes.entity';
import { ImgRadIonizantesEntity } from '../img_rad_ionizantes.entity';
import { CriterioImgRadIonizantesController } from './criterio_img_rad_ionizantes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioImgRadIonizantesEntity, ImgRadIonizantesEntity])],
  controllers: [CriterioImgRadIonizantesController],
  providers: [CriterioImgRadIonizantesService],
  exports: [CriterioImgRadIonizantesService]
})
export class CriterioImgRadIonizantesModule {}



  