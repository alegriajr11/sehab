import { Body, Controller, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CalificacionindService } from './calificacionind.service';
import { calificacionindDto } from '../dto/calificacionind.dto';

@Controller('calificacionind')
export class CalificacionindController {

    constructor(private readonly calificacionindService: CalificacionindService) {
    }

    //CREAR CALIFIUCACION
    @Post()
    async create(@Query('eva_id') eva_id: number,
    @Query('cri_id') cri_id: number, @Body() dto: calificacionindDto) {

        return this.calificacionindService.create(eva_id,cri_id, dto);
    }
}
