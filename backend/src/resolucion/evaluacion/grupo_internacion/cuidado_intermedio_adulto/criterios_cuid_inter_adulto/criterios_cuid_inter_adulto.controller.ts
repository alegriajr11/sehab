import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCuidInterAdultoService } from './criterios_cuid_inter_adulto.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCuidIntermAdultoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intermedio_adulto_dto/criterio_cuid_inter_adulto.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-cuid-inter-adulto')
export class CriteriosCuidInterAdultoController {

    constructor(
        private readonly criteriosCuidInterAdultoService: CriteriosCuidInterAdultoService) { }

    //OBTENER CRITERIO CUIDADO INTERMEDIO ADULTO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidInterAdultoService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO CUIDADO INTERMEDIO ADULTO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidIntermAdultoDto) {
        return this.criteriosCuidInterAdultoService.create(id, dto);
    }

    //ELIMINAR CRITERIO CUIDADO  INTERMEDIO ADULTO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidInterAdultoService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO CUIDADO INTENSIVO PEDIATRICO
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidIntermAdultoDto) {
        return await this.criteriosCuidInterAdultoService.updateinteradult(id, dto);
    }
}
