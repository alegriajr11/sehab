import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosVacunacionService } from './criterios_vacunacion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioVacunacionDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/vacunacion_dto/criterio_vacunacion.dto';
import { RolesGuard } from 'src/guards/rol.guard';

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

    //ELIMINAR CRITERIO VACUNACION
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosVacunacionService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO VACUNACION
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioVacunacionDto) {
        return await this.criteriosVacunacionService.updateVacuna(id, dto);
    }
}
