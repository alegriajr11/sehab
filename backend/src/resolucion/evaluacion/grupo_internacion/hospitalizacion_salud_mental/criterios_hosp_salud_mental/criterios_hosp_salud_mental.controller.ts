import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriterioHospitalizacionService } from '../../hospitalizacion/criterio_hospitalizacion/criterio_hospitalizacion.service';
import { CriteriosHospSaludMentalService } from './criterios_hosp_salud_mental.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-hosp-salud-mental')
export class CriteriosHospSaludMentalController {

    constructor(
        private readonly criteriosHospSaludMentalService: CriteriosHospSaludMentalService){}
    
        //OBTENER CRITERIO HOSPITALIZACION SALUD MENTAL POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosHospSaludMentalService.getCriterioForEstandar(id)
        }
}

