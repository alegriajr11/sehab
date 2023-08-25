import { Injectable } from '@angular/core';
import { TokenDto } from 'src/app/models/token.dto';
import SignaturePad from 'signature_pad';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ActapdfService } from './actapdf.service';
import { ActaSicPdfDto } from 'src/app/models/actaSicpdf.dto';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;




@Injectable({
  providedIn: 'root'
})
export class GenerarPdfActaService {

  //DTO DEL PDF ACTA
  actaPdf: ActaSicPdfDto = null;
  listaVacia: any = undefined;


  act_id: number;
  act_visita_inicial: string;
  act_visita_seguimiento: string;
  act_fecha_inicial: string;
  act_fecha_final: string;
  act_municipio: string
  act_prestador: string
  act_nit: string;
  act_direccion: string
  act_barrio: string
  act_telefono: string
  act_email: string
  act_sede_principal: string
  act_sede_localidad: string
  act_sede_direccion: string
  act_representante: string
  act_cod_prestador: string
  act_cod_sede: string
  act_obj_visita: string
  act_nombre_funcionario: string
  act_cargo_funcionario: string
  act_firma_funcionario: string
  act_nombre_prestador: string
  act_cargo_prestador: string
  act_firma_prestador: string

  constructor(
    private actapdfService: ActapdfService
  ) { }
  ngOnInit(): void {
  }

