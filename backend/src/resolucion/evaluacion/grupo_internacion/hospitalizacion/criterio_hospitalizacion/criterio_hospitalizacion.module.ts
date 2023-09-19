import { Module } from '@nestjs/common';
import { CriterioHospitalizacionController } from './criterio_hospitalizacion.controller';
import { CriterioHospitalizacionService } from './criterio_hospitalizacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionEntity } from '../criterio_hospitalizacion.entity';
import { HospitalizacionEntity } from '../hospitalizacion.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionEntity, HospitalizacionEntity]),
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
  }),],
  controllers: [CriterioHospitalizacionController],
  providers: [CriterioHospitalizacionService],
  exports: [CriterioHospitalizacionService]
})
export class CriterioHospitalizacionModule { }
