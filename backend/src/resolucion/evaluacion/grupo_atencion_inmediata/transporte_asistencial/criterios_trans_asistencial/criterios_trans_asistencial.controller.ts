import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosTransAsistencialService } from './criterios_trans_asistencial.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-trans-asistencial')
export class CriteriosTransAsistencialController {

    constructor(
        private readonly criteriosTransAsistencialService: CriteriosTransAsistencialService){}
    
        //OBTENER CRITERIO TRASNPORTE ASISTENCIAL POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosTransAsistencialService.getCriterioForEstandar(id)
        }
}
