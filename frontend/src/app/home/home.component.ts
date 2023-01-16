import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  usu_nombreUsuario: string;
  usu_nombre: string;
  isLogged: boolean;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.usu_nombreUsuario = this.tokenService.getNombreUsuario();
    this.isLogged = this.tokenService.isLogged();
    this.usu_nombre = this.tokenService.getNombre();
  }

}
