import { Module } from '@nestjs/common';
import { CriteriosHospSaludMentalService } from './criterios_hosp_salud_mental.service';
import { CriteriosHospSaludMentalController } from './criterios_hosp_salud_mental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHospitalizacionMentalEntity } from '../criterio_hosp_salud_mental.entity';
import { HospitalizacionMentalEntity } from '../hosp_salud_mental.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHospitalizacionMentalEntity, HospitalizacionMentalEntity]),
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
  controllers: [CriteriosHospSaludMentalController],
  providers: [CriteriosHospSaludMentalService],
  exports: [CriteriosHospSaludMentalService]

})
export class CriteriosHospSaludMentalModule { }
