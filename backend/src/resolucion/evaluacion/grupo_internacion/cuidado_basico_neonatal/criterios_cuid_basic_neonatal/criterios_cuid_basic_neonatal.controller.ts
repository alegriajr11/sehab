import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosCuidBasicNeonatalService } from './criterios_cuid_basic_neonatal.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cuid-basic-neonatal')
export class CriteriosCuidBasicNeonatalController {

    constructor(
        private readonly criteriosCuidBasicNeonatalService: CriteriosCuidBasicNeonatalService){}
    

        //OBTENER CRITERIO CUIDADO BASICO NEONATAL POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCuidBasicNeonatalService.getCriterioForEstandar(id)
        }
}
