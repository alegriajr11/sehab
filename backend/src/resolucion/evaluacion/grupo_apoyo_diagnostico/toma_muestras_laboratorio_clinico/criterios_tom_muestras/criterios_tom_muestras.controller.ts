import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosTomMuestrasService } from './criterios_tom_muestras.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioMuestraLabClinicoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/toma_muestras_laboratorio_clinico_dto/criterio_tom_muestras.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-tom-muestras')
export class CriteriosTomMuestrasController {

    constructor(
        private readonly criteriosTomMuestrasService: CriteriosTomMuestrasService) { }

    //OBTENER CRITERIO TOMA MUESTRAS LABORATORIO CLINICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosTomMuestrasService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO TOMA MUESTRA LAB CLINICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioMuestraLabClinicoDto) {
        return this.criteriosTomMuestrasService.create(id, dto);
    }

    //ELIMINAR CRITERIO  TOMA MUESTAS CUELLO UTERINO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosTomMuestrasService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO   TOMA MUESTAS CUELLO UTERINO
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioMuestraLabClinicoDto) {
        return await this.criteriosTomMuestrasService.updateTomaMues(id, dto);
    }
}
