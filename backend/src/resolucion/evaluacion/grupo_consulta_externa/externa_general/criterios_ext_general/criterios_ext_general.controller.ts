import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosExtGeneralService } from './criterios_ext_general.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioExternaGeneralDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/externa_general_dto/criterio_ext_general.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-ext-general')
export class CriteriosExtGeneralController {

    constructor(
        private readonly criteriosExtGeneralService: CriteriosExtGeneralService) { }

    //OBTENER CRITERIO EXTERNA GENERAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosExtGeneralService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO EXTERNA GENERAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioExternaGeneralDto) {
        return this.criteriosExtGeneralService.create(id, dto);
    }

    //ELIMINAR CRITERIO EXTERNA GENERAL 
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosExtGeneralService.delete(id);
    }
}
