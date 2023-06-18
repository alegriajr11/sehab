import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosConsPsicoactivasService } from './criterios_cons_psicoactivas.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioConsumoPsicoactivasDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_basico_consumo_psicoactivas_dto/criterio_cuid_cons_psicoact.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-cons-psicoactivas')
export class CriteriosConsPsicoactivasController {

    constructor(
        private readonly criteriosConsPsicoactivasService: CriteriosConsPsicoactivasService) { }

    //OBTENER CRITERIO CUIDADO BASICO PSICOACTIVAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosConsPsicoactivasService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO CUIDADO BASICO PSICOACTIVAS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioConsumoPsicoactivasDto) {
        return this.criteriosConsPsicoactivasService.create(id, dto);
    }

    //ELIMINAR CRITERIO CUIDADO BASICO PSICOACTIVAS
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosConsPsicoactivasService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO CUIDADO BASICO PSICOACTIVAS
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioConsumoPsicoactivasDto) {
        return await this.criteriosConsPsicoactivasService.updatecuidpsico(id, dto);
    }
}