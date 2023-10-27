import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CalificacionipsPlaneacionService } from './calificacionips_planeacion.service';
import { CalificacionPlaneacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionplaneacion.dto';

@Controller('calificacionips-planeacion')
export class CalificacionipsPlaneacionController {

    constructor(private readonly calificacionipsPlaneacionService: CalificacionipsPlaneacionService) {
    }

     //listar calificaciones por criterio
    //@UseGuards(JwtAuthGuard)
    @Get('/criterio/:id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsPlaneacionService.findByCri(id);
    }

    //listar una calificacion
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneAjuste(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsPlaneacionService.findByCal(id);
    }

    //actualizar calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CalificacionPlaneacionDto) {
        return await this.calificacionipsPlaneacionService.update(id, dto);
    }

    //eliminar calificacion
    //@UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsPlaneacionService.delete(id);
    }

    //creacion de la calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Post('calificacion/:id')
    async create(@Param('id') id: number, @Body() dto: CalificacionPlaneacionDto) {
        return await this.calificacionipsPlaneacionService.create(id, dto);
    }

    @Get('/criterio/calificacion/:id')
    async getcalcri(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsPlaneacionService.getallCalCrixEva(id);
    }
}
