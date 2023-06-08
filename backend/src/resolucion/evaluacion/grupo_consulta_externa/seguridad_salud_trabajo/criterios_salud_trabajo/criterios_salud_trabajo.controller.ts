import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosSaludTrabajoService } from './criterios_salud_trabajo.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioSaludTrabajoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/seguridad_salud_trabajo_dto/criterios_salud_trabajo.dto';

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
}
