import { Module } from '@nestjs/common';
import { CriterioImgRadNoionizantesService } from './criterio_img_rad_noionizantes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioImgRadNoIonizantesEntity } from '../criterio_img_rad_noionizantes.entity';
import { ImgRadNoIonizantesEntity } from '../img_rad_noionizantes.entity';
import { CriterioImgRadNoionizantesController } from './criterio_img_rad_noionizantes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioImgRadNoIonizantesEntity, ImgRadNoIonizantesEntity])],
  controllers: [CriterioImgRadNoionizantesController],
  providers: [CriterioImgRadNoionizantesService],
  exports: [CriterioImgRadNoionizantesService]
})
export class CriterioImgRadNoionizantesModule {}
