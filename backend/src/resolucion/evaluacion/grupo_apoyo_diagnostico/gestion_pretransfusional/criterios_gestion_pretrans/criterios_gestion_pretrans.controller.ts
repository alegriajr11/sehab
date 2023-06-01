import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosGestionPretransService } from './criterios_gestion_pretrans.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-gestion-pretrans')
export class CriteriosGestionPretransController {

    constructor(private readonly criteriosGestionPretransService: CriteriosGestionPretransService){}
    //OBTENER CRITERIO GESTION PRETRANSFUNCIONAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosGestionPretransService.getCriterioForEstandar(id)
    }
}
