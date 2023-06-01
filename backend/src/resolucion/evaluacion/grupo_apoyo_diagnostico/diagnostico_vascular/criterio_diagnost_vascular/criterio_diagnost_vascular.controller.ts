import { Controller, Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriterioDiagnostVascularService } from './criterio_diagnost_vascular.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';



@Controller('criterio-diagnost-vascular')
export class CriterioDiagnostVascularController {

    constructor(private readonly criterio_Diagnostico_vascularService: CriterioDiagnostVascularService){}
    //OBTENER CRITERIO DIAGNOSTICO VASCULAR POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterio_Diagnostico_vascularService.getCriterioForEstandar(id)
    }
}
