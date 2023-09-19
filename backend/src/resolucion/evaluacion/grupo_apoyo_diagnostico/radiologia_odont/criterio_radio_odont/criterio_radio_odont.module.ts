import { Module } from '@nestjs/common';
import { CriterioRadioOdontService } from './criterio_radio_odont.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioRadiologiaOdontoEntity } from '../criterio_radio_odont.entity';
import { RadiologiaOdontoEntity } from '../radiologia_odont.entity';
import { CriterioRadioOdontController } from './criterio_radio_odont.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioRadiologiaOdontoEntity, RadiologiaOdontoEntity]),
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
  controllers: [CriterioRadioOdontController],
  providers: [CriterioRadioOdontService],
  exports: [CriterioRadioOdontService]
})
export class CriterioRadioOdontModule { }
