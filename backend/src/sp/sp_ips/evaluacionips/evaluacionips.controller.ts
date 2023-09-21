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

<<<<<<< HEAD
    
=======
    //OBTENER UN SP IPS ACTA PDF POR ID
    //@UseGuards(JwtAuthGuard)
    @Get('/acta/evaluaciones/:id')
    async getevaluciones(@Param('id', ParseIntPipe) id: number) {
        return await this.evaluacionipsService.getallactaseva(id);
    }
>>>>>>> cf15b7ebfcefc1e3e045b2a68677e51346e0ef80
}
