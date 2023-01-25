import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CumplimientoEstandarSicDto } from 'src/usuario/dto/Sic/cumplimientoEstandar.dto';
import { CumplimientoSicDto } from 'src/usuario/dto/Sic/cumplimientosic.dto';
import { CriteriosicCumplimientoService } from './criteriosic-cumplimiento.service';

@Controller('criteriosic-cumplimiento')
export class CriteriosicCumplimientoController {

    constructor(
        private readonly criterioCumplimientosicService: CriteriosicCumplimientoService
        ) {}

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post('estandar')
    async create(@Body() dto: CumplimientoEstandarSicDto){
        return this.criterioCumplimientosicService.createCumplimientoEstandar(dto);
    }

    @Get(':id')
    async getAll(@Param('id', ParseIntPipe) id: number){
        return await this.criterioCumplimientosicService.findByIdEstandarSic(id);
    }

    @Get('cumple/:id')
    async getAllCumple(@Param('id', ParseIntPipe) id: number){
        return await this.criterioCumplimientosicService.findByIdCumpl(id);
    }
}
