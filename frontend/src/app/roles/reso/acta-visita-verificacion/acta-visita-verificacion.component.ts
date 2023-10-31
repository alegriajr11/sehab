import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActaVerificacionDto } from 'src/app/models/Actas/actaVerificacion.dto';
import { Municipio } from 'src/app/models/Prestador/municipio';
import { PrestadorDto } from 'src/app/models/prestador.dto';
import { SedesDto } from 'src/app/models/sedes.dto';
import { Usuario } from 'src/app/models/usuario';
import { ClasificacionService } from 'src/app/services/NuevoPrestador/clasificacion.service';
import { MunicipioService } from 'src/app/services/NuevoPrestador/municipio.service';
import { ActaVerificacionService } from 'src/app/services/Resolucion/acta-verificacion.service';
import { PrestadorService } from 'src/app/services/prestador.service';
import { SedesPrestadorService } from 'src/app/services/sedes-prestador.service';
import { UsuarioService } from 'src/app/services/usuario.service';

//Interfaz para los objetos de usuario seleccionados
interface SelectedUser {
  userId: number | null;
  userId$: Observable<number | null>; // Propiedad userId$ que es un observable
}


@Component({
  selector: 'app-acta-visita-verificacion',
  templateUrl: './acta-visita-verificacion.component.html',
  styleUrls: ['./acta-visita-verificacion.component.css']
})
export class ActaVisitaVerificacionComponent {

  //MODAL
  public modalRef: BsModalRef;

  municipio: Municipio[];
  prestador: any[] = null;
  usuarios: Usuario[];
  usuariosApoyo: Usuario[];
  usuariosContador: Usuario[];

  sede: SedesDto[];

  actaVerificacion: ActaVerificacionDto = null

  listaVacia: any = undefined;

  //ATRIBUTOS DATOS GENERALES DEL PRESTADOR
  act_id: number
  act_visita_previa: string
  act_visita_seguimiento: string
  act_visita_reactivacion: string
  act_municipio: string
  act_prestador: string
  act_nit: string
  act_sede: string
  act_direccion: string
  act_clasificacion: string
  act_cod_habilitacion: string
  act_cod_sede: string
  act_telefono: string
  act_email: string
  act_representante: string
  act_gerente: string
  act_fecha_inicio: string
  act_fecha_final: string
  //OBSERVACIONES DEL ACTA
  act_observaciones: string

  act_cargo_prestador: string

  act_recibe_visita: string
  act_firma_prestador: string


  //ATRIBUTOS ID DE SELECTS
  act_municipioId: string
  act_prestadorId: string
  act_funcionarioId: string
  act_sede_principalId: string

  //ATRIBUTOS PARA CONTROLAR DATOS ENCONTRADOS DE LA VISITA
  dat_encontrado_municipio: string
  dat_encontrado_prestador: string
  dat_encontrado_nit: string
  dat_encontrado_sede: string
  dat_encontrado_direccion: string
  dat_encontrado_clasificacion: string
  dat_encontrado_cod_habilitacion: string
  dat_encontrado_cod_sede: string
  dat_encontrado_telefono: string
  dat_encontrado_representante: string
  dat_encontrado_gerente: string
  dat_encontrado_correo: string

  //ALMACENAR LOS USUARIOS SELECCIONADOS EN EL ARRAY
  selectedUsersVerificadores: SelectedUser[] = [];
  //USUARIO CONTADOR
  selectedUsersContador: SelectedUser[] = [];
  userContador: boolean = false;
  //USUARIOS PROFESIONALES
  selectedUsersProfesionales: SelectedUser[] = [];

  selectedUserIds: number[] = [];

  usuariosSeleccionados: { [key: string]: number } = {};

  //Habilitar la Fecha Final
  habilitarfechaFin = false;

  //Habilitar Select Sede Principal
  habilitarSelectSede: boolean = false;

  constructor(
    private modalService: BsModalService,
    private prestadorService: PrestadorService,
    private municipioService: MunicipioService,
    private sedesServices: SedesPrestadorService,
    private usuarioService: UsuarioService,
    private actaVerificacionService: ActaVerificacionService,
    private router: Router
  ) {
    this.cargarUsuario();
    this.cargarUsuarioApoyo();
    this.cargarUsuarioContador();
  }

  ngOnInit() {
    this.incializarDatos();
  }

  incializarDatos() {
    this.unsoloCheckbox();
    this.cargarMunicipio();
  }



  obtenerNombres() {

  }

