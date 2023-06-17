import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioSFarmaceuticoService } from './criterio_s_farmaceutico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioSerFarmaceuticoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/servicio_farmaceutico_dto/criterios_s_farmaceutico.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterio-s-farmaceutico')
export class CriterioSFarmaceuticoController {


    constructor(
        private readonly criterioSFarmaceuticoService: CriterioSFarmaceuticoService) { }

    //OBTENER CRITERIO SERVICIO FARMACEUTICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioSFarmaceuticoService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO SERVICIO FARMACEUTICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioSerFarmaceuticoDto) {
        return this.criterioSFarmaceuticoService.create(id, dto);
    }

    //ELIMINAR CRITERIO  SERVICIO FARMACEUTICO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioSFarmaceuticoService.delete(id);
    }
}
