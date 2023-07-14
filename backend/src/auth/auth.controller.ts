/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetUser } from 'src/decorators/get-user.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
import { RequestResetPasswordDTO } from './dto/request-reset-password.dto';
import { RessetPasswordDto } from './dto/reset-password.dto';
import { TokenDto } from './dto/token.dto';
import { MailerservicesService } from './mailerservices/mailerservices.service';
import { RolDecorator } from 'src/decorators/rol.decorator';
import { RolNombre } from 'src/rol/rol.enum';
import { RolesGuard } from 'src/guards/rol.guard';


@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly mailerService: MailerservicesService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.authService.getall()
    }

    @UseGuards(JwtAuthGuard)
    @Post('nuevo/sic')
    createUserSic(@Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.authService.createUserSic(payload);
    }

    //ACTUALIZAR USUARIO
    @RolDecorator(RolNombre.SIC)
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return await this.authService.updateUserSic(id, payload);
    }

    //ELIMINAR USUARIO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number, @Body() tokenDto: TokenDto) {
        return await this.authService.deleteUserSic(id, tokenDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('nuevo/sp')
    createUserSP(@Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.authService.createUserSP(payload);
    }

    //ACTUALIZAR USUARIO
    @RolDecorator(RolNombre.SP)
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateUserSP(@Param('id', ParseIntPipe) id: number, @Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return await this.authService.updateUserSP(id, payload);
    }

    //ELIMINAR USUARIO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteUserSP(@Param('id', ParseIntPipe) id: number, @Body() tokenDto: TokenDto) {
        return await this.authService.deleteUserSp(id, tokenDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('nuevo/pamec')
    createUserPamec(@Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.authService.createUserPamec(payload);
    }

    //ACTUALIZAR USUARIO
    @RolDecorator(RolNombre.PAMEC)
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateUserPamec(@Param('id', ParseIntPipe) id: number, @Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return await this.authService.updateUserPamec(id, payload);
    }

    //ELIMINAR USUARIO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteUserPamec(@Param('id', ParseIntPipe) id: number, @Body() tokenDto: TokenDto) {
        return await this.authService.deleteUserPamec(id, tokenDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('nuevo/res')
    createUserRes(@Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return this.authService.createUserRes(payload);
    }

    //ACTUALIZAR USUARIO
    @RolDecorator(RolNombre.RES)
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateUserRes(@Param('id', ParseIntPipe) id: number, @Body() payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }) {
        const { dto, tokenDto } = payload;
        return await this.authService.updateUserRes(id, payload);
    }

    //ELIMINAR USUARIO
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    async deleteUserRes(@Param('id', ParseIntPipe) id: number, @Body() tokenDto: TokenDto) {
        return await this.authService.deleteUserRes(id, tokenDto);
    }


    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('login')
    login(@Body() dto: LoginUsuarioDto) {
        return this.authService.login(dto);
    }

    @Post('refresh')
    refresh(@Body() dto: TokenDto) {
        return this.authService.refresh(dto)
    }


    //REESTABLECER CONTRASEÑA
    @UseGuards(JwtAuthGuard)
    @Patch('request-reset-password/:id')
    requestResetPassword(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.authService.requestResetPassword(id);
    }



    @UseGuards(JwtAuthGuard)
    @Patch('reset-password')
    resetPassword(@Body() resetPasswordDto: RessetPasswordDto): Promise<void> {
        return this.authService.resetPassword(resetPasswordDto);
    }


    //CAMBIAR CONTRASEÑA
    @UseGuards(JwtAuthGuard)
    @Patch('change-password')
    changePassword(@Body() changePasswordDto: ChangePasswordDto, @GetUser() usuario: UsuarioEntity): Promise<void> {
        const a = 1
        return this.authService.changePassword(changePasswordDto, usuario)
    }

}
