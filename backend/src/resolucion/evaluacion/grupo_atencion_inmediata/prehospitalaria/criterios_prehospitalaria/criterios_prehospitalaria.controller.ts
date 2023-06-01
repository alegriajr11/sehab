import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriteriosPrehospitalariaService } from './criterios_prehospitalaria.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterios-prehospitalaria')
export class CriteriosPrehospitalariaController {

    constructor(
        private readonly criteriosPrehospitalariaService: CriteriosPrehospitalariaService){}
    
        //OBTENER CRITERIO PREHOSPITALARIA POR ESTANDAR
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
            return await this.criteriosPrehospitalariaService.getCriterioForEstandar(id)
        }
}
