import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriteriosLabClinicoService } from './criterios_lab_clinico.service';

@Controller('criterios-lab-clinico')
export class CriteriosLabClinicoController {

    constructor(

        private readonly criteriosLabClinicoService: CriteriosLabClinicoService){}

    //OBTENER CRITERIO LABORATORIO CLINICO POR ESTANDAR
   @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosLabClinicoService.getCriterioForEstandar(id)
    }
}
