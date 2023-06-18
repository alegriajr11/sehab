import {  Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosGestionPretransService } from './criterios_gestion_pretrans.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioGestionPretransfusionalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/gestion_pretransfusional_dto/criterio_gestion_pretrans.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-gestion-pretrans')
export class CriteriosGestionPretransController {

    constructor(private readonly criteriosGestionPretransService: CriteriosGestionPretransService) { }
    //OBTENER CRITERIO GESTION PRETRANSFUNCIONAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosGestionPretransService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO GESTION PRETRANSFUNSIONAL POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioGestionPretransfusionalDto) {
        return this.criteriosGestionPretransService.create(id, dto);
    }

    //ELIMINAR CRITERIO  PRETRANSFUNSIONAL
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosGestionPretransService.delete(id);
    }

    
    //ACTUALIZAR UN CRITERIO PRETRANSFUNSIONAL
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioGestionPretransfusionalDto) {
        return await this.criteriosGestionPretransService.updateGestion(id, dto);
    }
}
