/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CriteriosExtGeneralService } from './criterios_ext_general.service';
import { CriteriosExtGeneralController } from './criterios_ext_general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioExternaGeneralEntity } from '../criterio_ext_general.entity';
import { ExternaGeneralEntity } from '../general.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioExternaGeneralEntity, ExternaGeneralEntity])],
    controllers: [CriteriosExtGeneralController],
    providers: [CriteriosExtGeneralService],
    exports: [CriteriosExtGeneralService]
  
})
export class CriteriosExtGeneralModule {}
