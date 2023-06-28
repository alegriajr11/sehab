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
