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
        await this.logActivity(usu_nombre, usu_apellido, 'Inicio de Sesión', details, direccionIp);
    }


    /** USUARIOS - ROL ADMIN */
    //CONTROLAR LA CREACIÓN DE USUARO - ADMIN
    async logCreateAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Usuario ADMIN: ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Resoluciones`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario ADMIN', details, direccionIp);
    }

    //CONTROLAR LA ELIMINACIÓN DE USUARIO - ADMIN
    async logDeleteAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un usuario ADMIN ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Resoluciones`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario ADMIN', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE USUARIO - ADMIN
    async logUpdateAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un usuario ADMIN ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Resoluciones`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario ADMIN', details, direccionIp);
    }



    /** USUARIOS - ROL SIC */
    //CONTROLAR LA CREACIÓN DE UN USUARIO DE ROL SIC
    async logCreateUserSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario Sic', details, direccionIp);
    }
    //logUpdateUserSic
    //logDeleteUserSic


    /** USUARIOS - ROL PAMEC */
    //logCreateUserPamec
    //logUpdateUserPamec
    //logDeleteUserPamec


    /** USUARIOS - ROL PAMEC */
    //logCreateUserSP
    //logUpdateUserSP
    //logDeleteUserSP


    /** USUARIOS - ROL PAMEC */
    //logCreateUserRES
    //logUpdateUserRES
    //logDeleteUserRES
    



    /*ACTAS - SIC*/
    //CONTROLAR LA CREACIÓN DE  SIC ACTA
    async logCreateActaSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta Sic ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta Sic', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  SIC ACTA
    async logUpdateActaSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta SIC ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta SIC', details, direccionIp);
    }



    /*ACTAS - PAMEC*/
    //CONTROLAR LA CREACIÓN DE  PAMEC ACTA
    async logCreatePamecActa(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta Pamec ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta Pamec', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  PAMEC ACTA
    async logUpdatePamecActa(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta Pamec ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta Pamec', details, direccionIp);
    }



    /*ACTAS - SP*/
    //CONTROLAR LA CREACIÓN DE  SP INDEPENDIENTE ACTA
    async logCreateSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta SP Independiente ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta SP Independientes', details, direccionIp);
    }

    //CONTROLAR LA CREACIÓN DE  SP IPS ACTA
    async logCreateSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta SP IPS ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta SP IPS', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  SP INDEPENDIENTE ACTA
    async logUpdateSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta SP Independientes ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta SP Independientes', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  PAMEC ACTA
    async logUpdateSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta SP IPS ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta SP IPS', details, direccionIp);
    }




    // //CONTROLAR LA CREACIÓN DE ADMIN
    // async logCreateRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
    //     const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado el admin ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Admin`;
    //     await this.logActivity(usu_nombre, usu_apellido, 'creacion de admin', details, direccionIp);
    // }

    // //CONTROLAR LA ACTUALIZACIÓN DE ADMIN
    // async logUpdateRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
    //     const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado el admin ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol Admin`;
    //     await this.logActivity(usu_nombre, usu_apellido, 'Actualizacion de admin', details, direccionIp);
    // }




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
