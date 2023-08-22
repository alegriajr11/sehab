/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolDecorator } from 'src/decorators/rol.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/rol.guard';
import { RolNombre } from 'src/rol/rol.enum';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';
import { TokenDto } from 'src/auth/dto/token.dto';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    //LISTAR TODOS LOS USUARIOS
    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() {
        return await this.usuarioService.getall()
    }

    //LISTAR USUARIO POR ID
    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.usuarioService.findById(id);
    }

    //ELIMINAR USUARIO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number, @Body() tokenDto: TokenDto) {
        return await this.usuarioService.delete(id, tokenDto);
    }

    //CREAR USUARIO ADMINISTRADOR
    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard) 
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body()payload: {dto: CreateUsuarioDto, tokenDto: TokenDto}){
        const { dto, tokenDto } = payload;
        return this.usuarioService.create(payload);
    }


    //ACTUALIZAR USUARIO
    @RolDecorator(RolNombre.ADMIN)
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: { dto: UsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return await this.usuarioService.update(id, payload);
    }

}
