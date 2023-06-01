import { Module } from '@nestjs/common';
import { CriteriosLabHistotecnologiaService } from './criterios_lab_histotecnologia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioLabHistotecnologiaEntity } from '../criterio_lab_histotec.entity';
import { LabHistotecnologiaEntity } from '../lab_histotecnologia.entity';
import { CriteriosLabHistotecnologiaController } from './criterios_lab_histotecnologia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioLabHistotecnologiaEntity, LabHistotecnologiaEntity])],
  controllers: [CriteriosLabHistotecnologiaController],
  providers: [CriteriosLabHistotecnologiaService],
  exports: [CriteriosLabHistotecnologiaService]
})
export class CriteriosLabHistotecnologiaModule {}
