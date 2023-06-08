import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioImgRadNoionizantesService } from './criterio_img_rad_noionizantes.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioImgRadNoIonizantesDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/imagenes_diagnosticas_rad_noionizantes_dto/criterio_img_rad_noionizantes.dto';

@Controller('criterio-img-rad-noionizantes')
export class CriterioImgRadNoionizantesController {

    constructor(private readonly criterioImgRadNoionizantesService: CriterioImgRadNoionizantesService) { }

    //OBTENER CRITERIO IMAGENES NOIONIZANTES POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioImgRadNoionizantesService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO IMAGENES RADIO NO IONI POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioImgRadNoIonizantesDto) {
        return this.criterioImgRadNoionizantesService.create(id, dto);
    }
}
