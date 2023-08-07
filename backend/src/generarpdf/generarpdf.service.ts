import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { join, resolve } from 'path';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as fs from 'fs';
import { CriteriosicCumplimientoService } from 'src/sic/criteriosic-cumplimiento/criteriosic-cumplimiento.service';
import { CriterioEstandarSicEntity } from 'src/sic/criteriosEstandar.entity';
import { CriterioEstandarSicRepository } from 'src/sic/criteriosEstandar.repository';
import { stringify } from 'querystring';
import { CalificacionpamecService } from 'src/pamec/calificacionpamec/calificacionpamec.service';
import { CriterioindService } from 'src/sp/sp_ind/criterioind/criterioind.service';


const PDFDocument = require('pdfkit-table')



@Injectable()
export class GenerarpdfService {



    constructor(
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: UsuarioRepository,
        @Inject(UsuarioService)
        private readonly usuarioService: UsuarioService,
        @Inject(CriteriosicCumplimientoService)
        private readonly cumplimientoService: CriteriosicCumplimientoService,
        @Inject(CriterioindService)
        private readonly criterioindService: CriterioindService

    ) { }

    //GENERACIÓN DE REPORTE DE USUSARIOS CON SU RESPECTIVO ROL Y MOSTRANDO SU ESTADO
    async generarPdfUsuarios(): Promise<Buffer> {
        const usuario = await this.usuarioService.getall()

        const pdfBuffer: Buffer = await new Promise(resolve => {

            const doc = new PDFDocument(
                {
                    size: "LETTER",
                    bufferPages: true,
                    autoFirstPage: false,
                })

            let pageNumber = 0;
            doc.on('pageAdded', () => {
                pageNumber++
                let bottom = doc.page.margins.bottom;

                doc.image(join(process.cwd(), "src/uploads/logoSecretaria.png"), doc.page.width - 160, 10, { fit: [120, 70], align: 'center' })
                doc.image(join(process.cwd(), "src/uploads/logoGobernacion.png"), doc.page.width - 575, 1, { fit: [110, 50], align: 'center' })
                doc.font("Helvetica-Bold").fontSize(5);
                doc.text('NIT. 800.094.164-4', doc.page.width - 540, 50.5, { align: 'left' })

                doc.moveDown()
                doc.moveTo(50, 55)
                    .lineTo(doc.page.width - 50, 55)
                    .stroke();

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
                    })
                doc.page.margins.bottom = bottom;
            })


            doc.addPage();
            doc.text('', 50, 70);
            doc.font("Helvetica-Bold").fontSize(20);
            doc.text("Lista de Usuarios SOGCS");
            doc.moveDown();
            doc.font("Helvetica").fontSize(16);
            doc.text('', 50, 70)

            const date = new Date();
            doc.fontSize(10).text(date.toLocaleDateString().toString(), {
                width: doc.page.width - 100,
                align: 'right'
            })

            doc.moveDown();
            doc.text('', 50, 70)
            doc.fontSize(24);
            doc.moveDown();
            doc.moveDown();
            doc.font("Helvetica-Bold").fontSize(16);
            doc.text("USUARIOS", {
                width: doc.page.width - 100,
                align: 'center'
            });
            doc.moveDown();


            let rows_elements = [];
            usuario.forEach(item => {
                if (item.usu_estado === 'true') {
                    item.usu_estado = 'Activo'
                } else if (item.usu_estado === 'false') {
                    item.usu_estado = 'Inactivo'
                }
                let r
                item.roles.forEach(rol => {
                    r = rol.rol_nombre
                })


                var temp_list = [item.usu_nombre, item.usu_apellido, item.usu_email, item.usu_nombreUsuario, item.usu_estado, r];
                rows_elements.push(temp_list);
            });


            const table = {
                headers: ["Nombres", "Apellidos", "Email", "Nombre de Usuario", "Estado", "Rol"],
                rows: rows_elements
            };




            doc.table(table, {
                columnsSize: [100, 100, 120, 100, 50, 50],
            });


            const buffer = []
            doc.on('data', buffer.push.bind(buffer))
            doc.on('end', () => {
                const data = Buffer.concat(buffer)
                resolve(data)
            })

            doc.end()

            
        })


        return pdfBuffer;

    }
    // FIN DEL METODO - GENERACIÓN DE REPORTE DE USUSARIOS CON SU RESPECTIVO ROL Y MOSTRANDO SU ESTADO

    //METODO CREACIÓN DE REPORTE DE EVALUACIÓN SIC
    async generarPdfEvaluacionEstandarSic(): Promise<Buffer> {
        const cumplimiento = await this.cumplimientoService.getalll()
        const cumplimiento_indicador = await this.cumplimientoService.getallcumple()
        const pdfBuffer: Buffer = await new Promise(resolve => {   
            const doc = new PDFDocument(
                {
                    size: "LETTER",
                    bufferPages: true,
                    autoFirstPage: false,
                })

            let pageNumber = 0;
            doc.on('pageAdded', () => {
                pageNumber++
                let bottom = doc.page.margins.bottom;

                doc.image(join(process.cwd(), "src/uploads/EncabezadoEvaluacionSic.png"), doc.page.width - 550, 30, { fit: [500, 500], align: 'center' })
                doc.font("Helvetica-Bold").fontSize(5);


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
                    })
                doc.page.margins.bottom = bottom;
            })


            doc.addPage();
            doc.text('', 50, 130);
            doc.font("Helvetica-Bold").fontSize(14);
            doc.text("INDICADORES PARA EL MONITOREO DE LA CALIDAD/PRESTADORES DE SERVICIOS ACTA DE VERIFICACION Y SEGUIMIENTO");
            doc.moveDown();
            doc.font("Helvetica").fontSize(16);
            doc.text('', 50, 70)


            doc.moveDown();
            doc.text('', 50, 70)
            doc.fontSize(24);
            doc.moveDown();
            doc.moveDown();
            // doc.font("Helvetica-Bold").fontSize(16);
            // doc.text("EVALUACIÓN", {
            //     width: doc.page.width - 100,
            //     align: 'center'
            // });
            doc.moveDown();
            doc.moveDown();

            let rows_elements = [];
            cumplimiento.forEach(item=>{
                var temp_list = [item.criterioestandar_sic.crie_id,item.criterioestandar_sic.crie_nombre,item.cumpl_cumple,item.cumpl_observaciones];
                rows_elements.push(temp_list)
            })

            const table = {
                headers: ["N°", "Criterios","Cumplimiento","Observaciones"],
                rows: rows_elements
            };
            
            doc.table(table, {
                columnsSize: [20, 235, 65, 200],
                // cellPadding: 10,
                // cellAlign: 'justify',
                
            });

            doc.addPage();
            doc.text('', 50, 130);
            doc.font("Helvetica-Bold").fontSize(14);
            doc.text();
            doc.moveDown();
            doc.font("Helvetica").fontSize(16);
            doc.text('', 50, 70)


            doc.moveDown();
            doc.text('', 50, 70)
            doc.fontSize(24);
            doc.moveDown();
            doc.moveDown();
            // doc.font("Helvetica-Bold").fontSize(16);
            // doc.text("EVALUACIÓN", {
            //     width: doc.page.width - 100,
            //     align: 'center'
            // });
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
        
            let rows_elementss = [];
            let indi = [];
            cumplimiento_indicador.forEach(item2=>{
                var temp_list = [item2.criterio_sic.cri_id,item2.criterio_sic.cri_nombre,item2.cumpl_cumple,item2.cumpl_observaciones];
                var indica=item2.indicadorsic.ind_nombre
                indi.push(indica);
                rows_elementss.push(temp_list)
            })

            const table2 = {
                title:"{indi}",
                headers: ["N°", "Criterios","Cumplimiento","Observaciones"],
                rows: rows_elementss
            };
            
            doc.table(table2, {
                columnsSize: [20, 235, 65, 200],
            });
            const buffer = [] 
            doc.on('data', buffer.push.bind(buffer))
            doc.on('end', () => {
                const data = Buffer.concat(buffer)
                resolve(data)
            })

            doc.end()

            
        })

        return pdfBuffer
    }
    //FIN DEL METODO - CREACIÓN DE REPORTE DE EVALUACIÓN SIC


