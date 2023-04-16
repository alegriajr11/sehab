import { Module } from '@nestjs/common';
import { CriterioSFarmaceuticoService } from './criterio_s_farmaceutico.service';

@Module({
  providers: [CriterioSFarmaceuticoService]
})
export class CriterioSFarmaceuticoModule {}
