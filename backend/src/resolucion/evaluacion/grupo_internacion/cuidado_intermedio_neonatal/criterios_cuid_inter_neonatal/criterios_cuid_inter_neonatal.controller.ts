import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosCuidInterNeonatalService } from './criterios_cuid_inter_neonatal.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cuid-inter-neonatal')
export class CriteriosCuidInterNeonatalController {

    constructor(
        private readonly criteriosCuidInterNeonatalService: CriteriosCuidInterNeonatalService){}
    

        //OBTENER CRITERIO CUIDADO INTERMEDIO NEONATAL POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCuidInterNeonatalService.getCriterioForEstandar(id)
        }
}
