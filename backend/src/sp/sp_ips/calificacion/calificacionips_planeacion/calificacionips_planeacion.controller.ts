import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CalificacionipsPlaneacionService } from './calificacionips_planeacion.service';
import { CalificacionPlaneacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionplaneacion.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

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
    async update(@Param('id', ParseIntPipe) id: number, @Body()payload: { dto: CalificacionPlaneacionDto, tokenDto: TokenDto}) {
        const { dto, tokenDto } = payload;
        return await this.calificacionipsPlaneacionService.update(id, payload);
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
    async create(
    @Body()payload: { dto: CalificacionPlaneacionDto, tokenDto: TokenDto}   ) {
        const { dto, tokenDto } = payload;
        return await this.calificacionipsPlaneacionService.create(payload);
    }

    //lista las calificaciones con sus criterios
    @Get('calificacion/evaluacion/acta')
    async getcalcri(@Query('evips_id') evips_id: number,
    @Query('act_id') act_id: number) {
        return await this.calificacionipsPlaneacionService.getallCalCrixEva(evips_id, act_id);
    }
}
