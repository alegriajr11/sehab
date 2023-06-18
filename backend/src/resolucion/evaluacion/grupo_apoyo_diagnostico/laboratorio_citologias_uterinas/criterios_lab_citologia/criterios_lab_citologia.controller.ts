import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosLabCitologiaService } from './criterios_lab_citologia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioLabUterinaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/laboratorio_citologias_uterinas_dto/criterio_lab_citologia_uterina.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-lab-citologia')
export class CriteriosLabCitologiaController {

    constructor(

        private readonly criteriosLabCitologiaService: CriteriosLabCitologiaService) { }

    //OBTENER CRITERIO DLAB CITOLOGIAS UTERINAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabCitologiaService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO LABORATORIO CITOLOGIAS UTERINAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioLabUterinaDto) {
        return this.criteriosLabCitologiaService.create(id, dto);
    }

    //ELIMINAR CRITERIO  CITOLOGIAS UTERINAS 
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabCitologiaService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO  CITOLOGIAS UTERINAS 
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioLabUterinaDto) {
        return await this.criteriosLabCitologiaService.updateLab_Ute(id, dto);
    }

}
