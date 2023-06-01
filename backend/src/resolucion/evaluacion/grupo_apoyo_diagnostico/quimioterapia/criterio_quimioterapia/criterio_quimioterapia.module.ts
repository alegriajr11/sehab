import { Module } from '@nestjs/common';
import { CriterioQuimioterapiaService } from './criterio_quimioterapia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioQuimioterapiaController } from './criterio_quimioterapia.controller';
import { CriterioQuimioterapiaEntity } from '../criterio_quimioterapia.entity';
import { QuimioterapiaEntity } from '../quimioterapia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioQuimioterapiaEntity, QuimioterapiaEntity])],
  controllers: [CriterioQuimioterapiaController],
  providers: [CriterioQuimioterapiaService],
  exports: [CriterioQuimioterapiaService]
 
})
export class CriterioQuimioterapiaModule {}
