import { Module } from '@nestjs/common';
import { CriteriosVacunacionService } from './criterios_vacunacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioVacunacionEntity } from '../criterio_vacunacion.entity';
import { VacunacionEntity } from '../vacunacion.entity';
import { CriteriosVacunacionController } from './criterios_vacunacion.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioVacunacionEntity, VacunacionEntity]),
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
    controllers: [CriteriosVacunacionController],
    providers: [CriteriosVacunacionService],
    exports: [CriteriosVacunacionService]

})
export class CriteriosVacunacionModule { }
