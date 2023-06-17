import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCuidInterPediatricoService } from './criterios_cuid_inter_pediatrico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCuidIntermPediatricoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intermedio_pediatrico_dto/criterio_cuid_inter_pediatrico.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-cuid-inter-pediatrico')
export class CriteriosCuidInterPediatricoController {


    constructor(
        private readonly criteriosCuidInterPediatricoService: CriteriosCuidInterPediatricoService) { }


    //OBTENER CRITERIO CUIDADO INTERMEDIO PEDIATRICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidInterPediatricoService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO CUIDADO INTERMEDIO PEDIATRICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidIntermPediatricoDto) {
        return this.criteriosCuidInterPediatricoService.create(id, dto);
    }

    //ELIMINAR CRITERIO CUIDADO  INTERMEDIO PEDIATRICO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidInterPediatricoService.delete(id);
    }
}
