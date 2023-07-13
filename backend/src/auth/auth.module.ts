/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { RolEntity } from 'src/rol/rol.entity';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWT_SECRET } from 'src/config/constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EncoderService } from './encoder.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { MailerservicesService } from './mailerservices/mailerservices.service';
import { AuditoriaRegistroModule } from 'src/auditoria_registro/auditoria_registro.module';
import { AuditoriaRegistroRepository } from 'src/auditoria_registro/auditoria_registro.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity, RolEntity, AuthRepository, AuditoriaRegistroRepository]),
  PassportModule.register({
    defaultStrategy: 'jwt'
  }),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get(JWT_SECRET),
      signOptions: {
        expiresIn: 7200
      }
    }),
    inject: [ConfigService],
  }),
  AuditoriaRegistroModule],
  providers: [AuthService, ConfigService, JwtStrategy, EncoderService, UsuarioService, MailerservicesService],
  controllers: [AuthController],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule {}
