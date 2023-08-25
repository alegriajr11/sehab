import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { SedeService } from './sede.service';
import { SedeDto } from '../dto/sede.dto';

@Controller('sede')
export class SedeController {

    constructor(
        private readonly sedeService: SedeService
    ) { }

    @Get('/mun/:id')
    async getManyMun(@Param('id') id: string) {
        return await this.sedeService.findBySede(id);
    }

    //CREAR CRITERIO GESTION PRETRANSFUNSIONAL POR ESTANDAR
   
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: string, @Body() dto: SedeDto) {
        return this.sedeService.create(id, dto);
    }

    //ELIMINAR CRITERIO  PRETRANSFUNSIONAL
    @Delete(':id')
    async deleteEstandar(@Param('id', ParseIntPipe) id: number) {
        return await this.sedeService.delete(id);
    }


    //ACTUALIZAR UN CRITERIO PRETRANSFUNSIONAL
    @UsePipes(new ValidationPipe({ whitelist: true, transformOptions: { enableImplicitConversion: true } }))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: SedeDto) {
        return await this.sedeService.updateSede(id, dto);
    }
}
