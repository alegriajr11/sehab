import { Module } from '@nestjs/common';
import { CriteriosCuidIntensNeonatalService } from './criterios_cuid_intens_neonatal.service';

@Module({
  providers: [CriteriosCuidIntensNeonatalService]
})
export class CriteriosCuidIntensNeonatalModule {}
