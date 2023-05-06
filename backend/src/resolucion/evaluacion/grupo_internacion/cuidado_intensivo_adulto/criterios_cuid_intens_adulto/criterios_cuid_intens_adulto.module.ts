import { Module } from '@nestjs/common';
import { CriteriosCuidIntensAdultoService } from './criterios_cuid_intens_adulto.service';

@Module({
  providers: [CriteriosCuidIntensAdultoService]
})
export class CriteriosCuidIntensAdultoModule {}
