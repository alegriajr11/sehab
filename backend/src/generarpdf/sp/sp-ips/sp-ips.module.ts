import { Module } from '@nestjs/common';
import { SpIpsService } from './sp-ips.service';
import { SpIpsController } from './sp-ips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActaSpIpsEntity } from './sp-ips.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActaSpIpsEntity])],
  providers: [SpIpsService],
  controllers: [SpIpsController]
})
export class SpIpsModule {}
