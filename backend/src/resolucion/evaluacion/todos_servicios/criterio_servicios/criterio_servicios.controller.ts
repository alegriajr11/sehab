import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriterioServiciosService } from './criterio_servicios.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioServiciosDto } from 'src/resolucion/dtos/evaluacion_dtos/todos_servicios_dto/servicios_dto/criterio_servicios.dto';
import { RolesGuard } from 'src/guards/rol.guard';

@Controller('criterio-servicios')
export class CriterioServiciosController {

    constructor(
        private readonly criterioServiciosService: CriterioServiciosService) { }

    //OBTENER ESTANDARES DE TODOS LOS SERVICIOS
    //@UseGuards(JwtAuthGuard)
    @Get('estandar')
    getAllEstandar() {
        return this.criterioServiciosService.getAllEstandarServicios();
    }
    

    //OBTENER CRITERIO TODOS LOS SERVICIOS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioServiciosService.getCriterioForEstandar(id)
    }


    //CREAR CRITERIO TODOS LOS SERVICIOS POR ESTANDAR
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioServiciosDto) {
        return this.criterioServiciosService.create(id, dto);
    }

    //ELIMINAR CRITERIO TODOS LOS SERVICIOS
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioServiciosService.delete(id);
    }

    //ACTUALIZAR UN CRITERIO TODOS LOS SERVICIOS
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioServiciosDto) {
        return await this.criterioServiciosService.updatetodoserv(id, dto);
    }
}
