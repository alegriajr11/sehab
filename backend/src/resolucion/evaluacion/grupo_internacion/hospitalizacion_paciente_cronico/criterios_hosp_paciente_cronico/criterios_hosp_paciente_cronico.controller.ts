import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriteriosHospPacienteCronicoService } from './criterios_hosp_paciente_cronico.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioHospitCronicoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_paciente_cronico_dto/criterio_hosp_paciente_cron.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterios-hosp-paciente-cronico')
export class CriteriosHospPacienteCronicoController {
    constructor(
        private readonly criteriosHospPacienteCronicoService: CriteriosHospPacienteCronicoService) { }

    //OBTENER CRITERIO HOSPITALIZACION PACIENTE CRONICO  POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHospPacienteCronicoService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO HOSPITALIZACION PACIENTE CRONICO POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioHospitCronicoDto) {
        return this.criteriosHospPacienteCronicoService.create(id, dto);
    }

    //ELIMINAR CRITERIO HOSPITALIZACION PACIENTE CRONICO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criteriosHospPacienteCronicoService.delete(id);
    }
}
