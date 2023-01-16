import { Controller, Delete, Get, Param, ParseIntPipe, Query, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriteriosicService } from './criteriosic.service';

@Controller('criteriosic')
export class CriteriosicController {

    constructor(private readonly criteriosicService: CriteriosicService) {
    }
    
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.criteriosicService.getall();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.criteriosicService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('criterio/:id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number){
        return await this.criteriosicService.findByIdCri(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':criId/:indId')
    async delete(@Param('criId') criId: number, @Param('indId') indId: string) {
        return await this.criteriosicService.removeCriterioFromIndicador(criId,indId);
    }
}
