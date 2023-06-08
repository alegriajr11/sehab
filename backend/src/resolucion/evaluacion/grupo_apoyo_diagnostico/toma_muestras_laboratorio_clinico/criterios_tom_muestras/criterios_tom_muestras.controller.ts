import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosTomMuestrasService } from './criterios_tom_muestras.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioMuestraLabClinicoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/toma_muestras_laboratorio_clinico_dto/criterio_tom_muestras.dto';

@Controller('criterios-tom-muestras')
export class CriteriosTomMuestrasController {

    constructor(
        private readonly criteriosTomMuestrasService: CriteriosTomMuestrasService) { }

    //OBTENER CRITERIO TOMA MUESTRAS LABORATORIO CLINICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosTomMuestrasService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO TOMA MUESTRA LAB CLINICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioMuestraLabClinicoDto) {
        return this.criteriosTomMuestrasService.create(id, dto);
    }
}
