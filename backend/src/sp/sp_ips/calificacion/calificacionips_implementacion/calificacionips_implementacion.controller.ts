import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CalificacionipsImplementacionService } from './calificacionips_implementacion.service';
import { CalificacionImpleDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionimplementacion.dto';

@Controller('calificacionips-implementacion')
export class CalificacionipsImplementacionController {

    constructor(private readonly calificacionipsImplementacionService: CalificacionipsImplementacionService) {
    }

    //listar calificaciones por criterio
    //@UseGuards(JwtAuthGuard)
    @Get('/criterio/:id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsImplementacionService.findByCri(id);
    }

    //listar una calificacion
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneAjuste(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsImplementacionService.findByCal(id);
    }

    //actualizar calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CalificacionImpleDto) {
        return await this.calificacionipsImplementacionService.update(id, dto);
    }

    //eliminar calificacion
    //@UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsImplementacionService.delete(id);
    }

    //creacion de la calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Post('calificacion/:id')
    async create(@Param('id') id: number, @Body() dto: CalificacionImpleDto) {
        return await this.calificacionipsImplementacionService.create(id, dto);
    }
}
