import { Module } from '@nestjs/common';
import { ServiciosVerificadosService } from './servicios_verificados.service';
import { ServiciosVerificadosController } from './servicios_verificados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosVerificadosEntity } from '../servicios_verificados.entity';
import { PrestadorEntity } from 'src/prestador/prestador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiciosVerificadosEntity, PrestadorEntity])],
  providers: [ServiciosVerificadosService],
  controllers: [ServiciosVerificadosController],
  exports: [ServiciosVerificadosService]
})
export class ServiciosVerificadosModule {}
