/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetUser } from 'src/decorators/get-user.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { AuthService } from './auth.service';
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

    @Get()
    getAll() {
        return this.authService.getall()
    }
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('nuevo/sic')
    createUserSic(@Body() dto: NuevoUsuarioDto) {
        return this.authService.createUserSic(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('nuevo/sp')
    createUserSP(@Body() dto: NuevoUsuarioDto) {
        return this.authService.createUserSP(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('nuevo/pamec')
    createUserPamec(@Body() dto: NuevoUsuarioDto) {
        return this.authService.createUserPamec(dto);
    }

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

    @Patch('request-reset-password')
    requestResetPassword(@Body() requestResetPasswordDto: RequestResetPasswordDTO): Promise<void> {
        return this.authService.requestResetPassword(requestResetPasswordDto);
    }

    @Patch('reset-password')
    resetPassword(@Body() resetPasswordDto: RessetPasswordDto): Promise<void> {
        return this.authService.resetPassword(resetPasswordDto);
    }


    //ENVIAR EMAIL

    @Post('send-email')
    async sendEmail(@Body() email: RequestResetPasswordDTO) {
        
        await this.mailerService.getTransporter().sendMail({
            from: '"Sender Name" <sehab@example.com>',
            to: email.usu_email,
            subject: "Hello ✔",
            html: "<b>Hello world?</b>",
        });
    }
}
