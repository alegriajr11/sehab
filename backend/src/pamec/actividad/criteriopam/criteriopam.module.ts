import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadEntity } from 'src/pamec/actividad.entity';
import { CriteriopamEntity } from 'src/pamec/criteriopam.entity';
import { CriteriopamController } from './criteriopam.controller';
import { CriteriopamService } from './criteriopam.service';

@Module({
  controllers: [CriteriopamController],
  providers: [CriteriopamService],
  imports: [CriteriopamModule, TypeOrmModule.forFeature([CriteriopamEntity]), TypeOrmModule.forFeature([ActividadEntity])]
})
export class CriteriopamModule {}
