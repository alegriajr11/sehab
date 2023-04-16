/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PrestadorModule } from './prestador/prestador.module';
import { MunicipioModule } from './municipio/municipio.module';
import { CriteriosicModule } from './sic/criteriosic/criteriosic.module';
import { ActividadModule } from './pamec/actividad/actividad.module';
import { SpIndModule } from './sp/sp_ind/sp_ind.module';
import { EvaluacionipsModule } from './sp/sp_ips/evaluacionips/evaluacionips.module';
import { CriterioajusteModule } from './sp/sp_ips/criterioajuste/criterioajuste.module';
import { CriterioimpleModule } from './sp/sp_ips/criterioimple/criterioimple.module';
import { CriterioverifModule } from './sp/sp_ips/criterioverif/criterioverif.module';
import { ItemipsModule } from './sp/sp_ips/itemips/itemips.module';
import { PlaneacionModule } from './sp/sp_ips/planeacion/planeacion.module';
import { GenerarpdfModule } from './generarpdf/generarpdf.module';
import { CalificacionpamecModule } from './pamec/calificacionpamec/calificacionpamec.module';
import { CriteriosicCumplimientoController } from './sic/criteriosic-cumplimiento/criteriosic-cumplimiento.controller';
import { CriteriosicCumplimientoModule } from './sic/criteriosic-cumplimiento/criteriosic-cumplimiento.module';
import { CriterioServiciosController } from './resolucion/evaluacion/todos_servicios/criterio_servicios/criterio_servicios.controller';
import { CriterioServiciosModule } from './resolucion/evaluacion/todos_servicios/criterio_servicios/criterio_servicios.module';
import { CriteriosExtGeneralController } from './resolucion/evaluacion/grupo_consulta_externa/externa_general/criterios_ext_general/criterios_ext_general.controller';
import { CriteriosExtGeneralModule } from './resolucion/evaluacion/grupo_consulta_externa/externa_general/criterios_ext_general/criterios_ext_general.module';
import { CriteriosExtEspecializadaController } from './resolucion/evaluacion/grupo_consulta_externa/externa_especializada/criterios_ext_especializada/criterios_ext_especializada.controller';
import { CriteriosExtEspecializadaModule } from './resolucion/evaluacion/grupo_consulta_externa/externa_especializada/criterios_ext_especializada/criterios_ext_especializada.module';
import { CriteriosVacunacionController } from './resolucion/evaluacion/grupo_consulta_externa/vacunacion/criterios_vacunacion/criterios_vacunacion.controller';
import { CriteriosVacunacionModule } from './resolucion/evaluacion/grupo_consulta_externa/vacunacion/criterios_vacunacion/criterios_vacunacion.module';
import { CriteriosSaludTrabajoController } from './resolucion/evaluacion/grupo_consulta_externa/seguridad_salud_trabajo/criterios_salud_trabajo/criterios_salud_trabajo.controller';
import { CriteriosSaludTrabajoModule } from './resolucion/evaluacion/grupo_consulta_externa/seguridad_salud_trabajo/criterios_salud_trabajo/criterios_salud_trabajo.module';
import { CriterioTerapiasController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/terapias/criterio_terapias/criterio_terapias.controller';
import { CriterioTerapiasModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/terapias/criterio_terapias/criterio_terapias.module';
import { CriterioSFarmaceuticoController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/servicio_farmaceutico/criterio_s_farmaceutico/criterio_s_farmaceutico.controller';
import { CriterioSFarmaceuticoModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/servicio_farmaceutico/criterio_s_farmaceutico/criterio_s_farmaceutico.module';
import { CriterioRadioOdontController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/radiologia_odont/criterio_radio_odont/criterio_radio_odont.controller';
import { CriterioRadioOdontModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/radiologia_odont/criterio_radio_odont/criterio_radio_odont.module';
import { CriterioImgRadIonizantesController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/imagenes_diagnosticas_rad_ionizantes/criterio_img_rad_ionizantes/criterio_img_rad_ionizantes.controller';
import { CriterioImgRadIonizantesModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/imagenes_diagnosticas_rad_ionizantes/criterio_img_rad_ionizantes/criterio_img_rad_ionizantes.module';
import { CriterioImgRadNoionizantesController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/imagenes_diagnosticas_rad_noionizantes/criterio_img_rad_noionizantes/criterio_img_rad_noionizantes.controller';
import { CriterioImgRadNoionizantesModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/imagenes_diagnosticas_rad_noionizantes/criterio_img_rad_noionizantes/criterio_img_rad_noionizantes.module';
import { CriterioMedicinaNuclearController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/medicina_nuclear/criterio_medicina_nuclear/criterio_medicina_nuclear.controller';
import { CriterioMedicinaNuclearModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/medicina_nuclear/criterio_medicina_nuclear/criterio_medicina_nuclear.module';
import { CriterioRadioterapiaController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/radioterapia/criterio_radioterapia/criterio_radioterapia.controller';
import { CriterioRadioterapiaModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/radioterapia/criterio_radioterapia/criterio_radioterapia.module';
import { CriterioQuimioterapiaController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/quimioterapia/criterio_quimioterapia/criterio_quimioterapia.controller';
import { CriterioQuimioterapiaModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/quimioterapia/criterio_quimioterapia/criterio_quimioterapia.module';
import { CriterioDiagnostVascularController } from './resolucion/evaluacion/grupo_apoyo_diagnostico/diagnostico_vascular/criterio_diagnost_vascular/criterio_diagnost_vascular.controller';
import { CriterioDiagnostVascularModule } from './resolucion/evaluacion/grupo_apoyo_diagnostico/diagnostico_vascular/criterio_diagnost_vascular/criterio_diagnost_vascular.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize:true,
        logging: true
        
      }),
      inject: [ConfigService],
    }),
    UsuarioModule,
    RolModule,
    AuthModule,
    PrestadorModule,
    MunicipioModule,
    CriteriosicModule,
    ActividadModule,
    SpIndModule,
    ItemipsModule,
    EvaluacionipsModule,
    CriterioajusteModule,
    CriterioimpleModule,
    CriterioverifModule,
    PlaneacionModule,
    GenerarpdfModule,
    CalificacionpamecModule,
    CriteriosicCumplimientoModule,
    CriterioServiciosModule,
    CriteriosExtGeneralModule,
    CriteriosExtEspecializadaModule,
    CriteriosVacunacionModule,
    CriteriosSaludTrabajoModule,
    CriterioTerapiasModule,
    CriterioSFarmaceuticoModule,
    CriterioRadioOdontModule,
    CriterioImgRadIonizantesModule,
    CriterioImgRadNoionizantesModule,
    CriterioMedicinaNuclearModule,
    CriterioRadioterapiaModule,
    CriterioQuimioterapiaModule,
    CriterioDiagnostVascularModule

  ],
  controllers: [AppController, CriterioServiciosController, CriteriosExtGeneralController, CriteriosExtEspecializadaController, CriteriosVacunacionController, CriteriosSaludTrabajoController, CriterioTerapiasController, CriterioSFarmaceuticoController, CriterioRadioOdontController, CriterioImgRadIonizantesController, CriterioImgRadNoionizantesController, CriterioMedicinaNuclearController, CriterioRadioterapiaController, CriterioQuimioterapiaController, CriterioDiagnostVascularController],
  providers: [AppService],
})
export class AppModule {}
