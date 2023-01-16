import { Module } from '@nestjs/common';
import { CriterioajusteService } from './criterioajuste.service';
import { CriterioajusteController } from './criterioajuste.controller';
import { CriterioAjusteEntity } from '../criterioajuste.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioAjusteEntity])],
  providers: [CriterioajusteService],
  controllers: [CriterioajusteController]
})
export class CriterioajusteModule {}
