import { Module } from '@nestjs/common';
import { CriteriosHospSaludMentalService } from './criterios_hosp_salud_mental.service';

@Module({
  providers: [CriteriosHospSaludMentalService]
})
export class CriteriosHospSaludMentalModule {}
