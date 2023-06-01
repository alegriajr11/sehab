import { Module } from '@nestjs/common';
import { CriterioMedicinaNuclearService } from './criterio_medicina_nuclear.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioMedicinaNuclearEntity } from '../criterio_medicina_nuclear.entity';
import { MedNuclearEntity } from '../medicina_nuclear.entity';
import { CriterioMedicinaNuclearController } from './criterio_medicina_nuclear.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioMedicinaNuclearEntity, MedNuclearEntity])],
  controllers: [CriterioMedicinaNuclearController],
  providers: [CriterioMedicinaNuclearService],
  exports: [CriterioMedicinaNuclearService]
})
export class CriterioMedicinaNuclearModule {}
