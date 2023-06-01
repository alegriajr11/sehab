import { Module } from '@nestjs/common';
import { CriteriosCuidInterAdultoService } from './criterios_cuid_inter_adulto.service';
import { CriteriosCuidInterAdultoController } from './criterios_cuid_inter_adulto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidIntermAdultoEntity } from '../criterio_cuid_inter_adulto.entity';
import { CuidIntermAdultoEntity } from '../cuid_inter_adulto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidIntermAdultoEntity, CuidIntermAdultoEntity])],
    controllers: [CriteriosCuidInterAdultoController],
    providers: [CriteriosCuidInterAdultoService],
    exports: [CriteriosCuidInterAdultoService]
})
export class CriteriosCuidInterAdultoModule {}
