import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SicActaService } from './sic-acta.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ActaSicPdfDto } from '../dto/sic-acta-pdf.dto';
import { ActaSicPdfEntity } from './sic-acta-pdf.entity';

@Controller('sic-acta')
export class SicActaController {


    constructor(private readonly sic_act_pdfService: SicActaService) { }

    //OBTENER TODOS LOS CRITERIOS SIC
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.sic_act_pdfService.getallActas();
    }

    //OBTENER ACTAS POR ID
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.sic_act_pdfService.findByActa(id);
    }

    //OBTENER ACTAS POR FECHA
    @Get('/fecha/:date')
    async findAllFromDate(@Param('date') dateString: string) {
        return this.sic_act_pdfService.findAllFromDate(dateString);
    }

    //CREAR ACTA
    @Post()
    async create(@Body() dto: ActaSicPdfDto) {
        return this.sic_act_pdfService.create(dto);
    }

    //ACTUALIZAR PAMEC IPS ACTA PDF
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ActaSicPdfDto) {
        return await this.sic_act_pdfService.updateActa(id, dto);
    }
}
