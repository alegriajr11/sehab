import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioHospitalizacionService } from './criterio_hospitalizacion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioHospitalizacionDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_dto/criterio_hospitalizacion.dto';

@Controller('criterio-hospitalizacion')
export class CriterioHospitalizacionController {

    constructor(
        private readonly criterioHospitalizacionService: CriterioHospitalizacionService) { }

    //OBTENER CRITERIO HOSPITALIZACION POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioHospitalizacionService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO HOSPITALIZACION POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHospitalizacionDto) {
        return this.criterioHospitalizacionService.create(id, dto);
    }
}
