/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
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
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('nuevo/sic')
    createUserSic(@Body() dto: NuevoUsuarioDto) {
        return this.authService.createUserSic(dto);
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('nuevo/sp')
    createUserSP(@Body() dto: NuevoUsuarioDto) {
        return this.authService.createUserSP(dto);
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('nuevo/pamec')
    createUserPamec(@Body() dto: NuevoUsuarioDto) {
        return this.authService.createUserPamec(dto);
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('nuevo/res')
    createUserRes(@Body() dto: NuevoUsuarioDto) {
        return this.authService.createUserRes(dto);
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

    // @Get('refresh')
    // refreshGet(@Body() dto: TokenDto){
    //     return this.authService.refresh(dto)
    // }


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
    changePassword(@Body() changePasswordDto: ChangePasswordDto, @GetUser() usuario: UsuarioEntity): Promise<void>{
        const a = 1
        return this.authService.changePassword(changePasswordDto, usuario)
    }

}
