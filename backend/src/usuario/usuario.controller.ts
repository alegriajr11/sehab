/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolDecorator } from 'src/decorators/rol.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/rol.guard';
import { RolNombre } from 'src/rol/rol.enum';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(){
        return await this.usuarioService.getall()
    }

    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.usuarioService.findById(id);
    }
    

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.usuarioService.delete(id);
    }

    // @RolDecorator(RolNombre.ADMIN)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: CreateUsuarioDto){
        return this.usuarioService.create(dto);
    }
    
    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({whitelist: true, transformOptions: {enableImplicitConversion: true}}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UsuarioDto){
        return await this.usuarioService.update(id, dto);
    }

}