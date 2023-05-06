import { Module } from '@nestjs/common';
import { CriteriosCirugiaService } from './criterios_cirugia.service';

@Module({
  providers: [CriteriosCirugiaService]
})
export class CriteriosCirugiaModule {}
