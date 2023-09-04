import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ActaSpPdfDto } from 'src/app/models/actaSpPdf.dto';
import { Usuario } from 'src/app/models/usuario';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-acta-sp-pro',
  templateUrl: './editar-acta-sp-pro.component.html',
  styleUrls: ['./editar-acta-sp-pro.component.css']
})
export class EditarActaSpProComponent {


  actaSp: ActaSpPdfDto = null

  usuario: Usuario[] = null;
  act_cargo_funcionario: string

  //Habilitar la Fecha Final
  habilitarfechaFin = false;

  //MODAL
  public modalRef: BsModalRef;

  //ESTADO DE ACTA
  estado_acta: string;

  id_evaluacion: number

  constructor(
    private actaPdfService: ActapdfService,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.id_evaluacion = this.activatedRoute.snapshot.params['id'];
    this.actaPdfService.oneActaSpInd(id).subscribe(
      data => {
        this.actaSp = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
    
    console.log(this.id_evaluacion)
    this.unsoloCheckbox();
    this.estadoActa();
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

  habilitarFechaFinal() {
    this.habilitarfechaFin = true;
  }

  cargoUsuario() {
    var id = (document.getElementById('usu_secretaria')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Codigo = (<HTMLSelectElement><unknown>opt).value;

    const idUsuarioComoNumero = parseInt(Codigo, 10);
    this.usuarioService.oneUser(idUsuarioComoNumero).subscribe(
      data => {
        for (const usu of this.usuario) {
          if (usu.usu_id === idUsuarioComoNumero) {
            var cargo_usuario = (document.getElementById('cargoSecre')) as HTMLSelectElement
            cargo_usuario.value = usu.usu_cargo
            this.act_cargo_funcionario = cargo_usuario.value
          }
        }
      }
    )
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

  async estadoActa() {
    // Obtener el estado actual del acta
    const data = await this.actaPdfService.oneActaSpInd(this.id_evaluacion).toPromise();
    this.estado_acta = data.act_estado;
    console.log(this.estado_acta)
    if (this.estado_acta === '0') {
      localStorage.setItem('boton-editar-acta-sp-ind', 'false')
    } else if(this.estado_acta === '1'){
      localStorage.setItem('boton-editar-acta-sp-ind', 'true')
    }
  }


  onUpdate(): void {

  }
}
