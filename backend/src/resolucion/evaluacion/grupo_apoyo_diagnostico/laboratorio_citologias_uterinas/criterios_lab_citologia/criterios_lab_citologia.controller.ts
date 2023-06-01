import { Controller , Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriteriosLabCitologiaService } from './criterios_lab_citologia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-lab-citologia')
export class CriteriosLabCitologiaController {

    constructor(

        private readonly criteriosLabCitologiaService: CriteriosLabCitologiaService){}

    //OBTENER CRITERIO DLAB CITOLOGIAS UTERINAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabCitologiaService.getCriterioForEstandar(id)
    }
}
