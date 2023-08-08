import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { CriterioIndDto } from 'src/usuario/dto/SpInd/criterioind.dto';
import { CriterioindService } from './criterioind.service';

@Controller('criterioind')
export class CriterioindController {

    constructor(private readonly criterioIndService: CriterioindService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.criterioIndService.findByEta(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/criterio/:id')
    async getOneCriterio(@Param('id', ParseIntPipe) id: number){
        return await this.criterioIndService.findCri(id);
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({whitelist: true, transformOptions: {enableImplicitConversion: true}}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioIndDto){
        return await this.criterioIndService.update(id, dto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.criterioIndService.delete(id);
    }


    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CriterioIndDto){
        return this.criterioIndService.create(id,dto);
    }

    @Get('criid/independientes')
    async getAllcriterio() {
        return await this.criterioIndService.getallcriterio()
    }

    // @Get('criid/independientes/titulouno')
    // async getAllcriterioxtitulo() {
    //     return await this.criterioIndService.getallcriterioxtitulo()
    // }

    @Get('criid/independientes/titulodos')
    async getAllcriterioxtitulodos() {
        return await this.criterioIndService.getallcriterioxtitulodos()
    }

    // @Get('criid/independientes/titulotres')
    // async getAllcriterioxtitulotres() {
    //     return await this.criterioIndService.getallcriterioxtitulotres()
    // }
    // @Get('criid/independientes/titulocuatro')
    // async getAllcriterioxtitulocuatro() {
    //     return await this.criterioIndService.getallcriterioxtitulocuatro()
    // }
}
