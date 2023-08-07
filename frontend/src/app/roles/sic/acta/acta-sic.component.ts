import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PrestadorDto } from 'src/app/models/prestador.dto';
import { Municipio } from 'src/app/models/Prestador/municipio';
import { Usuario } from 'src/app/models/usuario';
import { MunicipioService } from 'src/app/services/NuevoPrestador/municipio.service';
import { PrestadorService } from 'src/app/services/prestador.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ActaSicPdfDto } from 'src/app/models/actaSicpdf.dto';
import { AuthService } from 'src/app/services/auth.service';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { TokenService } from 'src/app/services/token.service';
import { TokenDto } from 'src/app/models/token.dto';
import SignaturePad from 'signature_pad';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-acta-sic',
  templateUrl: './acta-sic.component.html',
  styleUrls: ['./acta-sic.component.css']
})
export class ActaSicComponent implements OnInit {


  prestador: PrestadorDto[];
  usuario: Usuario[];
  municipio: Municipio[];

  //DTO DEL PDF ACTA
  actaPdf: ActaSicPdfDto = null;

  //Habilitar la Fecha Final
  habilitarfechaFin = false;

  //Boton habilitar la evaluacion
  boton_acta_sic = false;


  listaVacia: any = undefined;

  //MODAL
  public modalRef: BsModalRef;


  //VARIABLES PARA TRANSPORTAR EL DTO
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
  act_nombre_prestador: string
  act_cargo_prestador: string


  constructor(
    private modalService: BsModalService,
    private prestadorService: PrestadorService,
    private municipioService: MunicipioService,
    private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private actaPdfService: ActapdfService,
    private tokenService: TokenService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.cargarMunicipio();
    this.cargarUsuario();
    this.unsoloCheckbox();
    this.obtenerNombres();
    this.mostrarActaId();
  }

  habilitarFechaFinal() {
    this.habilitarfechaFin = true;
  }

