import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosHospPacienteCronicoService } from './criterios_hosp_paciente_cronico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-hosp-paciente-cronico')
export class CriteriosHospPacienteCronicoController {
    constructor(
        private readonly criteriosHospPacienteCronicoService: CriteriosHospPacienteCronicoService){}
    
        //OBTENER CRITERIO HOSPITALIZACION PACIENTE CRONICO  POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosHospPacienteCronicoService.getCriterioForEstandar(id)
        }
}
