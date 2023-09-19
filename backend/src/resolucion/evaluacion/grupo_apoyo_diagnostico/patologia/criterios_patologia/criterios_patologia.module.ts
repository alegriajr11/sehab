import { Module } from '@nestjs/common';
import { CriteriosPatologiaService } from './criterios_patologia.service';
import { CriterioPatologiaEntity } from '../criterio_patologia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatologiaEntity } from '../patologia.entity';
import { CriteriosPatologiaController } from './criterios_patologia.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioPatologiaEntity, PatologiaEntity]),
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
  controllers: [CriteriosPatologiaController],
  providers: [CriteriosPatologiaService],
  exports: [CriteriosPatologiaService]
})
export class CriteriosPatologiaModule { }
