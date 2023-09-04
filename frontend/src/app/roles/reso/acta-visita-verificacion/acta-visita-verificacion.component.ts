import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Municipio } from 'src/app/models/Prestador/municipio';
import { PrestadorDto } from 'src/app/models/prestador.dto';
import { Usuario } from 'src/app/models/usuario';
import { MunicipioService } from 'src/app/services/NuevoPrestador/municipio.service';
import { PrestadorService } from 'src/app/services/prestador.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-acta-visita-verificacion',
  templateUrl: './acta-visita-verificacion.component.html',
  styleUrls: ['./acta-visita-verificacion.component.css']
})
export class ActaVisitaVerificacionComponent {

  //MODAL
  public modalRef: BsModalRef;

  municipio: Municipio[];
  prestador: PrestadorDto[];
  usuarios: Usuario[];

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
  act_correo: string
  act_representante: string
  act_gerente: string
  act_fecha_inicio: Date
  act_fecha_final: Date
  act_observaciones: string
  act_recibe_visita: string
  act_firma_prestador: string
  act_usu_adicional: string

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


  selectedUsers: any[] = []; // Arreglo para almacenar las selecciones de usuarios

  //Habilitar la Fecha Final
  habilitarfechaFin = false;

  constructor(
    private modalService: BsModalService,
    private prestadorService: PrestadorService,
    private municipioService: MunicipioService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.incializarDatos();
  }

  incializarDatos() {
    this.unsoloCheckbox();
    this.cargarMunicipio();
    this.cargarUsuario();

  }

  onRegister() {

  }

  obtenerNombres() {
    
  }

  //PERMITIR SOLO SELECCIONA UN SOLO CHECKBOX
  unsoloCheckbox(): void {
    var checkbox1 = (document.getElementById("previa")) as HTMLInputElement;
    var checkbox2 = (document.getElementById("segumiento")) as HTMLInputElement;
    var checkbox3 = (document.getElementById("reactivacion")) as HTMLInputElement;
    checkbox1.onclick = function () {
      if (checkbox1.checked != false) {
        checkbox2.checked = null;
        checkbox3.checked = null;
      }
    }
    checkbox2.onclick = function () {
      if (checkbox2.checked != false) {
        checkbox1.checked = null;
        checkbox3.checked = null;
      }
    }
    checkbox3.onclick = function () {
      if (checkbox3.checked != false) {
        checkbox1.checked = null;
        checkbox2.checked = null;
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
    //MUNICIPIO
    const id = document.getElementById('mun_id') as HTMLSelectElement;
    const sel = id.selectedIndex;
    const opt = id.options[sel] as HTMLOptionElement;
    const valorMunicipio = opt ? opt.textContent : '';
    this.act_municipio = valorMunicipio

  }

  //LISTAR PRESTADORES POR MUNICIPIO
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
    //PRESTADOR
    const idp = document.getElementById('prestador') as HTMLSelectElement;
    const selp = idp.selectedIndex;
    const optp = idp.options[selp] as HTMLOptionElement;
    const valorPrestador = optp ? optp.textContent : '';
    this.act_prestador = valorPrestador
  }

  //LISTAR USUARIOS
  cargarUsuario(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  llenarCampos() {

  }

  ruta(){
    this.router.navigate(['/reso/lista-verificacion']);
  }

  addSelect() {
    this.selectedUsers.push({ userId: null }); // Agregar un objeto vacío para una nueva selección
  }

  removeSelect(index: number) {
    this.selectedUsers.splice(index, 1); // Eliminar la selección en el índice proporcionado
  }


}
