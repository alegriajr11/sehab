import { Module } from '@nestjs/common';
import { CriterioHospitalizacionController } from './criterio_hospitalizacion.controller';
import { CriterioHospitalizacionService } from './criterio_hospitalizacion.service';

@Module({
  controllers: [CriterioHospitalizacionController],
  providers: [CriterioHospitalizacionService]
})
export class CriterioHospitalizacionModule {}
