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
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
import { RequestResetPasswordDTO } from './dto/request-reset-password.dto';
import { TokenDto } from './dto/token.dto';
import { EncoderService } from './encoder.service';
import { PayloadInterface } from './payload.interface';
import { v4 } from 'uuid';
import { RessetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AuditoriaRegistroService } from 'src/auditoria_registro/auditoria_registro.service';

@Injectable()
export class AuthService {

    constructor(

        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly authRepository: UsuarioRepository,
        private readonly jwtService: JwtService,
        private readonly usuarioService: UsuarioService,
        private readonly encoderService: EncoderService,
        private readonly auditoria_registroService: AuditoriaRegistroService
    ) { }


    async getall(): Promise<UsuarioEntity[]> {
        const usuario = await this.authRepository.find();
        if (!usuario.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return usuario;
    }

    /*LISTANDO USUARIO POR ID*/
    async findById(usu_id: number): Promise<UsuarioEntity> {
        const usuario = await this.authRepository.findOne({ where: { usu_id } });
        if (!usuario) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return usuario;
    }


    /*CREANDO USUARIO SIC*/
    async createUserSic(payloads: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolSic = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.SIC } });
        if (!rolSic) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolSic];
        await this.authRepository.save(user)
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };

        await this.authRepository.save(user);
        await this.auditoria_registroService.logCreateUserSic(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );
        return new MessageDto('Usuario Creado');

    }

    /*ACTUALIZANDO USUARIO SIC*/
    async updateUserSic(id: number, payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const sic = await this.findById(id);
        if (!sic)
            throw new NotFoundException(new MessageDto('El Usuario No Existe'));

        dto.usu_nombre ? sic.usu_nombre = dto.usu_nombre : sic.usu_nombre = sic.usu_nombre;

        dto.usu_apellido ? sic.usu_apellido = dto.usu_apellido : sic.usu_apellido = sic.usu_apellido;

        dto.usu_nombreUsuario ? sic.usu_nombreUsuario = dto.usu_nombreUsuario : sic.usu_nombreUsuario = sic.usu_nombreUsuario;

        dto.usu_estado ? sic.usu_estado = dto.usu_estado : sic.usu_estado = sic.usu_estado;

        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };


        await this.authRepository.save(sic);
        await this.auditoria_registroService.logUpdateUserSic(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );

        return new MessageDto(`Usuario Actualizado`);
    }

    /*ELIMINANDO USUARIO SIC*/
    async deleteUserSic(id: number, tokenDto: TokenDto): Promise<any> {
        const sic = await this.findById(id);
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };
        await this.authRepository.delete(sic.usu_id)
        await this.auditoria_registroService.logDeleteUserSic(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            sic.usu_nombre,
            sic.usu_nombreUsuario
        );
        return new MessageDto(`Usuario  eliminado`);
    }

    /*CREANDO USUARIO SP*/
    async createUserSP(payloads: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolSp = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.SP } });
        if (!rolSp) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolSp];
        await this.authRepository.save(user)
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };

        await this.authRepository.save(user);
        await this.auditoria_registroService.logCreateUserSp(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );
        return new MessageDto('Usuario Creado');

    }

    /*ACTUALIZANDO USUARIO SP*/
    async updateUserSP(id: number, payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const sp = await this.findById(id);
        if (!sp)
            throw new NotFoundException(new MessageDto('El Usuario No Existe'));

        dto.usu_nombre ? sp.usu_nombre = dto.usu_nombre : sp.usu_nombre = sp.usu_nombre;

        dto.usu_apellido ? sp.usu_apellido = dto.usu_apellido : sp.usu_apellido = sp.usu_apellido;

        dto.usu_nombreUsuario ? sp.usu_nombreUsuario = dto.usu_nombreUsuario : sp.usu_nombreUsuario = sp.usu_nombreUsuario;

        dto.usu_estado ? sp.usu_estado = dto.usu_estado : sp.usu_estado = sp.usu_estado;

        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };


        await this.authRepository.save(sp);
        await this.auditoria_registroService.logUpdateUserSp(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );

        return new MessageDto(`Usuario Actualizado`);
    }

    /*ELIMINANDO USUARIO SP*/
    async deleteUserSp(id: number, tokenDto: TokenDto): Promise<any> {
        const sp = await this.findById(id);
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };
        await this.authRepository.delete(sp.usu_id)
        await this.auditoria_registroService.logDeleteUserSp(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            sp.usu_nombre,
            sp.usu_nombreUsuario
        );
        return new MessageDto(`Usuario  eliminado`);
    }


    /*CREANDO USUARIO PAMEC*/
    async createUserPamec(payloads: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolPamec = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.PAMEC } });
        if (!rolPamec) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolPamec];
        await this.authRepository.save(user)
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };

        await this.authRepository.save(user);
        await this.auditoria_registroService.logCreateUserPamec(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );
        return new MessageDto('Usuario Creado');

    }

    /*ACTUALIZANDO USUARIO PAMEC*/
    async updateUserPamec(id: number, payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const pamec = await this.findById(id);
        if (!pamec)
            throw new NotFoundException(new MessageDto('El Usuario No Existe'));

        dto.usu_nombre ? pamec.usu_nombre = dto.usu_nombre : pamec.usu_nombre = pamec.usu_nombre;

        dto.usu_apellido ? pamec.usu_apellido = dto.usu_apellido : pamec.usu_apellido = pamec.usu_apellido;

        dto.usu_nombreUsuario ? pamec.usu_nombreUsuario = dto.usu_nombreUsuario : pamec.usu_nombreUsuario = pamec.usu_nombreUsuario;

        dto.usu_estado ? pamec.usu_estado = dto.usu_estado : pamec.usu_estado = pamec.usu_estado;

        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };


        await this.authRepository.save(pamec);
        await this.auditoria_registroService.logUpdateUserPamec(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );

        return new MessageDto(`Usuario Actualizado`);
    }

    /*ELIMINANDO USUARIO PAMEC*/
    async deleteUserPamec(id: number, tokenDto: TokenDto): Promise<any> {
        const pamec = await this.findById(id);
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };
        await this.authRepository.delete(pamec.usu_id)
        await this.auditoria_registroService.logDeleteUserPamec(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            pamec.usu_nombre,
            pamec.usu_nombreUsuario
        );
        return new MessageDto(`Usuario  eliminado`);
    }

    /*CREANDO USUARIO RES*/
    async createUserRes(payloads: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;
        const { usu_nombreUsuario, usu_email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
        if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolRes = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.RES } });
        if (!rolRes) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const user = this.authRepository.create(dto);
        user.roles = [rolRes];
        await this.authRepository.save(user)
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };

        await this.authRepository.save(user);
        await this.auditoria_registroService.logCreateUserRes(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );
        return new MessageDto('Usuario Creado');

    }

    /*ACTUALIZANDO USUARIO RES*/
    async updateUserRes(id: number, payload: { dto: NuevoUsuarioDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const res = await this.findById(id);
        if (!res)
            throw new NotFoundException(new MessageDto('El Usuario No Existe'));

        dto.usu_nombre ? res.usu_nombre = dto.usu_nombre : res.usu_nombre = res.usu_nombre;

        dto.usu_apellido ? res.usu_apellido = dto.usu_apellido : res.usu_apellido = res.usu_apellido;

        dto.usu_nombreUsuario ? res.usu_nombreUsuario = dto.usu_nombreUsuario : res.usu_nombreUsuario = res.usu_nombreUsuario;

        dto.usu_estado ? res.usu_estado = dto.usu_estado : res.usu_estado = res.usu_estado;

        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };


        await this.authRepository.save(res);
        await this.auditoria_registroService.logUpdateUserRes(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.usu_nombre,
            dto.usu_nombreUsuario
        );

        return new MessageDto(`Usuario Actualizado`);
    }

    /*ELIMINANDO USUARIO RES*/
    async deleteUserRes(id: number, tokenDto: TokenDto): Promise<any> {
        const res = await this.findById(id);
        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };
        await this.authRepository.delete(res.usu_id)
        await this.auditoria_registroService.logDeleteUserRes(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            res.usu_nombre,
            res.usu_nombreUsuario
        );
        return new MessageDto(`Usuario  eliminado`);
    }


    async login(dto: LoginUsuarioDto): Promise<any> {
        const { usu_nombreUsuario, } = dto;
        //const direccionIp = requestIpMiddleware.getClientIp(req);
        const direccionIp = '192.168.19.1'
        const usuario = await this.authRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_nombreUsuario }] });
        if (!usuario) return new UnauthorizedException(new MessageDto('El usuario no existe'));
        const passordOK = await compare(dto.usu_password, usuario.usu_password);
        if (!passordOK) return new UnauthorizedException(new MessageDto('Contraseña Incorrecta'));
        const payload: PayloadInterface = {
            usu_id: usuario.usu_id,
            usu_nombre: usuario.usu_nombre,
            usu_apellido: usuario.usu_apellido,
            usu_nombreUsuario: usuario.usu_nombreUsuario,
            usu_email: usuario.usu_email,
            usu_estado: usuario.usu_estado,
            usu_roles: usuario.roles.map(rol => rol.rol_nombre as RolNombre)
        }
        const token = await this.jwtService.sign(payload);
        if (payload.usu_estado == 'false') {
            return new UnauthorizedException(new MessageDto('Acceso Denegado Comunicarse con el Administrador'));
        }
        await this.auditoria_registroService.logLogin(payload.usu_nombre, payload.usu_apellido, direccionIp)
        return { token };
    }


    async refresh(dto: TokenDto): Promise<any> {
        const usuario = await this.jwtService.decode(dto.token);
        const payload: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        }
        const token = await this.jwtService.sign(payload);
        return { token };
    }



    async requestResetPassword(usu_id: number): Promise<void> {
        const usuario: UsuarioEntity = await this.usuarioService.findById(usu_id)
        usuario.resetPasswordToken = v4();
        this.authRepository.save(usuario);
    }

    async resetPassword(resetPasswordDto: RessetPasswordDto): Promise<any> {
        const { resetPasswordToken, password } = resetPasswordDto
        const usuario: UsuarioEntity = await this.usuarioService.findOneByResetPasswordToken(resetPasswordToken);

        usuario.usu_password = await this.encoderService.encodePassword(password)
        usuario.resetPasswordToken = null
        this.authRepository.save(usuario)
        return new MessageDto('Contraseña Restablecida');
    }


    async changePassword(changePasswordDto: ChangePasswordDto, usuario: UsuarioEntity): Promise<any> {
        const { oldPassword, newPassword } = changePasswordDto;
        if (await this.encoderService.checkPassword(oldPassword, usuario.usu_password)) {
            usuario.usu_password = await this.encoderService.encodePassword(newPassword);
            this.authRepository.save(usuario);
            return new MessageDto('La contraseña ha sido cambiada exitosamente');
        } else {
            throw new BadRequestException('La contraseña antigua no es correcta');
        }
    }

}
