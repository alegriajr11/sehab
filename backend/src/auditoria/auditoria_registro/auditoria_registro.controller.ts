import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { AuditoriaRegistroService } from './auditoria_registro.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';


@Controller('auditoria-registro')
export class AuditoriaRegistroController {

    constructor(private readonly auditoriaRegistroService: AuditoriaRegistroService) { }

    @UseGuards(JwtAuthGuard)
    @Get('funcionario')
    async getAudtioriaNomApe(@Query('usu_nombre_apellido') usu_nombre_apellido: string) {
        return await this.auditoriaRegistroService.findAllAuditoriaNomApel(usu_nombre_apellido);
    }

}
