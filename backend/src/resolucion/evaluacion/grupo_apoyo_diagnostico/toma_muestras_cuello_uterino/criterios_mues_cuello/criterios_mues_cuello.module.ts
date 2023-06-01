import { Module } from '@nestjs/common';
import { CriteriosMuesCuelloService } from './criterios_mues_cuello.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriosMuesCuelloController } from './criterios_mues_cuello.controller';
import { CuelloUterinoEntity } from '../tom_muestras_cuello_uter.entity';
import { CriterioCuelloUterinoEntity } from '../criterio_tom_muest_cuello.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuelloUterinoEntity, CuelloUterinoEntity])],
    controllers: [CriteriosMuesCuelloController],
    providers: [CriteriosMuesCuelloService],
    exports: [CriteriosMuesCuelloService]
  
})
export class CriteriosMuesCuelloModule {
  
}
