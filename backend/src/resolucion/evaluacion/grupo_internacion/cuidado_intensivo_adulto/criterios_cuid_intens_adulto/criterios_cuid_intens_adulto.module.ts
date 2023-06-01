import { Module } from '@nestjs/common';
import { CriteriosCuidIntensAdultoService } from './criterios_cuid_intens_adulto.service';
import { CriteriosCuidIntensAdultoController } from './criterios_cuid_intens_adulto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidIntensAdultoEntity } from '../criterio_cuid_intens_adulto.entity';
import { CuidIntAdultoEntity } from '../cuid_intens_adulto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidIntensAdultoEntity, CuidIntAdultoEntity])],
    controllers: [CriteriosCuidIntensAdultoController],
    providers: [CriteriosCuidIntensAdultoService],
    exports: [CriteriosCuidIntensAdultoService]
})
export class CriteriosCuidIntensAdultoModule {}