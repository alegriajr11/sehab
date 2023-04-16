import { Module } from '@nestjs/common';
import { CriterioImgRadIonizantesService } from './criterio_img_rad_ionizantes.service';

@Module({
  providers: [CriterioImgRadIonizantesService]
})
export class CriterioImgRadIonizantesModule {}
