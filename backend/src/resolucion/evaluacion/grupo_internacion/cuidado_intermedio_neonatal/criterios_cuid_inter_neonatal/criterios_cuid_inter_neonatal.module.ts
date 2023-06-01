import { Module } from '@nestjs/common';
import { CriteriosCuidInterNeonatalService } from './criterios_cuid_inter_neonatal.service';
import { CriteriosCuidInterNeonatalController } from './criterios_cuid_inter_neonatal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidIntermNeonatalEntity } from '../criterio_cuid_inter_neonatal.entity';
import { CuidIntermNeonatalEntity } from '../cuid_inter_neonatal.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidIntermNeonatalEntity, CuidIntermNeonatalEntity])],
    controllers: [CriteriosCuidInterNeonatalController],
    providers: [CriteriosCuidInterNeonatalService],
    exports: [CriteriosCuidInterNeonatalService]
  
})
export class CriteriosCuidInterNeonatalModule {}
