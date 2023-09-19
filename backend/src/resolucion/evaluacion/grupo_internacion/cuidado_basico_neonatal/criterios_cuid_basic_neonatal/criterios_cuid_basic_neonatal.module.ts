import { Module } from '@nestjs/common';
import { CriteriosCuidBasicNeonatalService } from './criterios_cuid_basic_neonatal.service';
import { CriteriosCuidBasicNeonatalController } from './criterios_cuid_basic_neonatal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioCuidBasNeonatalEntity } from '../criterio_cuid_basic_neonatal.entity';
import { CuidBasNeonatalEntity } from '../cuid_basic_neonatal.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioCuidBasNeonatalEntity, CuidBasNeonatalEntity]),
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
    controllers: [CriteriosCuidBasicNeonatalController],
    providers: [CriteriosCuidBasicNeonatalService],
    exports: [CriteriosCuidBasicNeonatalService]

})
export class CriteriosCuidBasicNeonatalModule { }
