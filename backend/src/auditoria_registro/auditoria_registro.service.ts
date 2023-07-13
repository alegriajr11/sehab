import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { AuditoriaRegistroEntity } from './auditoria_registro.entity';
import { AuditoriaRegistroRepository } from './auditoria_registro.repository';


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
    async logUpdateUserSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario Sic', details, direccionIp);
    }
    //logDeleteUserSic
    async logDeleteUserSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Eliminado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SIC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario Sic', details, direccionIp);
    }


    /** USUARIOS - ROL PAMEC */
    //logCreateUserPamec
    async logCreateUserPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Creado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario PAMEC', details, direccionIp);
    }
    //logUpdateUserPamec
    async logUpdateUserPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario PAMEC', details, direccionIp);
    }
    //logDeleteUserPamec
    async logDeleteUserPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Eliminado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol PAMEC`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario PAMEC', details, direccionIp);
    }

    /** USUARIOS - ROL SP */
    //logCreateUserSP
    async logCreateUserSp(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Creado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario SP', details, direccionIp);
    }
    //logUpdateUserSP
    async logUpdateUserSp(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario SP', details, direccionIp);
    }
    //logDeleteUserSP
    async logDeleteUserSp(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Eliminado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario SP', details, direccionIp);
    }





    /** USUARIOS - ROL RES */
    //logCreateUserRES
    async logCreateUserRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Creado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol RES`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario RES', details, direccionIp);
    }
    //logUpdateUserRES
    async logUpdateUserRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol RES`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario RES', details, direccionIp);
    }
    //logDeleteUserRES
    async logDeleteUserRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Eliminado el usuario ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol RES`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario RES', details, direccionIp);
    }



    /*ACTAS - SIC*/
    //CONTROLAR LA CREACIÓN DE  SIC ACTA
    async logCreateActaSic(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta Sic con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta Sic', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  SIC ACTA
    async logUpdateActaSic(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta SIC  con nombre de usuario  del Rol SIC`;
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


    //CONTROLAR LA ACTUALIZACIÓN DE  SP INDEPENDIENTE ACTA
    async logUpdateSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta SP Independientes ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta SP Independientes', details, direccionIp);
    }



    //CONTROLAR LA CREACIÓN DE  SP IPS ACTA
    async logCreateSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta SP IPS ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del Rol SP`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta SP IPS', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE SP IPS ACTA
    async logUpdateSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombreUsuario: string, usu_nombre2: string, usu_apellido2: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta SP IPS ${usu_nombre2} ${usu_apellido2} con nombre de usuario ${usu_nombreUsuario} del RolSP IPS`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta SP IPS', details, direccionIp);
    }




    /* CONSULTAS DE AUDITORIA - SERVICIO DE AUDITORIA */
    // LISTA DE AUDITORIAS POR FECHA INICIO Y FECHA FINAL
    //ENCONTRAR ACTAS POR FECHA EXACTA
    async findAllFromDate(fechaInicio?: Date, fechaFin?: Date, accion?: string): Promise<AuditoriaRegistroEntity[]> {
        let query = this.auditoria_registroRepository.createQueryBuilder('auditoria');

        if (accion) {
            query = query.where('auditoria.accion LIKE :accion', { accion: `%${accion}%` });
        }

        if (fechaInicio && fechaFin) {
            // Ajustar la fecha de fin para incluir hasta el final del día
            const fechaFinAjustada = new Date(fechaFin);
            fechaFinAjustada.setHours(23, 59, 59, 999);

            query = query.andWhere('auditoria.creadoEn >= :fechaInicio', { fechaInicio })
                .andWhere('auditoria.creadoEn <= :fechaFin', { fechaFin: fechaFinAjustada });
        }

        const auditorias = await query.getMany();

        if (auditorias.length === 0) {
            throw new NotFoundException(new MessageDto('No hay auditorias con los filtros especificados'));
        }

        return auditorias;
    }


    //LISTAR TODAS LAS AUDITORIAS POR NOMBRE Y APELLIDOS DEL FUNCIONARIO
    async findAllAuditoriaNomApel(usu_nombre_apellido: string): Promise<AuditoriaRegistroEntity[]> {
        const usu_nombres = usu_nombre_apellido.trim()
        console.log(usu_nombre_apellido)

        const aduditoria = await this.auditoria_registroRepository.createQueryBuilder('auditoria')
            .where('CONCAT(auditoria.usu_nombre, " ", auditoria.usu_apellido) LIKE :usu_nombres', { usu_nombres: `%${usu_nombres}%` })
            .getMany();

        return aduditoria

    }



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
