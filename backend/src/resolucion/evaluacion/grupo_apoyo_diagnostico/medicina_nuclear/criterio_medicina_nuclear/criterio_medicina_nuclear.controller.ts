import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioMedicinaNuclearService } from './criterio_medicina_nuclear.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioMedicinaNuclearDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/medicina_nuclear_dto/criterio_medicina_nuclear.dto';

@Controller('criterio-medicina-nuclear')
export class CriterioMedicinaNuclearController {

    constructor(
        private readonly criterioMedicinaNuclearService: CriterioMedicinaNuclearService) { }

    //OBTENER CRITERIO MEDICINA NUCLEAR POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioMedicinaNuclearService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO MEDICINA NUCLEAR POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioMedicinaNuclearDto) {
        return this.criterioMedicinaNuclearService.create(id, dto);
    }
}
