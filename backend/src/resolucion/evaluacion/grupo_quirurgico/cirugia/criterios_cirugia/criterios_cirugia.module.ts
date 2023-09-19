import { Module } from '@nestjs/common';
import { CriteriosCirugiaService } from './criterios_cirugia.service';
import { CriteriosCirugiaController } from './criterios_cirugia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCirugiaEntity } from '../criterio_cirugia.entity';
import { CirugiaEntity } from '../cirugia.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCirugiaEntity, CirugiaEntity]),
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
    controllers: [CriteriosCirugiaController],
    providers: [CriteriosCirugiaService],
    exports: [CriteriosCirugiaService]
})
export class CriteriosCirugiaModule {

}
