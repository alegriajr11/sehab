import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosHospParcialService } from './criterios_hosp_parcial.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioHospitalizacionParcialDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_parcial_dto/criterio_hosp_parcial.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-hosp-parcial')
export class CriteriosHospParcialController {

    constructor(
        private readonly criteriosHospParcialService: CriteriosHospParcialService) { }

    //OBTENER CRITERIO HOSPITALIZACION PARCIAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHospParcialService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO HOSPITALIZACION PARCIAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHospitalizacionParcialDto) {
        return this.criteriosHospParcialService.create(id, dto);
    }

    //ELIMINAR CRITERIO HOSPITALIZACION PARCIAL
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHospParcialService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO HOSPITALIZACION PARCIAL
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHospitalizacionParcialDto) {
        return await this.criteriosHospParcialService.updatehospipar(id, dto);
    }
}
