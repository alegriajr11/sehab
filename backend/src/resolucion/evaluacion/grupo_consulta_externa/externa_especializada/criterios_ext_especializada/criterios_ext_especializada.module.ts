import { Module } from '@nestjs/common';
import { CriteriosExtEspecializadaService } from './criterios_ext_especializada.service';
import { CriteriosExtEspecializadaController } from './criterios_ext_especializada.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioEspecializadaEntity } from '../criterio_especializada.entity';
import { ExternaEspecializadaEntity } from '../especializada.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioEspecializadaEntity, ExternaEspecializadaEntity])],
    controllers: [CriteriosExtEspecializadaController],
    providers: [CriteriosExtEspecializadaService],
    exports: [CriteriosExtEspecializadaService]
  
})
export class CriteriosExtEspecializadaModule {}
