import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosCuidIntensPediatricoService } from './criterios_cuid_intens_pediatrico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cuid-intens-pediatrico')
export class CriteriosCuidIntensPediatricoController {

    constructor(
        private readonly criteriosCuidIntensPediatricoService: CriteriosCuidIntensPediatricoService){}
    
            //OBTENER CRITERIO CUIDADO INTENSIVO PEDIATRICO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCuidIntensPediatricoService.getCriterioForEstandar(id)
        }
}
