import { Module } from '@nestjs/common';
import { SpIndependientesService } from './sp-independientes.service';
import { SpIndependientesController } from './sp-independientes.controller';

@Module({
  providers: [SpIndependientesService],
  controllers: [SpIndependientesController]
})
export class SpIndependientesModule {}
