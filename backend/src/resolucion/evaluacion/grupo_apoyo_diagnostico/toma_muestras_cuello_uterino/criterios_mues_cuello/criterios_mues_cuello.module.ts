import { Module } from '@nestjs/common';
import { CriteriosMuesCuelloService } from './criterios_mues_cuello.service';

@Module({
  providers: [CriteriosMuesCuelloService]
})
export class CriteriosMuesCuelloModule {}
