import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioRadioOdontService } from './criterio_radio_odont.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioRadiologiaOdontoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/radiologia_odont_dto/criterio_radio_odont.dto';

@Controller('criterio-radio-odont')
export class CriterioRadioOdontController {

    constructor(
        private readonly criterioRadioOdontService: CriterioRadioOdontService) { }

    //OBTENER CRITERIO RADIOLOGIA ODONTO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioRadioOdontService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO RADIOLOGIA ODONTOLOGICA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioRadiologiaOdontoDto) {
        return this.criterioRadioOdontService.create(id, dto);
    }
}
