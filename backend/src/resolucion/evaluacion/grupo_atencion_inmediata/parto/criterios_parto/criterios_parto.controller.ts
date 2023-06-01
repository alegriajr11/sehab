import { Controller , Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriteriosPartoService } from './criterios_parto.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-parto')
export class CriteriosPartoController {

    constructor(
        private readonly criteriosPartoService: CriteriosPartoService){}
    
        //OBTENER CRITERIO PARTO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosPartoService.getCriterioForEstandar(id)
        }
}
