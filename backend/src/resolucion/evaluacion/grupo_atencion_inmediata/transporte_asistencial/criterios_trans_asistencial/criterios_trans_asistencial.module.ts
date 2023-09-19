import { Module } from '@nestjs/common';
import { CriteriosTransAsistencialService } from './criterios_trans_asistencial.service';
import { CriteriosTransAsistencialController } from './criterios_trans_asistencial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioTranspAsistencialEntity } from '../criterio_trans_asistencial.entity';
import { TranspAsistencialEntity } from '../transporte_asistencial.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioTranspAsistencialEntity, TranspAsistencialEntity]),
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
    controllers: [CriteriosTransAsistencialController],
    providers: [CriteriosTransAsistencialService],
    exports: [CriteriosTransAsistencialService]

})
export class CriteriosTransAsistencialModule { }
