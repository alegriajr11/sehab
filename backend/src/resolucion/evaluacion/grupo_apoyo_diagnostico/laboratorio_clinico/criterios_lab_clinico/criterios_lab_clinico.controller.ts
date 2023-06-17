import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriteriosLabClinicoService } from './criterios_lab_clinico.service';
import { CriterioLabClinicoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/laboratorio_clinico_dto/criterio_lab_clinico.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-lab-clinico')
export class CriteriosLabClinicoController {

    constructor(

        private readonly criteriosLabClinicoService: CriteriosLabClinicoService) { }

    //OBTENER CRITERIO LABORATORIO CLINICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabClinicoService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO LABORATORIO CLINICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioLabClinicoDto) {
        return this.criteriosLabClinicoService.create(id, dto);
    }

    //ELIMINAR CRITERIO  LAB CLINICO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabClinicoService.delete(id);
    }
}
