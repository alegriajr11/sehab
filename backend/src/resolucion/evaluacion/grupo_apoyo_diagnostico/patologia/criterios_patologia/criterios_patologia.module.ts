import { Module } from '@nestjs/common';
import { CriteriosPatologiaService } from './criterios_patologia.service';

@Module({
  providers: [CriteriosPatologiaService]
})
export class CriteriosPatologiaModule {}
