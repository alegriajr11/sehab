import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCirugiaService } from './criterios_cirugia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCirugiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_quirurgico_dtos/cirugia_dto/criterio_cirugia.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-cirugia')
export class CriteriosCirugiaController {

    constructor(
        private readonly criteriosCirugiaService: CriteriosCirugiaService) { }

    //OBTENER CRITERIO CIRUGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCirugiaService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO CIRUGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCirugiaDto) {
        return this.criteriosCirugiaService.create(id, dto);
    }

    //ELIMINAR CRITERIO CIRUGIA
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCirugiaService.delete(id);
    }
}
