import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosPartoService } from './criterios_parto.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioPartoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/parto_dto/criterio_parto.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-parto')
export class CriteriosPartoController {

    constructor(
        private readonly criteriosPartoService: CriteriosPartoService) { }

    //OBTENER CRITERIO PARTO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosPartoService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO PARTO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioPartoDto) {
        return this.criteriosPartoService.create(id, dto);
    }

    //ELIMINAR CRITERIO  TOMA MUESTAS CUELLO UTERINO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosPartoService.delete(id);
    }
}
