import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { ActaSicPdfDto } from 'src/app/models/actaSicpdf.dto';
import { AuthService } from 'src/app/services/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Municipio } from 'src/app/models/Prestador/municipio';
import { MunicipioService } from 'src/app/services/NuevoPrestador/municipio.service';
import { PrestadorDto } from 'src/app/models/prestador.dto';
import { PrestadorService } from 'src/app/services/prestador.service';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TokenDto } from 'src/app/models/token.dto';
import Swal from 'sweetalert2';
import { GenerarPdfActaService } from 'src/app/services/Sic/generar-pdf-acta.service';



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
  id_acta: number
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
  act_obj_visita: string = ''
  act_nombre_funcionario: string
  act_cargo_funcionario: string
  act_firma_funcionario: string
  act_nombre_prestador: string
  act_cargo_prestador: string
  act_firma_prestador: string


  //ATRIBUTOS ID DE SELECTS
  act_municipioId: string
  act_prestadorId: string
  act_funcionarioId: string


  firma: string;


  constructor(
    private modalService: BsModalService,
    private prestadorService: PrestadorService,
    private municipioService: MunicipioService,
    private usuarioService: UsuarioService,
    private actaPdfService: ActapdfService,
    public sharedService: SharedServiceService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private generarPdfActaSic: GenerarPdfActaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.incializarDatos();
  }

  incializarDatos() {
    this.cargarMunicipio();
    this.cargarUsuario();
    this.unsoloCheckbox();
    this.obtenerNombres();
    this.ultimaActaId();
  }

  habilitarFechaFinal() {
    this.habilitarfechaFin = true;
  }

  //Metodo Abrir Modal
  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: true,
        keyboard: true
      }

    );

  }

  //LISTAR MUNICIPIOS
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
    this.act_municipioId = ''
  }

  //LISTAR ÚLTIMA ACTA REGISTRADA
  ultimaActaId(): void {
    this.actaPdfService.obtenerUltimaActaSic().subscribe(
      data => {
        this.actaPdf = data
        var acta = (document.getElementById('acta')) as HTMLSelectElement
        acta.value = this.actaPdf.act_id.toString()
      }
    )
  }

  //LISTAR PRESTADORES POR MUNICIPIO
  cargarPrestadoresByMun(): void {
    this.prestadorService.listMun(this.act_municipioId).subscribe(
      data => {
        this.prestador = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
    this.act_prestadorId = ''
  }

  //LISTAR USUARIOS
  cargarUsuario(): void {
    this.usuarioService.listaUserEstado().subscribe(
      data => {
        this.usuario = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
    this.act_nombre_funcionario = ''
  }

  //LLENAR LOS INPUTS UNA VES SE HAYA SELECCIONADO EL PRESTADOR
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

  //PERMITIR SOLO SELECCIONA UN SOLO CHECKBOX
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

  async obtenerNombreSelects(): Promise<void> {

    //SELECT MUNICIPIO
    if (this.act_municipioId) {
      const idMunicipioSeleccionado = this.act_municipioId;
      const mun = await this.municipioService.oneMunicipio(idMunicipioSeleccionado).toPromise();
      this.act_municipio = mun.mun_nombre
    }

    if (this.act_prestadorId) {
      //SELECT PRESTADOR
      const idPrestadorSeleccionado = this.act_prestadorId;
      const pres = await this.prestadorService.listaOne(idPrestadorSeleccionado).toPromise();
      this.act_prestador = pres.pre_nombre
    }

    if (this.act_funcionarioId) {
      //SELECT FUNCIONARIO VERIFICADOR
      const idFuncionarioSeleccionado = this.act_funcionarioId;
      const idFuncionarioComoNumero = parseInt(idFuncionarioSeleccionado, 10);
      const func = await this.usuarioService.oneUser(idFuncionarioComoNumero).toPromise();
      this.act_nombre_funcionario = func.usu_nombre + ' ' + func.usu_apellido
      console.log(this.act_nombre_funcionario)
    }

  }

  async obtenerFirmaFuncionario(): Promise<void> {
    if (this.act_funcionarioId) {
      const idFuncionarioSeleccionado = this.act_funcionarioId
      const idFuncionarioComoNumero = parseInt(idFuncionarioSeleccionado, 10);
      const func = await this.usuarioService.oneUser(idFuncionarioComoNumero).toPromise();
      this.act_firma_funcionario = func.usu_firma
    }

  }

  //OBTENER LOS NOMBRES DEL PRESTADOR Y FUNCIONARIO - GUARDA TEMPORALMENTE EN STORAGE
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
  async onRegister(): Promise<void> {

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
    var seguimiento = '';
    if (valorVisitaSeguim) {
      seguimiento = 'X';
    }

    //INPUTS BLOQUEADOS Y SE ASIGNA A LAS VARIABLES DEL DTO
    var acta = (document.getElementById('acta')) as HTMLInputElement
    var valorActa = acta.value

    //INFORMACION PRESTADOR
    //NIT
    var nit = (document.getElementById('nit')) as HTMLInputElement
    var valorNit = nit.value

    //DIRECCION
    var direccion = (document.getElementById('direccion')) as HTMLInputElement
    var valorDireccion = direccion.value

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

    //NOMBRE-FIRMA PRESTADOR
    var presNombre = (document.getElementById('nombrePrestador')) as HTMLInputElement
    var valorPresNombre = presNombre.value

    this.firma = this.sharedService.getFirmaActaSic();

    //OBTENER NOMBRES DE LOS SELECT
    await this.obtenerNombreSelects();

    //OBTENER FIRMA FUNCIONARIO
    await this.obtenerFirmaFuncionario();



    //ASIGNANDO LOS VALORES DEL ACTA PARA ENVIAR POR DTO
    this.act_id = Number(valorActa);
    this.act_nit = valorNit
    this.act_visita_inicial = inicial
    this.act_visita_seguimiento = seguimiento
    this.act_direccion = valorDireccion
    this.act_telefono = valorTelefono
    this.act_email = valorEmail
    this.act_representante = valorRepresentante
    this.act_cod_prestador = valorCodigoPres
    this.act_nombre_prestador = valorPresNombre
    this.act_firma_prestador = this.firma


    //REGISTRO DEL FORMULARIO A TABLA BD
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
      this.act_firma_funcionario,
      this.act_nombre_prestador,
      this.act_firma_prestador,
      this.act_cargo_prestador
    );
    const token = this.tokenService.getToken()
    const tokenDto: TokenDto = new TokenDto(token);

    if (
      !this.act_id ||
      (!this.act_visita_inicial && !this.act_visita_seguimiento) ||
      !this.act_fecha_inicial ||
      !this.act_fecha_final ||
      !this.act_municipioId ||
      !this.act_prestador ||
      !this.act_nit ||
      !this.act_direccion ||
      !this.act_barrio ||
      !this.act_telefono ||
      !this.act_email ||
      !this.act_sede_principal ||
      !this.act_representante ||
      !this.act_cod_prestador ||
      !this.act_cod_sede ||
      !this.act_obj_visita ||
      !this.act_nombre_funcionario ||
      !this.act_cargo_funcionario ||
      !this.act_nombre_prestador ||
      !this.act_cargo_prestador
    ) {
      let mensajeError = 'Por favor, complete los siguientes campos:';

      if (!this.act_visita_inicial && !this.act_visita_seguimiento) {
        mensajeError += ' Tipo de Visita,';
      }

      if (!this.act_fecha_inicial) {
        mensajeError += ' Fecha Inicial,';
      }

      if (!this.act_fecha_final) {
        mensajeError += ' Fecha Final,';
      }

      if (!this.act_municipioId) {
        mensajeError += ' Municipio,';
      }

      if (!this.act_prestador) {
        mensajeError += ' Prestador,';
      }

      if (!this.act_barrio) {
        mensajeError += ' Barrio,';
      }

      if (!this.act_sede_principal) {
        mensajeError += ' Sede,';
      }

      if (!this.act_obj_visita) {
        mensajeError += ' Objeto de visita,';
      }

      if (!this.act_nombre_funcionario) {
        mensajeError += ' Verificador SOGCS,';
      }

      if (!this.act_nombre_prestador) {
        mensajeError += ' Nombre del Prestador Firma,';
      }

      if (!this.act_cargo_prestador) {
        mensajeError += ' Cargo Prestador Firma,';
      }

      mensajeError = mensajeError.slice(0, -1); // Para eliminar la última coma

      this.toastrService.error(mensajeError, 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });

    } else if (!this.act_firma_prestador) {
      this.toastrService.error('Por favor, agregue una firma', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      })
    } else {

      this.authService.registroActaSicPdf(this.actaPdf, tokenDto).subscribe(
        data => {
          if (!data.error) {
            this.boton_acta_sic = true;
            localStorage.setItem('boton-acta-sic', 'true');

            // Aquí, después de registrar el acta, se solicita la última acta
            this.actaPdfService.ultimaActaSicPk().subscribe(
              ultimaActa => {
                if (ultimaActa && ultimaActa.id) {
                  this.id_acta = ultimaActa.id;

                  Swal.fire({
                    title: '¿Desea descargar el acta?',
                    showCancelButton: true,
                    confirmButtonText: 'Si',
                    cancelButtonText: 'No'
                  }).then((result) => {
                    if (result.value) {
                      this.generarPdfActaSic.ActaPdf(this.id_acta);
                      //ASIGNAR NULL EL ATRIBUTO FIRMA PARA UNA NUEVA ACTA
                      this.act_firma_prestador = null
                      this.sharedService.setFirmaActaSic(this.act_firma_prestador)
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
                    text: 'No se pudo obtener el ID del acta.'
                  });
                }
              },
              error => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Hubo un error al obtener el ID del acta.'
                });
              }
            );

            this.toastrService.success(data.message, 'Ok', {
              timeOut: 3000,
              positionClass: 'toast-top-center',
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
    }
  }


}
