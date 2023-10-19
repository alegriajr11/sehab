import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CalificacionindService } from './calificacionind.service';
import { calificacionindDto } from '../dto/calificacionind.dto';

@Controller('calificacionind')
export class CalificacionindController {

    constructor(private readonly calificacionindService: CalificacionindService) {
    }

    //CREAR CALIFICACION
    @Post()
    async create(@Query('eva_id') eva_id: number,
        @Query('cri_id') cri_id: number, @Body() dto: calificacionindDto) {

        return this.calificacionindService.create(eva_id, cri_id, dto);
    }

    //LISTAR TODOS LOS CRITERIOS CON EVALUACION 
    @Get('criid/evaluacion/:id')
    async getAllevaluacion(@Param('id', ParseIntPipe) id: number) {
        return await this.calificacionindService.getallcriterioetapa(id)
    }

}
