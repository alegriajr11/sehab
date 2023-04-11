import { Module } from '@nestjs/common';
import { CriteriosSaludTrabajoService } from './criterios_salud_trabajo.service';

@Module({
  providers: [CriteriosSaludTrabajoService]
})
export class CriteriosSaludTrabajoModule {}