  //GENERAR PDF ULTIMA ACTA CREADA
  async ActaPdf(id_acta: number): Promise<void> {

    this.actapdfService.oneActaSic(id_acta).subscribe(
      async data => {
        this.actaPdf = data;

        // Asignar los datos del actaPdf a las propiedades correspondientes
        this.act_id = this.actaPdf.act_id;
        this.act_visita_inicial = this.actaPdf.act_visita_inicial;
        this.act_visita_seguimiento = this.actaPdf.act_visita_seguimiento;
        this.act_fecha_inicial = this.actaPdf.act_fecha_inicial;
        this.act_fecha_final = this.actaPdf.act_fecha_final;
        this.act_municipio = this.actaPdf.act_municipio;
        this.act_prestador = this.actaPdf.act_prestador;
        this.act_nit = this.actaPdf.act_nit;
        this.act_direccion = this.actaPdf.act_direccion;
        this.act_barrio = this.actaPdf.act_barrio;
        this.act_telefono = this.actaPdf.act_telefono;
        this.act_email = this.actaPdf.act_email;
        this.act_representante = this.actaPdf.act_representante
        this.act_cod_prestador = this.actaPdf.act_cod_prestador
        this.act_cod_sede = this.actaPdf.act_cod_sede
        this.act_obj_visita = this.actaPdf.act_obj_visita
        this.act_nombre_funcionario = this.actaPdf.act_nombre_funcionario
        this.act_cargo_funcionario = this.actaPdf.act_cargo_funcionario
        this.act_firma_funcionario = this.actaPdf.act_firma_funcionario
        this.act_nombre_prestador = this.actaPdf.act_nombre_prestador
        this.act_cargo_prestador = this.actaPdf.act_cargo_prestador
        this.act_firma_prestador = this.actaPdf.act_firma_prestador

        //GENERACIÓN ACTA PDF
        const doc = new jsPDF()
        var imgEncabezado = 'assets/img/encabezadoSic.png'
        var marca_agua = 'assets/img/marcaAguaSic.png'
        doc.addImage(imgEncabezado, 'PNG', 23.5, 4, 160, 25);


        doc.setFontSize(9)
        doc.setTextColor(128, 128, 128);
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold")
        doc.text("INDICADORES PARA EL MONITOREO DE LA CALIDAD/PRESTADORES DE SERVICIOS", 24, 40);
        doc.text("ACTA DE VERIFICACION Y SEGUIMIENTO", 65, 45);

        //INCIAL DEL ACTA
        autoTable(doc, {
          margin: { top: 52 },
          columnStyles: { acta: { halign: 'left' }, inicial: { halign: 'center' }, segumiento: { halign: 'center' } },
          body: [
            { acta: this.act_id, inicial: this.act_visita_inicial, segumiento: this.act_visita_seguimiento, feinicio: this.act_fecha_inicial, fefinal: this.act_fecha_final },
          ],
          columns: [
            { header: 'Número de acta', dataKey: 'acta' },
            { header: 'Visita Inicial', dataKey: 'inicial' },
            { header: 'Visita Seguimiento', dataKey: 'segumiento' },
            { header: 'Fecha de Inicio', dataKey: 'feinicio' },
            { header: 'Fecha Final', dataKey: 'fefinal' },
          ],
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })

        //NOMBRE PRESTADOR
        doc.text("INFORMACIÓN DEL PRESTADOR DE SERVICIOS", 60, 79);
        autoTable(doc, {
          startY: 80,
          columnStyles: { nombrePres: { halign: 'left' } },
          body: [
            { nombrePres: this.act_prestador },
          ],
          columns: [
            { header: 'Nombre:', dataKey: 'nombrePres' },
          ],
          tableWidth: 'auto',
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })

        //NIT, MUNICIPIO, DIRECCION PRESTADOR
        autoTable(doc, {
          startY: 98,
          columnStyles: { nit: { halign: 'left' } },
          body: [
            { nit: this.act_nit, municipio: this.act_municipio, direccion: this.act_direccion },
          ],
          columns: [
            { header: 'Nit:', dataKey: 'nit' },
            { header: 'Municipio:', dataKey: 'municipio' },
            { header: 'Dirección:', dataKey: 'direccion' },
          ],
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })

        //BARRIO, TELEFONO, EMAIL
        autoTable(doc, {
          startY: 118,
          columnStyles: { nit: { halign: 'left' } },
          body: [
            { barrio: this.act_barrio, telefono: this.act_telefono, email: this.act_email },
          ],
          columns: [
            { header: 'Barrio:', dataKey: 'barrio' },
            { header: 'Telefono:', dataKey: 'telefono' },
            { header: 'Email:', dataKey: 'email' },
          ],
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })

        //MENSAJE PARA SEDE PRINCIPAL
        autoTable(doc, {
          startY: 140,
          columnStyles: { mensaje: { halign: 'left' } },
          body: [
            { mensaje: 'SI NO ES SEDE PRINCIPAL IDENTIFIQUE A CONTINUACION LA UBICACIÓN DE LA SEDE PRINCIPAL' },
          ],
          columns: [
            { header: '', dataKey: 'mensaje' },
          ],
          tableWidth: 'auto',
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })

        //SEDE PRINCIPAL
        autoTable(doc, {
          startY: 150,
          columnStyles: { sede: { halign: 'left' } },
          body: [
            { sede: this.act_sede_principal, localidad: this.act_sede_localidad, direccionSede: this.act_sede_direccion },
          ],
          columns: [
            { header: 'Sede Principal:', dataKey: 'sede' },
            { header: 'Localidad:', dataKey: 'localidad' },
            { header: 'Dirección:', dataKey: 'direccionSede' },

          ],
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })



        //REPRESENTANTE LEGAL, CODIGO PRESTADOR, CODIGO SEDE VISITADA
        autoTable(doc, {
          startY: 170,
          columnStyles: { sede: { halign: 'left' } },
          body: [
            { representante: this.act_representante, codpres: this.act_cod_prestador, codsede: this.act_cod_sede },
          ],
          columns: [
            { header: 'Representante Legal:', dataKey: 'representante' },
            { header: 'Código Prestador:', dataKey: 'codpres' },
            { header: 'Código Sede Visitada:', dataKey: 'codsede' },

          ],
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })

        //OBJETO DE LA VISITA
        autoTable(doc, {
          startY: 190,
          columnStyles: { objeto: { halign: 'left' } },
          body: [
            { objeto: this.act_obj_visita },
          ],
          columns: [
            { header: 'Objeto de la Visita:', dataKey: 'objeto' },
          ],
          tableWidth: 'auto',
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })


        //MENSAJE FIRMAS POR SECRETARIA DE SALUD
        autoTable(doc, {
          startY: 219,
          headStyles: {
            fillColor: [220, 220, 220],
            textColor: [0, 0, 0],
            halign: 'center'
          },
          columns: [
            { header: 'POR SECRETARIA DE SALUD DEPARTAMENTAL', dataKey: 'mensaje' },
          ],
          tableWidth: 'auto',
        })

        //NOMBRE USUARIO1 Y 2, CARGO USUARIO1 Y 2 Y FIRMA1 Y 2
        autoTable(doc, {
          startY: 227,
          columnStyles: { sede: { halign: 'left' } },

          body: [
            { nombre: this.act_nombre_funcionario, cargo: this.act_cargo_funcionario, firma: '' },
          ],
          columns: [
            { header: 'Nombre:', dataKey: 'nombre' },
            { header: 'Cargo:', dataKey: 'cargo' },
            { header: 'Firma:', dataKey: 'firma' },

          ],
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })


        autoTable(doc, {
          startY: 252,
          headStyles: {
            fillColor: [220, 220, 220],
            textColor: [0, 0, 0],
            halign: 'center'
          },
          columns: [
            { header: 'POR PRESTADOR DE SERVICIO DE SALUD', dataKey: 'mensaje' },
          ],
          tableWidth: 'auto',
        })

        //NOMBRE PRESTADOR 1 Y 2, CARGO PRESTADOR 1 Y 2 Y FIRMA1 Y 2
        autoTable(doc, {
          startY: 260,
          columnStyles: { sede: { halign: 'left' } },

          body: [
            { nombre: this.act_nombre_prestador, cargo: this.act_cargo_prestador, firma: '' },
          ],
          columns: [
            { header: 'Nombre:', dataKey: 'nombre' },
            { header: 'Cargo:', dataKey: 'cargo' },
            { header: 'Firma:', dataKey: 'firma' },

          ],
          headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
          },
          styles: {
            fontSize: 10
          }
        })

        // doc.addImage(marca_agua, 'PNG', -27, 33, 280, 255);
        doc.addImage(marca_agua, 'PNG', -10, 10, 140, 115);
        doc.addImage(marca_agua, 'PNG', -10, 100, 140, 115);
        doc.addImage(marca_agua, 'PNG', 5, 168, 140, 115);
        doc.addImage(marca_agua, 'PNG', 80, -14, 140, 115);
        doc.addImage(marca_agua, 'PNG', 100, 49, 140, 115);
        doc.addImage(marca_agua, 'PNG', 80, 168, 140, 115);


        // Convertir la firma usuario de base64 a Uint8Array
        //doc.addImage(firmaUint8ArrayPrestador, 'PNG', 165, 265, 30, 10.25)
        const firmaDataFuncionario = atob(this.act_firma_funcionario.split(',')[1]);
        const firmaUint8ArrayFuncionario = new Uint8Array(firmaDataFuncionario.length);
        for (let i = 0; i < firmaDataFuncionario.length; i++) {
          firmaUint8ArrayFuncionario[i] = firmaDataFuncionario.charCodeAt(i);
        }
        doc.addImage(firmaUint8ArrayFuncionario, 'PNG', 165, 233, 30, 10.25)

        // Convertir la firma prestador de base64 a Uint8Array
        const firmaDataPrestador = atob(this.act_firma_prestador.split(',')[1]);
        const firmaUint8ArrayPrestador = new Uint8Array(firmaDataPrestador.length);
        for (let i = 0; i < firmaDataPrestador.length; i++) {
          firmaUint8ArrayPrestador[i] = firmaDataPrestador.charCodeAt(i);
        }
        doc.addImage(firmaUint8ArrayPrestador, 'PNG', 165, 265, 30, 10.25)


        doc.save(this.act_cod_prestador + 'sic')
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

}
