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
import { CriterioindModule } from 'src/sp/sp_ind/criterioind/criterioind.module';
import { CriterioindService } from 'src/sp/sp_ind/criterioind/criterioind.service';
import { CriterioIndEntity } from 'src/sp/sp_ind/criterioind.entity';
import { EtapaInd } from 'src/sp/sp_ind/etapaind.entity';
import { CriteriopamService } from 'src/pamec/actividad/criteriopam/criteriopam.service';
import { CriteriopamModule } from 'src/pamec/actividad/criteriopam/criteriopam.module';
import { ActividadEntity } from 'src/pamec/actividad.entity';
import { CriteriopamEntity } from 'src/pamec/criteriopam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipioEntity, PrestadorEntity, UsuarioEntity, RolEntity, ActaSicPdfEntity,CriterioIndEntity,EtapaInd,ActividadEntity,CriteriopamEntity]), SicActaModule, 
  SpIndependientesModule, SpIpsModule, PamecActaModule, AuditoriaRegistroModule, JwtModule, CriteriosicCumplimientoModule,CriterioindModule,CriteriopamModule],

  controllers: [GenerarpdfController, SicActaController],
  providers: [GenerarpdfService, UsuarioService, SicActaService,CriterioindService,CriteriopamService]
})
export class GenerarpdfModule {}
