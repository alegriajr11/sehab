import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosTransAsistencialService } from './criterios_trans_asistencial.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioTranspAsistencialDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/transporte_asistencial_dto/criterio_trans_asistencial.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-trans-asistencial')
export class CriteriosTransAsistencialController {

    constructor(
        private readonly criteriosTransAsistencialService: CriteriosTransAsistencialService) { }

    //OBTENER CRITERIO TRASNPORTE ASISTENCIAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosTransAsistencialService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO TRANSPORTE ASISTENCIAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioTranspAsistencialDto) {
        return this.criteriosTransAsistencialService.create(id, dto);
    }

    //ELIMINAR CRITERIO  TRANSPORTE ASISTENCIAL 
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosTransAsistencialService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO  TRANSPORTE ASISTENCIAL 
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioTranspAsistencialDto) {
        return await this.criteriosTransAsistencialService.updateTrasAsis(id, dto);
    }
}
