import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCuidInterNeonatalService } from './criterios_cuid_inter_neonatal.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCuidIntermNeonatalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intermedio_neonatal_dto/criterio_cuid_inter_neonatal.dto';

@Controller('criterios-cuid-inter-neonatal')
export class CriteriosCuidInterNeonatalController {

    constructor(
        private readonly criteriosCuidInterNeonatalService: CriteriosCuidInterNeonatalService) { }


    //OBTENER CRITERIO CUIDADO INTERMEDIO NEONATAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidInterNeonatalService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO CUIDADO INTERMEDIO NEONATAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidIntermNeonatalDto) {
        return this.criteriosCuidInterNeonatalService.create(id, dto);
    }
}