  //PERMITIR SOLO SELECCIONA UN SOLO CHECKBOX
  unsoloCheckbox(): void {
    let servicio_acta = this.actaVerificacionService
    let acta_verificacion = this.actaVerificacion
    var checkbox1 = (document.getElementById("previa")) as HTMLInputElement;
    var checkbox2 = (document.getElementById("segumiento")) as HTMLInputElement;
    var checkbox3 = (document.getElementById("reactivacion")) as HTMLInputElement;

    var tipo_visita = ''

    checkbox1.onclick = function () {
      if (checkbox1.checked != false) {
        checkbox2.checked = null;
        checkbox3.checked = null;

        tipo_visita = 'previa'
        servicio_acta.listaUltimaSpIps(tipo_visita).subscribe(
          data => {
            acta_verificacion = data
            var acta = (document.getElementById('acta')) as HTMLSelectElement
            acta.value = acta_verificacion.act_id.toString()
          }
        )
      }
    }

    checkbox2.onclick = function () {
      if (checkbox2.checked != false) {
        checkbox1.checked = null;
        checkbox3.checked = null;

        tipo_visita = 'seguimiento'
        servicio_acta.listaUltimaSpIps(tipo_visita).subscribe(
          data => {
            acta_verificacion = data
            var acta = (document.getElementById('acta')) as HTMLSelectElement
            acta.value = acta_verificacion.act_id.toString()
          }
        )
      }
    }

    checkbox3.onclick = function () {
      if (checkbox3.checked != false) {
        checkbox1.checked = null;
        checkbox2.checked = null;

        tipo_visita = 'reactivacion'
        servicio_acta.listaUltimaSpIps(tipo_visita).subscribe(
          data => {
            acta_verificacion = data
            var acta = (document.getElementById('acta')) as HTMLSelectElement
            acta.value = acta_verificacion.act_id.toString()
          }
        )
      }
    }
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: true,
        keyboard: true
      }

    );

  }


  habilitarFechaFinal() {
    this.habilitarfechaFin = true;
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
    this.act_sede_principalId = ''
  }

  //LISTAR SEDES POR SELECCION DE PRESTADOR
  cargarSedesByPrestador() {
    this.habilitarSelectSede = true
    this.act_sede_principalId = ''
    this.sedesServices.listaSedesNombre(this.act_prestadorId).subscribe(
      async data => {
        this.sede = data
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  async sedeSeleccionada() {
    this.sedesServices.listaOneSede(this.act_sede_principalId).subscribe(
      async data => {
        const cod_habilitacion = this.act_prestadorId

        var codigo_sede = (document.getElementById('codhabsede')) as HTMLSelectElement
        codigo_sede.value = ' ' + cod_habilitacion

        var gerente = (document.getElementById('gerente')) as HTMLSelectElement;
        gerente.value = data.sede_gerente

        this.act_sede = data.sede_nombre
      }
    )
  }

  //LISTAR USUARIOS
  cargarUsuario(): void {
    const rol_res = 'res'
    this.usuarioService.listaUserRol(rol_res).subscribe(
      data => {
        this.usuarios = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  //LISTAR USUARIOS PROFESIONALES APOYO
  cargarUsuarioApoyo(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuariosApoyo = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  //LISTAR USUARIOS CONTADOR
  cargarUsuarioContador(): void {
    this.usuarioService.listaUserContador().subscribe(
      data => {
        this.usuariosContador = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  async llenarCampos() {
    var id = (document.getElementById('prestador')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Codigo = (<HTMLSelectElement><unknown>opt).value;

    this.prestadorService.listaOne(Codigo).subscribe(
      async (data) => {
        for (let pres of this.prestador) {
          if (pres.pre_cod_habilitacion === Codigo) {
            /*DATOS GENERALRES REPORTADOS EN EL REPS*/
            //TIPO PRESTADOR
            var tipo_prestador = (document.getElementById('clasificacionPrestador')) as HTMLSelectElement;
            tipo_prestador.value = data.pre_clasificacion.cla_nombre;

            //ASIGNACION CODIGO HABILITACION PRESTADOR
            var cod_habilitacion = (document.getElementById('codhabilitacion')) as HTMLSelectElement;
            cod_habilitacion.value = pres.pre_cod_habilitacion;
            //ASIGNAR A LA VARIABLE DTO
            this.act_cod_habilitacion = cod_habilitacion.value

            //ASIGNACION NIT PRESTADOR
            var nit = (document.getElementById('nit')) as HTMLSelectElement;
            nit.value = pres.pre_nit;
            //ASIGNAR A LA VARIABLE DTO
            this.act_nit = nit.value

            //ASIGNACION DIRECCIÓN PRESTADOR
            var direccion = (document.getElementById('direccion')) as HTMLSelectElement;
            direccion.value = pres.pre_direccion;
            //ASIGNAR A LA VARIABLE DTO
            this.act_direccion = direccion.value

            //ASIGNACION TELEFONO PRESTADOR
            var telefono = (document.getElementById('telefono')) as HTMLSelectElement;
            telefono.value = pres.pre_telefono;
            //ASIGNAR A LA VARIABLE DTO
            this.act_telefono = telefono.value

            //ASIGNACION EMAIL PRESTADOR
            var email = (document.getElementById('email')) as HTMLSelectElement;
            email.value = pres.pre_email;
            //ASIGNAR A LA VARIABLE DTO
            this.act_email = email.value

            //ASIGNACION REPRESENTANTE LEGAL PRESTADOR
            var rep_legal = (document.getElementById('repleg')) as HTMLSelectElement;
            rep_legal.value = pres.pre_representante;
            //ASIGNAR A LA VARIABLE DTO
            this.act_representante = rep_legal.value

            /**LLENAR CAMPOS DATOS ENCONTRADOS CON INFORMACIÓN DEL REPS PERO EDITABLES*/
            //ASIGNACION TELEFONO PRESTADOR
            var telefonoEncontrada = (document.getElementById('encontrado_telefono')) as HTMLSelectElement;
            telefonoEncontrada.value = pres.pre_telefono;

            //ASIGNACION DIRECCIÓN PRESTADOR
            var direccionEncontrada = (document.getElementById('encontrado_direccion')) as HTMLSelectElement;
            direccionEncontrada.value = pres.pre_direccion;

            //ASIGNACION EMAIL PRESTADOR
            var emailEncontrada = (document.getElementById('encontrado_correo')) as HTMLSelectElement;
            emailEncontrada.value = pres.pre_email;
          }
        }
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }


  // AGREGAR USUARIO VERIFICADOR
  addSelectVerificador() {
    const newUser: SelectedUser = { userId: null, userId$: new BehaviorSubject<number | null>(null) };
    this.selectedUsersVerificadores.push(newUser);
  }

  // REMOVER VERIFICADOR
  removeSelectVerificador(userId: number) {
    const index = this.selectedUsersVerificadores.findIndex(user => user.userId === userId);
    if (index !== -1) {
      // Encuentra el índice del usuario en el array
      this.selectedUsersVerificadores.splice(index, 1); // Elimina el select de la lista de selectores
      delete this.usuariosSeleccionados[userId]; // Elimina el ID del usuario del objeto usuariosSeleccionados
      console.log(this.usuariosSeleccionados)
    }
  }

  // Actualizar ID del usuario seleccionado
  updateSelectedUserId(selectedUser: SelectedUser, selectedUserId: number) {
    selectedUser.userId = selectedUserId;
    // Actualiza el ID del usuario en el objeto usuariosSeleccionados
    this.usuariosSeleccionados[selectedUserId] = selectedUserId;
    console.log(this.usuariosSeleccionados)
  }


  addSelectProfesional() {
    const newUser: SelectedUser = { userId: null, userId$: new BehaviorSubject<number | null>(null) };
    this.selectedUsersProfesionales.push(newUser);
  }

  removeSelectProfesional(userId: number) {
    const index = this.selectedUsersProfesionales.findIndex(user => user.userId === userId);
    if (index !== -1) {
      // Encuentra el índice del usuario en el array
      this.selectedUsersProfesionales.splice(index, 1); // Elimina el select de la lista de selectores
      delete this.usuariosSeleccionados[userId]; // Elimina el ID del usuario del objeto usuariosSeleccionados
      console.log(this.usuariosSeleccionados)
    }
  }


  //METODOS PARA CONTROLAR EL CONTADOR
  // AGREGAR USUARIO VERIFICADOR
  addSelectContador() {
    const newUser: SelectedUser = { userId: null, userId$: new BehaviorSubject<number | null>(null) };
    this.selectedUsersContador.push(newUser);
    this.userContador = true;
  }

  // REMOVER VERIFICADOR
  removeSelectContador(userId: number) {
    const index = this.selectedUsersContador.findIndex(user => user.userId === userId);
    if (index !== -1) {
      // Encuentra el índice del usuario en el array
      this.selectedUsersContador.splice(index, 1); // Elimina el select de la lista de selectores
      delete this.usuariosSeleccionados[userId]; // Elimina el ID del usuario del objeto usuariosSeleccionados
      console.log(this.usuariosSeleccionados)
    }
    this.userContador = false;
  }


  onRegister() {

    //ASIGNAR EL VALOR DEL ACTA A LA VARIABLE DTO
    var acta = (document.getElementById('acta')) as HTMLSelectElement
    this.act_id = parseInt(acta.value, 10)

    //REGISTRO DE LA INFORMACIÓN RECOPILADA A LA CLASE DTO - ACTA_VERIFICACIÓNDTO
    this.actaVerificacion = new ActaVerificacionDto(
      this.act_id,
      this.act_visita_previa,
      this.act_visita_seguimiento,
      this.act_visita_reactivacion,
      this.act_fecha_inicio,
      this.act_fecha_final,
      this.act_municipio,
      this.act_prestador,
      this.act_nit,
      this.act_direccion,
      this.act_telefono,
      this.act_email,
      this.act_representante,
      this.act_gerente,
      this.act_cod_habilitacion,
      this.act_sede,
      this.act_cod_sede,
      this.act_observaciones,
      this.act_firma_prestador,
      this.act_cargo_prestador
    )
    console.log(this.actaVerificacion)
  }
}

