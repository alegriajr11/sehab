import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PamecActaService } from './pamec-acta.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ActaPamecIpsDto } from '../dto/pamec-acta-ips.dto';
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

    //OBTENER ACTAS POR FECHA
    @Get('/fecha/:date')
    async findAllFromDate(@Param('date') dateString: string) {
        return this.pamecActaService.findAllFromDate(dateString);
    }

    //OBTENER ACTAS POR AÑO
    @Get('/year/date')
    async findAllFromYear(@Query('year') year: Date,
        @Query('numActa') numActa: number) {
        return this.pamecActaService.findAllFromYear(year, numActa);
    }

    //OBTENER ACTAS POR AÑO Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    @Get('/busqueda')
    async findAllBusqueda(@Query('year') year: Date,
        @Query('numActa') numActa: number, 
        @Query('nomPresta') nomPresta: string,
        @Query('nit') nit: string) {
        return this.pamecActaService.findAllBusqueda(year, numActa, nomPresta,nit);
    }

    //CREAR PAMEC IPS ACTA PDF
    @Post()
    async create(@Body() payload: { dto: ActaPamecIpsDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.pamecActaService.create(payload);
    }

    //ACTUALIZAR PAMEC IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id', ParseIntPipe)id: number, @Body() payload: {dto: ActaPamecIpsDto, tokenDto: TokenDto }) {
        const { dto,tokenDto}= payload;
        return await this.pamecActaService.updateActaipspam(id,payload);
    }
}
