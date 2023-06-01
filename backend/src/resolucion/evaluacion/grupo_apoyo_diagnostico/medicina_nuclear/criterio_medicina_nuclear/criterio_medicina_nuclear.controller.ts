import { Controller , Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriterioMedicinaNuclearService } from './criterio_medicina_nuclear.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-medicina-nuclear')
export class CriterioMedicinaNuclearController {

    constructor(
        private readonly criterioMedicinaNuclearService: CriterioMedicinaNuclearService){}
    
        //OBTENER CRITERIO MEDICINA NUCLEAR POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioMedicinaNuclearService.getCriterioForEstandar(id)
        }
}
