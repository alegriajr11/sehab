import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioImgRadIonizantesService } from './criterio_img_rad_ionizantes.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioImgRadIonizantesDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/imagenes_diagnosticas_rad_ionizantes_dto/criterio_img_rad_ionizantes.dto';

@Controller('criterio-img-rad-ionizantes')
export class CriterioImgRadIonizantesController {

    constructor(private readonly criterioImgRadIonizantesService: CriterioImgRadIonizantesService) { }

    //OBTENER CRITERIO IMAGENES IONIZANTES POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioImgRadIonizantesService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO IMAGENES DIAGNOSTICAS RAD IONI POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioImgRadIonizantesDto) {
        return this.criterioImgRadIonizantesService.create(id, dto);
    }
}
