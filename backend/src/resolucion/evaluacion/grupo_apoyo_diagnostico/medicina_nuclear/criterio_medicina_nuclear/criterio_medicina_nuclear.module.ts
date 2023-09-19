import { Module } from '@nestjs/common';
import { CriterioMedicinaNuclearService } from './criterio_medicina_nuclear.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioMedicinaNuclearEntity } from '../criterio_medicina_nuclear.entity';
import { MedNuclearEntity } from '../medicina_nuclear.entity';
import { CriterioMedicinaNuclearController } from './criterio_medicina_nuclear.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioMedicinaNuclearEntity, MedNuclearEntity]),
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
  controllers: [CriterioMedicinaNuclearController],
  providers: [CriterioMedicinaNuclearService],
  exports: [CriterioMedicinaNuclearService]
})
export class CriterioMedicinaNuclearModule { }
