import { Module } from '@nestjs/common';
import { CriteriosCuidBasicNeonatalService } from './criterios_cuid_basic_neonatal.service';

@Module({
  providers: [CriteriosCuidBasicNeonatalService]
})
export class CriteriosCuidBasicNeonatalModule {}
