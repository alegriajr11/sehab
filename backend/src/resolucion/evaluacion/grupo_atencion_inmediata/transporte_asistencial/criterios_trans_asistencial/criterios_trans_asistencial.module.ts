import { Module } from '@nestjs/common';
import { CriteriosTransAsistencialService } from './criterios_trans_asistencial.service';
import { CriteriosTransAsistencialController } from './criterios_trans_asistencial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioTranspAsistencialEntity } from '../criterio_trans_asistencial.entity';
import { TranspAsistencialEntity } from '../transporte_asistencial.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioTranspAsistencialEntity, TranspAsistencialEntity])],
    controllers: [CriteriosTransAsistencialController],
    providers: [CriteriosTransAsistencialService],
    exports: [CriteriosTransAsistencialService]
  
})
export class CriteriosTransAsistencialModule {}
