/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ClasificacionService } from './clasificacion.service';

@Controller('clasificacion')
export class ClasificacionController {
    constructor(private readonly clasificacionService: ClasificacionService){}

    // @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(){
        return await this.clasificacionService.getall()
    }

}
