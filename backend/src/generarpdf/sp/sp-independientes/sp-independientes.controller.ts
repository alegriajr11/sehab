import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SpIndependientesService } from './sp-independientes.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { IndActaDto } from 'src/generarpdf/sp/dto/sp-ind-acta.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

@Controller('sp-independientes')
export class SpIndependientesController {

    constructor(private readonly sp_IndependientesService: SpIndependientesService) { }

    //OBTENER TODOS LOS  SP INDEPENDIENTE ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.sp_IndependientesService.getallActas();
    }

    //OBTENER UN SP INDEPENDIENTE ACTA PDF POR ID
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.sp_IndependientesService.findByActa(id);
    }

    //OBTENER ACTAS POR FECHA
    @Get('/fecha/:date')
    async findAllFromDate(@Param('date') dateString: string) {
        return this.sp_IndependientesService.findAllFromDate(dateString);
    }

    //OBTENER ACTAS POR AÑO
    @Get('/year/date')
    async findAllFromYear(@Query('year') year: Date,
        @Query('numActa') numActa: number) {
        return this.sp_IndependientesService.findAllFromYear(year, numActa);
    }

    //CREAR SP INDEPENDIENTE ACTA PDF
    @Post()
    async create(@Body() payload: { dto: IndActaDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.sp_IndependientesService.create(payload);
    }

    //ACTUALIZAR  SP INDEPENDIENTE ACTA PDF
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id', ParseIntPipe)id: number, @Body() payload: {dto: IndActaDto, tokenDto: TokenDto }) {
        const { dto,tokenDto}= payload;
        return await this.sp_IndependientesService.updateActaInd(id,payload);
    }
}
