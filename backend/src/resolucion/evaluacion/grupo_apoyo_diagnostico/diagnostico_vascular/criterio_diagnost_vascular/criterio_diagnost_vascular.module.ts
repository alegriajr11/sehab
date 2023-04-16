import { Module } from '@nestjs/common';
import { CriterioDiagnostVascularService } from './criterio_diagnost_vascular.service';

@Module({
  providers: [CriterioDiagnostVascularService]
})
export class CriterioDiagnostVascularModule {}
