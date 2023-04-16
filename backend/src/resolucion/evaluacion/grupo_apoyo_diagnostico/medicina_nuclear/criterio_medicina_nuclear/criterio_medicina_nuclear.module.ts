import { Module } from '@nestjs/common';
import { CriterioMedicinaNuclearService } from './criterio_medicina_nuclear.service';

@Module({
  providers: [CriterioMedicinaNuclearService]
})
export class CriterioMedicinaNuclearModule {}
