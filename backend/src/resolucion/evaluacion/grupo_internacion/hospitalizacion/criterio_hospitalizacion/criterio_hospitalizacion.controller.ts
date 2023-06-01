import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriterioHospitalizacionService } from './criterio_hospitalizacion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-hospitalizacion')
export class CriterioHospitalizacionController {

    constructor(
        private readonly criterioHospitalizacionService: CriterioHospitalizacionService){}
    
        //OBTENER CRITERIO HOSPITALIZACION POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioHospitalizacionService.getCriterioForEstandar(id)
        }
}
