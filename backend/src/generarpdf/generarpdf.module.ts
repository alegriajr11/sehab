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
import { SpIndependientesModule } from './sp/sp-independientes/sp-independientes.module';
import { SpIpsModule } from './sp/sp-ips/sp-ips.module';
import { PamecActaModule } from './pamec/pamec-acta/pamec-acta.module';
import { AuditoriaRegistroModule } from 'src/auditoria_registro/auditoria_registro.module';
import { JwtModule } from '@nestjs/jwt';
import { CriteriosicCumplimientoModule } from 'src/sic/criteriosic-cumplimiento/criteriosic-cumplimiento.module';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipioEntity, PrestadorEntity, UsuarioEntity, RolEntity, ActaSicPdfEntity]), SicActaModule, 
  SpIndependientesModule, SpIpsModule, PamecActaModule, AuditoriaRegistroModule, JwtModule, CriteriosicCumplimientoModule],

  controllers: [GenerarpdfController, SicActaController],
  providers: [GenerarpdfService, UsuarioService, SicActaService]
})
export class GenerarpdfModule {}
