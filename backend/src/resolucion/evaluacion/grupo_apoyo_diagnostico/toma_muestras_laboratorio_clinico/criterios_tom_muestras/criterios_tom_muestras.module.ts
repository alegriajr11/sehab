import { Module } from '@nestjs/common';
import { CriteriosTomMuestrasService } from './criterios_tom_muestras.service';

@Module({
  providers: [CriteriosTomMuestrasService]
})
export class CriteriosTomMuestrasModule {}
