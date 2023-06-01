import { Controller, Get, Param, ParseIntPipe, UseGuards  } from '@nestjs/common';
import { CriteriosHemodIntervenService } from './criterios_hemod_interven.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-hemod-interven')
export class CriteriosHemodIntervenController {

    constructor(private readonly criteriosHemodIntervenService: CriteriosHemodIntervenService){}

    //OBTENER CRITERIO HEMODINAMIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHemodIntervenService.getCriterioForEstandar(id)
    }
}
