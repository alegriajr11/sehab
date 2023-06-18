import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioTerapiasService } from './criterio_terapias.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioTerapiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/terapias_dto/criterios_terapias.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterio-terapias')
export class CriterioTerapiasController {

    constructor(
        private readonly criterioTerapiasService: CriterioTerapiasService) { }

    //OBTENER CRITERIO TERAPIAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioTerapiasService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO TERAPIAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioTerapiaDto) {
        return this.criterioTerapiasService.create(id, dto);
    }

    //ELIMINAR CRITERIO  TERAPIAS
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioTerapiasService.delete(id);
    }
    
    //ACTUALIZAR UN CRITERIO   TERAPIAS
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioTerapiaDto) {
        return await this.criterioTerapiasService.updateTerapia(id, dto);
    }
}
