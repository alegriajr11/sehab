import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosMuesCuelloService } from './criterios_mues_cuello.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-mues-cuello')
export class CriteriosMuesCuelloController {

    constructor(
        private readonly criteriosMuesCuelloService: CriteriosMuesCuelloService){}
    
            //OBTENER CRITERIO TOMA MUESTRAS CUELLO UTERINO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosMuesCuelloService.getCriterioForEstandar(id)
        }
}
