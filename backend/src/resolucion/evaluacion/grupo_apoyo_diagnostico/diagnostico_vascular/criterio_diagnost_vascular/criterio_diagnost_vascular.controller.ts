import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioDiagnostVascularService } from './criterio_diagnost_vascular.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioDiagnostVascularDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/diagnostico_vascular_dto/criterio_diagnostico_vascular.dto';
import { RolesGuard } from 'src/guards/rol.guard';



@Controller('criterio-diagnost-vascular')
export class CriterioDiagnostVascularController {

    constructor(private readonly criterio_Diagnostico_vascularService: CriterioDiagnostVascularService) { }
    //OBTENER CRITERIO DIAGNOSTICO VASCULAR POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterio_Diagnostico_vascularService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO DIAGNOSTICO VASCULAR POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioDiagnostVascularDto) {
        return this.criterio_Diagnostico_vascularService.create(id, dto);
    }

    //ELIMINAR CRITERIO  DIAGNOSTICO VASCULAR
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criterio_Diagnostico_vascularService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO DIAGNOSTICO VASCULAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioDiagnostVascularDto) {
        return await this.criterio_Diagnostico_vascularService.updateVascular(id, dto);
    }
}
