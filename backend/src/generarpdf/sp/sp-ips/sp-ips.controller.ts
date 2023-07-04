import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SpIpsService } from './sp-ips.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { IpsDto } from 'src/generarpdf/sp/dto/sp-ips.dto';

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

    //CREAR SP IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post()
    async create(@Body() dto: IpsDto) {
        return this.sp_IpsService.create(dto);
    }

    //ACTUALIZAR SP IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: IpsDto) {
        return await this.sp_IpsService.updateActaIps(id, dto);
    }
}
