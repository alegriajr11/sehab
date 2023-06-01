import { Module } from '@nestjs/common';
import { CriteriosCuidBasicNeonatalService } from './criterios_cuid_basic_neonatal.service';
import { CriteriosCuidBasicNeonatalController } from './criterios_cuid_basic_neonatal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidBasNeonatalEntity } from '../criterio_cuid_basic_neonatal.entity';
import { CuidBasNeonatalEntity } from '../cuid_basic_neonatal.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidBasNeonatalEntity, CuidBasNeonatalEntity])],
    controllers: [CriteriosCuidBasicNeonatalController],
    providers: [CriteriosCuidBasicNeonatalService],
    exports: [CriteriosCuidBasicNeonatalService]
  
})
export class CriteriosCuidBasicNeonatalModule {}
