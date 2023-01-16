import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioEntity } from 'src/municipio/municipio.entity';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { RolEntity } from 'src/rol/rol.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { GenerarpdfController } from './generarpdf.controller';
import { GenerarpdfService } from './generarpdf.service';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipioEntity, PrestadorEntity, UsuarioEntity, RolEntity])],
  controllers: [GenerarpdfController],
  providers: [GenerarpdfService, UsuarioService]
})
export class GenerarpdfModule {}
