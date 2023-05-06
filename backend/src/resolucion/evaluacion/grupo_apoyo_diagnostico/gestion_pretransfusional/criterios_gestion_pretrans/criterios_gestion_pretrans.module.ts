import { Module } from '@nestjs/common';
import { CriteriosGestionPretransService } from './criterios_gestion_pretrans.service';

@Module({
  providers: [CriteriosGestionPretransService]
})
export class CriteriosGestionPretransModule {}
