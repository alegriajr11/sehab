import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioDiagnostVascularService } from './criterio_diagnost_vascular.service';
import { CriterioDiagnostVascularEntity } from '../criterio_diagnost_vascular.entity';
import { DiagnosticoVascularEntity } from '../diagnostico_vascular.entity';
import { CriterioDiagnostVascularController } from './criterio_diagnost_vascular.controller';

  
@Module({
  imports: [TypeOrmModule.forFeature([CriterioDiagnostVascularEntity, DiagnosticoVascularEntity])],
  controllers: [CriterioDiagnostVascularController],
  providers: [CriterioDiagnostVascularService],
  exports: [CriterioDiagnostVascularService]
})
export class CriterioDiagnostVascularModule {}
