import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriterioTerapiasService } from './criterio_terapias.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-terapias')
export class CriterioTerapiasController {

    constructor(
        private readonly criterioTerapiasService: CriterioTerapiasService){}
    
        //OBTENER CRITERIO TERAPIAS POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioTerapiasService.getCriterioForEstandar(id)
        }
}
