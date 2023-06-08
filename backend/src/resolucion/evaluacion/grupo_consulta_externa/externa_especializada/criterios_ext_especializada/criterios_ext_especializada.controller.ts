import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosExtEspecializadaService } from './criterios_ext_especializada.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioEspecializadaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/externa_especializada_dto/criterio_especializada.dto';

@Controller('criterios-ext-especializada')
export class CriteriosExtEspecializadaController {


    constructor(
        private readonly criteriosExtEspecializadaService: CriteriosExtEspecializadaService) { }

    //OBTENER CRITERIO CONSULTA EXTERNA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosExtEspecializadaService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO EXTERNA ESPECIALIZADA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioEspecializadaDto) {
        return this.criteriosExtEspecializadaService.create(id, dto);
    }
}
