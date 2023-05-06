import { Module } from '@nestjs/common';
import { CriteriosHospPacienteCronicoService } from './criterios_hosp_paciente_cronico.service';

@Module({
  providers: [CriteriosHospPacienteCronicoService]
})
export class CriteriosHospPacienteCronicoModule {}
