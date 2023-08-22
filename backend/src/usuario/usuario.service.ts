/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { RolEntity } from 'src/rol/rol.entity';
import { RolNombre } from 'src/rol/rol.enum';
import { RolRepository } from 'src/rol/rol.repository';
import { Like } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria_registro/auditoria_registro.service';
import { PayloadInterface } from 'src/auth/payload.interface';
import { isEmpty } from 'class-validator';

@Injectable()
export class UsuarioService {

  constructor(

    @InjectRepository(RolEntity)
    private readonly rolRepository: RolRepository,
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: UsuarioRepository,
    private readonly jwtService: JwtService,
    private readonly auditoria_registro_services: AuditoriaRegistroService
  ) { }

  /*LISTANDO USUARIO POR ID*/
  async findById(usu_id: number): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOne({ where: { usu_id } });
    if (!usuario) {
      throw new NotFoundException(new MessageDto('No Existe'));
    }
    return usuario;
  }


  /*LISTANDO USUARIOS */
  async getall(): Promise<UsuarioEntity[]> {
    const usuario = await this.usuarioRepository.createQueryBuilder('usuario')
      .select(['usuario', 'roles.rol_nombre'])
      .innerJoin('usuario.roles', 'roles')
      .getMany()
    if (!usuario.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
    return usuario
  }

  /*CREACIÓN USUARIO ADMINISTRADOR */
  async create(payloads: { dto: CreateUsuarioDto, tokenDto: TokenDto }): Promise<any> {
    const { dto, tokenDto } = payloads;
    const { usu_nombreUsuario, usu_email, usu_nombre, usu_apellido } = dto;
    const exists = await this.usuarioRepository.findOne({ where: [{ usu_nombreUsuario: usu_nombreUsuario }, { usu_email: usu_email }] });
    if (exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
    const rolAdmin = await this.rolRepository.findOne({ where: { rol_nombre: RolNombre.ADMIN } });
    if (!rolAdmin) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
    const admin = this.usuarioRepository.create(dto);
    admin.roles = [rolAdmin];
    await this.usuarioRepository.save(admin)
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

    //const year = new Date().getFullYear().toString();

    await this.usuarioRepository.save(admin);
    await this.auditoria_registro_services.logCreateUserAdmin(
      payloadInterface.usu_nombre,
      payloadInterface.usu_apellido,
      'ip',
      dto.usu_nombre,
      dto.usu_nombreUsuario
    );

    return new MessageDto('Admin Creado');
  }



  /*ACTUALIZANDO USUARIO*/
  async update(id: number, payload: { dto: UsuarioDto, tokenDto: TokenDto }): Promise<any> {
    const { dto, tokenDto } = payload;
    const usuario_actualizar = await this.findById(id);
    let rol_usuario

    if (!usuario_actualizar)
      throw new NotFoundException(new MessageDto('El Usuario No Existe'));

    dto.usu_nombre ? usuario_actualizar.usu_nombre = dto.usu_nombre : usuario_actualizar.usu_nombre = usuario_actualizar.usu_nombre;

    dto.usu_apellido ? usuario_actualizar.usu_apellido = dto.usu_apellido : usuario_actualizar.usu_apellido = usuario_actualizar.usu_apellido;

    dto.usu_nombreUsuario ? usuario_actualizar.usu_nombreUsuario = dto.usu_nombreUsuario : usuario_actualizar.usu_nombreUsuario = usuario_actualizar.usu_nombreUsuario;

    dto.usu_estado ? usuario_actualizar.usu_estado = dto.usu_estado : usuario_actualizar.usu_estado = usuario_actualizar.usu_estado;

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

    //SE MANDA A ACTUALIZAR LA ENTIDAD A LA BD
    await this.usuarioRepository.save(usuario_actualizar);

    //CONDICIONALES PARA TENER EL CUENTA EL ROL Y ASÍ LLAMAR EL METODO LOG QUE LE CORRESPONDA
    //PENDIENTE...........
    usuario_actualizar.roles.forEach(data => {
      rol_usuario = data.rol_nombre
    })

    switch (rol_usuario) {
      case 'ADMIN':
        await this.auditoria_registro_services.logUpdateUserAdmin(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          dto.usu_nombre,
          dto.usu_nombreUsuario
        );
        break;

      case 'PAMEC':
        await this.auditoria_registro_services.logUpdateUserPamec(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          dto.usu_nombre,
          dto.usu_nombreUsuario
        );
        break;

      case 'SP':
        await this.auditoria_registro_services.logUpdateUserSp(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          dto.usu_nombre,
          dto.usu_nombreUsuario
        );
        break;

      case 'RES':
        await this.auditoria_registro_services.logUpdateUserRes(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          dto.usu_nombre,
          dto.usu_nombreUsuario
        );
        break;

      case 'SIC':
        await this.auditoria_registro_services.logUpdateUserSic(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          dto.usu_nombre,
          dto.usu_nombreUsuario
        );
        break;

      default:
        new MessageDto(`Rol no encontrado`);
        break;
    }

    return new MessageDto(`Usuario Actualizado`);
  }

  async delete(id: number, tokenDto: TokenDto): Promise<any> {
    //LISTAR USUARIO AL QUE SE QUIERE ELIMINAR
    const usuario_eliminar = await this.findById(id);

    let rol_usuario

    //EL USUARIO LOGUEADO - SIEMPRE ES EL ADMIN QUE ELIMINA USUARIOS
    const usuario = await this.jwtService.decode(tokenDto.token);

    //OBJETO QUE TIENE LOS DATOS DEL USUARIO ADMIN LOGUEADO
    const payloadInterface: PayloadInterface = {
      usu_id: usuario[`usu_id`],
      usu_nombre: usuario[`usu_nombre`],
      usu_apellido: usuario[`usu_apellido`],
      usu_nombreUsuario: usuario[`usu_nombreUsuario`],
      usu_email: usuario[`usu_email`],
      usu_estado: usuario[`usu_estado`],
      usu_roles: usuario[`usu_roles`]
    };

    await this.usuarioRepository.delete(usuario_eliminar.usu_id)

    usuario_eliminar.roles.forEach(data => {
      rol_usuario = data.rol_nombre
    })

    //CONDICIONALES PARA TENER EL CUENTA EL ROL Y ASÍ LLAMAR EL METODO LOG QUE LE CORRESPONDA
    //PENDIENTE...........
    switch (rol_usuario) {
      case 'ADMIN':
        await this.auditoria_registro_services.logUpdateUserAdmin(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          usuario_eliminar.usu_nombre,
          usuario_eliminar.usu_nombreUsuario
        );
        break;

      case 'PAMEC':
        await this.auditoria_registro_services.logUpdateUserPamec(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          usuario_eliminar.usu_nombre,
          usuario_eliminar.usu_nombreUsuario
        );
        break;

      case 'SP':
        await this.auditoria_registro_services.logUpdateUserSp(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          usuario_eliminar.usu_nombre,
          usuario_eliminar.usu_nombreUsuario
        );
        break;

      case 'RES':
        await this.auditoria_registro_services.logUpdateUserRes(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          usuario_eliminar.usu_nombre,
          usuario_eliminar.usu_nombreUsuario
        );
        break;

      case 'SIC':
        await this.auditoria_registro_services.logUpdateUserSic(
          payloadInterface.usu_nombre,
          payloadInterface.usu_apellido,
          'ip',
          usuario_eliminar.usu_nombre,
          usuario_eliminar.usu_nombreUsuario
        );
        break;

      default:
        new MessageDto(`Rol no encontrado`);
        break;
    }


    return new MessageDto(`Usuario  eliminado`);
  }

  async findOneByResetPasswordToken(resetPasswordToken: string): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOne({ where: { resetPasswordToken } });
    if (!usuario) {
      throw new NotFoundException(new MessageDto('Error'));
    }
    return usuario;
  }

}
