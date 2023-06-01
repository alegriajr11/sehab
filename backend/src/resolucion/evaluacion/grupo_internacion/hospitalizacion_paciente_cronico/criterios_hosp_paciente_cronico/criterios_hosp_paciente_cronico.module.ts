import { Module } from '@nestjs/common';
import { CriteriosHospPacienteCronicoService } from './criterios_hosp_paciente_cronico.service';
import { CriteriosHospPacienteCronicoController } from './criterios_hosp_paciente_cronico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitCronicoEntity } from '../criterio_hosp_paciente_cron.entity';
import { HospitalizacionCronicoEntity } from '../hospi_paciente_cronico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitCronicoEntity, HospitalizacionCronicoEntity])],
  controllers: [CriteriosHospPacienteCronicoController],
  providers: [CriteriosHospPacienteCronicoService],
  exports: [CriteriosHospPacienteCronicoService]
  
})
export class CriteriosHospPacienteCronicoModule {}
