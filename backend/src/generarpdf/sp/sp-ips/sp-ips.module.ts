import { Module } from '@nestjs/common';
import { SpIpsService } from './sp-ips.service';
import { SpIpsController } from './sp-ips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActaSpIpsEntity } from './sp-ips.entity';
import { AuditoriaRegistroModule } from 'src/auditoria/auditoria_registro/auditoria_registro.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuditoriaActualizacionModule } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.module';
import { EvaluacionipsEntity } from 'src/sp/sp_ips/evaluacionips.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActaSpIpsEntity,EvaluacionipsEntity]),
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
}),
],
  providers: [SpIpsService],
  controllers: [SpIpsController]
})
export class SpIpsModule {}
