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
    await this.auditoria_registro_services.logCreateAdmin(
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
    const admin = await this.findById(id);
    if (!admin)
      throw new NotFoundException(new MessageDto('El Usuario No Existe'));

    dto.usu_nombre ? admin.usu_nombre = dto.usu_nombre : admin.usu_nombre = admin.usu_nombre;

    dto.usu_apellido ? admin.usu_apellido = dto.usu_apellido : admin.usu_apellido = admin.usu_apellido;

    dto.usu_nombreUsuario ? admin.usu_nombreUsuario = dto.usu_nombreUsuario : admin.usu_nombreUsuario = admin.usu_nombreUsuario;

    dto.usu_estado ? admin.usu_estado = dto.usu_estado : admin.usu_estado = admin.usu_estado;

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


    await this.usuarioRepository.save(admin);
    await this.auditoria_registro_services.logUpdateAdmin(
      payloadInterface.usu_nombre,
      payloadInterface.usu_apellido,
      'ip',
      dto.usu_nombre,
      dto.usu_nombreUsuario
    );

    return new MessageDto(`Usuario Actualizado`);
  }

  async delete(id: number, tokenDto: TokenDto): Promise<any> {
    const admin = await this.findById(id);
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
    await this.usuarioRepository.delete(admin.usu_id)
    await this.auditoria_registro_services.logDeleteAdmin(
      payloadInterface.usu_nombre,
      payloadInterface.usu_apellido,
      'ip',
      admin.usu_nombre,
      admin.usu_nombreUsuario
    );
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
