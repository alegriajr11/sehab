import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDto } from 'src/app/models/nuevo-usuario.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nuevo-usuario-sic',
  templateUrl: './nuevo-usuario-sic.component.html',
  styleUrls: ['./nuevo-usuario-sic.component.css']
})
export class NuevoUsuarioSicComponent implements OnInit {

  usuario: NuevoUsuarioDto = null;

  usu_nombre: string;
  usu_apellido: string;
  usu_email: string;
  usu_nombreUsuario: string;
  usu_password: string;
  usu_estado: string;

  //MODAL
  public modalRef: BsModalRef;


  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(
      this.usu_nombre,
      this.usu_apellido,
      this.usu_email,
      this.usu_nombreUsuario,
      this.usu_password,
      this.usu_estado
    );
    this.authService.registroSic(this.usuario).subscribe(
      (data) => {
        this.toastrService.success(data.message, 'Ok', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/usuarios']);
      },
      (err) => {
        this.toastrService.error(err.error.message, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
