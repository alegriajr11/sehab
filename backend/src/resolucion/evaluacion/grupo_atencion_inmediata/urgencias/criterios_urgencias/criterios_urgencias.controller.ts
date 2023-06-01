import { Controller, Get, Param, ParseIntPipe, UseGuards  } from '@nestjs/common';
import { CriteriosUrgenciasService } from './criterios_urgencias.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-urgencias')
export class CriteriosUrgenciasController {

    constructor(
        private readonly criteriosUrgenciasService: CriteriosUrgenciasService){}
    
        //OBTENER CRITERIO URGENCIAS POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosUrgenciasService.getCriterioForEstandar(id)
        }
}

