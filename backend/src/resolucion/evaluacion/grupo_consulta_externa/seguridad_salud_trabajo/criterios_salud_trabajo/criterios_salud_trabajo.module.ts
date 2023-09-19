import { Module } from '@nestjs/common';
import { CriteriosSaludTrabajoService } from './criterios_salud_trabajo.service';
import { CriteriosSaludTrabajoController } from './criterios_salud_trabajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioSaludTrabajoEntity } from '../criterios_salud_trabajo.entity';
import { SaludTrabajoEntity } from '../salud_trabajo.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioSaludTrabajoEntity, SaludTrabajoEntity]),
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
    controllers: [CriteriosSaludTrabajoController],
    providers: [CriteriosSaludTrabajoService],
    exports: [CriteriosSaludTrabajoService]

})
export class CriteriosSaludTrabajoModule { }
