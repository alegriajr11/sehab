import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosSaludTrabajoService } from './criterios_salud_trabajo.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-salud-trabajo')
export class CriteriosSaludTrabajoController {

    constructor(
        private readonly criteriosSaludTrabajoService: CriteriosSaludTrabajoService){}
    
        //OBTENER CRITERIO SEGURIDAD SALUD TRABAJO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosSaludTrabajoService.getCriterioForEstandar(id)
        }
}
