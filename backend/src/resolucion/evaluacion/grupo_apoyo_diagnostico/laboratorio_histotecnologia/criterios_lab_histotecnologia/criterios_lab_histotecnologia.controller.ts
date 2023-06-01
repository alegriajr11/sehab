import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosLabHistotecnologiaService } from './criterios_lab_histotecnologia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

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
}
