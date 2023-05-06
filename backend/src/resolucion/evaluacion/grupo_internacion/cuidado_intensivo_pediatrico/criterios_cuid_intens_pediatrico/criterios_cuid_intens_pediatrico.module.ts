import { Module } from '@nestjs/common';
import { CriteriosCuidIntensPediatricoService } from './criterios_cuid_intens_pediatrico.service';

@Module({
  providers: [CriteriosCuidIntensPediatricoService]
})
export class CriteriosCuidIntensPediatricoModule {}
