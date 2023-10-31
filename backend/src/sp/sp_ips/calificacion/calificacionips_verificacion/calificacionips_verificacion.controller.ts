import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CalificacionipsVerificacionService } from './calificacionips_verificacion.service';
import { CalificacionVerificacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionverificacion.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

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
    async update(@Param('id', ParseIntPipe) id: number, @Body()payload: { dto: CalificacionVerificacionDto, tokenDto: TokenDto}) {
        const { dto, tokenDto } = payload;
        return await this.calificacionipsVerificacionService.update(id, payload);
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
    async create(
    @Body()payload: { dto: CalificacionVerificacionDto, tokenDto: TokenDto}   ) {
        const { dto, tokenDto } = payload;
        return await this.calificacionipsVerificacionService.create(payload);
    }

    //lista las calificaciones con sus criterios
    @Get('calificacion/evaluacion/acta')
    async getcalcri(@Query('evips_id') evips_id: number,
    @Query('act_id') act_id: number) {
        return await this.calificacionipsVerificacionService.getallCalCrixEva(evips_id, act_id);
    }
}
