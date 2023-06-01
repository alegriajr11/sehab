import { Module } from '@nestjs/common';
import { CriteriosCuidIntensNeonatalService } from './criterios_cuid_intens_neonatal.service';
import { CriteriosCuidIntensNeonatalController } from './criterios_cuid_intens_neonatal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidInteNeonatalEntity } from '../criterio_cuid_intens_neonatal.entity';
import { CuidInteNeonatalEntity } from '../cuid_intens_neonatal.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidInteNeonatalEntity, CuidInteNeonatalEntity])],
    controllers: [CriteriosCuidIntensNeonatalController],
    providers: [CriteriosCuidIntensNeonatalService],
    exports: [CriteriosCuidIntensNeonatalService]
  
})
export class CriteriosCuidIntensNeonatalModule {}
