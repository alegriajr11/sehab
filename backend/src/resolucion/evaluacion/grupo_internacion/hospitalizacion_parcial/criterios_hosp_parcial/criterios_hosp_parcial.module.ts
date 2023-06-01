import { Module } from '@nestjs/common';
import { CriteriosHospParcialService } from './criterios_hosp_parcial.service';
import { CriteriosHospParcialController } from './criterios_hosp_parcial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionParcialEntity } from '../criterio_hosp_parcial.entity';
import { HospitalizacionParcialEntity } from '../hospitalizacion_parcial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionParcialEntity, HospitalizacionParcialEntity])],
  controllers: [CriteriosHospParcialController],
  providers: [CriteriosHospParcialService],
  exports: [CriteriosHospParcialService]
  
})
export class CriteriosHospParcialModule {}
