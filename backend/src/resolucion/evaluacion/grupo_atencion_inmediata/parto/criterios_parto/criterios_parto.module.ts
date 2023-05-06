import { Module } from '@nestjs/common';
import { CriteriosPartoService } from './criterios_parto.service';

@Module({
  providers: [CriteriosPartoService]
})
export class CriteriosPartoModule {}
