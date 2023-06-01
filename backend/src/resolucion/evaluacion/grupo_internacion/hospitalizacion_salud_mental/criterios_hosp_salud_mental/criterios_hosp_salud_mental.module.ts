import { Module } from '@nestjs/common';
import { CriteriosHospSaludMentalService } from './criterios_hosp_salud_mental.service';
import { CriteriosHospSaludMentalController } from './criterios_hosp_salud_mental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionMentalEntity } from '../criterio_hosp_salud_mental.entity';
import { HospitalizacionMentalEntity } from '../hosp_salud_mental.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionMentalEntity, HospitalizacionMentalEntity])],
  controllers: [CriteriosHospSaludMentalController],
  providers: [CriteriosHospSaludMentalService],
  exports: [CriteriosHospSaludMentalService]
  
})
export class CriteriosHospSaludMentalModule {}
