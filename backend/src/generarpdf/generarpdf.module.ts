import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioEntity } from 'src/municipio/municipio.entity';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { RolEntity } from 'src/rol/rol.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { GenerarpdfController } from './generarpdf.controller';
import { GenerarpdfService } from './generarpdf.service';
import { SicActaController } from './sic/sic-acta/sic-acta.controller';
import { SicActaModule } from './sic/sic-acta/sic-acta.module';
import { SicActaService } from './sic/sic-acta/sic-acta.service';
import { ActaSicPdfEntity } from './sic/sic-acta/sic-acta-pdf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipioEntity, PrestadorEntity, UsuarioEntity, RolEntity, ActaSicPdfEntity]), SicActaModule],
  controllers: [GenerarpdfController, SicActaController],
  providers: [GenerarpdfService, UsuarioService, SicActaService]
})
export class GenerarpdfModule {}
