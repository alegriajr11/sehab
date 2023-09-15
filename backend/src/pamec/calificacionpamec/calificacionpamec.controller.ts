import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
    async create(@Body() payload: { dto: CalificacionPamDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.calificacionpamecService.createCalificacionPamec(payload);
    }

    //ACTUALIZAR CALIFICACION
    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: CalificacionPamDto) {
        return await this.calificacionpamecService.update(id, dto);
    }

}
