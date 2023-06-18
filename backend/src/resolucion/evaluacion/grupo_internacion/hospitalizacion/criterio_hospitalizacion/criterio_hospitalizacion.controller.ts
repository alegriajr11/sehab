import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioHospitalizacionService } from './criterio_hospitalizacion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioHospitalizacionDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_dto/criterio_hospitalizacion.dto';
import { RolesGuard } from 'src/guards/rol.guard';

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

    //ELIMINAR CRITERIO HOSPITALIZACION
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioHospitalizacionService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO HOSPITALIZACION
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHospitalizacionDto) {
        return await this.criterioHospitalizacionService.updatehospi(id, dto);
    }
}
