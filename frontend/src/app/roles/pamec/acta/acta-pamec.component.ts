import { Component, OnInit } from '@angular/core';
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
import { Router } from '@angular/router';


@Component({
  selector: 'app-acta-pamec',
  templateUrl: './acta-pamec.component.html',
  styleUrls: ['./acta-pamec.component.css']
})
export class ActaPamecComponent implements OnInit {

  prestador: PrestadorDto[];
  usuario: Usuario[];
  municipio: Municipio[];


  //DIV USUARIO
  agregarUsuario = false
  usuarioAgregado = true

  //DIV PRESTADOR
  agregarPrestador = false
  prestadorAgregado = true

  listaVacia: any = undefined;

  formulacion = false;
  mejoramiento = false;

  contador = 0

  pre_municipio: { mun_id: number }

  boton_acta_pamec = false;




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

    console.log(Codigo)

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
            
            
          }
        }
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }


  nuevoUsuario(): void {
    this.agregarUsuario = true
    this.usuarioAgregado = false
  }

  eliminarUsuario(): void {
    this.agregarUsuario = false
    this.usuarioAgregado = true
  }

  nuevoPrestador(): void {
    this.agregarPrestador = true
    this.prestadorAgregado = false
  }

  eliminarPrestador(): void {
    this.agregarPrestador = false
    this.prestadorAgregado = true
  }


  tipoVisita(): void {
    var id = (document.getElementById('tip_visita')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var ValorVisita = (<HTMLSelectElement><unknown>opt).value;

    console.log(ValorVisita)

    if (ValorVisita === '1') {
      this.mejoramiento = false
      this.formulacion = false
    }

    if (ValorVisita === '2') {
      this.mejoramiento = false
      this.formulacion = false
    }

    if (ValorVisita === '3') {
      this.mejoramiento = false
      this.formulacion = false
    }

    if (ValorVisita === '4') {
      this.mejoramiento = false
      this.formulacion = true
    }

    if (ValorVisita === '5') {
      this.formulacion = false
      this.mejoramiento = true
    }
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




  obtenerNombres(): void {
    //OBTENER NOMBRE DEL PRESTADOR
    var idp = (document.getElementById('prestador')) as HTMLSelectElement
    var selp = idp.selectedIndex;
    var optp = idp.options[selp]
    var valorPrestador = (<HTMLSelectElement><unknown>optp);
    sessionStorage.setItem("nombre-pres-pamec", valorPrestador.textContent);

    //USUARIO SECRETARIA
    var idUsuSecre = (document.getElementById('usu_secretaria')) as HTMLSelectElement
    var selUsuSecre = idUsuSecre.selectedIndex;
    var optUsuSecre = idUsuSecre.options[selUsuSecre]
    var valorUsuSecre = (<HTMLSelectElement><unknown>optUsuSecre);
    sessionStorage.setItem("nombre-usuario-pamec", valorUsuSecre.textContent);

    //CARGO USUARIO SECRETARIA
    var cargoSecre = (document.getElementById('cargoSecre')) as HTMLInputElement
    var valorCargoSecre = cargoSecre.value
    sessionStorage.setItem("cargo-usuario-pamec", valorCargoSecre);

    //CARGO PRESTADOR
    var cargoPres = (document.getElementById('cargoPres')) as HTMLInputElement
    var valorCargoPres = cargoPres.value
    sessionStorage.setItem("cargo-prestador-pamec", valorCargoPres);
  }

  onRegister(): void {
    //FORMULARIO
    //NÚMERO DE ACTA
    var acta = (document.getElementById('acta')) as HTMLInputElement
    var valorActa = acta.value

    //FECHA VISITA
    var fechaVisita = (document.getElementById('fecha-visita')) as HTMLInputElement
    var valorfechaVisita = fechaVisita.value
    //FORMATO A FECHA VISITA
    let formVisita = new Date(valorfechaVisita);
    let fechaFormVisita = formVisita.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });


    //TIPO DE VISITA
    var id = (document.getElementById('tip_visita')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var valorVisita = (<HTMLSelectElement><unknown>opt).textContent;

    var valorFormulacion = ""
    if (this.formulacion) {
      //AÑO FORMULACIÓN
      var formulacion = (document.getElementById('año_formulacion')) as HTMLInputElement
      valorFormulacion = ": " + formulacion.value
    }

    var valorMejoramiento = ""
    if (this.mejoramiento) {
      //CICLO DE MEJORAMIENTO
      var idmejo = (document.getElementById('id_mejoramiento')) as HTMLSelectElement
      var selmejo = idmejo.selectedIndex;
      var optmejo = idmejo.options[selmejo]
      valorMejoramiento = ": " + (<HTMLSelectElement><unknown>optmejo).textContent;
    }


    //INFORMACIÓN PRESTADOR
    //MUNICIPIO
    var idm = (document.getElementById('mun_id')) as HTMLSelectElement
    var selm = idm.selectedIndex;
    var optm = idm.options[selm]
    var valorMunicipio = (<HTMLSelectElement><unknown>optm).textContent;

    //PRESTADOR SELECT
    var idp = (document.getElementById('prestador')) as HTMLSelectElement
    var selp = idp.selectedIndex;
    var optp = idp.options[selp]
    var valorPrestador = (<HTMLSelectElement><unknown>optp).textContent;

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



    //USUARIO SECRETARIA1
    var idUsuSecre1 = (document.getElementById('usu_secretaria1')) as HTMLSelectElement
    var selUsuSecre1 = idUsuSecre1.selectedIndex;
    var optUsuSecre1 = idUsuSecre1.options[selUsuSecre1]
    var valorUsuSecre1 = (<HTMLSelectElement><unknown>optUsuSecre1).textContent;

    //CARGO USUARIO SECRETARIA1
    var cargoSecre1 = (document.getElementById('cargosecre1')) as HTMLInputElement
    var valorCargoSecre1 = cargoSecre1.value

    if (this.agregarUsuario) {
      //USUARIO SECRETARIA2
      var idUsuSecre2 = (document.getElementById('usu_secretaria2')) as HTMLSelectElement
      var selUsuSecre2 = idUsuSecre2.selectedIndex;
      var optUsuSecre2 = idUsuSecre2.options[selUsuSecre2]
      var valorUsuSecre2 = (<HTMLSelectElement><unknown>optUsuSecre2).textContent;

      //CARGO USUARIO SECRETARIA2
      var cargoSecre2 = (document.getElementById('cargosecre2')) as HTMLInputElement
      var valorCargoSecre2 = cargoSecre2.value
    }


    //FIRMAS PRESTADOR1
    var nombrePrestador1 = (document.getElementById('nombrePrestador1')) as HTMLInputElement
    var valorPrestador1 = nombrePrestador1.value

    //CARGO USUARIO SECRETARIA1
    var cargoPrestador1 = (document.getElementById('cargoPres1')) as HTMLInputElement
    var valorCargoPrestador1 = cargoPrestador1.value

    if (this.agregarPrestador) {
      //FIRMAS PRESTADOR2
      var nombrePrestador2 = (document.getElementById('nombrePrestador2')) as HTMLInputElement
      var valorPrestador2 = nombrePrestador2.value

      //CARGO USUARIO SECRETARIA1
      var cargoPrestador2 = (document.getElementById('cargoPres2')) as HTMLInputElement
      var valorCargoPrestador2 = cargoPrestador2.value
    }



    //OBJETO VISITA
    var idObjvisita = (document.getElementById('obj_visita')) as HTMLSelectElement
    var selObjvisita = idObjvisita.selectedIndex;
    var optObjvisita = idObjvisita.options[selObjvisita]
    var valorObjvisita = (<HTMLSelectElement><unknown>optObjvisita).textContent;


    //DESCRIPCION OBJETO VISITA
    var desc_obj_visita = (document.getElementById('desc_obj_visita')) as HTMLInputElement
    var valordesc_obj_visita = desc_obj_visita.value

    //DESCRIPCION DEL ACTA
    var desc_acta = (document.getElementById('desc_acta')) as HTMLInputElement
    var valordesc_acta = desc_acta.value


    const fechaGenrada = new Date();
    const formatoFecha = new Intl.DateTimeFormat('es-ES').format(fechaGenrada);


    const doc = new jsPDF()
    var imgEncabezado = 'assets/img/encabezadoPamec.png'
    doc.addImage(imgEncabezado, 'PNG', 11.5, 4, 192, 25);

    doc.setFontSize(9)
    doc.setTextColor(128, 128, 128);
    doc.setFont("helvetica", "normal")
    doc.text(formatoFecha, 171, 27.5)
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold")
    doc.text("ACTA DE VERIFICACIÓN AL PAMEC DE LAS INSTITUCIONES PRESTADORAS", 30, 40);
    doc.text("DE SERVICIOS DE SALUD - IPS", 74, 45);

    //INCIAL DEL ACTA
    autoTable(doc, {
      margin: { top: 52 },
      columnStyles: { acta: { halign: 'left' }, inicial: { halign: 'center' }, segumiento: { halign: 'center' } },
      body: [
        { acta: valorActa, visita: fechaFormVisita, tipovisita: valorVisita + " " + valorFormulacion + valorMejoramiento },
      ],
      columns: [
        { header: 'Número de acta', dataKey: 'acta' },
        { header: 'Fecha de Visita', dataKey: 'visita' },
        { header: 'Tipo de Visita', dataKey: 'tipovisita' },

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
    doc.text("INFORMACION DEL PRESTADOR DE SERVICIOS", 59, 79);
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

    //REPRESENTANTE LEGAL, CODIGO PRESTADOR, CODIGO SEDE VISITADA
    autoTable(doc, {
      startY: 136,
      columnStyles: { sede: { halign: 'left' } },
      body: [
        { representante: valorRepresentante, codpres: valorCodigoPres },
      ],
      columns: [
        { header: 'Representante Legal:', dataKey: 'representante' },
        { header: 'Código Prestador:', dataKey: 'codpres' },

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
      startY: 154,
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

    //VALOR DESCRIPCION DE LA VISITA
    autoTable(doc, {
      startY: 177,
      columnStyles: { objeto: { halign: 'justify' } },
      body: [
        { objeto: valordesc_obj_visita },
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

    //DESCRIPCION DEL ACTA
    autoTable(doc, {
      startY: 212,
      columnStyles: { desacta: { halign: 'justify' } },
      body: [
        { desacta: valordesc_acta },
      ],
      columns: [
        { header: 'Descripción del Acta:', dataKey: 'desacta' },
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

    doc.addPage()
    doc.addImage(imgEncabezado, 'PNG', 11.5, 4, 192, 25);
    doc.setFontSize(9)
    doc.setTextColor(128, 128, 128);
    doc.setFont("helvetica", "normal")
    doc.text(formatoFecha, 171, 27.5)

    //MENSAJE FIRMAS POR SECRETARIA DE SALUD
    autoTable(doc, {
      margin: { top: 42 },
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
      startY: 50,
      columnStyles: { sede: { halign: 'left' } },

      body: [
        { nombre: valorUsuSecre1, cargo: valorCargoSecre1, firma: '' },
        { nombre: valorUsuSecre2, cargo: valorCargoSecre2, firma: '' },
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

    //MENSAJE FIRMAS POR SECRETARIA DE SALUD
    autoTable(doc, {
      startY: 78,
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
      startY: 86,
      columnStyles: { sede: { halign: 'left' } },

      body: [
        { nombre: valorPrestador1, cargo: valorCargoPrestador1, firma: '' },
        { nombre: valorPrestador2, cargo: valorCargoPrestador2, firma: '' },
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

    //VALIDACIONES FORMULARIO
    //VALIDAR ACTA
    if (!valorActa.length) {
      this.toastrService.error('El número de acta no puede estar vacia', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR FECHA DE VISITA
    if (!valorfechaVisita) {
      this.toastrService.error('La fecha de visita no puede estar vacia', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR SELECCION DE TIPO VISITA
    if (!sel) {
      this.toastrService.error('Debes seleccionar el tipo de visita', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR SELECCION DE MUCNICIPIO
    if (!selm) {
      this.toastrService.error('Debes seleccionar un Municipio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR SELECCION DE PRESTADOR
    if (!selp) {
      this.toastrService.error('Debes seleccionar un Prestador', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR BARRIO
    if (!valorBarrio.length) {
      this.toastrService.error('El Barrio no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR USUARIOS Y CARGO SECRETARIA
    if (!selUsuSecre1) {
      this.toastrService.error('Debes seleccionar un Usuario', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }
    if (!valorCargoSecre1.length) {
      this.toastrService.error('El cargo del Usuario no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }



    //VALIDAR PRESTADORES Y CARGO
    if (!valorPrestador1.length) {
      this.toastrService.error('El prestador no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }
    if (!valorCargoPrestador1.length) {
      this.toastrService.error('El cargo del prestador no puede estar vacio', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR SELECCION DE OBJETO DE VISITA
    if(!selObjvisita){
      this.toastrService.error('Selecciona el Objeto de la visita', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }

    //VALIDAR DESCRIPCION DEL ACTA
    if (!valordesc_acta.length) {
      this.toastrService.error('Debes Describir el Acta', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    } else if(valorActa.length < 300){
      this.toastrService.error('El acta debe tener como minimo 300 caracteres', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    }


    


    if (valorActa && valorfechaVisita && sel && selm && selp && valorBarrio && selUsuSecre1 && valorCargoSecre1 &&valorPrestador1
      &&valorCargoPrestador1 && selObjvisita && valordesc_acta && valordesc_acta.length >= 300) {
      doc.output('dataurlnewwindow', { filename: 'acta-pamec.pdf' });
    }

    // doc.save('acta-sic.pdf')


  }



}
