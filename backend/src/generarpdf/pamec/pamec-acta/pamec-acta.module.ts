import { Module } from '@nestjs/common';
import { PamecActaService } from './pamec-acta.service';
import { PamecActaController } from './pamec-acta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActaPamecEntity } from './pamec-acta.entity';
import { AuditoriaRegistroModule } from 'src/auditoria/auditoria_registro/auditoria_registro.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { ActividadEntity } from 'src/pamec/actividad.entity';
import { EvaluacionPamecEntity } from 'src/pamec/evaluacion-pamec.entity';
import { AuditoriaActualizacionModule } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.module';


@Module({
  imports: [TypeOrmModule.forFeature([ActaPamecEntity,PrestadorEntity,ActividadEntity,EvaluacionPamecEntity]),
    AuditoriaRegistroModule,AuditoriaActualizacionModule,
  //MODULO JwtService
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: 7200,
      },
    }),
    inject: [ConfigService],
  }), //FINAL DE MODULO JwtService
  ],
  providers: [PamecActaService],
  controllers: [PamecActaController]
})
export class PamecActaModule { }
