import { Module } from '@nestjs/common';
import { CriterioSFarmaceuticoService } from './criterio_s_farmaceutico.service';
import { CriterioSFarmaceuticoController } from './criterio_s_farmaceutico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioSerFarmaceuticoEntity } from '../criterios_s_farmaceutico.entity';
import { ServFarmaceuticoEntity } from '../servicio_farmaceutico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioSerFarmaceuticoEntity, ServFarmaceuticoEntity])],
  controllers: [CriterioSFarmaceuticoController],
  providers: [CriterioSFarmaceuticoService],
  exports: [CriterioSFarmaceuticoService]
  
})
export class CriterioSFarmaceuticoModule {}
