import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CumplimientoEstandarSicDto } from 'src/usuario/dto/Sic/cumplimientoEstandar.dto';
import { CriteriosicCumplimientoService } from './criteriosic-cumplimiento.service';

@Controller('criteriosic-cumplimiento')
export class CriteriosicCumplimientoController {

    constructor(
        private readonly criterioCumplimientosicService: CriteriosicCumplimientoService
    ) { }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('estandar')
    async create(@Body() dto: CumplimientoEstandarSicDto) {
        return this.criterioCumplimientosicService.createCumplimientoEstandar(dto);
    }

    //LISTAR TODOS LOS USUARIOS

    @Get()
    async getAlll() {
        return await this.criterioCumplimientosicService.getalll()
    }

    @Get('estan')
    async getAllestandar() {
        return await this.criterioCumplimientosicService.getallcumple()
    }


    @Get(':id')
    async getAll(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioCumplimientosicService.findByIdEstandarSic(id);
    }

    @Get('indicador/:id')
    async getid(@Param('id', ParseIntPipe) id: string) {
        return await this.criterioCumplimientosicService.findByIdCumliSic(id);
    }

    @Get('cumple/:id')
    async getAllCumple(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioCumplimientosicService.findByIdCumpl(id);
    }
}
