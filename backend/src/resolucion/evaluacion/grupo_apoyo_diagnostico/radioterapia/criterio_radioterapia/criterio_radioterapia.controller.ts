import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioRadioterapiaService } from './criterio_radioterapia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioRadioterapiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/radioterapia_dto/criterio_radioterapia.dto';

@Controller('criterio-radioterapia')
export class CriterioRadioterapiaController {

    constructor(
        private readonly criterioRadioterapiaService: CriterioRadioterapiaService) { }

    //OBTENER CRITERIO RADIOTERAPIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioRadioterapiaService.getCriterioForEstandar(id)
    }



    //CREAR CRITERIO RADIOTERAPIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioRadioterapiaDto) {
        return this.criterioRadioterapiaService.create(id, dto);
    }
}
