import { CriterioHospitalizacionMentalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_salud_mental_dto/criterio_hosp_salud_mental.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioHospitalizacionService } from '../../hospitalizacion/criterio_hospitalizacion/criterio_hospitalizacion.service';
import { CriteriosHospSaludMentalService } from './criterios_hosp_salud_mental.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-hosp-salud-mental')
export class CriteriosHospSaludMentalController {

    constructor(
        private readonly criteriosHospSaludMentalService: CriteriosHospSaludMentalService) { }

    //OBTENER CRITERIO HOSPITALIZACION SALUD MENTAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHospSaludMentalService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO HOSPITALIZACION MENTAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHospitalizacionMentalDto) {
        return this.criteriosHospSaludMentalService.create(id, dto);
    }

    //ELIMINAR CRITERIO HOSPITALIZACION MENTAL
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHospSaludMentalService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO HOSPITALIZACION MENTAL
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHospitalizacionMentalDto) {
        return await this.criteriosHospSaludMentalService.updatehospiment(id, dto);
    }
}

