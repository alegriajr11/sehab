import { Module } from '@nestjs/common';
import { CriterioRadioterapiaService } from './criterio_radioterapia.service';
import { CriterioRadioterapiaController } from './criterio_radioterapia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RadioterapiaEntity } from '../radioterapia.entity';
import { CriterioRadioterapiaEntity } from '../criterio_radioterapia.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioRadioterapiaEntity, RadioterapiaEntity]),
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
  controllers: [CriterioRadioterapiaController],
  providers: [CriterioRadioterapiaService],
  exports: [CriterioRadioterapiaService]
  
})
export class CriterioRadioterapiaModule {}
