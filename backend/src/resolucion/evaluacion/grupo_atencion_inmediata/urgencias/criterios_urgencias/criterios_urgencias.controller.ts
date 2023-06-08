import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosUrgenciasService } from './criterios_urgencias.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioUrgenciasDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/urgencias_dto/criterio_urgencias.dto';

@Controller('criterios-urgencias')
export class CriteriosUrgenciasController {

    constructor(
        private readonly criteriosUrgenciasService: CriteriosUrgenciasService) { }

    //OBTENER CRITERIO URGENCIAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosUrgenciasService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO URGENCIAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioUrgenciasDto) {
        return this.criteriosUrgenciasService.create(id, dto);
    }
}