//GENERACIÓN DE REPORTE DE USUSARIOS CON SU RESPECTIVO ROL Y MOSTRANDO SU ESTADO
async generarPdfInd(): Promise<Buffer> {

    const titulo_uno = await this.criterioindService.getallcriterioxtitulo()
    const titulo_dos = await this.criterioindService.getallcriterioxtitulodos()
    const titulo_tres = await this.criterioindService.getallcriterioxtitulotres()
    const titulo_cuatro = await this.criterioindService.getallcriterioxtitulocuatro()
    const pdfBuffer: Buffer = await new Promise(resolve => {   
        const doc = new PDFDocument(
            {
                size: "LETTER",
                bufferPages: true,
                autoFirstPage: false,
            })

        let pageNumber = 0;
        doc.on('pageAdded', () => {
            pageNumber++
            let bottom = doc.page.margins.bottom;

            doc.image(join(process.cwd(), "src/uploads/EncabezadoEvaluacionSic.png"), doc.page.width - 550, 30, { fit: [500, 500], align: 'center' })
            doc.font("Helvetica-Bold").fontSize(5);


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
                })
            doc.page.margins.bottom = bottom;
        })


        doc.addPage();
        doc.text('', 50, 130);
        doc.font("Helvetica-Bold").fontSize(14);
        doc.text("");
        doc.moveDown();
        doc.font("Helvetica").fontSize(16);
        doc.text('', 50, 70)


        doc.moveDown();
        doc.text('', 50, 70)
        doc.fontSize(24);
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();

        let rows_elements = [];
        titulo_uno.forEach(item=>{
            let calif 
            let obs
            item.calificacion_ind.forEach(cal=>{
                calif=cal.cal_nota
                obs=cal.cal_observaciones
            })
            var temp_list = [item.cri_id,item.cri_nombre,calif,item.cri_verificacion,obs];
            rows_elements.push(temp_list)
        })

        const table = {
            title:"COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE",
            headers: ["","CRITERIOS","CALIFICACION","VERIFICACION","OBSERVACIONES"],
            rows: rows_elements
        };
        
        doc.table(table, {
            columnsSize: [10,210, 136, 65, 200],
        });

        doc.addPage();
        doc.text('', 50, 130);
        doc.font("Helvetica-Bold").fontSize(14);
        doc.text("");
        doc.moveDown();
        doc.font("Helvetica").fontSize(16);
        doc.text('', 50, 70)


        doc.moveDown();
        doc.text('', 50, 70)
        doc.fontSize(24);
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();

        let rows_elements2 = [];
        titulo_dos.forEach(item=>{
            let calif 
            let obs
            item.calificacion_ind.forEach(cal=>{
                calif=cal.cal_nota
                obs=cal.cal_observaciones
            })
            var temp_list2 = [item.cri_id,item.cri_nombre,calif,item.cri_verificacion,obs];
            rows_elements2.push(temp_list2)
        })

        const table2 = {
            title:"CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE",
            headers: ["","CRITERIOS","CALIFICACION","VERIFICACION","OBSERVACIONES"],
            rows: rows_elements2
        };
        

        let rows_elements3 = [];
        titulo_tres.forEach(item=>{
            let calif 
            let obs
            item.calificacion_ind.forEach(cal=>{
                calif=cal.cal_nota
                obs=cal.cal_observaciones
            })
            var temp_list3 = [item.cri_id,item.cri_nombre,calif,item.cri_verificacion,obs];
            rows_elements3.push(temp_list3)
        })

        const table3 = {
            title:"REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO",
            headers: ["","CRITERIOS","CALIFICACION","VERIFICACION","OBSERVACIONES"],
            rows: rows_elements3
        };

        doc.table(table2, {
            columnsSize: [10,210, 136, 65, 200],
        });

        doc.moveDown();

        doc.table(table3, {
            columnsSize: [10,210, 136, 65, 200],
        });

        doc.addPage();
        doc.text('', 50, 130);
        doc.font("Helvetica-Bold").fontSize(14);
        doc.text("");
        doc.moveDown();
        doc.font("Helvetica").fontSize(16);
        doc.text('', 50, 70)


        doc.moveDown();
        doc.text('', 50, 70)
        doc.fontSize(24);
        doc.moveDown();

        let rows_elements4 = [];
        titulo_cuatro.forEach(item=>{
            let calif 
            let obs
            item.calificacion_ind.forEach(cal=>{
                calif=cal.cal_nota
                obs=cal.cal_observaciones
            })
            var temp_list4 = [item.cri_id,item.cri_nombre,calif,item.cri_verificacion,obs];
            rows_elements4.push(temp_list4)
        })

        const table4 = {
            title:"DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO",
            headers: ["","CRITERIOS","CALIFICACION","VERIFICACION","OBSERVACIONES"],
            rows: rows_elements4
        };
        doc.moveDown();
        doc.table(table4, {
            columnsSize: [10,210, 136, 65, 200],
        });
        
        const buffer = [] 
        doc.on('data', buffer.push.bind(buffer))
        doc.on('end', () => {
            const data = Buffer.concat(buffer)
            resolve(data)
        })

        doc.end()

        
    })

    return pdfBuffer
}
}
