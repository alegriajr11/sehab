import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { SpIndService } from './sp_ind.service';

@Controller('sp-ind')
export class SpIndController {

    constructor(private readonly etapaIndService: SpIndService) {
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

}
