import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SicActaService } from './sic-acta.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ActaSicPdfDto } from '../dto/sic-acta-pdf.dto';

@Controller('sic-acta')
export class SicActaController {


    constructor(private readonly sic_act_pdfService: SicActaService) { }

    //OBTENER TODOS LOS CRITERIOS SIC
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.sic_act_pdfService.getallActas();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.sic_act_pdfService.findByActa(id);
    }
    

    @Post()
    async create(@Body() dto: ActaSicPdfDto) {
        return this.sic_act_pdfService.create(dto);
    }
}
