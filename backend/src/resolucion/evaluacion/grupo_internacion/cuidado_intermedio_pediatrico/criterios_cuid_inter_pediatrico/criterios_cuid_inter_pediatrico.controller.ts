import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosCuidInterPediatricoService } from './criterios_cuid_inter_pediatrico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cuid-inter-pediatrico')
export class CriteriosCuidInterPediatricoController {

    
    constructor(
        private readonly criteriosCuidInterPediatricoService: CriteriosCuidInterPediatricoService){}
    

        //OBTENER CRITERIO CUIDADO INTERMEDIO PEDIATRICO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCuidInterPediatricoService.getCriterioForEstandar(id)
        }
}
