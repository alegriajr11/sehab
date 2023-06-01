import { Module } from '@nestjs/common';
import { CriterioRadioterapiaService } from './criterio_radioterapia.service';
import { CriterioRadioterapiaController } from './criterio_radioterapia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RadioterapiaEntity } from '../radioterapia.entity';
import { CriterioRadioterapiaEntity } from '../criterio_radioterapia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioRadioterapiaEntity, RadioterapiaEntity])],
  controllers: [CriterioRadioterapiaController],
  providers: [CriterioRadioterapiaService],
  exports: [CriterioRadioterapiaService]
  
})
export class CriterioRadioterapiaModule {}
