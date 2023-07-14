import { Module } from '@nestjs/common';
import { SpIndependientesService } from './sp-independientes.service';
import { SpIndependientesController } from './sp-independientes.controller';
import { ActaSpIndependientePdfEntity } from './sp-ind-acta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditoriaRegistroModule } from 'src/auditoria_registro/auditoria_registro.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([ActaSpIndependientePdfEntity]),
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
  providers: [SpIndependientesService],
  controllers: [SpIndependientesController]
})
export class SpIndependientesModule {}
