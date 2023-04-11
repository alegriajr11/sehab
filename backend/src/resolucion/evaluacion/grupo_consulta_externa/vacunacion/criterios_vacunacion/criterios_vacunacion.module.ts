import { Module } from '@nestjs/common';
import { CriteriosVacunacionService } from './criterios_vacunacion.service';

@Module({
  providers: [CriteriosVacunacionService]
})
export class CriteriosVacunacionModule {}
