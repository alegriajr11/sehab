/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { MessageDto } from 'src/common/message.dto';
import { RolEntity } from 'src/rol/rol.entity';
import { RolNombre } from 'src/rol/rol.enum';
import { RolRepository } from 'src/rol/rol.repository';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { ChangePasswordDto } from './dto/change-password.dto';
import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
import { TokenDto } from './dto/token.dto';
import { EncoderService } from './encoder.service';
import { PayloadInterface } from './payload.interface';


@Injectable()
export class AuthService {

    constructor(

        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly authRepository: UsuarioRepository,
        private readonly jwtService: JwtService,
        private readonly encoderService: EncoderService,
    ) { }


    async getall(): Promise<UsuarioEntity[]> {
        const usuario = await this.authRepository.find();
        if (!usuario.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return usuario;
    }



    async createUserSic(dto: NuevoUsuarioDto): Promise<any> {
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolSic = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.SIC } });
        if (!rolSic) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolSic];
        await this.authRepository.save(user)
        return new MessageDto('Usuario Creado');

    }

    async createUserSP(dto: NuevoUsuarioDto): Promise<any> {
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolSp = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.SP } });
        if (!rolSp) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolSp];
        await this.authRepository.save(user)
        return new MessageDto('Usuario Creado');

    }

    async createUserPamec(dto: NuevoUsuarioDto): Promise<any> {
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolPamec = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.PAMEC } });
        if (!rolPamec) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolPamec];
        await this.authRepository.save(user)
        return new MessageDto('Usuario Creado');

    }

    async createUserRes(dto: NuevoUsuarioDto): Promise<any> {
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolRes = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.RES } });
        if (!rolRes) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolRes];
        await this.authRepository.save(user)
        return new MessageDto('Usuario Creado');

    }


    async login(dto: LoginUsuarioDto): Promise<any> {
        const { usu_nombreUsuario, } = dto;
        const usuario = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_nombreUsuario }] });
        if (!usuario) return new UnauthorizedException(new MessageDto('El usuario no existe'));
        const passordOK = await compare(dto.usu_password, usuario.usu_password);
        if (!passordOK) return new UnauthorizedException(new MessageDto('Contraseña Incorrecta'));
        const payload: PayloadInterface = {
            usu_id: usuario.usu_id,
            usu_nombre: usuario.usu_nombre,
            usu_nombreUsuario: usuario.usu_nombreUsuario,
            usu_email: usuario.usu_email,
            usu_estado: usuario.usu_estado,
            usu_roles: usuario.roles.map(rol => rol.rol_nombre as RolNombre)
        }
        const token = await this.jwtService.sign(payload);
        if(payload.usu_estado == 'false'){
            return new UnauthorizedException(new MessageDto('Acceso Denegado Comunicarse con el Administrador'));
        }
        return { token };
    }


    async refresh(dto: TokenDto): Promise<any> {
        const usuario = await this.jwtService.decode(dto.token);
        const payload: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        }
        const token = await this.jwtService.sign(payload);
        return { token };
    }

    async changePassword(
        changePasswordDto: ChangePasswordDto,
        user: UsuarioEntity,
    ): Promise<void> {
        const { usu_oldPassword, usu_newPassword } = changePasswordDto;
        if (await this.encoderService.checkPassword(usu_oldPassword, user.usu_password)) {
            user.usu_password = await this.encoderService.encodePassword(usu_newPassword);
            console.log(user);
            this.authRepository.save(user);
        } else {
            throw new BadRequestException('La contraseña antigua no coincide');
        }
    }

}
