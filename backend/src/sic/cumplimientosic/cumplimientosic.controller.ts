import { Body, Controller, Post, Query } from '@nestjs/common';
import { CumplimientoSicDto } from 'src/usuario/dto/Sic/cumplimientosic.dto';
import { CumplimientosicService } from './cumplimientosic.service';

@Controller('cumplimientosic')
export class CumplimientosicController {

    constructor(private readonly cumplimientosicService: CumplimientosicService) {
    }

    //CREAR CUMPLIMIENTO
    @Post()
    async create(@Query('eva_id') eva_id: number,
    @Query('cri_id') cri_id: number, @Body() dto: CumplimientoSicDto) {

        return this.cumplimientosicService.create(eva_id,cri_id, dto);
    }
}
