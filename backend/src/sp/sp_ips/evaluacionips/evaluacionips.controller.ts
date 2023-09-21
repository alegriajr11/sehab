import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { EvaluacionipsService } from './evaluacionips.service';

@Controller('evaluacionips')
export class EvaluacionipsController {

    constructor(private readonly evaluacionipsService: EvaluacionipsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.evaluacionipsService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.evaluacionipsService.getall();
    }

    
}
