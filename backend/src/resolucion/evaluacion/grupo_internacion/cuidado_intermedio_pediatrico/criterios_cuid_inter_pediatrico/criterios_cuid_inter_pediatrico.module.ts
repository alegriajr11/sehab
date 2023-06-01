import { Module } from '@nestjs/common';
import { CriteriosCuidInterPediatricoService } from './criterios_cuid_inter_pediatrico.service';
import { CriteriosCuidInterPediatricoController } from './criterios_cuid_inter_pediatrico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidIntermPediatricoEntity } from '../criterio_cuid_inter_pediatrico.entity';
import { CuidIntermPediatricoEntity } from '../cuid_inter_pediatrico.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidIntermPediatricoEntity, CuidIntermPediatricoEntity])],
    controllers: [CriteriosCuidInterPediatricoController],
    providers: [CriteriosCuidInterPediatricoService],
    exports: [CriteriosCuidInterPediatricoService]
  
})
export class CriteriosCuidInterPediatricoModule {}
