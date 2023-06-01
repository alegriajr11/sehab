import { Controller , Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CriterioImgRadNoionizantesService } from './criterio_img_rad_noionizantes.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('criterio-img-rad-noionizantes')
export class CriterioImgRadNoionizantesController {

    constructor(private readonly criterioImgRadNoionizantesService: CriterioImgRadNoionizantesService){}

    //OBTENER CRITERIO IMAGENES NOIONIZANTES POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioImgRadNoionizantesService.getCriterioForEstandar(id)
    }
}
