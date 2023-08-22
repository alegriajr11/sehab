import { Module } from '@nestjs/common';
import { SedeService } from './sede.service';
import { SedeController } from './sede.controller';

@Module({
  providers: [SedeService],
  controllers: [SedeController]
})
export class SedeModule {}
