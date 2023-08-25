import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SpIpsService } from './sp-ips.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { IpsDto } from 'src/generarpdf/sp/dto/sp-ips.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

@Controller('sp-ips')
export class SpIpsController {
    constructor(private readonly sp_IpsService: SpIpsService) { }

    //OBTENER TODOS LOS  SP IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.sp_IpsService.getallActas();
    }

    //OBTENER UN SP IPS ACTA PDF POR ID
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.sp_IpsService.findByActa(id);
    }

    //OBTENER ACTAS POR FECHA
    @Get('/fecha/:date')
    async findAllFromDate(@Param('date') dateString: string) {
        return this.sp_IpsService.findAllFromDate(dateString);
    }

    //OBTENER ACTAS POR AÑO Y/O NUMERO ACTA
    @Get('/year/date')
    async findAllFromYear(@Query('year') year: Date,
        @Query('numActa') numActa: number) {
        return this.sp_IpsService.findAllFromYear(year, numActa);
    }

    //OBTENER ACTAS POR AÑO Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    @Get('/busqueda')
    async findAllBusqueda(@Query('year') year: Date,
        @Query('numActa') numActa: number, 
        @Query('nomPresta') nomPresta: string,
        @Query('nit') nit: string) {
        return this.sp_IpsService.findAllBusqueda(year, numActa, nomPresta,nit);
    }

    //Obtener ultima acta
    @UseGuards(JwtAuthGuard)
    @Get('ultima/acta/spips')
    getLastActa() {
        return this.sp_IpsService.getLastestActa();
    }


    @Post()
    async create(@Body() payload: { dto: IpsDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.sp_IpsService.create(payload);
    }

    //ACTUALIZAR SP IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id', ParseIntPipe)id: number, @Body() payload: {dto: IpsDto, tokenDto: TokenDto }) {
        const { dto,tokenDto}= payload;
        return await this.sp_IpsService.updateActaIps(id,payload);
    }
}
