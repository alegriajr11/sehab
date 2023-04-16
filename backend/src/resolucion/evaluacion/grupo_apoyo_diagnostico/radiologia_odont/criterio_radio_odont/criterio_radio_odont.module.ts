import { Module } from '@nestjs/common';
import { CriterioRadioOdontService } from './criterio_radio_odont.service';

@Module({
  providers: [CriterioRadioOdontService]
})
export class CriterioRadioOdontModule {}
