import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditoriaRegistroService } from './auditoria_registro.service';
import { AuditoriaRegistroController } from './auditoria_registro.controller';
import { AuditoriaRegistroEntity } from './auditoria_registro.entity';


@Module({
    imports: [TypeOrmModule.forFeature([AuditoriaRegistroEntity])],
    providers: [AuditoriaRegistroService],
    controllers: [AuditoriaRegistroController],
    exports: [AuditoriaRegistroService]
})
export class AuditoriaRegistroModule {
}
