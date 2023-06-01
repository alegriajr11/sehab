import { Controller, Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriteriosCuidInterAdultoService } from './criterios_cuid_inter_adulto.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cuid-inter-adulto')
export class CriteriosCuidInterAdultoController {

    constructor(
        private readonly criteriosCuidInterAdultoService: CriteriosCuidInterAdultoService){}
    
        //OBTENER CRITERIO CUIDADO INTERMEDIO ADULTO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosCuidInterAdultoService.getCriterioForEstandar(id)
        }
}
