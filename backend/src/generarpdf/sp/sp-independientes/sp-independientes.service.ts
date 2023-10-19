import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ActaSpIndependientePdfEntity } from './sp-ind-acta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ActaSpIndependientePdfRepository } from './sp-ind-acta.repository';
import { MessageDto } from 'src/common/message.dto';
import { IndActaDto } from 'src/generarpdf/sp/dto/sp-ind-acta.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { PayloadInterface } from 'src/auth/payload.interface';
import { EvaluacionIndependientesRepository } from 'src/sp/sp_ind/evaluacion-independientes.repository';
import { EvaluacionIndependientesEntity } from 'src/sp/sp_ind/evaluacion-independientes.entity';
import { EvaluacionIndependientesDto } from 'src/sp/sp_ind/dto/evaluacion-independientes.dto';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { EtapaInd } from 'src/sp/sp_ind/etapaind.entity';
import { EtapaIndRepository } from 'src/sp/sp_ind/etapaind.repository';
import { AuditoriaActualizacionService } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.service';
import { CalificacionindService } from 'src/sp/sp_ind/calificacionind/calificacionind.service';
import { join } from 'path';

const PDFDocument = require('pdfkit-table')

@Injectable()
export class SpIndependientesService {
    constructor(
        @InjectRepository(ActaSpIndependientePdfEntity)
        private readonly actaSpIndependientePdfRepository: ActaSpIndependientePdfRepository,
        @InjectRepository(EvaluacionIndependientesEntity)
        private readonly evaluacionIndependientesRepository: EvaluacionIndependientesRepository,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(EtapaInd)
        private readonly etapaIndependientesRepository: EtapaIndRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService,
        private readonly auditoria_actualizacion_services: AuditoriaActualizacionService,
        @Inject(CalificacionindService)
        private readonly calificacionindService: CalificacionindService,
    ) { }

    //LISTAR TODAS LAS ACTAS SP INDEPENDIENTE
    async getallActas(): Promise<ActaSpIndependientePdfEntity[]> {
        const indep = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
            .select(['acta'])
            .getMany()
        if (indep.length === 0) throw new NotFoundException(new MessageDto('No hay Evaluaciones Realiazadas en la lista'))
        return indep;
    }

    //ENCONTRAR POR ACTA
    async findByActa(id: number): Promise<ActaSpIndependientePdfEntity> {
        const indep = await this.actaSpIndependientePdfRepository.findOne({ where: { id } });
        if (!indep) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return indep;
    }



    //ENCONTRAR POR ACTA POR FECHAS
    async findAllFromDate(date: string): Promise<ActaSpIndependientePdfEntity[]> {

        const actas = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
            .where('acta.act_creado = :date', { date })
            .getMany();
        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay Actas en esa fecha'));
        }

