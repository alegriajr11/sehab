import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CalificacionipsVerificacionService } from './calificacionips_verificacion.service';
import { CalificacionVerificacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionverificacion.dto';

@Controller('calificacionips-verificacion')
export class CalificacionipsVerificacionController {

    constructor(private readonly calificacionipsVerificacionService: CalificacionipsVerificacionService) {
    }

     //listar calificaciones por criterio
    //@UseGuards(JwtAuthGuard)
    @Get('/criterio/:id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsVerificacionService.findByCri(id);
    }

    //listar una calificacion
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneAjuste(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsVerificacionService.findByCal(id);
    }

    //actualizar calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CalificacionVerificacionDto) {
        return await this.calificacionipsVerificacionService.update(id, dto);
    }

    //eliminar calificacion
    //@UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsVerificacionService.delete(id);
    }

    //creacion de la calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Post('calificacion/:id')
    async create(@Param('id') id: number, @Body() dto: CalificacionVerificacionDto) {
        return await this.calificacionipsVerificacionService.create(id, dto);
    }
}
