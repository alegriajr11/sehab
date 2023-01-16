import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioIndEntity } from './criterioind.entity';
import { EtapaInd } from './etapaind.entity';
import { SpIndController } from './sp_ind.controller';
import { SpIndService } from './sp_ind.service';
import { CriterioindModule } from './criterioind/criterioind.module';

@Module({
  imports:[TypeOrmModule.forFeature([EtapaInd]), TypeOrmModule.forFeature([CriterioIndEntity]), CriterioindModule],
  providers: [SpIndService],
  controllers: [SpIndController]
})
export class SpIndModule {}
