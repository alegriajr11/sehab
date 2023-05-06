import { Module } from '@nestjs/common';
import { CriteriosUrgenciasService } from './criterios_urgencias.service';

@Module({
  providers: [CriteriosUrgenciasService]
})
export class CriteriosUrgenciasModule {}
