import { Module } from '@nestjs/common';
import { PamecActaService } from './pamec-acta.service';
import { PamecActaController } from './pamec-acta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActaPamecIpsEntity } from './pamec-acta.entity';
import { AuditoriaRegistroModule } from 'src/auditoria_registro/auditoria_registro.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forFeature([ActaPamecIpsEntity]),
    AuditoriaRegistroModule,
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
