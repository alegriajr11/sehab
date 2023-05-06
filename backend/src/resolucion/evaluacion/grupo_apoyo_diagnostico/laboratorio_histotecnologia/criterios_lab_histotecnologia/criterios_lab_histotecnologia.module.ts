import { Module } from '@nestjs/common';
import { CriteriosLabHistotecnologiaService } from './criterios_lab_histotecnologia.service';

@Module({
  providers: [CriteriosLabHistotecnologiaService]
})
export class CriteriosLabHistotecnologiaModule {}
