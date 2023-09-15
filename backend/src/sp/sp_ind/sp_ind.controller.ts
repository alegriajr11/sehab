import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { SpIndService } from './sp_ind.service';
import { calificacionindDto } from './dto/calificacionind.dto';
import { TokenDto } from 'src/auth/dto/token.dto';

@Controller('sp-ind')
export class SpIndController {

    constructor(private readonly etapaIndService: SpIndService,
        ) {
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.etapaIndService.getall();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.etapaIndService.findById(id);
    }

    //BUSCAR  CALIFICACION POR ID
    @UseGuards(JwtAuthGuard)
    @Get('/calificaciones/:id')
    async getcalificaciones(@Param('id', ParseIntPipe) id: number){
        return await this.etapaIndService.findByIdcalificacion(id);
    }
    
    //ACTUALIZAR  SP INDEPENDIENTE ACTA PDF
    
    @Post()
    async create(@Body() payload: { dto: calificacionindDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.etapaIndService.createCalificacionSpInd(payload);
    }

    //ACTUALIZAR CALIFICACION
    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: calificacionindDto) {
        return await this.etapaIndService.update(id, dto);
    }
}
