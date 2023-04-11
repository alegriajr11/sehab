import { Module } from '@nestjs/common';
import { CriteriosExtEspecializadaService } from './criterios_ext_especializada.service';

@Module({
  providers: [CriteriosExtEspecializadaService]
})
export class CriteriosExtEspecializadaModule {}
