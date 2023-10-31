import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CalificacionipsAjusteService } from './calificacionips_ajuste.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CalificacionAjusteDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionajuste.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

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
    async update(@Param('id', ParseIntPipe) id: number, @Body()payload: { dto: CalificacionAjusteDto, tokenDto: TokenDto}) {
        const { dto, tokenDto } = payload;
        return await this.calificacionipsAjusteService.update(id, payload);
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
    async create(
    @Body()payload: { dto: CalificacionAjusteDto, tokenDto: TokenDto}   ) {
        const { dto, tokenDto } = payload;
        return await this.calificacionipsAjusteService.create(payload);
    }

    //lista las calificaciones con sus criterios
    @Get('calificacion/evaluacion/acta')
    async getcalcri(@Query('evips_id') evips_id: number,
    @Query('act_id') act_id: number) {
        return await this.calificacionipsAjusteService.getallCalCrixEva(evips_id, act_id);
    }
}
