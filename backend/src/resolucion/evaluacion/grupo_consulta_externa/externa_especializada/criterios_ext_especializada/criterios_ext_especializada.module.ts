import { Module } from '@nestjs/common';
import { CriteriosExtEspecializadaService } from './criterios_ext_especializada.service';
import { CriteriosExtEspecializadaController } from './criterios_ext_especializada.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioEspecializadaEntity } from '../criterio_especializada.entity';
import { ExternaEspecializadaEntity } from '../especializada.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioEspecializadaEntity, ExternaEspecializadaEntity]),
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
    controllers: [CriteriosExtEspecializadaController],
    providers: [CriteriosExtEspecializadaService],
    exports: [CriteriosExtEspecializadaService]
})
export class CriteriosExtEspecializadaModule { }
