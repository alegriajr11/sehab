import { Module } from '@nestjs/common';
import { PamecActaService } from './pamec-acta.service';
import { PamecActaController } from './pamec-acta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActaPamecIpsEntity } from './pamec-acta-ips.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActaPamecIpsEntity])],
  providers: [PamecActaService],
  controllers: [PamecActaController]
})
export class PamecActaModule {}
