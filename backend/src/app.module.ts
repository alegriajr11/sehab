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
import { SpIndService } from './sp/sp_ind/sp_ind.service';
import { SpIndModule } from './sp/sp_ind/sp_ind.module';
import { EvaluacionipsModule } from './sp/sp_ips/evaluacionips/evaluacionips.module';
import { CriterioajusteModule } from './sp/sp_ips/criterioajuste/criterioajuste.module';
import { CriterioimpleModule } from './sp/sp_ips/criterioimple/criterioimple.module';
import { CriterioverifModule } from './sp/sp_ips/criterioverif/criterioverif.module';
import { ItemipsModule } from './sp/sp_ips/itemips/itemips.module';
import { PlaneacionModule } from './sp/sp_ips/planeacion/planeacion.module';
import { GenerarpdfModule } from './generarpdf/generarpdf.module';



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
        synchronize: false,
        logging: false,
        
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
    GenerarpdfModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
