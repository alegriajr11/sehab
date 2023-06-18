import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosLabHistotecnologiaService } from './criterios_lab_histotecnologia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioLabHistotecnologiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/laboratorio_histotecnologia_dto/criterio_lab_histotec.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-lab-histotecnologia')
export class CriteriosLabHistotecnologiaController {
    constructor(
        private readonly criteriosLabHistotecnologiaService: CriteriosLabHistotecnologiaService) { }

    //OBTENER CRITERIO LABORATORIO HISTOTECNOLOGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabHistotecnologiaService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO LABORATORIO HISTOTECNOLOGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioLabHistotecnologiaDto) {
        return this.criteriosLabHistotecnologiaService.create(id, dto);
    }

    //ELIMINAR CRITERIO  LAB HISTOTECNOLOGIA
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabHistotecnologiaService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO  LAB CLINICO
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioLabHistotecnologiaDto) {
        return await this.criteriosLabHistotecnologiaService.updateLab_Histo(id, dto);
    }
}
