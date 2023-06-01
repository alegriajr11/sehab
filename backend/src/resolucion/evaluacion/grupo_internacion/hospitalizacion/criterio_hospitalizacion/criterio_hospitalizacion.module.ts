import { Module } from '@nestjs/common';
import { CriterioHospitalizacionController } from './criterio_hospitalizacion.controller';
import { CriterioHospitalizacionService } from './criterio_hospitalizacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionEntity } from '../criterio_hospitalizacion.entity';
import { HospitalizacionEntity } from '../hospitalizacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionEntity, HospitalizacionEntity])],
  controllers: [CriterioHospitalizacionController],
  providers: [CriterioHospitalizacionService],
  exports: [CriterioHospitalizacionService]
})
export class CriterioHospitalizacionModule {}
