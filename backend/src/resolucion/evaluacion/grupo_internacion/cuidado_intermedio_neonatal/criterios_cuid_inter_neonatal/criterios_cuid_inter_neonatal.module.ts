import { Module } from '@nestjs/common';
import { CriteriosCuidInterNeonatalService } from './criterios_cuid_inter_neonatal.service';

@Module({
  providers: [CriteriosCuidInterNeonatalService]
})
export class CriteriosCuidInterNeonatalModule {}
