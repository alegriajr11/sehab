import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioIndEntity } from '../criterioind.entity';
import { EtapaInd } from '../etapaind.entity';
import { CriterioindController } from './criterioind.controller';
import { CriterioindService } from './criterioind.service';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioIndEntity, EtapaInd])],
  controllers: [CriterioindController],
  providers: [CriterioindService]
})
export class CriterioindModule {}
