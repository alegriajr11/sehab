import { Module } from '@nestjs/common';
import { CriteriosHospitalizacionService } from './criterios_hospitalizacion.service';

@Module({
  providers: [CriteriosHospitalizacionService]
})
export class CriteriosHospitalizacionModule {}
