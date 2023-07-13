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

@Injectable()
export class UsuarioService {
    
    constructor(
        
        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: UsuarioRepository
    ){}

    /*LISTANDO USUARIO POR ID*/
    async findById(usu_id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne({ where: { usu_id } });
        if (!usuario) {
          throw new NotFoundException(new MessageDto('No Existe'));
        }
        return usuario;
      }
    

    /*LISTANDO USUARIOS */
    async getall(): Promise<UsuarioEntity[]>{
        const usuario = await this.usuarioRepository.createQueryBuilder('usuario')
        .select(['usuario', 'roles.rol_nombre'])
        .innerJoin('usuario.roles', 'roles')
        .getMany()
        if(!usuario.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la lista'))
        return usuario
    }

    /*CREACIÓN USUARIO ADMINISTRADOR */
    async create(dto: CreateUsuarioDto): Promise<any> {
        const {usu_nombreUsuario, usu_email, usu_nombre, usu_apellido} = dto;
        const exists = await this.usuarioRepository.findOne({where: [{usu_nombreUsuario: usu_nombreUsuario}, {usu_email: usu_email}]});
        if(exists) throw new BadRequestException(new MessageDto('Ese usuario ya existe'));
        const rolAdmin = await this.rolRepository.findOne({where: {rol_nombre: RolNombre.ADMIN}});
        if(!rolAdmin) throw new InternalServerErrorException(new MessageDto('los roles aún no han sido creados'))
        const admin = this.usuarioRepository.create(dto);
        admin.roles = [rolAdmin];
        await this.usuarioRepository.save(admin)
        return new MessageDto('Admin Creado');
    }


/*ACTUALIZANDO USUARIO*/
  async update(id: number, dto: UsuarioDto): Promise<any>{
    const usuario = await this.findById(id);
    if(!usuario)
    throw new NotFoundException(new MessageDto('El Usuario No Existe'));

    dto.usu_nombre? usuario.usu_nombre = dto.usu_nombre : usuario.usu_nombre = usuario.usu_nombre;

    dto.usu_apellido? usuario.usu_apellido = dto.usu_apellido : usuario.usu_apellido = usuario.usu_apellido;
  
    dto.usu_nombreUsuario? usuario.usu_nombreUsuario = dto.usu_nombreUsuario : usuario.usu_nombreUsuario = usuario.usu_nombreUsuario;
  
    dto.usu_estado? usuario.usu_estado = dto.usu_estado : usuario.usu_estado = usuario.usu_estado;

    await this.usuarioRepository.save(usuario);
  
    return new MessageDto(`Usuario ${usuario.usu_nombre} Actualizado`);
  }

    async delete(id: number):Promise<any>{
        const usuario = await this.findById(id);
        await this.usuarioRepository.delete(usuario.usu_id)
        return new MessageDto(`Usuario ${usuario.usu_nombre} eliminado`);
      }

    async findOneByResetPasswordToken(resetPasswordToken: string): Promise<UsuarioEntity>{
      const usuario = await this.usuarioRepository.findOne({ where: { resetPasswordToken } });
      if (!usuario) {
        throw new NotFoundException(new MessageDto('Error'));
      }
      return usuario;
    }

  }
