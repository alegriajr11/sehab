import { Module } from '@nestjs/common';
import { CriteriosPartoService } from './criterios_parto.service';
import { CriteriosPartoController } from './criterios_parto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioPartoEntity } from '../criterio_parto.entity';
import { PartoEntity } from '../parto.entity';

@Module({

    imports: [TypeOrmModule.forFeature([CriterioPartoEntity, PartoEntity])],
    controllers: [CriteriosPartoController],
    providers: [CriteriosPartoService],
    exports: [CriteriosPartoService]
  
})
export class CriteriosPartoModule {}
