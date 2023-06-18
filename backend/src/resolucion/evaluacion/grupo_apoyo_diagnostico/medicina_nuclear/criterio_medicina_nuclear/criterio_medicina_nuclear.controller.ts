import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioMedicinaNuclearService } from './criterio_medicina_nuclear.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioMedicinaNuclearDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/medicina_nuclear_dto/criterio_medicina_nuclear.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterio-medicina-nuclear')
export class CriterioMedicinaNuclearController {

    constructor(
        private readonly criterioMedicinaNuclearService: CriterioMedicinaNuclearService) { }

    //OBTENER CRITERIO MEDICINA NUCLEAR POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioMedicinaNuclearService.getCriterioForEstandar(id)
    }

    //CREAR CRITERIO MEDICINA NUCLEAR POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioMedicinaNuclearDto) {
        return this.criterioMedicinaNuclearService.create(id, dto);
    }

    //ELIMINAR CRITERIO  MEDICINA NUCLEAR 
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioMedicinaNuclearService.delete(id);
    }


    //ACTUALIZAR UN CRITERIO   MEDICINA NUCLEAR 
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioMedicinaNuclearDto) {
        return await this.criterioMedicinaNuclearService.updateMed_Nucl(id, dto);
    }
}
