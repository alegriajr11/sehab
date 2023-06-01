import { Controller , Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosExtEspecializadaService } from './criterios_ext_especializada.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-ext-especializada')
export class CriteriosExtEspecializadaController {


    constructor(
        private readonly criteriosExtEspecializadaService: CriteriosExtEspecializadaService){}
    
        //OBTENER CRITERIO CONSULTA EXTERNA POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosExtEspecializadaService.getCriterioForEstandar(id)
        }
}
