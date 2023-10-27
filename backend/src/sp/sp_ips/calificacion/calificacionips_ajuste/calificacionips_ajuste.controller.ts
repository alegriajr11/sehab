import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CalificacionipsAjusteService } from './calificacionips_ajuste.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CalificacionAjusteDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionajuste.dto';

@Controller('calificacionips-ajuste')
export class CalificacionipsAjusteController {

    constructor(private readonly calificacionipsAjusteService: CalificacionipsAjusteService) {
    }

     //listar calificaciones por criterio
    //@UseGuards(JwtAuthGuard)
    @Get('/criterio/:id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsAjusteService.findByCri(id);
    }

    //listar una calificacion
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneAjuste(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsAjusteService.findByCal(id);
    }

    //actualizar calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CalificacionAjusteDto) {
        return await this.calificacionipsAjusteService.update(id, dto);
    }

    //eliminar calificacion
    //@UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsAjusteService.delete(id);
    }

    //creacion de la calificacion
    //@UseGuards(JwtAuthGuard)
    //@UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Post('calificacion/:id')
    async create(@Param('id') id: number, @Body() dto: CalificacionAjusteDto) {
        return await this.calificacionipsAjusteService.create(id, dto);
    }

    @Get('/criterio/calificacion/:id')
    async getcalcri(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionipsAjusteService.getallCalCrixEva(id);
    }
}
