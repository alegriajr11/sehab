import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioQuimioterapiaService } from './criterio_quimioterapia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioQuimioterapiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/quimioterapia_dto/criterio_quimioterapia.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterio-quimioterapia')
export class CriterioQuimioterapiaController {

    constructor(
        private readonly criterioQuimioterapiaService: CriterioQuimioterapiaService) { }

    //OBTENER CRITERIO QUIMIOTERAPIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioQuimioterapiaService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO QUIMIOTERAPIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioQuimioterapiaDto) {
        return this.criterioQuimioterapiaService.create(id, dto);
    }

    //ELIMINAR CRITERIO  QUIMIOTERAPIA
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioQuimioterapiaService.delete(id);
    }
}
