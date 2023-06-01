import { Controller, Get, Param, ParseIntPipe, UseGuards  } from '@nestjs/common';
import { CriterioRadioOdontService } from './criterio_radio_odont.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-radio-odont')
export class CriterioRadioOdontController {

    constructor(
        private readonly criterioRadioOdontService: CriterioRadioOdontService){}
    
        //OBTENER CRITERIO RADIOLOGIA ODONTO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioRadioOdontService.getCriterioForEstandar(id)
        }
}
