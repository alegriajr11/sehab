import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';
import { UsuarioService } from '../services/usuario.service';
import 'jspdf-autotable'
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';






@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: any[] = [];


  usu_id: number

  listaVacia: any = undefined;

  isAdmin: boolean;
  botonUpdate = true;
  botonDelete = true;

  usu_estado: string;



  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }




  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(id).subscribe(res => this.cargarUsuarios());
        Swal.fire(
          'OK',
          'Usuario Eliminado',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Usuario a salvo',
          'error'
        );
      }
    });
  }

  restablecer(usu_id: number): void{
    this.authService.requestPassword(usu_id).subscribe()
  }

  crearPDF(): void {
    this.usuarioService.pdf()
  }
}