import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosDialisisService } from './criterios_dialisis.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioDialisisDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/dialisis_dto/criterio_dialisis.dto';

@Controller('criterios-dialisis')
export class CriteriosDialisisController {

    constructor(private readonly criterioDialisisService: CriteriosDialisisService) { }


    //OBTENER CRITERIO DIALISIS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioDialisisService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO DIALISIS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioDialisisDto){
        return this.criterioDialisisService.create(id,dto);
    }

}
