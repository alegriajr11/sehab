import { Controller, Get, Param, ParseIntPipe, UseGuards   } from '@nestjs/common';
import { CriterioRadioterapiaService } from './criterio_radioterapia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-radioterapia')
export class CriterioRadioterapiaController {

    constructor(
        private readonly criterioRadioterapiaService: CriterioRadioterapiaService){}
        
        //OBTENER CRITERIO RADIOTERAPIA POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioRadioterapiaService.getCriterioForEstandar(id)
        }
}
