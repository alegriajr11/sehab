import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PamecActaService } from './pamec-acta.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ActaPamecDto } from '../dto/pamec-acta.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

@Controller('pamec-acta')
export class PamecActaController {
    constructor(private readonly pamecActaService: PamecActaService) { }

    //OBTENER TODOS LOS  PAMEC IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.pamecActaService.getallActas();
    }

    //OBTENER UN PAMEC IPS ACTA PDF POR ID
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.pamecActaService.findByActa(id);
    }

    //OBTENER ACTAS POR AÑO Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    @Get('/busqueda/fecha/acta/prestador/nit')
    async findAllBusqueda(@Query('year') year: number,
        @Query('acta_id') act_id: number,
        @Query('act_prestador') act_prestador: string,
        @Query('act_nit') act_nit: string) {
        return this.pamecActaService.findAllBusqueda(year, act_id, act_prestador, act_nit);
    }

    @UseGuards(JwtAuthGuard)
    @Get('ultima/acta/pamec')
    getLastActa() {
        return this.pamecActaService.getLastestActa();
    }

    //CREAR PAMEC IPS ACTA PDF
    @Post()
    async create(@Body() payload: { dto: ActaPamecDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.pamecActaService.create(payload);
    }

    //ACTUALIZAR PAMEC IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id', ParseIntPipe)id: number, @Body() payload: {dto: ActaPamecDto, tokenDto: TokenDto }) {
        const { dto,tokenDto}= payload;
        return await this.pamecActaService.updateActaipspam(id,payload);
    }
}
