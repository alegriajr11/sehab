import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDto } from 'src/app/models/nuevo-usuario.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nuevo-usuario-reso',
  templateUrl: './nuevo-usuario-reso.component.html',
  styleUrls: ['./nuevo-usuario-reso.component.css']
})
export class NuevoUsuarioResoComponent implements OnInit {
  usuario: NuevoUsuarioDto = null;

  usu_nombre: string;
  usu_apellido: string;
  usu_email: string;
  usu_nombreUsuario: string;
  usu_password: string;
  usu_estado: string;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(
      this.usu_nombre,
      this.usu_apellido,
      this.usu_email,
      this.usu_nombreUsuario,
      this.usu_password,
      this.usu_estado
    );
    this.authService.registroReso(this.usuario).subscribe(
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
