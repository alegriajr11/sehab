import { Module } from '@nestjs/common';
import { GenerarExcelService } from './generar_excel.service';
import { GenerarExcelController } from './generar_excel.controller';

@Module({
  providers: [GenerarExcelService],
  controllers: [GenerarExcelController]
})
export class GenerarExcelModule {}
