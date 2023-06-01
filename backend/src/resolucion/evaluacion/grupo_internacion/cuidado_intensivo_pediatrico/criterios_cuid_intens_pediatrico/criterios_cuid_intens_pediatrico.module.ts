import { Module } from '@nestjs/common';
import { CriteriosCuidIntensPediatricoService } from './criterios_cuid_intens_pediatrico.service';
import { CriteriosCuidIntensPediatricoController } from './criterios_cuid_intens_pediatrico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidIntePediatricoEntity } from '../criterio_cuid_intens_pediatrico.entity';
import { CuidIntePediatricoEntity } from '../cuid_intens_pediatrico.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidIntePediatricoEntity, CuidIntePediatricoEntity])],
    controllers: [CriteriosCuidIntensPediatricoController],
    providers: [CriteriosCuidIntensPediatricoService],
    exports: [CriteriosCuidIntensPediatricoService]
 
})
export class CriteriosCuidIntensPediatricoModule {}
