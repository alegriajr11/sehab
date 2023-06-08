import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosLabHistotecnologiaService } from './criterios_lab_histotecnologia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioLabHistotecnologiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/laboratorio_histotecnologia_dto/criterio_lab_histotec.dto';

@Controller('criterios-lab-histotecnologia')
export class CriteriosLabHistotecnologiaController {
    constructor(
    private readonly criteriosLabHistotecnologiaService: CriteriosLabHistotecnologiaService){}

    //OBTENER CRITERIO LABORATORIO HISTOTECNOLOGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabHistotecnologiaService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO LABORATORIO HISTOTECNOLOGIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioLabHistotecnologiaDto){
        return this.criteriosLabHistotecnologiaService.create(id,dto);
    }
}
