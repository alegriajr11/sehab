import { Module } from '@nestjs/common';
import { CriteriosLabCitologiaService } from './criterios_lab_citologia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioLabUterinaEntity } from '../criterio_lab_citologia_uterina.entity';
import { CriteriosLabCitologiaController } from './criterios_lab_citologia.controller';
import { LabCitologiaUterinaEntity } from '../lab_citologia_uterina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioLabUterinaEntity, LabCitologiaUterinaEntity])],
  controllers: [CriteriosLabCitologiaController],
  providers: [CriteriosLabCitologiaService],
  exports: [CriteriosLabCitologiaService]
})
export class CriteriosLabCitologiaModule {}
