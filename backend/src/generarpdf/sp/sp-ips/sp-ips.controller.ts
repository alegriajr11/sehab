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
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.sp_IpsService.findByActa(id);
    }



    //OBTENER ACTAS POR AÑO Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    @Get('/busqueda/fecha/acta/prestador/nit')
    async findAllBusqueda(@Query('year') year: number,
        @Query('acta_id') act_id: number,
        @Query('act_prestador') act_prestador: string,
        @Query('act_nit') act_nit: string) {
        return this.sp_IpsService.findAllBusqueda(year, act_id, act_prestador, act_nit);
    }

    //Obtener ultima acta
    @UseGuards(JwtAuthGuard)
    @Get('ultima/acta/spips')
    getLastActa() {
        return this.sp_IpsService.getLastestActa();
    }

    //CREAR ACTA SPIPS
    @Post()
    async create(@Body() payloads: { dto: IpsDto, evaluacionesIds: number[], tokenDto: TokenDto }) {
        const { dto, evaluacionesIds, tokenDto } = payloads;
        return this.sp_IpsService.create(payloads);
    }

    //ACTUALIZAR SP IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: { dto: IpsDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return await this.sp_IpsService.updateActaIps(id, payload);
    }


    //CERRAR ACTA SP-IPS
    @Put('cerrar/:id')
    async cerrarActa(
        @Param('id', ParseIntPipe) id: number, @Body() payload: { tokenDto: TokenDto }) {
        return this.sp_IpsService.cerrarActa(id, payload);
    }
}