        return actas;
    }


    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    async findAllBusqueda(year?: number, numActa?: number, nomPresta?: string, nit?: string): Promise<ActaSpIndependientePdfEntity[]> {
        let query = this.actaSpIndependientePdfRepository.createQueryBuilder('acta');

        if (numActa) {
            query = query.where('acta.act_id = :numActa', { numActa });
        }

        if (year) {
            if (numActa) {
                query = query.andWhere('YEAR(acta.act_creado) = :year', { year });
            } else {
                query = query.orWhere('YEAR(acta.act_creado) = :year', { year });
            }
        }

        if (nomPresta) {
            query = query.orWhere('acta.act_prestador LIKE :nomPresta', { nomPresta: `%${nomPresta}%` });
        }

        if (nit) {
            query = query.orWhere('acta.act_nit LIKE :nit', { nit: `%${nit}%` });
        }

        const actas = await query.getMany();

        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay actas con los filtros especificados'));
        }

        return actas;
    }



    /*CREACIÓN SP INDEPENDIENTE ACTA PDF */
    async create(payloads: { dto: IndActaDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;

        try {
            const acta_sicpdf = this.actaSpIndependientePdfRepository.create(dto);
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

            const year = new Date().getFullYear().toString();

            await this.actaSpIndependientePdfRepository.save(acta_sicpdf);

            const acta_ultima = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
                .addSelect('acta.id')
                .orderBy('acta.act_id', 'DESC')
                .getOne();

            //CONSULTAR LA ULTIMA ACTA QUE SE ASIGNARA A LA EVALUACION
            const acta = await this.actaSpIndependientePdfRepository.findOne({ where: { id: acta_ultima.id } })

            //ASIGNAMOS LOS DATOS DE LA ACTA REGISTRADA PARA CONSTRUIR EL DTO DE EVALUACION-INDEPENDIENTES
            const eva_creado = acta_ultima.act_creado;  //Fecha de creación del acta
            const eva_acta_prestador = acta_ultima.act_cod_prestador; // Valor del ID del prestador

            //CONSULTAR EL PRESTADOR QUE TIENE EL ACTA
            const prestador = await this.prestadorRepository.findOne({ where: { pre_cod_habilitacion: eva_acta_prestador } })

            //ASIGNAMOS LOS DATOS AL DTO
            const evaluacionDto: EvaluacionIndependientesDto = {
                eva_creado
            }

            //CREAMOS EL DTO
            const evaluacion_ind = await this.evaluacionIndependientesRepository.create(evaluacionDto)

            //ASIGNACION DE FORANEA ACTA UNO A UNO
            evaluacion_ind.eval_acta_ind = acta
            //ASIGNACION DE FORANEA PRESTADOR UNO A MUCHOS
            evaluacion_ind.eval_prestador = prestador

            //GUARDAMOS EN LA ENTIDAD EVALUACION-INDEPENDIENTES DE LA BASE DATOS
            await this.evaluacionIndependientesRepository.save(evaluacion_ind)

            //CONSULTAR LA ÚLTIMA EVALUACIÓN EXISTENTE
            const evaluacion_ultima = await this.evaluacionIndependientesRepository.createQueryBuilder('evaluacion')
                .addSelect('evaluacion.eva_id')
                .orderBy('evaluacion.eva_id', 'DESC')
                .getOne();

            //GUARDAR LA RELACIÓN ENTRE EVALUACIÓN Y ETAPAS
            await this.evaluacionIndependientesRepository.save(evaluacion_ultima);

            //ASIGNAR LA AUDITORIA DEL ACTA CREADA
            await this.auditoria_registro_services.logCreateActaSpIndep(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                dto.act_id,
                year,
                dto.act_prestador,
                dto.act_cod_prestador
            );

            return { error: false, message: 'El acta ha sido creada' };

        } catch (error) {
            console.log(error)
            // Devuelve un mensaje de error apropiado
            return { error: true, message: 'Error al crear el acta. Por favor, inténtelo de nuevo.' };
        }
    }


    //CERRAR ACTA SP
    async cerrarActa(id: number, payload: { tokenDto: TokenDto }): Promise<any> {

        const { tokenDto } = payload;

        try {
            const acta = await this.findByActa(id);
            console.log(acta)

            if (!acta) {
                throw new NotFoundException(new MessageDto('El Acta no existe'));
            }

            acta.act_estado = '0'

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

            const year = new Date().getFullYear().toString();

            await this.actaSpIndependientePdfRepository.save(acta);
            await this.auditoria_registro_services.logCierreActaSpInd(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                acta.act_id,
                year,
                acta.act_prestador,
                acta.act_cod_prestador
            );

            return new MessageDto('El Acta ha sido Cerrada');
        } catch (error) {
            // Devuelve un mensaje de error apropiado
            return { error: true, message: 'Ocurrió un error al cerrar el Acta' };
        }
    }


    //ACTUALIZAR CRITERIOS SP INDEPENDIENTE
    async updateActaInd(id: number, payload: { dto: IndActaDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const ips = await this.findByActa(id);
        if (!ips) {
            throw new NotFoundException(new MessageDto('El Acta no existe'))
        }
        dto.act_id ? ips.act_id = dto.act_id : ips.act_id = ips.act_id;
        dto.act_visita_inicial ? ips.act_visita_inicial = dto.act_visita_inicial : ips.act_visita_inicial = ips.act_visita_inicial;
        dto.act_visita_seguimiento ? ips.act_visita_seguimiento = dto.act_visita_seguimiento : ips.act_visita_seguimiento = ips.act_visita_seguimiento;
        dto.act_fecha_inicial ? ips.act_fecha_inicial = dto.act_fecha_inicial : ips.act_fecha_inicial = ips.act_fecha_inicial;
        dto.act_fecha_final ? ips.act_fecha_final = dto.act_fecha_final : ips.act_fecha_final = ips.act_fecha_final;
        dto.act_municipio ? ips.act_municipio = dto.act_municipio : ips.act_municipio = ips.act_municipio;
        dto.act_prestador ? ips.act_prestador = dto.act_prestador : ips.act_prestador = ips.act_prestador;
        dto.act_nit ? ips.act_nit = dto.act_nit : ips.act_nit = ips.act_nit;
        dto.act_direccion ? ips.act_direccion = dto.act_direccion : ips.act_direccion = ips.act_direccion;
        dto.act_barrio ? ips.act_barrio = dto.act_barrio : ips.act_barrio = ips.act_barrio;
        dto.act_telefono ? ips.act_telefono = dto.act_telefono : ips.act_telefono = ips.act_telefono;
        dto.act_email ? ips.act_email = dto.act_email : ips.act_email = ips.act_email;
        dto.act_representante ? ips.act_representante = dto.act_representante : ips.act_representante = ips.act_representante;
        dto.act_cod_prestador ? ips.act_cod_prestador = dto.act_cod_prestador : ips.act_cod_prestador = ips.act_cod_prestador;
        dto.act_obj_visita ? ips.act_obj_visita = dto.act_obj_visita : ips.act_obj_visita = ips.act_obj_visita;
        dto.act_nombre_funcionario ? ips.act_nombre_funcionario = dto.act_nombre_funcionario : ips.act_nombre_funcionario = ips.act_nombre_funcionario;
        dto.act_cargo_funcionario ? ips.act_cargo_funcionario = dto.act_cargo_funcionario : ips.act_cargo_funcionario = ips.act_cargo_funcionario;
        dto.act_nombre_prestador ? ips.act_nombre_prestador = dto.act_nombre_prestador : ips.act_nombre_prestador = ips.act_nombre_prestador;
        dto.act_cargo_prestador ? ips.act_cargo_prestador = dto.act_cargo_prestador : ips.act_cargo_prestador = ips.act_cargo_prestador;
        dto.act_firma_prestador ? ips.act_firma_prestador = dto.act_firma_prestador : ips.act_firma_prestador = ips.act_firma_prestador;
        dto.act_firma_funcionario ? ips.act_firma_funcionario = dto.act_firma_funcionario : ips.act_firma_funcionario = ips.act_firma_funcionario;


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

        const year = new Date().getFullYear().toString();

        await this.actaSpIndependientePdfRepository.save(ips);
        await this.auditoria_actualizacion_services.logUpdateActaSpIndep(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.act_id,
            year,
            dto.act_prestador,
            dto.act_cod_prestador
        );

        return new MessageDto(`El acta ha sido Actualizada`);

    }

    //ÚLTIMA ACTA REGISTRADA
    async getLastestActa(): Promise<ActaSpIndependientePdfEntity> {
        const anioActual: number = new Date().getFullYear();

        const acta = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
            .addSelect('acta.act_id')
            .orderBy('acta.act_id', 'DESC')
            .getOne();

        if (!acta) {
            const newActa: ActaSpIndependientePdfEntity = new ActaSpIndependientePdfEntity();
            newActa.act_id = 1;
            return newActa;
        }

        acta.act_creado = new Date(acta.act_creado);

        if (acta.act_creado.getFullYear() === anioActual) {
            acta.act_id++;
        } else {
            acta.act_id = 1;
        }


        return acta;
    }

    //GENERACIÓN DE REPORTE DE CUMPLIMIENTO DEL PROGRAMA DE SEGURIDAD DEL PACIENTE PROFESIONALES INDEPENDIENTES
    //La función para generar el PDF con las tablas ajustadas
    async generarPdfEvaluacionInd(id: number): Promise<Buffer> {

        const titulo_uno = await this.calificacionindService.getallcriterioetapa(id);
        const titulo_dos = await this.calificacionindService.getallcriterioxtitulodos(id);
        const titulo_tres = await this.calificacionindService.getallcriterioxtitulotres(id);
        const titulo_cuatro = await this.calificacionindService.getallcriterioxtitulocuatro(id);

        let nombreprestador="";
        let cargoprestador="";
        let nombrefuncionario="";
        let cargofuncionario="";

        let totalCalificacionesEtapa1 = 0
        let totalCalificacionesCountEtapa1 = 0; // Contador para la cantidad total de calificaciones
        let totalCalificacionesEtapa2 = 0
        let totalCalificacionesCountEtapa2 = 0; // Contador para la cantidad total de calificaciones
        let totalCalificacionesEtapa3 = 0
        let totalCalificacionesCountEtapa3 = 0; // Contador para la cantidad total de calificaciones
        let totalCalificacionesEtapa4 = 0
        let totalCalificacionesCountEtapa4 = 0; // Contador para la cantidad total de calificaciones

        let promedio=0;
        let promedio2=0;
        let promedio3=0;
        let promedio4=0;

        let total=0;

        const pdfBuffer: Buffer = await new Promise(resolve => {
            const doc = new PDFDocument({
                size: 'LETTER',
                bufferPages: true,
                autoFirstPage: false,
            });

            let pageNumber = 0;

            doc.on('pageAdded', () => {
                pageNumber++;
                let bottom = doc.page.margins.bottom;

                doc.image(join(process.cwd(), "src/uploads/EncabezadoEvaluacionSic.png"), doc.page.width - 550, 20, { fit: [500, 500], align: 'center' })
                doc.moveDown()

                doc.page.margins.top = 115;
                doc.page.margins.bottom = 0;
                doc.font("Helvetica").fontSize(14);
                doc.text(
                    'Pág. ' + pageNumber,
                    0.5 * (doc.page.width - 100),
                    doc.page.height - 50,
                    {
                        width: 100,
                        align: 'center',
                        lineBreak: false,
                    }
                );
                doc.page.margins.bottom = bottom;

            });

            doc.addPage();
            doc.text('', 90, 110);
            doc.font('Helvetica-Bold').fontSize(14);
            doc.text('CUMPLIMIENTO DEL PROGRAMA DE SEGURIDAD DEL PACIENTE');
            doc.text('', 185, 130);
            doc.font('Helvetica-Bold').fontSize(14);
            doc.text('PROFESIONALES INDEPENDIENTES');
            // doc.moveDown();
            // doc.font('Helvetica').fontSize(14);

            doc.text('', 50, 110);
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            // doc.moveDown();
            // doc.moveDown();
            // doc.moveDown();

            // doc.fontSize(24);
            function hayEspacioSuficiente(alturaContenido: number) {
                const margenInferior = doc.page.margins.bottom;
                const alturaPagina = doc.page.height;
                const espacioRestante = alturaPagina - margenInferior - alturaContenido;
                return espacioRestante >= 0;
            }

            titulo_uno.forEach(prestador=>{
                nombreprestador= prestador.cal_evaluacion_independientes.eval_acta_ind.act_nombre_prestador;
                nombrefuncionario= prestador.cal_evaluacion_independientes.eval_acta_ind.act_nombre_funcionario;
                cargoprestador= prestador.cal_evaluacion_independientes.eval_acta_ind.act_cargo_prestador;
                cargofuncionario= prestador.cal_evaluacion_independientes.eval_acta_ind.act_cargo_funcionario;
            })
            doc.text(nombreprestador)

            // Agregar las tablas a las páginas
            if (titulo_uno.length) {
                let rows_elements = [];

                titulo_uno.forEach(item => {

                    totalCalificacionesEtapa1 += item.cal_nota
                    totalCalificacionesCountEtapa1++; // Incrementar el contador

                    var temp_list = [item.criterio_cal.cri_id, item.criterio_cal.cri_nombre, '            ' + item.cal_nota, item.criterio_cal.cri_verificacion, item.cal_observaciones];
                    rows_elements.push(temp_list)
                })

                const tableOptions = {
                    columnsSize: [10, 210, 72, 65, 175],
                    headerAlign: 'center',
                    align: 'center',
                    rowHeight: 15,

                };
                const table = {
                    title: "COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE",
                    headers: ["", "CRITERIOS", "CALIFICACIÓN", "VERIFICACIÓN", "OBSERVACIONES"],
                    rows: rows_elements

                };


                doc.moveDown();
                // Verificar si hay suficiente espacio en la página actual para la tabla
                if (!hayEspacioSuficiente(tableOptions.rowHeight * rows_elements.length)) {
                    doc.addPage(); // Agregar una nueva página si no hay suficiente espacio
                    pageNumber++; // Incrementar el número de página
                }

                doc.table(table, tableOptions);
                // Calcular el promedio
                promedio = totalCalificacionesEtapa1 / totalCalificacionesCountEtapa1;
                
            }
           

            if (titulo_dos.length) {
                let rows_elements = [];
                titulo_dos.forEach(item => {
                    totalCalificacionesEtapa2 += item.cal_nota
                    totalCalificacionesCountEtapa2++; // Incrementar el contador
                    var temp_list = [item.criterio_cal.cri_id, item.criterio_cal.cri_nombre, '            ' + item.cal_nota, item.criterio_cal.cri_verificacion, item.cal_observaciones];
                    rows_elements.push(temp_list)
                })

                const tableOptions = {
                    columnsSize: [10, 210, 72, 65, 175],
                    headerAlign: 'center',
                    align: 'center',
                    rowHeight: 15,
                };
                const table2 = {
                    title: "CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE",
                    headers: ["", "CRITERIOS", "CALIFICACION", "VERIFICACION", "OBSERVACIONES"],
                    rows: rows_elements
                };

                doc.moveDown();
                // Verificar si hay suficiente espacio en la página actual para la tabla
                if (!hayEspacioSuficiente(tableOptions.rowHeight * rows_elements.length)) {
                    doc.addPage(); // Agregar una nueva página si no hay suficiente espacio
                    pageNumber++; // Incrementar el número de página
                }

                doc.table(table2, tableOptions);
                // Calcular el promedio
                promedio2 = totalCalificacionesEtapa2/ totalCalificacionesCountEtapa2;
                
            }

            // doc.moveDown();
            // doc.moveDown();

            if (titulo_tres.length) {
                let rows_elements = [];
                titulo_tres.forEach(item => {
                    totalCalificacionesEtapa3 += item.cal_nota
                    totalCalificacionesCountEtapa3++; // Incrementar el contador
                    var temp_list = [item.criterio_cal.cri_id, item.criterio_cal.cri_nombre, '            ' + item.cal_nota, item.criterio_cal.cri_verificacion, item.cal_observaciones];
                    rows_elements.push(temp_list)
                })

                const tableOptions = {
                    columnsSize: [10, 210, 72, 65, 175],
                    headerAlign: 'center',
                    align: 'center',
                    rowHeight: 15,
                };
                const table3 = {
                    title: "REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO",
                    headers: ["", "CRITERIOS", "CALIFICACION", "VERIFICACION", "OBSERVACIONES"],
                    rows: rows_elements
                };
                doc.moveDown();
                // Verificar si hay suficiente espacio en la página actual para la tabla
                if (!hayEspacioSuficiente(tableOptions.rowHeight * rows_elements.length)) {
                    doc.addPage(); // Agregar una nueva página si no hay suficiente espacio
                    pageNumber++; // Incrementar el número de página
                }
                doc.table(table3, tableOptions);
                // Calcular el promedio
                promedio3 = totalCalificacionesEtapa3 / totalCalificacionesCountEtapa3;
            
            }

            // doc.moveDown();
            // doc.moveDown();

            if (titulo_cuatro.length) {
                let rows_elements = [];
                titulo_cuatro.forEach(item => {
                    totalCalificacionesEtapa4 += item.cal_nota
                    totalCalificacionesCountEtapa4++; // Incrementar el contador
                    var temp_list = [item.criterio_cal.cri_id, item.criterio_cal.cri_nombre, '            ' + item.cal_nota, item.criterio_cal.cri_verificacion, item.cal_observaciones];
                    rows_elements.push(temp_list)
                })

                const tableOptions = {
                    columnsSize: [10, 210, 72, 65, 175],
                    headerAlign: 'center',
                    align: 'center',
                    rowHeight: 15,
                };
                const table4 = {
                    title: "DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO",
                    headers: ["", "CRITERIOS", "CALIFICACION", "VERIFICACION", "OBSERVACIONES"],
                    rows: rows_elements
                };
                doc.moveDown();
                // Verificar si hay suficiente espacio en la página actual para la tabla
                if (!hayEspacioSuficiente(tableOptions.rowHeight * rows_elements.length)) {
                    doc.addPage(); // Agregar una nueva página si no hay suficiente espacio
                    pageNumber++; // Incrementar el número de página
                }
                doc.table(table4, tableOptions);
                // Calcular el promedio
                promedio4 = totalCalificacionesEtapa4 / totalCalificacionesCountEtapa4;
               

                
            }

            const tableOptions = {
                columnsSize: [ 400, 50],
                headerAlign: 'center',
                align: 'center',
                rowHeight: 15,
            };
            total=((promedio+promedio2+promedio3+promedio4)/4)
            const tablecount = {
                    title: "RANGO DE IMPLEMENTACION",
                    headers: [ "CRITERIOS", "TOTAL"],
                    rows:[["COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE",'    '+promedio.toFixed(2)],
                        ["CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE",'    '+promedio2.toFixed(2)],
                        ["REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO",'    '+promedio3.toFixed(2)],
                        ["DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO",'    '+promedio4.toFixed(2)],
                        ["RESULTADOS",'    '+total.toFixed(2)]]

                };


                doc.moveDown();

                doc.table(tablecount, tableOptions);

                doc.moveDown();

                const tableOptions2 = {
                    columnsSize: [ 225, 225],
                    headerAlign: 'center',
                    align: 'center',
                    rowHeight: 15,
                };

                const tablefirmas = {
                        headers: [ "PROFESIONAL INDEPENDIENTE", "POR SECRETARIA DE SALUD DEPARTAMENTAL"],
                        rows:[[`NOMBRE: ${nombreprestador}`,`NOMBRE: ${nombrefuncionario}`],
                            [`CARGO: ${cargoprestador}`,`CARGO: ${cargofuncionario}`],
                            ["FIRMA","FIRMA  :"]]
                    };
    
    
                    doc.moveDown();
    
                    doc.table(tablefirmas, tableOptions2);

            const buffer = [];
            doc.on('data', buffer.push.bind(buffer));
            doc.on('end', () => {
                const data = Buffer.concat(buffer);
                resolve(data);
            });

            doc.end();
        });

        return pdfBuffer;
    }
}
