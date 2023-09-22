import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CalificacionpamecService } from './calificacionpamec.service';
import { CalificacionPamDto } from 'src/usuario/dto/Pamec/calificacionpam.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

@Controller('calificacionpamec')
export class CalificacionpamecController {
    constructor(
        private readonly calificacionpamecService: CalificacionpamecService
    ) { }

    @Get('estan')
    async getAllestandar() {
        return await this.calificacionpamecService.getall()
    }

    // CREAR CALIFICACION
    @Post()
    async create(@Query('eva_id') eva_id: number,
    @Query('crip_id') crip_id: number, @Body() dto: CalificacionPamDto) {

        return this.calificacionpamecService.create(eva_id,crip_id, dto);
    }

    //ACTUALIZAR CALIFICACION
    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: CalificacionPamDto) {
        return await this.calificacionpamecService.update(id, dto);
    }

}