  //Metodo Abrir Modal
  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }

    );

  }


  cargarMunicipio(): void {
    this.municipioService.lista().subscribe(
      data => {
        this.municipio = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }


  mostrarActaId(): void {
    this.actaPdfService.listaUltimaSic().subscribe(
      data => {
        this.actaPdf = data
        var acta = (document.getElementById('acta')) as HTMLSelectElement
        acta.value = this.actaPdf.act_id.toString()

      }
    )
  }

  cargarUsuario(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuario = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  cargarPrestadoresByMun(): void {
    this.prestadorService.listMun(this.act_municipio).subscribe(
      data => {
        this.prestador = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }


  llenarCampos() {
    var id = (document.getElementById('prestador')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Codigo = (<HTMLSelectElement><unknown>opt).value;

    this.prestadorService.listaOne(Codigo).subscribe(
      data => {
        for (const pres of this.prestador) {
          if (pres.pre_cod_habilitacion === Codigo) {
            var nit = (document.getElementById('nit')) as HTMLSelectElement
            nit.value = pres.pre_nit;

            var direccion = (document.getElementById('direccion')) as HTMLSelectElement
            direccion.value = pres.pre_direccion;
            var telefono = (document.getElementById('telefono')) as HTMLSelectElement
            telefono.value = pres.pre_telefono;
            var email = (document.getElementById('email')) as HTMLSelectElement
            email.value = pres.pre_email;
            var rep_legal = (document.getElementById('repleg')) as HTMLSelectElement
            rep_legal.value = pres.pre_representante;
            var cod_pres = (document.getElementById('codpres')) as HTMLSelectElement
            cod_pres.value = pres.pre_cod_habilitacion;
            var nombrePrestador = (document.getElementById('nombrePrestador')) as HTMLSelectElement
            nombrePrestador.value = pres.pre_representante
          }
        }
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );

  }


  sedePrincipal(): void {
    var id = (document.getElementById('sedep')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Valor = (<HTMLSelectElement><unknown>opt).value;

    if (Valor === 'no') {
      var msj = (document.getElementById('msj')) as HTMLDivElement
      msj.innerHTML = "<p>IDENTIFIQUE A CONTINUACION LA UBICACIÓN DE LA SEDE PRINCIPAL</p>"
      var p = (document.querySelector('p')) as HTMLElement
      p.setAttribute("id", "msj_p")
      p.setAttribute("class", "p_color")
      p.setAttribute("style", "user-select: none; color: mediumblue")

      var localidad = (document.getElementById('localidad')) as HTMLInputElement
      localidad.disabled = false
      var direccion = (document.getElementById('dirubic')) as HTMLInputElement
      direccion.disabled = false
    } else if (Valor === 'si') {
      var msj_p = (document.getElementById('msj_p')) as HTMLElement
      if (msj_p) {
        msj_p.remove()
      }
      var localidad = (document.getElementById('localidad')) as HTMLInputElement
      localidad.value = ""
      localidad.disabled = true
      var direccion = (document.getElementById('dirubic')) as HTMLInputElement
      direccion.value = ""
      direccion.disabled = true
    }

  }

  unsoloCheckbox(): void {
    var checkbox1 = (document.getElementById("inicial")) as HTMLInputElement;
    var checkbox2 = (document.getElementById("segumiento")) as HTMLInputElement;
    checkbox1.onclick = function () {
      if (checkbox1.checked != false) {
        checkbox2.checked = null;
      }
    }
    checkbox2.onclick = function () {
      if (checkbox2.checked != false) {
        checkbox1.checked = null;
      }
    }
  }

  obtenerNombres(): void {
    //OBTENER NOMBRE DEL PRESTADOR
    const idp = document.getElementById('prestador') as HTMLSelectElement;
    const selp = idp.selectedIndex;
    const optp = idp.options[selp] as HTMLOptionElement;
    const valorPrestador = optp ? optp.textContent : '';
    sessionStorage.setItem("nombre-pres-sic", valorPrestador);


    //CODIGO PRESTADOR
    var codigoPres = (document.getElementById('codpres')) as HTMLInputElement
    var valorCodigoPres = codigoPres.value
    sessionStorage.setItem("cod-pres-sic", valorCodigoPres);

    // USUARIO SECRETARIA
    const idUsuSecre = document.getElementById('usu_secretaria') as HTMLSelectElement;
    const selUsuSecre = idUsuSecre.selectedIndex;
    const optUsuSecre = idUsuSecre.options[selUsuSecre] as HTMLOptionElement;
    const valorUsuSecre = optUsuSecre ? optUsuSecre.textContent : '';
    sessionStorage.setItem("nombre-usuario-sic", valorUsuSecre);

    //CARGO USUARIO SECRETARIA
    var cargoSecre = (document.getElementById('cargoSecre')) as HTMLInputElement
    var valorCargoSecre = cargoSecre.value
    sessionStorage.setItem("cargo-usuario-sic", valorCargoSecre);

    //CARGO PRESTADOR
    var cargoPres = (document.getElementById('cargoPres')) as HTMLInputElement
    var valorCargoPres = cargoPres.value
    sessionStorage.setItem("cargo-prestador-sic", valorCargoPres);
  }


  //REGISTRAR Y GENERAR ACTA PDF
  onRegister(): void {
    //FORMULARIO
    //NÚMERO DE ACTA
    var acta = (document.getElementById('acta')) as HTMLInputElement
    var valorActa = acta.value


    //VISITA INICIAL
    var visitaInicial = (document.getElementById('inicial')) as HTMLInputElement
    var valorVisitaInicial = visitaInicial.checked
    var inicial = '';
    if (valorVisitaInicial) {
      inicial = 'X';
    }


    //VISITA SEGUIMIENTO
    var visitaSeguim = (document.getElementById('segumiento')) as HTMLInputElement
    var valorVisitaSeguim = visitaSeguim.checked
    var final = '';
    if (valorVisitaSeguim) {
      final = 'X';
    }


    //FECHA INICIAL
    var fechaInicial = (document.getElementById('fecha-inicial')) as HTMLInputElement
    var valorfechaInicial = fechaInicial.value
    //FORMATO A FECHA INICIAL
    let formInicial = new Date(valorfechaInicial);
    let fechaFormInicial = formInicial.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });


    //FECHA FINAL
    var fechaFinal = (document.getElementById('fecha-final')) as HTMLInputElement
    var valorfechaFinal = fechaFinal.value
    //FORMATO A FECHA INICIAL
    let formFinal = new Date(valorfechaFinal);
    let fechaFormFinal = formFinal.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });


    //MUNICIPIO
    const id = document.getElementById('mun_id') as HTMLSelectElement;
    const sel = id.selectedIndex;
    const opt = id.options[sel] as HTMLOptionElement;
    const valorMunicipio = opt ? opt.textContent : '';

    //PRESTADOR
    const idp = document.getElementById('prestador') as HTMLSelectElement;
    const selp = idp.selectedIndex;
    const optp = idp.options[selp] as HTMLOptionElement;
    const valorPrestador = optp ? optp.textContent : '';



    //INFORMACION PRESTADOR
    //NIT
    var nit = (document.getElementById('nit')) as HTMLInputElement
    var valorNit = nit.value

    //DIRECCION
    var direccion = (document.getElementById('direccion')) as HTMLInputElement
    var valorDireccion = direccion.value

    //BARRIO
    var barrio = (document.getElementById('barrio')) as HTMLInputElement
    var valorBarrio = barrio.value

    //TELEFONO
    var telefono = (document.getElementById('telefono')) as HTMLInputElement
    var valorTelefono = telefono.value

    //EMAIL
    var email = (document.getElementById('email')) as HTMLInputElement
    var valorEmail = email.value

    //REPRESENTANTE
    var representante = (document.getElementById('repleg')) as HTMLInputElement
    var valorRepresentante = representante.value

    //CODIGO PRESTADOR
    var codigoPres = (document.getElementById('codpres')) as HTMLInputElement
    var valorCodigoPres = codigoPres.value

    //CODIGO DE LA SEDE
    var codsede = (document.getElementById('codsede')) as HTMLInputElement
    var valorCodigoSede = codsede.value

    //SEDE PRINCIPAL
    const idSede = document.getElementById('sedep') as HTMLSelectElement;
    const selSede = idSede.selectedIndex;
    const optSede = idSede.options[selSede] as HTMLOptionElement;
    const valorSede = optSede ? optSede.textContent : '';

    //LOCALIDAD Y DIRECCION SEDE PRINCIPAL

    var localidadSede = (document.getElementById('localidad')) as HTMLInputElement
    var valorLocalidad = localidadSede.value
    //DIRECCION SEDE PRINCIPAL
    var direccionSede = (document.getElementById('dirubic')) as HTMLInputElement
    var valorDirSede = direccionSede.value

    // OBJETO VISITA
    const idObjvisita = document.getElementById('objVisita') as HTMLSelectElement;
    const selObjvisita = idObjvisita.selectedIndex;
    const optObjvisita = idObjvisita.options[selObjvisita] as HTMLOptionElement;
    const valorObjvisita = optObjvisita ? optObjvisita.textContent : '';

    // USUARIO SECRETARIA
    const idUsuSecre = document.getElementById('usu_secretaria') as HTMLSelectElement;
    const selUsuSecre = idUsuSecre.selectedIndex;
    const optUsuSecre = idUsuSecre.options[selUsuSecre] as HTMLOptionElement;
    const valorUsuSecre = optUsuSecre ? optUsuSecre.textContent : '';

    //CARGO USUARIO SECRETARIA
    var cargoSecre = (document.getElementById('cargoSecre')) as HTMLInputElement
    var valorCargoSecre = cargoSecre.value

    //PRESTADOR FIRMA
    var presNombre = (document.getElementById('nombrePrestador')) as HTMLInputElement
    var valorPresNombre = presNombre.value
    //CARGO PRESTADOR
    var cargoPres = (document.getElementById('cargoPres')) as HTMLInputElement
    var valorCargoPres = cargoPres.value


    // const fechaGenerada = new Date();
    // const formatoFecha = new Intl.DateTimeFormat('es-ES').format(fechaGenerada);


    const doc = new jsPDF()
    var imgEncabezado = 'assets/img/encabezadoSic.png'
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
        { acta: valorActa, inicial: inicial, segumiento: final, feinicio: fechaFormInicial, fefinal: fechaFormFinal },
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
        { nombrePres: valorPrestador },
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
        { nit: valorNit, municipio: valorMunicipio, direccion: valorDireccion },
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
        { barrio: valorBarrio, telefono: valorTelefono, email: valorEmail },
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
        { sede: valorSede, localidad: valorLocalidad, direccionSede: valorDirSede },
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
        { representante: valorRepresentante, codpres: valorCodigoPres, codsede: valorCodigoSede },
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
        { objeto: valorObjvisita },
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
        { nombre: valorUsuSecre, cargo: valorCargoSecre, firma: '' },
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
        { nombre: valorPresNombre, cargo: valorCargoPres, firma: '' },
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

    //VALIDAR FORMULARIO
    //VALIDAR ACTA
    if (!valorActa.length) {
      this.toastrService.error('El número de acta no puede estar vacia', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR FECHAS
    if (!valorfechaFinal && !valorfechaInicial) {
      this.toastrService.error('Las fechas no pueden estar vacias', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }
    if (!valorfechaInicial) {
      this.toastrService.error('La fecha Inicial no pueden estar vacia', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }
    if (!valorfechaFinal) {
      this.toastrService.error('La fecha Final no pueden estar vacia', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR VISITA INICIAL Y SEGUIMIENTO
    if (valorVisitaInicial === false && valorVisitaSeguim === false) {
      this.toastrService.error('Debes Escoger una visita', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR BARRIO
    if (!valorBarrio) {
      this.toastrService.error('El Barrio no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR OBJETO
    if (!selObjvisita) {
      this.toastrService.error('Selecciona el Objeto', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR USUARIO
    if (!selUsuSecre) {
      this.toastrService.error('Selecciona el Usuario', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    if (!valorCargoSecre) {
      this.toastrService.error('El cargo del Usuario no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR CARGO PRESTADOR
    if (!valorCargoPres) {
      this.toastrService.error('El cargo del Prestador no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR MUNICIPIO Y PRESTADOR
    if (!valorMunicipio) {
      this.toastrService.error('Selecciona el Municipio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }
    /**/
    if (valorMunicipio && !valorPrestador) {
      this.toastrService.error('Selecciona el Prestador', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR SELECCION DE SEDE SI
    if (!selSede) {
      this.toastrService.error('Selecciona Sede Principal', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR LOCALIDAD Y DIRECCION SI SEDEP ES NO
    if (valorSede === 'No') {
      if (!valorLocalidad) {
        this.toastrService.error('La localidad no puede estar vacia', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
      }
      if (!valorDirSede) {
        this.toastrService.error('La direccion de la sede no puede estar vacia', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
      }
    }



    //VALIDANDO POR VALOR DE SEDE Y ENVIAR SOLICITUD DE DESCARGA DE ACTA
    if (valorSede === 'Si') {
      if (valorfechaInicial && valorfechaFinal && valorBarrio && valorObjvisita && valorUsuSecre &&
        valorCargoSecre && valorCargoPres && valorUsuSecre && valorObjvisita && valorMunicipio && valorPrestador && valorSede && valorActa) {
        if (valorVisitaInicial || valorVisitaSeguim) {

          //ASIGNANDO LOS VALORES DEL ACTA PARA ENVIAR POR DTO
          this.act_id = Number(valorActa);
          this.act_municipio = valorMunicipio
          this.act_prestador = valorPrestador
          this.act_nit = valorNit
          this.act_direccion = valorDireccion
          this.act_telefono = valorTelefono
          this.act_email = valorEmail
          this.act_representante = valorRepresentante
          this.act_cod_prestador = valorCodigoPres
          this.act_nombre_prestador = valorPresNombre
          this.act_nombre_funcionario = valorUsuSecre


          //REGISTRO DEL FORMULARIO A TABLA TEMPORAL BD
          this.actaPdf = new ActaSicPdfDto(

            this.act_id,
            this.act_visita_inicial,
            this.act_visita_seguimiento,
            this.act_fecha_inicial,
            this.act_fecha_final,
            this.act_municipio,
            this.act_prestador,
            this.act_nit,
            this.act_direccion,
            this.act_barrio,
            this.act_telefono,
            this.act_email,
            this.act_sede_principal,
            this.act_sede_localidad,
            this.act_sede_direccion,
            this.act_representante,
            this.act_cod_prestador,
            this.act_cod_sede,
            this.act_obj_visita,
            this.act_nombre_funcionario,
            this.act_cargo_funcionario,
            this.act_nombre_prestador,
            this.act_cargo_prestador
          );
          const token = this.tokenService.getToken()
          const tokenDto: TokenDto = new TokenDto(token);
          this.authService.registroActaSicPdf(this.actaPdf, tokenDto).subscribe(
            data => {
              // Verificar si no hay errores enviados por el backend
              if (!data.error) {
                //OBTENER EL ESTADO DEL BOTON A TRUE 
                this.boton_acta_sic = true
                localStorage.setItem('boton-acta-sic', 'true');

                Swal.fire({
                  title: '¿Desea descargar el acta?',
                  showCancelButton: true,
                  confirmButtonText: 'Si',
                  cancelButtonText: 'No'
                }).then((result) => {
                  if (result.value) {
                    doc.save('acta-sic.pdf');
                    this.toastrService.success(data.message, 'Ok', {
                      timeOut: 3000,
                      positionClass: 'toast-top-center',
                    });
                    this.router.navigate(['/sic/evaluacion']);
                    window.scrollTo(0, 0);
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                    this.router.navigate(['/sic/evaluacion']);
                    window.scrollTo(0, 0);
                  }
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: data.message
                });
              }
            },
            err => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.error.message
              });
            }
          );
        } //FIN DEL SI - VALIDACIÓN SI LA SEDE ES SI
      }
    }

    //VALIDACIÓN PARA PDF
    if (valorSede === 'No') {
      if (valorfechaInicial && valorfechaFinal && valorBarrio && valorObjvisita && valorUsuSecre &&
        valorCargoSecre && valorCargoPres && valorUsuSecre && valorObjvisita && valorMunicipio && valorPrestador && valorSede && valorActa
        && valorLocalidad && valorDirSede) {
        if (valorVisitaInicial || valorVisitaSeguim) {

          //ASIGNANDO LOS VALORES DEL ACTA PARA ENVIAR POR DTO
          this.act_id = Number(valorActa);
          this.act_municipio = valorMunicipio
          this.act_prestador = valorPrestador
          this.act_nit = valorNit
          this.act_direccion = valorDireccion
          this.act_telefono = valorTelefono
          this.act_email = valorEmail
          this.act_representante = valorRepresentante
          this.act_cod_prestador = valorCodigoPres
          this.act_nombre_prestador = valorPresNombre
          this.act_nombre_funcionario = valorUsuSecre


          //REGISTRO DEL FORMULARIO A TABLA TEMPORAL BD
          this.actaPdf = new ActaSicPdfDto(

            this.act_id,
            this.act_visita_inicial,
            this.act_visita_seguimiento,
            this.act_fecha_inicial,
            this.act_fecha_final,
            this.act_municipio,
            this.act_prestador,
            this.act_nit,
            this.act_direccion,
            this.act_barrio,
            this.act_telefono,
            this.act_email,
            this.act_sede_principal,
            this.act_sede_localidad,
            this.act_sede_direccion,
            this.act_representante,
            this.act_cod_prestador,
            this.act_cod_sede,
            this.act_obj_visita,
            this.act_nombre_funcionario,
            this.act_cargo_funcionario,
            this.act_nombre_prestador,
            this.act_cargo_prestador
          );
          const token = this.tokenService.getToken()
          const tokenDto: TokenDto = new TokenDto(token);

          this.authService.registroActaSicPdf(this.actaPdf, tokenDto).subscribe(
            (data) => {
              // Verificar si no hay errores enviados por el backend
              if (!data.error) {
                //OBTENER EL ESTADO DEL BOTON A TRUE 
                this.boton_acta_sic = true;
                localStorage.setItem('boton-acta-sic', 'true');

                Swal.fire({
                  title: '¿Desea descargar el acta?',
                  showCancelButton: true,
                  confirmButtonText: 'Si',
                  cancelButtonText: 'No'
                }).then((result) => {
                  if (result.value) {
                    doc.save('acta-sic.pdf');
                    this.toastrService.success(data.message, 'Ok', {
                      timeOut: 3000,
                      positionClass: 'toast-top-center',
                    });
                    this.router.navigate(['/sic/evaluacion']);
                    window.scrollTo(0, 0);
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                    this.router.navigate(['/sic/evaluacion']);
                    window.scrollTo(0, 0);
                  }
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: data.message
                });
              }
            },
            err => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.error.message
              });
            }
          );

          //FIN DEL NO - VALIDACIÓN SI LA SEDE ES NO
        }
      }
    }
  }
}
