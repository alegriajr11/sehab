import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosCuidIntensAdultoService } from './criterios_cuid_intens_adulto.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cuid-intens-adulto')
export class CriteriosCuidIntensAdultoController {

    constructor(
        private readonly criteriosCuidIntensAdultoService: CriteriosCuidIntensAdultoService){}
    

        //OBTENER CRITERIO CUIDADO INTENSIVO ADULTO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCuidIntensAdultoService.getCriterioForEstandar(id)
        }
}
