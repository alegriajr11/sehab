import { Controller, Get, Param, ParseIntPipe, UseGuards  } from '@nestjs/common';
import { CriteriosVacunacionService } from './criterios_vacunacion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-vacunacion')
export class CriteriosVacunacionController {

    constructor(
        private readonly criteriosVacunacionService: CriteriosVacunacionService){}
    
        //OBTENER CRITERIO VACUNACION POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosVacunacionService.getCriterioForEstandar(id)
        }
}
