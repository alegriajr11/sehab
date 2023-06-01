import { Controller, Get, Param, ParseIntPipe, UseGuards   } from '@nestjs/common';
import { CriteriosCirugiaService } from './criterios_cirugia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cirugia')
export class CriteriosCirugiaController {

    constructor(
        private readonly criteriosCirugiaService: CriteriosCirugiaService){}
    
        //OBTENER CRITERIO CIRUGIA POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCirugiaService.getCriterioForEstandar(id)
        }
}
