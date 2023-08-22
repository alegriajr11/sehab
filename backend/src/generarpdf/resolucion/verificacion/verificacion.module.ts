import { Module } from '@nestjs/common';
import { VerificacionService } from './verificacion.service';
import { VerificacionController } from './verificacion.controller';

@Module({
  providers: [VerificacionService],
  controllers: [VerificacionController]
})
export class VerificacionModule {}
