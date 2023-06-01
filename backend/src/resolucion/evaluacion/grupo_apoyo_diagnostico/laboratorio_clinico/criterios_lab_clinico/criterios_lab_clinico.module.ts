import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriosLabClinicoService } from './criterios_lab_clinico.service';
import { CriteriosLabClinicoController } from './criterios_lab_clinico.controller';
import { CriterioLabClinicoEntity } from '../criterio_lab_clinico.entity';
import { LabClinicoEntity } from '../laboratorio_clinico.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioLabClinicoEntity, LabClinicoEntity])],
    controllers: [CriteriosLabClinicoController],
    providers: [CriteriosLabClinicoService],
    exports: [CriteriosLabClinicoService]
})
export class CriteriosLabClinicoModule {}
