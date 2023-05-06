import { Module } from '@nestjs/common';
import { CriteriosCuidInterAdultoService } from './criterios_cuid_inter_adulto.service';

@Module({
  providers: [CriteriosCuidInterAdultoService]
})
export class CriteriosCuidInterAdultoModule {}
