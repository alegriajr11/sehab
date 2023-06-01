import { Controller, Get, Param, ParseIntPipe, UseGuards  } from '@nestjs/common';
import { CriteriosHospParcialService } from './criterios_hosp_parcial.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-hosp-parcial')
export class CriteriosHospParcialController {

    constructor(
        private readonly criteriosHospParcialService: CriteriosHospParcialService){}
    
        //OBTENER CRITERIO HOSPITALIZACION PARCIAL POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosHospParcialService.getCriterioForEstandar(id)
        }
}
