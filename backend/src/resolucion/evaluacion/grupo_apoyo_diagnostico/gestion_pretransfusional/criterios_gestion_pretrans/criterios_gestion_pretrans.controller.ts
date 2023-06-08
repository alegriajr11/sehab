import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosGestionPretransService } from './criterios_gestion_pretrans.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioGestionPretransfusionalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/gestion_pretransfusional_dto/criterio_gestion_pretrans.dto';

@Controller('criterios-gestion-pretrans')
export class CriteriosGestionPretransController {

    constructor(private readonly criteriosGestionPretransService: CriteriosGestionPretransService) { }
    //OBTENER CRITERIO GESTION PRETRANSFUNCIONAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosGestionPretransService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO GESTION PRETRANSFUNSIONAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioGestionPretransfusionalDto) {
        return this.criteriosGestionPretransService.create(id, dto);
    }
}
