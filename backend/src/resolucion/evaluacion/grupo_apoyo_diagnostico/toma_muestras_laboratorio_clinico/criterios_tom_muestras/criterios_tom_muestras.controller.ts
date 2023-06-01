import { Controller , Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriteriosTomMuestrasService } from './criterios_tom_muestras.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-tom-muestras')
export class CriteriosTomMuestrasController {

    constructor(
        private readonly criteriosTomMuestrasService: CriteriosTomMuestrasService){}
    
        //OBTENER CRITERIO TOMA MUESTRAS LABORATORIO CLINICO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosTomMuestrasService.getCriterioForEstandar(id)
        }
}
