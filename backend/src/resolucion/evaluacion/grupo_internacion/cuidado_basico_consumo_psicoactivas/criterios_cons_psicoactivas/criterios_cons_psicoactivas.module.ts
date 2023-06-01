import { Module } from '@nestjs/common';
import { CriteriosConsPsicoactivasService } from './criterios_cons_psicoactivas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriosConsPsicoactivasController } from './criterios_cons_psicoactivas.controller';
import { CriterioConsumoPsicoactivasEntity } from '../criterio_cuid_cons_psicoact.entity';
import { ConsumoPsicoactivasEntity } from '../cuid_consumo_psicoactivas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioConsumoPsicoactivasEntity, ConsumoPsicoactivasEntity])],
  controllers: [CriteriosConsPsicoactivasController],
  providers: [CriteriosConsPsicoactivasService],
  exports: [CriteriosConsPsicoactivasService]
  
})
export class CriteriosConsPsicoactivasModule {}
