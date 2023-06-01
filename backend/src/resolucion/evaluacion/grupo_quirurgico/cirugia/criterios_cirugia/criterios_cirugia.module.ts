import { Module } from '@nestjs/common';
import { CriteriosCirugiaService } from './criterios_cirugia.service';
import { CriteriosCirugiaController } from './criterios_cirugia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCirugiaEntity } from '../criterio_cirugia.entity';
import { CirugiaEntity } from '../cirugia.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCirugiaEntity, CirugiaEntity])],
    controllers: [CriteriosCirugiaController],
    providers: [CriteriosCirugiaService],
    exports: [CriteriosCirugiaService]
})
export class CriteriosCirugiaModule {
  
}
