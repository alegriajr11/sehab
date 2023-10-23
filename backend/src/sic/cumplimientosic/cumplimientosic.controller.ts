import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CumplimientoSicDto } from 'src/usuario/dto/Sic/cumplimientosic.dto';
import { CumplimientosicService } from './cumplimientosic.service';

@Controller('cumplimientosic')
export class CumplimientosicController {

    constructor(private readonly cumplimientosicService: CumplimientosicService) {
    }

    //CREAR CUMPLIMIENTO
    @Post()
    async create(@Query('eva_id') eva_id: number,
        @Query('cri_id') cri_id: number,
        @Query('ind_id') ind_id: string, @Body() dto: CumplimientoSicDto) {

        return this.cumplimientosicService.create(eva_id, cri_id, ind_id, dto);
    }

    //OBTENER CRITERIO Y CALIFICACION POR EVALUACION
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getevaluacion(@Param('id', ParseIntPipe) id: number) {
        return await this.cumplimientosicService.getCriCalIdeva(id)
    }

    //OBTENER CRITERIO Y CALIFICACION POR EVALUACION
    //@UseGuards(JwtAuthGuard)
    @Get('/cumpliestandar/:id')
    async getcumpliestandar(@Param('id', ParseIntPipe) id: number) {
        return await this.cumplimientosicService.getcumpliestandar(id)
    }

    @Get('cumplimiento/cumplesic/:id')
    async getcumplesic(@Param('id', ParseIntPipe) id: number) {
        return await this.cumplimientosicService.getCriCalIdeva(id)
    }

    //ACTUALIZAR UN CRITERIO  EXTERNA ESPECIALIZADA


    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CumplimientoSicDto) {
        return await this.cumplimientosicService.edit(id,dto);
    }
}
