import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SpIndependientesService } from './sp-independientes.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { IndActaDto } from 'src/generarpdf/sp/dto/sp-ind-acta.dto';

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
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.sp_IndependientesService.findByActa(id);
    }
    
    //CREAR SP INDEPENDIENTE ACTA PDF
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: IndActaDto) {
        return this.sp_IndependientesService.create(dto);
    }

    //ACTUALIZAR  SP INDEPENDIENTE ACTA PDF
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: IndActaDto) {
        return await this.sp_IndependientesService.updateActaInd(id, dto);
    }
}
