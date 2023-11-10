import { Module } from '@nestjs/common';
import { RequisitosCondicionesHabilitacionController } from './requisitos_condiciones_habilitacion.controller';
import { RequisitosCondicionesHabilitacionService } from './requisitos_condiciones_habilitacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoResEntity } from './concepto_res.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptoResEntity])],
  controllers: [RequisitosCondicionesHabilitacionController],
  providers: [RequisitosCondicionesHabilitacionService]
})
export class RequisitosCondicionesHabilitacionModule {}
