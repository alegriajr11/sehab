import { Module } from '@nestjs/common';
import { CriteriosHospParcialService } from './criterios_hosp_parcial.service';

@Module({
  providers: [CriteriosHospParcialService]
})
export class CriteriosHospParcialModule {}
