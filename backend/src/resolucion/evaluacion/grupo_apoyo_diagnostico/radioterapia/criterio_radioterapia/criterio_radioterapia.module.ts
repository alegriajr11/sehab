import { Module } from '@nestjs/common';
import { CriterioRadioterapiaService } from './criterio_radioterapia.service';

@Module({
  providers: [CriterioRadioterapiaService]
})
export class CriterioRadioterapiaModule {}
