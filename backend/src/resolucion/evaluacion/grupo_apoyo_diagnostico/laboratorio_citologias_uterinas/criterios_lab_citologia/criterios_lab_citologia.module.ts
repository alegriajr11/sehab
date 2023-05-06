import { Module } from '@nestjs/common';
import { CriteriosLabCitologiaService } from './criterios_lab_citologia.service';

@Module({
  providers: [CriteriosLabCitologiaService]
})
export class CriteriosLabCitologiaModule {}
