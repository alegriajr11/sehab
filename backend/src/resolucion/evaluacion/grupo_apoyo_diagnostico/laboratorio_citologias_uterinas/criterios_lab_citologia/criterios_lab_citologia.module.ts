import { Module } from '@nestjs/common';
import { CriteriosLabCitologiaService } from './criterios_lab_citologia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioLabUterinaEntity } from '../criterio_lab_citologia_uterina.entity';
import { CriteriosLabCitologiaController } from './criterios_lab_citologia.controller';
import { LabCitologiaUterinaEntity } from '../lab_citologia_uterina.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioLabUterinaEntity, LabCitologiaUterinaEntity]),
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
  }), ],
  controllers: [CriteriosLabCitologiaController],
  providers: [CriteriosLabCitologiaService],
  exports: [CriteriosLabCitologiaService]
})
export class CriteriosLabCitologiaModule {}
