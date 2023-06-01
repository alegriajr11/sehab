import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriterioServiciosService } from './criterio_servicios.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-servicios')
export class CriterioServiciosController {

    constructor(
        private readonly criterioServiciosService: CriterioServiciosService){}
    
        //OBTENER CRITERIO TODOS LOS SERVICIOS POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioServiciosService.getCriterioForEstandar(id)
        }
}
