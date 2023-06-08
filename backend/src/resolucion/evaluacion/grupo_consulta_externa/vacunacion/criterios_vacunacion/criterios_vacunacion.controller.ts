import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosVacunacionService } from './criterios_vacunacion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioVacunacionDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/vacunacion_dto/criterio_vacunacion.dto';

@Controller('criterios-vacunacion')
export class CriteriosVacunacionController {

    constructor(
        private readonly criteriosVacunacionService: CriteriosVacunacionService) { }

    //OBTENER CRITERIO VACUNACION POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosVacunacionService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO VACUNACION POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioVacunacionDto) {
        return this.criteriosVacunacionService.create(id, dto);
    }
}
