import { Controller , Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriteriosPatologiaService } from './criterios_patologia.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-patologia')
export class CriteriosPatologiaController {

    constructor(
        private readonly criteriosPatologiaService: CriteriosPatologiaService){}
        
        //OBTENER CRITERIO PATOLOGIA POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosPatologiaService.getCriterioForEstandar(id)
        }
}
