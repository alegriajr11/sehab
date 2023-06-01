import { Controller , Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriterioSFarmaceuticoService } from './criterio_s_farmaceutico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-s-farmaceutico')
export class CriterioSFarmaceuticoController {


    constructor(
        private readonly criterioSFarmaceuticoService: CriterioSFarmaceuticoService){}
    
        //OBTENER CRITERIO SERVICIO FARMACEUTICO POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criterioSFarmaceuticoService.getCriterioForEstandar(id)
        }
}
