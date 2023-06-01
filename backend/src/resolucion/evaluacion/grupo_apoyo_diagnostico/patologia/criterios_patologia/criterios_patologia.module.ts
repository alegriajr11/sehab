import { Module } from '@nestjs/common';
import { CriteriosPatologiaService } from './criterios_patologia.service';
import { CriterioPatologiaEntity } from '../criterio_patologia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatologiaEntity } from '../patologia.entity';
import { CriteriosPatologiaController } from './criterios_patologia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioPatologiaEntity, PatologiaEntity])],
  controllers: [CriteriosPatologiaController],
  providers: [CriteriosPatologiaService],
  exports: [CriteriosPatologiaService]
})
export class CriteriosPatologiaModule {}
