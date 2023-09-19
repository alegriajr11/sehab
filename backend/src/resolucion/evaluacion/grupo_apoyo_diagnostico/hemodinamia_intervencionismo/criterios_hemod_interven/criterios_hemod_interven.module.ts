import { Module } from '@nestjs/common';
import { CriteriosHemodIntervenService } from './criterios_hemod_interven.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioHermoIntervenEntity } from '../criterio_hemo_inter.entity';
import { HermodIntervenEntity } from '../hemod_interven.entity';
import { CriteriosHemodIntervenController } from './criterios_hemod_interven.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([CriterioHermoIntervenEntity, HermodIntervenEntity]),
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
  controllers: [CriteriosHemodIntervenController],
  providers: [CriteriosHemodIntervenService],
  exports: [CriteriosHemodIntervenService]
})
export class CriteriosHemodIntervenModule {}
