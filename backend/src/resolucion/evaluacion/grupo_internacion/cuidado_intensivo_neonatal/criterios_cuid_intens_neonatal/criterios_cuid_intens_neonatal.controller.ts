import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCuidIntensNeonatalService } from './criterios_cuid_intens_neonatal.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCuidInteNeonatalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intensivo_neonatal_dto/criterio_cuid_intens_neonatal.dto';

@Controller('criterios-cuid-intens-neonatal')
export class CriteriosCuidIntensNeonatalController {

    constructor(
        private readonly criteriosCuidIntensNeonatalService: CriteriosCuidIntensNeonatalService) { }


    //OBTENER CRITERIO CUIDADO INTENSICO NEONATAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidIntensNeonatalService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO CUIDADO INTENSIVO NEONATAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidInteNeonatalDto) {
        return this.criteriosCuidIntensNeonatalService.create(id, dto);
    }
}
