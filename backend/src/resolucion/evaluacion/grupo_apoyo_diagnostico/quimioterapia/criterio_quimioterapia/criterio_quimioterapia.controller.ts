import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriterioQuimioterapiaService } from './criterio_quimioterapia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-quimioterapia')
export class CriterioQuimioterapiaController {

    constructor(
        private readonly criterioQuimioterapiaService: CriterioQuimioterapiaService){}
        
        //OBTENER CRITERIO QUIMIOTERAPIA POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioQuimioterapiaService.getCriterioForEstandar(id)
        }
}
