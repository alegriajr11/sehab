import { Controller, Get, Param, ParseIntPipe, UseGuards  } from '@nestjs/common';
import { CriteriosExtGeneralService } from './criterios_ext_general.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-ext-general')
export class CriteriosExtGeneralController {

    constructor(
        private readonly criteriosExtGeneralService: CriteriosExtGeneralService){}
    
        //OBTENER CRITERIO EXTERNA GENERAL POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosExtGeneralService.getCriterioForEstandar(id)
        }
}
