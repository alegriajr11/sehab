import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDto } from 'src/app/models/nuevo-usuario.dto';
import { AuthService } from 'src/app/services/auth.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-nuevo-usuario-sic',
  templateUrl: './nuevo-usuario-sic.component.html',
  styleUrls: ['./nuevo-usuario-sic.component.css']
})
export class NuevoUsuarioSicComponent implements OnInit {

  usuario: NuevoUsuarioDto = null;

  usu_cedula: string;
  usu_nombre: string;
  usu_apellido: string;
  usu_email: string;
  usu_cargo: string = 'P.A ASEGURAMIENTO Y PRESTACION DE SERVICIOS - SOGCS';
  usu_area_profesional: string;
  usu_nombreUsuario: string;
  usu_password: string;
  usu_firma: string;
  usu_estado: string;
  //MODAL
  public modalRef: BsModalRef;


  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private toastrService: ToastrService,
    public sharedService: SharedServiceService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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

  onRegister(): void {
    this.usu_firma = this.sharedService.getFirmaUsuario()
    this.usuario = new NuevoUsuarioDto(
      this.usu_cedula,
      this.usu_nombre,
      this.usu_apellido,
      this.usu_cargo,
      this.usu_area_profesional,
      this.usu_email,
      this.usu_nombreUsuario,
      this.usu_password,
      this.usu_firma,
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
    this.usu_firma = null
    this.sharedService.setFirmaUsuario(this.usu_firma)
  }
}
