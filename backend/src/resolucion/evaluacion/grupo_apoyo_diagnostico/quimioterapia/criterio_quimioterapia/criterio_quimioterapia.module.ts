import { Module } from '@nestjs/common';
import { CriterioQuimioterapiaService } from './criterio_quimioterapia.service';

@Module({
  providers: [CriterioQuimioterapiaService]
})
export class CriterioQuimioterapiaModule {}
