import { Module } from '@nestjs/common';
import { CriterioServiciosService } from './criterio_servicios.service';

@Module({
  providers: [CriterioServiciosService]
})
export class CriterioServiciosModule {}
