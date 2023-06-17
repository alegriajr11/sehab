import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosPatologiaService } from './criterios_patologia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioPatologiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/patologia_dto/criterio_patologia.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-patologia')
export class CriteriosPatologiaController {

    constructor(
        private readonly criteriosPatologiaService: CriteriosPatologiaService) { }

    //OBTENER CRITERIO PATOLOGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosPatologiaService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO PATOLOGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioPatologiaDto) {
        return this.criteriosPatologiaService.create(id, dto);
    }

    //ELIMINAR CRITERIO  PATOLOGIA
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosPatologiaService.delete(id);
    }
}
