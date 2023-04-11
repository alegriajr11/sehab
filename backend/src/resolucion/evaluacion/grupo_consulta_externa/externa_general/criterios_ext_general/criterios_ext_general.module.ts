import { Module } from '@nestjs/common';
import { CriteriosExtGeneralService } from './criterios_ext_general.service';

@Module({
  providers: [CriteriosExtGeneralService]
})
export class CriteriosExtGeneralModule {}
