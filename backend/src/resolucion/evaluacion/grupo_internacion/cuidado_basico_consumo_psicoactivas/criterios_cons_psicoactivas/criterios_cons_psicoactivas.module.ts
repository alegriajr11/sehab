import { Module } from '@nestjs/common';
import { CriteriosConsPsicoactivasService } from './criterios_cons_psicoactivas.service';

@Module({
  providers: [CriteriosConsPsicoactivasService]
})
export class CriteriosConsPsicoactivasModule {}
