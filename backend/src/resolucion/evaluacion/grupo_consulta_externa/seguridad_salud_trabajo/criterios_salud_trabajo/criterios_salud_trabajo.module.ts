import { Module } from '@nestjs/common';
import { CriteriosSaludTrabajoService } from './criterios_salud_trabajo.service';
import { CriteriosSaludTrabajoController } from './criterios_salud_trabajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioSaludTrabajoEntity } from '../criterios_salud_trabajo.entity';
import { SaludTrabajoEntity } from '../salud_trabajo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioSaludTrabajoEntity, SaludTrabajoEntity])],
    controllers: [CriteriosSaludTrabajoController],
    providers: [CriteriosSaludTrabajoService],
    exports: [CriteriosSaludTrabajoService]
  
})
export class CriteriosSaludTrabajoModule {}
