import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditoriaRegistroEntity } from '../auditoria_registro.entity';
import { AuditoriaRegistroRepository } from '../auditoria_registro.repository';

@Injectable()
export class AuditoriaRegistroService {


    constructor(
        @InjectRepository(AuditoriaRegistroEntity)
        private readonly auditoria_registroRepository: AuditoriaRegistroRepository,
    ) { }

    /*USUARIOS*/
    //CONTROLAR EL REGISTRO DE EN QUE MOMENTO EL USUARIO INCIA SESIÓN
    async logLogin(usu_nombre: string, usu_apellido: string, direccionIp: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha iniciado sesión `;
        await this.logActivity(usu_nombre, usu_apellido, 'Inicio de sesión', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE UN USUARIO DE ROL SIC
    async logCreateUserSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario', details, direccionIp);
    }

    /*
    .
    ..
    .
    .
    .
    .
    */




    /*ACTAS - SIC*/

    //CONTROLAR LA CREACIÓN DE  SIC ACTA
    async logCreateActaSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'creacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE  PAMEC ACTA
    async logCreatePamecActa(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'creacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE  SP INDEPENDIENTE ACTA
    async logCreateSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'creacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE  PAMEC ACTA
    async logCreateSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'creacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE ADMIN
    async logCreateAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado una Resolucion ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Resoluciones`;
        await this.logActivity(usu_nombre, usu_apellido, 'creacion de Resolucion', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE ADMIN
    async logCreateRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado el admin ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Admin`;
        await this.logActivity(usu_nombre, usu_apellido, 'creacion de admin', details, direccionIp);
    }


    //CONTROLAR LA ACTUALIZACIÓN DE  SIC ACTA
    async logUpdateActaSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido,'Actualizacion de acta', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  PAMEC ACTA
    async logUpdatePamecActa(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualizacion de acta', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  SP INDEPENDIENTE ACTA
    async logUpdateSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualizacion de acta', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  PAMEC ACTA
    async logUpdateSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualizacion de acta', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE ADMIN
    async logUpdateAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado una Resolucion ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Resoluciones`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualizacion de Resolucion', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE ADMIN
    async logUpdateRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado el admin ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Admin`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualizacion de admin', details, direccionIp);
    }


    //CONTROLAR LA CREACIÓN DE  SIC ACTA
    async logDeleteActaSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'eliminacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE  PAMEC ACTA
    async logDeletePamecActa(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'eliminacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE  SP INDEPENDIENTE ACTA
    async logDeleteSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'eliminacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE  PAMEC ACTA
    async logDeleteSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un acta ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'eliminacion de acta', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE ADMIN
    async logDeleteAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado una Resolucion ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Resoluciones`;
        await this.logActivity(usu_nombre, usu_apellido, 'eliminacion de Resolucion', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE ADMIN
    async logDeleteRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado el admin ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Admin`;
        await this.logActivity(usu_nombre, usu_apellido, 'eliminacion de admin', details, direccionIp);
    }
    /*
    .
    ..
    .
    .
    .
    .
    */

    //REGISTRO DE AUDITORIA CON SU RESPECTIVA IDENTIFICACION DE QUE USUARIO REALIZÓ ALGUNA SOLICITUD
    private async logActivity(
        usu_nombre: string,
        usu_apellido: string,
        accion: string,
        detalles: string,
        direccionIp: string,
    ): Promise<void> {
        const auditoriaRegistro = new AuditoriaRegistroEntity();

        auditoriaRegistro.usu_nombre = usu_nombre;
        auditoriaRegistro.usu_apellido = usu_apellido;
        auditoriaRegistro.accion = accion;
        auditoriaRegistro.detalles = detalles;
        auditoriaRegistro.direccionIp = direccionIp;

        await this.auditoria_registroRepository.save(auditoriaRegistro);
    }
}
