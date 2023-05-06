import { Module } from '@nestjs/common';
import { CriteriosPrehospitalariaService } from './criterios_prehospitalaria.service';

@Module({
  providers: [CriteriosPrehospitalariaService]
})
export class CriteriosPrehospitalariaModule {}
