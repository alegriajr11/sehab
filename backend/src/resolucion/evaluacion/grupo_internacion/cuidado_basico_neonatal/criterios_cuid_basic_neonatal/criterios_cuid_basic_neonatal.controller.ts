import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCuidBasicNeonatalService } from './criterios_cuid_basic_neonatal.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCuidBasNeonatalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_basico_neonatal_dto/criterio_cuid_basic_neonatal.dto';

@Controller('criterios-cuid-basic-neonatal')
export class CriteriosCuidBasicNeonatalController {

    constructor(
        private readonly criteriosCuidBasicNeonatalService: CriteriosCuidBasicNeonatalService) { }


    //OBTENER CRITERIO CUIDADO BASICO NEONATAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidBasicNeonatalService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO CUIDADO BASICO NEO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidBasNeonatalDto) {
        return this.criteriosCuidBasicNeonatalService.create(id, dto);
    }
}
