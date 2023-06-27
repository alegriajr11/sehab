import { Module } from '@nestjs/common';
import { SpIndependientesService } from './sp-independientes.service';
import { SpIndependientesController } from './sp-independientes.controller';
import { ActaSpIndependientePdfEntity } from './sp-ind-acta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActaSpIndependientePdfEntity])],
  providers: [SpIndependientesService],
  controllers: [SpIndependientesController]
})
export class SpIndependientesModule {}
