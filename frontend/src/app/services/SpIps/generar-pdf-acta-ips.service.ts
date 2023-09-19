import { Injectable } from '@angular/core';
import { ActaSpPdfDto } from 'src/app/models/actaSpPdf.dto';
import { ActapdfService } from '../Sic/actapdf.service';
import jsPDF from 'jspdf';
import autoTable, { Cell } from 'jspdf-autotable';
import { SharedServiceService } from '../shared-service.service';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root',
})
export class GenerarPdfActaIpsService {
  actaPdf: ActaSpPdfDto = null;
  listaVacia: any = undefined;

  //ATRIBUTOS PARA FORMAR PDF
  act_id: number;
  act_visita_inicial: string;
  act_visita_seguimiento: string;
  act_fecha_inicial: string;
  act_fecha_final: string;
  act_municipio: string;
  act_prestador: string;
  act_nit: string;
  act_direccion: string;
  act_barrio: string;
  act_telefono: string;
  act_email: string;
  act_sede_principal: string;
  act_sede_localidad: string;
  act_sede_direccion: string;
  act_representante: string;
  act_cod_prestador: string;
  act_cod_sede: string;
  act_obj_visita: string;
  act_nombre_funcionario: string;
  act_cargo_funcionario: string;
  act_firma_funcionario: string;
  act_nombre_prestador: string;
  act_cargo_prestador: string;
  act_firma_prestador: string;

  act_nombre_prestador_acompanante: string
  act_cargo_prestador_acompanante: string
  act_firma_prestador_acompanante: string

  //VARIABLES PARA ORDEN DEL DÍA
  act_fecha_orden: string
  act_hora_orden: string //Variable alamcenar hora en formato 12 horas
  act_num_oficio: string = 'OFICIO-SOGC-SSD-N°'
  act_fecha_oficio: string
  act_fecha_envio_oficio: string

  constructor(
    private actapdfService: ActapdfService,
    private usuarioService: UsuarioService,
    private sharedService: SharedServiceService
  ) { }


