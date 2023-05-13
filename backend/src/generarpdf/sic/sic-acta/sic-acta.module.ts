import { Module } from '@nestjs/common';
import { SicActaService } from './sic-acta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SicActaController } from './sic-acta.controller';
import { ActaSicPdfEntity } from './sic-acta-pdf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActaSicPdfEntity])],
  controllers: [SicActaController],
  providers: [SicActaService]
})
export class SicActaModule {}
