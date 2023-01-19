import { Module } from '@nestjs/common';
import { CalificacionpamecController } from './calificacionpamec.controller';
import { CalificacionpamecService } from './calificacionpamec.service';

@Module({
  controllers: [CalificacionpamecController],
  providers: [CalificacionpamecService]
})
export class CalificacionpamecModule {}
