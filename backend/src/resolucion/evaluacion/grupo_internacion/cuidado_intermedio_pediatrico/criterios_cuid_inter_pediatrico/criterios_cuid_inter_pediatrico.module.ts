import { Module } from '@nestjs/common';
import { CriteriosCuidInterPediatricoService } from './criterios_cuid_inter_pediatrico.service';

@Module({
  providers: [CriteriosCuidInterPediatricoService]
})
export class CriteriosCuidInterPediatricoModule {}
