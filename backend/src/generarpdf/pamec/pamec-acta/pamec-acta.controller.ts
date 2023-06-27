import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PamecActaService } from './pamec-acta.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ActaPamecIpsDto } from '../dto/pamec-acta-ips.dto';

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

    //CREAR PAMEC IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: ActaPamecIpsDto) {
        return this.pamecActaService.create(dto);
    }

    //ACTUALIZAR PAMEC IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ActaPamecIpsDto) {
        return await this.pamecActaService.updateActaipspam(id, dto);
    }
}
