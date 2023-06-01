import { Controller , Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CriterioImgRadIonizantesService } from './criterio_img_rad_ionizantes.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-img-rad-ionizantes')
export class CriterioImgRadIonizantesController {

    constructor(private readonly criterioImgRadIonizantesService: CriterioImgRadIonizantesService){}

    //OBTENER CRITERIO IMAGENES IONIZANTES POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioImgRadIonizantesService.getCriterioForEstandar(id)
    }
}
