import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosCuidIntensPediatricoService } from './criterios_cuid_intens_pediatrico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioCuidIntePediatricoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intensivo_pediatrico_dto/criterio_cuid_intens_pediatrico.dto';

@Controller('criterios-cuid-intens-pediatrico')
export class CriteriosCuidIntensPediatricoController {

    constructor(
        private readonly criteriosCuidIntensPediatricoService: CriteriosCuidIntensPediatricoService) { }

    //OBTENER CRITERIO CUIDADO INTENSIVO PEDIATRICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosCuidIntensPediatricoService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO CUIDADO INTENSIVA PEDIATRICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioCuidIntePediatricoDto) {
        return this.criteriosCuidIntensPediatricoService.create(id, dto);
    }
}
