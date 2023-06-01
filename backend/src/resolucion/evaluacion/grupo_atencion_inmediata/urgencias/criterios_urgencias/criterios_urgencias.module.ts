import { Module } from '@nestjs/common';
import { CriteriosUrgenciasService } from './criterios_urgencias.service';
import { CriteriosUrgenciasController } from './criterios_urgencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioUrgenciasEntity } from '../criterio_urgencias.entity';
import { UrgenciasEntity } from '../urgencias.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioUrgenciasEntity, UrgenciasEntity])],
    controllers: [CriteriosUrgenciasController],
    providers: [CriteriosUrgenciasService],
    exports: [CriteriosUrgenciasService]
  
})
export class CriteriosUrgenciasModule {}