  async InformacionPrestador(doc: jsPDF): Promise<void> {
    doc.setFontSize(9);
    doc.setTextColor(128, 128, 128);
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text(
      'ACTA DE VISITA DE VERIFICACIÓN DEL CUMPLIMIENTO DEL PROGRAMA DE SEGURIDAD DEL PACIENTE',
      26,
      40
    );
    doc.text('INSTITUCIONES PRESTADORAS DE SERVICIOS DE SALUD (IPS)', 59, 45);

    // Crear la inforlacion prestador en la primera página
    //INCIAL DEL ACTA
    autoTable(doc, {
      margin: { top: 52 },
      columnStyles: {
        acta: { halign: 'left' },
        inicial: { halign: 'center' },
        segumiento: { halign: 'center' },
      },
      body: [
        {
          acta: this.act_id,
          inicial: this.act_visita_inicial,
          segumiento: this.act_visita_seguimiento,
          feinicio: this.act_fecha_inicial,
          fefinal: this.act_fecha_final,
        },
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
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });

    //NOMBRE PRESTADOR
    doc.text('INFORMACIÓN DEL PRESTADOR DE SERVICIOS', 70, 79);
    autoTable(doc, {
      startY: 80,
      columnStyles: { nombrePres: { halign: 'left' } },
      body: [{ nombrePres: this.act_prestador }],
      columns: [{ header: 'Nombre:', dataKey: 'nombrePres' }],
      tableWidth: 'auto',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });

    //NIT, MUNICIPIO, DIRECCION PRESTADOR
    autoTable(doc, {
      startY: 98,
      columnStyles: { nit: { halign: 'left' } },
      body: [
        {
          nit: this.act_nit,
          municipio: this.act_municipio,
          direccion: this.act_direccion,
        },
      ],
      columns: [
        { header: 'Nit:', dataKey: 'nit' },
        { header: 'Municipio:', dataKey: 'municipio' },
        { header: 'Dirección:', dataKey: 'direccion' },
      ],
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });

    //BARRIO, TELEFONO, EMAIL
    autoTable(doc, {
      startY: 115,
      columnStyles: { nit: { halign: 'left' } },
      body: [
        {
          barrio: this.act_barrio,
          telefono: this.act_telefono,
          email: this.act_email,
        },
      ],
      columns: [
        { header: 'Barrio:', dataKey: 'barrio' },
        { header: 'Telefono:', dataKey: 'telefono' },
        { header: 'Email:', dataKey: 'email' },
      ],
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });

    //REPRESENTANTE LEGAL, CODIGO PRESTADOR, CODIGO SEDE VISITADA
    autoTable(doc, {
      startY: 131,
      columnStyles: { sede: { halign: 'left' } },
      body: [
        {
          representante: this.act_representante,
          codpres: this.act_cod_prestador,
        },
      ],
      columns: [
        { header: 'Representante Legal:', dataKey: 'representante' },
        { header: 'Código Prestador:', dataKey: 'codpres' },
      ],
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });

    //OBJETO DE LA VISITA
    autoTable(doc, {
      startY: 148,
      columnStyles: { objeto: { halign: 'left' } },
      body: [{ objeto: this.act_obj_visita }],
      columns: [{ header: 'Objeto de la Visita:', dataKey: 'objeto' }],
      tableWidth: 'auto',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });
  }

  async generarOrdenDia(doc: jsPDF): Promise<void> {
    // Crear una tabla para el contenido
    const tableData: string[][] = [];

    // Función para crear una lista enumerada
    function crearListaNumerada(items: string[]) {
      let number = 1; // Inicializa el contador

      items.forEach(item => {
        // Agrega el número de lista y el elemento de la lista en una fila de la tabla
        tableData.push([`${number}. ${item}`]);
        number++; // Incrementa el contador
      });
    }

    // Lista del orden del día
    const lista_orden: string[] = [
      "Presentación ante Gerente y/o su delegado.",
      "Objeto de la visita.",
      "Caracterización de los servicios ofertados. ",
      "Revisión de información y/o documentos que aplican. ",
      "Socialización de hallazgos y/u observaciones. ",
      "Cierre de la visita y compromisos. ",
    ];
    // Llamar a la función para crear la lista numerada en la tabla
    crearListaNumerada(lista_orden);

    doc.text('ORDEN DEL DÍA', 93, 185)
    // Crear una tabla para el contenido
    autoTable(doc, {
      startY: 192,
      body: tableData, // Los datos de la tabla que generaste
      tableWidth: 'auto',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });
  }

  //DESARROLLO DE LA REUNIÓN
  async generarDesarrolloReunion(doc: jsPDF): Promise<void> {

    //INFORMACIÓN DEL USUARIO ASIGNADO EN EL ACTA:
    const usuario = await this.usuarioService.oneUser(this.actaPdf.act_id_funcionario).toPromise()
    const usuarioAsignado = usuario.usu_nombre + ' ' + usuario.usu_apellido

    doc.text(
      'DESARROLLO DE LA REUNIÓN',
      82,
      40
    );

    // DESARROLLO DE LA REUNIÓN
    autoTable(doc, {
      margin: { top: 42 },
      columnStyles: {
        objeto: { halign: 'justify' },
      },
      body: [
        {
          objeto:
            `La Secretaria de Salud Departamental del Putumayo, en cumplimiento de sus funciones orgánicas de inspección, vigilancia ` +
            `y control estipuladas bajo la Ley 715 de 2021 y de acuerdo al Decreto 1011 de 2006 por el cual se crea el Sistema Obligatorio de Garantía de Calidad ` +
            `de la Atención en Salud y teniendo en cuenta los lineamientos relacionados al programa de seguridad del paciente emanados ` +
            `por el Ministerio de Salud y Protección Social; realiza seguimiento al programa de seguridad del paciente a fin de velar por el` +
            `cumplimiento de la normatividad vigente y de esta manera garantizar que las IPS del departamento minimicen el riesgo de sufrir ` +
            `un evento adverso en el proceso de atención de salud o de mitigar sus consecuencias, lo cual Implica la evaluación permanente` +
            `de los riesgos asociados a la atención en salud y diseñar e implantar barreras de seguridad necesarias para su ocurrencia.` +
            `Por lo cual procede a realizar la presente visita y respectivo levantamiento de esta acta, como soporte del cumplimiento de lo expuesto.`
        },
      ],
      columns: [
        { header: '', dataKey: 'objeto' },
      ],
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });

    let tipo_visita
    if (this.act_visita_inicial) {
      tipo_visita = 'Incial'
    } else if (this.act_visita_seguimiento) {
      tipo_visita = 'de Seguimiento'
    }

    // 1. Presentación ante gerente y/o su delegado:
    autoTable(doc, {
      startY: 90,
      columnStyles: { objeto: { halign: 'justify' } },
      body: [
        {
          objeto:
            `Siendo las ${this.act_hora_orden} del día ${this.act_fecha_orden}, en las instalaciones ubicadas en la ${this.act_direccion} se realiza ` +
            `visita ${tipo_visita} al programa de seguridad del paciente a ${this.act_prestador} con Código de habilitación ${this.act_cod_prestador} ` +
            `acorde al oficio Número. ${this.act_num_oficio} emitido el ${this.act_fecha_oficio} y enviado vía correo electrónico el ${this.act_fecha_envio_oficio}. ` +
            `Se procede con la presentación por parte del Profesional de Apoyo ${usuarioAsignado} de la oficina de Aseguramiento y Prestación de Servicios - Sistema Obligatorio de Garantía de la Calidad en Salud - ` +
            `SOGC a quien reciben en la visita, ${this.act_nombre_prestador} y ${this.act_nombre_prestador_acompanante}. `

        },
      ],
      columns: [{ header: '1. Presentación ante gerente y/o su delegado: ', dataKey: 'objeto' }],
      tableWidth: 'auto',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });

    // 2. Objeto de la visita: 
    autoTable(doc, {
      startY: 130,
      columnStyles: { objeto: { halign: 'justify' } },
      body: [
        {
          objeto:
            `Dando continuidad a la agenda, se da a conocer el objeto de la visita, el cual es realizar el seguimiento a la implementación del programa de seguridad del paciente` +
            `acorde a los lineamientos y buenas prácticas estipuladas por el Ministerio de salud. Para lo cual se evaluará lo siguiente: `

        },
      ],
      columns: [{ header: '2. Objeto de la visita: ', dataKey: 'objeto' }],
      tableWidth: 'auto',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
      didDrawCell: (data => {
        if (data.section === 'body') {
          data.cell.styles.fillColor = [255, 255, 255]; // Establecer el color de fondo de cada celda en el cuerpo de la tabla como blanco
        }
      })
    });

    //LISTAR LAS EVALUACIONES ASIGNADAS POR EL VERIFICADOR
    const tableData: string[][] = [];

    // Función para crear una lista enumerada
    function crearListaNumerada(items: string[]) {
      let number = 1; // Inicializa el contador

      items.forEach(item => {
        // Agrega el número de lista y el elemento de la lista en una fila de la tabla
        tableData.push([`${number}. ${item}`]);
        number++; // Incrementa el contador
      });
    }

    // Listar las evaluaciones
    const lista_orden: string[] = [
      "REALIZAR PETICION AL BACKEND PARA TRAER LAS EVALUACIONES ASIGNADAS",
      "EVAS",
      ".......... ",
      "R...n. ",
      "........... ",
      "......... ",
    ];
    // Llamar a la función para crear la lista numerada en la tabla
    crearListaNumerada(lista_orden);

    // Crear una tabla para el contenido
    autoTable(doc, {
      startY: 155,
      body: tableData, // Los datos de la tabla que generaste
      tableWidth: 'auto',
      headStyles: {
        fillColor: [248, 248, 248],
        textColor: [0, 0, 0],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      styles: {
        fontSize: 10,
      },
    });
  }

  //GENERAR PDF ULTIMA ACTA CREADA
  async ActaPdf(id_acta: number): Promise<void> {

    //CONSULTAR EL ACTA A GENERAR
    this.actapdfService.oneActaSpIps(id_acta).subscribe(async (data) => {
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
      this.act_representante = this.actaPdf.act_representante;
      this.act_cod_prestador = this.actaPdf.act_cod_prestador;
      this.act_obj_visita = this.actaPdf.act_obj_visita;
      this.act_nombre_funcionario = this.actaPdf.act_nombre_funcionario;
      this.act_cargo_funcionario = this.actaPdf.act_cargo_funcionario;
      this.act_firma_funcionario = this.actaPdf.act_firma_funcionario;
      this.act_nombre_prestador = this.actaPdf.act_nombre_prestador;
      this.act_cargo_prestador = this.actaPdf.act_cargo_prestador;
      this.act_firma_prestador = this.actaPdf.act_firma_prestador;
      //VARIABLES DE ORDEN
      this.act_hora_orden = this.actaPdf.act_hora_orden;
      this.act_fecha_orden = this.actaPdf.act_fecha_orden;
      this.act_num_oficio = this.actaPdf.act_num_oficio;
      this.act_fecha_oficio = this.actaPdf.act_fecha_oficio;
      this.act_fecha_envio_oficio = this.actaPdf.act_fecha_envio_oficio

      // Crear un nuevo documento PDF
      const doc = new jsPDF();

      // Función para agregar un encabezado en todas las páginas
      function addHeader() {
        // Agregar imagen como encabezado
        const imgEncabezado = 'assets/img/encabezadoSp.png';
        doc.addImage(imgEncabezado, 'PNG', 23.5, 4, 160, 25);
      }

      // Función para agregar un pie de página en todas las páginas
      function addFooter() {
        // Agregar imagen como pie de página
        const imgPiePagina = 'assets/img/piePaginaSpIps.png';
        doc.addImage(imgPiePagina, 'PNG', -2, 278, 220, 20);
      }

      // Agregar la primera página
      addHeader();
      await this.InformacionPrestador(doc)
      await this.generarOrdenDia(doc)

      // Agregar la segunda página DESARROLLO DE LA REUNION
      doc.addPage();
      addHeader();
      // Crear una informacion desarrollo de la reunion
      await this.generarDesarrolloReunion(doc)

      // Agregar la tercera página
      doc.addPage();
      addHeader();

      // Crear una tabla en la tercera página


      // Agregar el pie de página en todas las páginas
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        addFooter();
      }

      doc.save(this.act_cod_prestador + 'Sp_Ips')
    });
  }
}
