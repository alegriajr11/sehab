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

    //BUSCAR  CALIFICACION POR ID
    @UseGuards(JwtAuthGuard)
    @Get('/calificaciones/:id')
    async getcalificaciones(@Param('id', ParseIntPipe) id: number){
        return await this.etapaIndService.findByIdcalificacion(id);
    }
    

    //ACTUALIZAR CALIFICACION
    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: calificacionindDto) {
        return await this.etapaIndService.update(id, dto);
    }
}
