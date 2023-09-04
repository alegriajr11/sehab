import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioAdminDto } from 'src/app/models/nuevo-usuario-admin.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nuevo-usuario-admin',
  templateUrl: './nuevo-usuario-admin.component.html',
  styleUrls: ['./nuevo-usuario-admin.component.css']
})
export class NuevoUsuarioAdminComponent implements OnInit {

  usuarioAdmin: NuevoUsuarioAdminDto = null;

  usu_cedula: string;
  usu_nombre: string;
  usu_apellido: string;
  usu_email: string;
  usu_nombreUsuario: string;
  usu_password: string;
  usu_estado: string;
  usu_firma: string;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onRegister(): void {
    this.usu_firma = null
    this.usuarioAdmin = new NuevoUsuarioAdminDto(
      this.usu_cedula,
      this.usu_nombre,
      this.usu_apellido,
      this.usu_email,
      this.usu_nombreUsuario,
      this.usu_password,
      this.usu_estado
    );
    this.authService.registroAdmin(this.usuarioAdmin).subscribe(
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
