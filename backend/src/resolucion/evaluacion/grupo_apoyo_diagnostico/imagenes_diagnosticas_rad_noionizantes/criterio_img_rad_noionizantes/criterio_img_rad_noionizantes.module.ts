import { Module } from '@nestjs/common';
import { CriterioImgRadNoionizantesService } from './criterio_img_rad_noionizantes.service';

@Module({
  providers: [CriterioImgRadNoionizantesService]
})
export class CriterioImgRadNoionizantesModule {}
