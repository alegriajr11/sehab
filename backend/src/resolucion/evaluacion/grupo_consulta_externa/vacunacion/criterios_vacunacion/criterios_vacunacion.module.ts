import { Module } from '@nestjs/common';
import { CriteriosVacunacionService } from './criterios_vacunacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioVacunacionEntity } from '../criterio_vacunacion.entity';
import { VacunacionEntity } from '../vacunacion.entity';
import { CriteriosVacunacionController } from './criterios_vacunacion.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioVacunacionEntity, VacunacionEntity])],
    controllers: [CriteriosVacunacionController],
    providers: [CriteriosVacunacionService],
    exports: [CriteriosVacunacionService]
  
})
export class CriteriosVacunacionModule {}
