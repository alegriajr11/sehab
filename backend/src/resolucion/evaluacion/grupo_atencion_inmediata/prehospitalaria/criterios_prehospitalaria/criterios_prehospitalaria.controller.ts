import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosPrehospitalariaService } from './criterios_prehospitalaria.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioPrehospitalariaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/prehospitalaria_dto/criterio_prehospitalaria.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-prehospitalaria')
export class CriteriosPrehospitalariaController {

    constructor(
        private readonly criteriosPrehospitalariaService: CriteriosPrehospitalariaService) { }

    //OBTENER CRITERIO PREHOSPITALARIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosPrehospitalariaService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO PREHOSPITALARIA POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioPrehospitalariaDto) {
        return this.criteriosPrehospitalariaService.create(id, dto);
    }

    //ELIMINAR CRITERIO  PREHOSPITALARIA 
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosPrehospitalariaService.delete(id);
    }
}
