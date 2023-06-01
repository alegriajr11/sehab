import { Module } from '@nestjs/common';
import { CriteriosHemodIntervenService } from './criterios_hemod_interven.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHermoIntervenEntity } from '../criterio_hemo_inter.entity';
import { HermodIntervenEntity } from '../hemod_interven.entity';
import { CriteriosHemodIntervenController } from './criterios_hemod_interven.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHermoIntervenEntity, HermodIntervenEntity])],
  controllers: [CriteriosHemodIntervenController],
  providers: [CriteriosHemodIntervenService],
  exports: [CriteriosHemodIntervenService]
})
export class CriteriosHemodIntervenModule {}
