import { Module } from '@nestjs/common';
import { CriteriosHemodIntervenService } from './criterios_hemod_interven.service';

@Module({
  providers: [CriteriosHemodIntervenService]
})
export class CriteriosHemodIntervenModule {}
