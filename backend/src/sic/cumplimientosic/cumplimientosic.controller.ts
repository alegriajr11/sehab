import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CumplimientoSicDto } from 'src/usuario/dto/Sic/cumplimientosic.dto';
import { CumplimientosicService } from './cumplimientosic.service';

@Controller('cumplimientosic')
export class CumplimientosicController {

    constructor(private readonly cumplimientosicService: CumplimientosicService) {
    }

    //CREAR CUMPLIMIENTO
    @Post()
    async create(@Query('eva_id') eva_id: number,
    @Query('cri_id') cri_id: number, 
    @Query('ind_id') ind_id: string,@Body() dto: CumplimientoSicDto) {

        return this.cumplimientosicService.create(eva_id,cri_id,ind_id , dto);
    }

    //OBTENER CRITERIO Y CALIFICACION POR EVALUACION
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getevaluacion(@Param('id', ParseIntPipe) id: number) {
        return await this.cumplimientosicService.getCriCalIdeva(id)
    }

}
