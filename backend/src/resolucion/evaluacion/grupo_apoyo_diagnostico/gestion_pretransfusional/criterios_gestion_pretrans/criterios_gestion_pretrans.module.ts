import { Module } from '@nestjs/common';
import { CriteriosGestionPretransService } from './criterios_gestion_pretrans.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioGestionPretransfusionalEntity } from '../criterio_gestion_pretrans.entity';
import { GestionPretransfusionalEntity } from '../gestion_pretrans.entity';
import { CriteriosGestionPretransController } from './criterios_gestion_pretrans.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioGestionPretransfusionalEntity, GestionPretransfusionalEntity])],
  controllers: [CriteriosGestionPretransController],
  providers: [CriteriosGestionPretransService],
  exports: [CriteriosGestionPretransService]
})
export class CriteriosGestionPretransModule {}
