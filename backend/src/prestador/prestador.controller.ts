/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolDecorator } from 'src/decorators/rol.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/rol.guard';
import { RolNombre } from 'src/rol/rol.enum';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { PrestadorService } from './prestador.service';


@Controller('prestador')
export class PrestadorController {
    constructor(private readonly prestadorService: PrestadorService){}

    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(){
        return await this.prestadorService.getall()
    }

    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id') id: string){
        return await this.prestadorService.findById(id);
    }

    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get('/mun/:id')
    async getManyMun(@Param('id') id: string){
        return await this.prestadorService.findByMunicipio(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.prestadorService.delete(id);
    }


    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: CreatePrestadorDto){
        return this.prestadorService.create(dto);
    }
}
