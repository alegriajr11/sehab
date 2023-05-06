import { Module } from '@nestjs/common';
import { CriteriosTransAsistencialService } from './criterios_trans_asistencial.service';

@Module({
  providers: [CriteriosTransAsistencialService]
})
export class CriteriosTransAsistencialModule {}
