import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosConsPsicoactivasService } from './criterios_cons_psicoactivas.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-cons-psicoactivas')
export class CriteriosConsPsicoactivasController {

    constructor(
        private readonly criteriosConsPsicoactivasService: CriteriosConsPsicoactivasService){}
    
        //OBTENER CRITERIO CUIDADO BASICO PSICOACTIVAS POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosConsPsicoactivasService.getCriterioForEstandar(id)
        }
}