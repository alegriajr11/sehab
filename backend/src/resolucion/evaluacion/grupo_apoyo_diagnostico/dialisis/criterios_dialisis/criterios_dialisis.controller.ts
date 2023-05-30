import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosDialisisService } from './criterios_dialisis.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-dialisis')
export class CriteriosDialisisController {

    constructor(private readonly criterioDialisisService: CriteriosDialisisService) { }


    //OBTENER CRITERIO DIALISIS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioDialisisService.getCriterioForEstandar(id)
    }

    

}
