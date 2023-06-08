import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCuidIntensAdultoService } from './criterios_cuid_intens_adulto.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCuidIntensAdultoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intensivo_adulto_dto/criterio_cuid_intens_adulto.dto';

@Controller('criterios-cuid-intens-adulto')
export class CriteriosCuidIntensAdultoController {

    constructor(
        private readonly criteriosCuidIntensAdultoService: CriteriosCuidIntensAdultoService) { }


    //OBTENER CRITERIO CUIDADO INTENSIVO ADULTO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidIntensAdultoService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO CUIDADO INTENSIVO ADULTO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidIntensAdultoDto) {
        return this.criteriosCuidIntensAdultoService.create(id, dto);
    }
}
