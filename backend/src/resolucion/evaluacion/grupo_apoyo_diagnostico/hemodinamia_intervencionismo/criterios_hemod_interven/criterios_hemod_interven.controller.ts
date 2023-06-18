import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosHemodIntervenService } from './criterios_hemod_interven.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioHermodinamiaIntervenDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/hemodinamia_intervencionismo_dto/criterio_hemo_inter.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-hemod-interven')
export class CriteriosHemodIntervenController {

    constructor(private readonly criteriosHemodIntervenService: CriteriosHemodIntervenService) { }

    //OBTENER CRITERIO HEMODINAMIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHemodIntervenService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO HEMODINAMIA INTER POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHermodinamiaIntervenDto) {
        return this.criteriosHemodIntervenService.create(id, dto);
    }

    //ELIMINAR CRITERIO  HEMODINAMIA
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHemodIntervenService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO HEMODINAMIA
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHermodinamiaIntervenDto) {
        return await this.criteriosHemodIntervenService.updateHemo(id, dto);
    }
}
