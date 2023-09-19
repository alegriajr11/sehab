import { Module } from '@nestjs/common';
import { CriteriosMuesCuelloService } from './criterios_mues_cuello.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriosMuesCuelloController } from './criterios_mues_cuello.controller';
import { CuelloUterinoEntity } from '../tom_muestras_cuello_uter.entity';
import { CriterioCuelloUterinoEntity } from '../criterio_tom_muest_cuello.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuelloUterinoEntity, CuelloUterinoEntity]),
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
    controllers: [CriteriosMuesCuelloController],
    providers: [CriteriosMuesCuelloService],
    exports: [CriteriosMuesCuelloService]

})
export class CriteriosMuesCuelloModule {

}
