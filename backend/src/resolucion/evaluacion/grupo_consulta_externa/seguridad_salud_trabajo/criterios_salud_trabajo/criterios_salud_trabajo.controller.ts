import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosSaludTrabajoService } from './criterios_salud_trabajo.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioSaludTrabajoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/seguridad_salud_trabajo_dto/criterios_salud_trabajo.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-salud-trabajo')
export class CriteriosSaludTrabajoController {

    constructor(
        private readonly criteriosSaludTrabajoService: CriteriosSaludTrabajoService) { }

    //OBTENER CRITERIO SEGURIDAD SALUD TRABAJO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosSaludTrabajoService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO SEGURIDAD Y SALUD EN EL TRABAJO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioSaludTrabajoDto) {
        return this.criteriosSaludTrabajoService.create(id, dto);
    }

    //ELIMINAR CRITERIO SEGURIDAD Y SALUD EN EL TRABAJO 
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosSaludTrabajoService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO  SEGURIDAD Y SALUD EN EL TRABAJO 
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioSaludTrabajoDto) {
        return await this.criteriosSaludTrabajoService.updateSaludTrab(id, dto);
    }
}
