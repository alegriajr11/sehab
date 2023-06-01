import { Module } from '@nestjs/common';
import { CriterioServiciosService } from './criterio_servicios.service';
import { CriterioServiciosController } from './criterio_servicios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Criterio_servicios } from '../servicios/criterio_servicios.entity';
import { TodoServiciosEntity } from '../servicios/todos_servicios.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Criterio_servicios, TodoServiciosEntity])],
    controllers: [CriterioServiciosController],
    providers: [CriterioServiciosService],
    exports: [CriterioServiciosService]
  
})
export class CriterioServiciosModule {}
