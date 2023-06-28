import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditoriaRegistroEntity } from '../auditoria_registro.entity';
import { AuditoriaRegistroService } from './auditoria_registro.service';


@Module({
    imports: [TypeOrmModule.forFeature([AuditoriaRegistroEntity])],
    providers: [AuditoriaRegistroService],
    exports: [AuditoriaRegistroService]
})
export class AuditoriaRegistroModule {
}
