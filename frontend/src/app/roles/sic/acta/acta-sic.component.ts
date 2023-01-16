import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
import * as FileSaver from 'file-saver';






@Component({
  selector: 'app-acta-sic',
  templateUrl: './acta-sic.component.html',
  styleUrls: ['./acta-sic.component.css']
})
export class ActaSicComponent implements OnInit {
  prestador: PrestadorDto[];
  usuario: Usuario[];
  municipio: Municipio[];

  title = 'Probando-PDF';



  listaVacia: any = undefined;


  constructor(
    private prestadorService: PrestadorService,
    private municipioService: MunicipioService,
    private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.cargarMunicipio();
    this.cargarUsuario();
    this.unsoloCheckbox();
    this.obtenerNombres()
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
    var id = (document.getElementById('mun_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Value = (<HTMLSelectElement><unknown>opt).value;

    this.prestadorService.listMun(Value).subscribe(
      data => {
        this.prestador = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
    var nit = (document.getElementById('nit')) as HTMLSelectElement
    nit.value = null
    var direccion = (document.getElementById('direccion')) as HTMLSelectElement
    direccion.value = null
    var telefono = (document.getElementById('telefono')) as HTMLSelectElement
    telefono.value = null
    var email = (document.getElementById('email')) as HTMLSelectElement
    email.value = null
    var rep_legal = (document.getElementById('repleg')) as HTMLSelectElement
    rep_legal.value = null
    var cod_pres = (document.getElementById('codpres')) as HTMLSelectElement
    cod_pres.value = null
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
            nombrePrestador.value = pres.pre_nombre
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
      localidad.disabled = true
      var direccion = (document.getElementById('dirubic')) as HTMLInputElement
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
    var idp = (document.getElementById('prestador')) as HTMLSelectElement
    var selp = idp.selectedIndex;
    var optp = idp.options[selp]
    var valorPrestador = (<HTMLSelectElement><unknown>optp);
    sessionStorage.setItem("nombre-pres", valorPrestador.textContent);

    //USUARIO SECRETARIA
    var idUsuSecre = (document.getElementById('usu_secretaria')) as HTMLSelectElement
    var selUsuSecre = idUsuSecre.selectedIndex;
    var optUsuSecre = idUsuSecre.options[selUsuSecre]
    var valorUsuSecre = (<HTMLSelectElement><unknown>optUsuSecre);
    sessionStorage.setItem("nombre-usuario", valorUsuSecre.textContent);

    //CARGO USUARIO SECRETARIA
    var cargoSecre = (document.getElementById('cargoSecre')) as HTMLInputElement
    var valorCargoSecre = cargoSecre.value
    sessionStorage.setItem("cargo-usuario", valorCargoSecre);

    //CARGO PRESTADOR
    var cargoPres = (document.getElementById('cargoPres')) as HTMLInputElement
    var valorCargoPres = cargoPres.value
    sessionStorage.setItem("cargo-prestador", valorCargoPres);
  }

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
    var id = (document.getElementById('mun_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var valorMunicipio = (<HTMLSelectElement><unknown>opt).textContent;

    //PRESTADOR
    var idp = (document.getElementById('prestador')) as HTMLSelectElement
    var selp = idp.selectedIndex;
    var optp = idp.options[selp]
    var valorPrestador = (<HTMLSelectElement><unknown>optp).textContent;

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

    //SEDE PRINCIPAL
    var idSede = (document.getElementById('sedep')) as HTMLSelectElement
    var selSede = idSede.selectedIndex;
    var optSede = idSede.options[selSede]
    var valorSede = (<HTMLSelectElement><unknown>optSede).textContent;

    //LOCALIDAD SEDE PRINCIPAL
    var localidadSede = (document.getElementById('localidad')) as HTMLInputElement
    var valorLocalidad = localidadSede.value
    //DIRECCION SEDE PRINCIPAL
    var direccionSede = (document.getElementById('dirubic')) as HTMLInputElement
    var valorDirSede = direccionSede.value

    //OBJETO VISITA
    var idObjvisita = (document.getElementById('objVisita')) as HTMLSelectElement
    var selObjvisita = idObjvisita.selectedIndex;
    var optObjvisita = idObjvisita.options[selObjvisita]
    var valorObjvisita = (<HTMLSelectElement><unknown>optObjvisita).textContent;

    //USUARIO SECRETARIA
    var idUsuSecre = (document.getElementById('usu_secretaria')) as HTMLSelectElement
    var selUsuSecre = idUsuSecre.selectedIndex;
    var optUsuSecre = idUsuSecre.options[selUsuSecre]
    var valorUsuSecre = (<HTMLSelectElement><unknown>optUsuSecre).textContent;

    //CARGO USUARIO SECRETARIA
    var cargoSecre = (document.getElementById('cargoSecre')) as HTMLInputElement
    var valorCargoSecre = cargoSecre.value

    //PRESTADOR FIRMA
    var presNombre = (document.getElementById('nombrePrestador')) as HTMLInputElement
    var valorPresNombre = presNombre.value
    //CARGO PRESTADOR
    var cargoPres = (document.getElementById('cargoPres')) as HTMLInputElement
    var valorCargoPres = cargoPres.value


    const fechaGenerada = Date()

    const fechaGenrada = new Date();
    const formatoFecha = new Intl.DateTimeFormat('es-ES').format(fechaGenrada);



    const doc = new jsPDF()
    var imgEncabezado = 'assets/img/encabezado.png'
    doc.addImage(imgEncabezado, 'PNG', 23.5, 4, 160, 25);


    doc.setFontSize(9)
    doc.setTextColor(128, 128, 128);
    doc.text(formatoFecha, 140, 25)
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
    doc.text("INFORMACION DEL PRESTADOR DE SERVICIOS", 60, 79);
    //NOMBRE PRESTADOR
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
        { representante: valorRepresentante, codpres: valorCodigoPres, codsede: '' },
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

    //VALIDAR ACTA
    if (!valorActa.length) {
      this.toastrService.error('El número de acta no puede estar vacia', 'Error', {
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

    //VALIDAR FIRMA PRESTADOR
    if (!valorCargoPres) {
      this.toastrService.error('El cargo del Prestador no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR MUNICIPIO Y PRESTADOR
    if (!sel) {
      this.toastrService.error('Selecciona el Municipio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }
    if (!selp) {
      this.toastrService.error('Selecciona el Prestador', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR SELECCION DE SEDE SI O NO
    if (!selSede) {
      this.toastrService.error('Selecciona Sede Principal', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR LOCALIDAD Y DIRECCION SI SEDEP ES NO
    console.log(valorSede)

    if (valorActa && valorfechaInicial && valorfechaFinal && valorBarrio && valorObjvisita && valorUsuSecre &&
      valorCargoSecre && valorCargoPres && selUsuSecre && selObjvisita && sel && selp && selSede
      && valorVisitaInicial || valorVisitaSeguim) {
      Swal.fire({
        title: '¿Desea descargar el acta?',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          // doc.output('dataurlnewwindow', { filename: 'acta-sic.pdf' });
          doc.save('acta-sic.pdf')
          Swal.fire({
            title: '¿Desea Evaluar al Prestador?',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result => {
            if (result.value) {
              this.router.navigate(['/sic/evaluacion']);
              window.scrollTo(0, 0);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Ok'
              )
            }
          }))
        } else if (result.dismiss === Swal.DismissReason.cancel){
          this.router.navigate(['/sic/evaluacion']);
          window.scrollTo(0, 0);
        }
      })
    }

  }
}