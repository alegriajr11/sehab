import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { AuditoriaRegistroService } from './auditoria_registro.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { query } from 'express';


@Controller('auditoria-registro')
export class AuditoriaRegistroController {

    constructor(private readonly auditoriaRegistroService: AuditoriaRegistroService) { }

    @UseGuards(JwtAuthGuard)
    @Get('funcionario')
    async getAudtioriaNomApe(@Query('usu_nombre_apellido') usu_nombre_apellido: string) {
        return await this.auditoriaRegistroService.findAllAuditoriaNomApel(usu_nombre_apellido);
    }

    //OBTENER ACTAS POR FECHA O ACCIÓN
    @Get('/fecha/date')
    async findAllFromDate(@Query('fechaInicio') fechaInicio: Date,
        @Query('fechaFin') fechaFin: Date,
        @Query('accion') accion: string) {
        return this.auditoriaRegistroService.findAllFromDate(fechaInicio,fechaFin,accion);
    }

}
