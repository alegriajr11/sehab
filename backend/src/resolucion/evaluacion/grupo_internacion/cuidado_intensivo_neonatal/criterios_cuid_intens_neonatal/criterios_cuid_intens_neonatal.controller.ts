import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosCuidIntensNeonatalService } from './criterios_cuid_intens_neonatal.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cuid-intens-neonatal')
export class CriteriosCuidIntensNeonatalController {

    constructor(
        private readonly criteriosCuidIntensNeonatalService: CriteriosCuidIntensNeonatalService){}
    

        //OBTENER CRITERIO CUIDADO INTENSICO NEONATAL POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCuidIntensNeonatalService.getCriterioForEstandar(id)
        }
}
