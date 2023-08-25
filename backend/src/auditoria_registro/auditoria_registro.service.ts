import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { AuditoriaRegistroEntity } from './auditoria_registro.entity';
import { AuditoriaRegistroRepository } from './auditoria_registro.repository';
import * as ExcelJS from 'exceljs';


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
    async logCreateUserAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Usuario ADMIN: ${usu_nombre2}  con nombre de usuario: ${usu_nombreUsuario}  `;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario ADMIN', details, direccionIp);
    }

    //CONTROLAR LA ELIMINACIÓN DE USUARIO - ADMIN
    async logDeleteUserAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un usuario ADMIN: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario ADMIN', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE USUARIO - ADMIN
    async logUpdateUserAdmin(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un usuario ADMIN: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario ADMIN', details, direccionIp);
    }



    /** USUARIOS - ROL SIC */
    //CONTROLAR LA CREACIÓN DE UN USUARIO DE ROL SIC
    async logCreateUserSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Usuario SIC: ${usu_nombre2}  con nombre de usuario: ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario Sic', details, direccionIp);
    }

    //logUpdateUserSic
    async logUpdateUserSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un usuario SIC: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario Sic', details, direccionIp);
    }
    //logDeleteUserSic
    async logDeleteUserSic(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un usuario SIC: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario Sic', details, direccionIp);
    }


    /** USUARIOS - ROL PAMEC */
    //logCreateUserPamec
    async logCreateUserPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Usuario PAMEC: ${usu_nombre2}  con nombre de usuario: ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario PAMEC', details, direccionIp);
    }
    //logUpdateUserPamec
    async logUpdateUserPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un usuario PAMEC: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario PAMEC', details, direccionIp);
    }
    //logDeleteUserPamec
    async logDeleteUserPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un usuario PAMEC: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario PAMEC', details, direccionIp);
    }

    /** USUARIOS - ROL SP */
    //logCreateUserSP
    async logCreateUserSp(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Usuario SP: ${usu_nombre2}  con nombre de usuario: ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario SP', details, direccionIp);
    }
    //logUpdateUserSP
    async logUpdateUserSp(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un usuario SP: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario SP', details, direccionIp);
    }
    //logDeleteUserSP
    async logDeleteUserSp(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un usuario SP: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Eliminación Usuario SP', details, direccionIp);
    }





    /** USUARIOS - ROL RES */
    //logCreateUserRES
    async logCreateUserRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Usuario RES: ${usu_nombre2}  con nombre de usuario: ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Usuario RES', details, direccionIp);
    }
    //logUpdateUserRES
    async logUpdateUserRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un usuario RES: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Usuario RES', details, direccionIp);
    }
    //logDeleteUserRES
    async logDeleteUserRes(usu_nombre: string, usu_apellido: string, direccionIp: string, usu_nombre2: string, usu_nombreUsuario: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha eliminado un usuario RES: ${usu_nombre2} con nombre de usuario ${usu_nombreUsuario}`;
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
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta SIC con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion} `;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta SIC', details, direccionIp);
    }




    /*ACTAS - PAMEC*/
    //CONTROLAR LA CREACIÓN DE  PAMEC ACTA
    async logCreateActaPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Pamec Acta  con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Pamec Acta ', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE  PAMEC ACTA
    async logUpdateActaPamec(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Pamec Acta  con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion} `;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Pamec Acta ', details, direccionIp);
    }



    /*ACTAS - SP*/
    //CONTROLAR LA CREACIÓN DE  SP INDEPENDIENTE ACTA
    async logCreateActaSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta Independiente  con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta Independiente', details, direccionIp);
    }


    //CONTROLAR LA ACTUALIZACIÓN DE  SP INDEPENDIENTE ACTA
    async logUpdateActaSpIndep(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta Independiente  con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion} `;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta Independiente ', details, direccionIp);
    }



    //CONTROLAR LA CREACIÓN DE  SP IPS ACTA
    async logCreateActaSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un Acta IPS  con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion}`;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Acta IPS', details, direccionIp);
    }

    //CONTROLAR LA ACTUALIZACIÓN DE SP IPS ACTA
    async logUpdateActaSpIps(usu_nombre: string, usu_apellido: string, direccionIp: string, act_id: number, anio: string, pre_nombre: string, pre_cod_habilitacion): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha Actualizado un Acta IPS  con No. ${act_id} del año ${anio} perteneciente al prestador: ${pre_nombre} con código de habilitación: ${pre_cod_habilitacion} `;
        await this.logActivity(usu_nombre, usu_apellido, 'Actualización Acta IPS ', details, direccionIp);
    }

    /*EVALUACION CRITERIOS - APOYO DIAGNOSTICO*/
    //CONTROLAR LA CREACIÓN DEL CRITERIO DIAGNOSTICO VASCULAR
    async logCreateDiagnostico(usu_nombre: string, usu_apellido: string, direccionIp: string, anio: string): Promise<void> {
        const details = `El usuario ${usu_nombre} ${usu_apellido} ha creado un criterio diagnostico vascular con fecha ${anio} `;
        await this.logActivity(usu_nombre, usu_apellido, 'Creación Criterio Diagnostico Vascular', details, direccionIp);
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

        query = query.orderBy('auditoria.creadoEn', 'DESC');

        const auditorias = await query.getMany();

        if (auditorias.length === 0) {
            throw new NotFoundException(new MessageDto('No hay auditorias con los filtros especificados'));
        }

        return auditorias;
    }


    //LISTAR TODAS LAS AUDITORIAS POR NOMBRE Y APELLIDOS DEL FUNCIONARIO
    async findAllAuditoriaNomApel(usu_nombre_apellido: string): Promise<AuditoriaRegistroEntity[]> {
        const usu_nombres = usu_nombre_apellido.trim()

        const aduditoria = await this.auditoria_registroRepository.createQueryBuilder('auditoria')
            .where('CONCAT(auditoria.usu_nombre, " ", auditoria.usu_apellido) LIKE :usu_nombres', { usu_nombres: `%${usu_nombres}%` })
            .getMany();

        return aduditoria
    }

    async getAllAuditorias(): Promise<AuditoriaRegistroEntity[]> {
        const auditoria = await this.auditoria_registroRepository.find({ order: { id: 'DESC' }, });
        if (!auditoria.length) throw new NotFoundException(new MessageDto('No hay Auditorias en la lista'))
        return auditoria;
    }

    async generateReport(): Promise<Buffer> {

        const auditorias = await this.getAllAuditorias()

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Report');

        // Agregar encabezados
        const headers = Object.keys(auditorias[0]);
        worksheet.addRow(headers);

        // Agregar datos
        auditorias.forEach(item => {
            const row = [];
            headers.forEach(header => {
                row.push(item[header]);
            });
            worksheet.addRow(row);
        });

        // Crear el archivo Excel y guardarlo en un buffer
        const buffer = await workbook.xlsx.writeBuffer();
        return ;
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
