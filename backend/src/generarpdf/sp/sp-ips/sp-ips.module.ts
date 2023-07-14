import { Module } from '@nestjs/common';
import { SpIpsService } from './sp-ips.service';
import { SpIpsController } from './sp-ips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActaSpIpsEntity } from './sp-ips.entity';
import { AuditoriaRegistroModule } from 'src/auditoria_registro/auditoria_registro.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([ActaSpIpsEntity]),
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
}),
],
  providers: [SpIpsService],
  controllers: [SpIpsController]
})
export class SpIpsModule {}
