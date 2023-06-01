import { Module } from '@nestjs/common';
import { CriteriosTomMuestrasService } from './criterios_tom_muestras.service';
import { CriteriosTomMuestrasController } from './criterios_tom_muestras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioMuestraLabClinicoEntity } from '../criterio_tom_muestras.entity';
import { MuestrasLabClinicoEntity } from '../tom_muestras.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioMuestraLabClinicoEntity, MuestrasLabClinicoEntity])],
    controllers: [CriteriosTomMuestrasController],
    providers: [CriteriosTomMuestrasService],
    exports: [CriteriosTomMuestrasService]
  
})
export class CriteriosTomMuestrasModule {}
