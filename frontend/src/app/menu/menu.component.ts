import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;
  isAdmin: boolean;
  isSic: boolean;
  isSp: boolean;
  isPamec: boolean;
  isReso: boolean;

  usu_nombreUsuario: string;
  usu_nombre: string;



  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    this.isSic = this.tokenService.IsSic();
    this.isSp = this.tokenService.IsSp();
    this.isPamec = this.tokenService.IsPamec();
    this.isReso = this.tokenService.IsReso();
    this.usu_nombreUsuario = this.tokenService.getNombreUsuario();



  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }


//   button?.addEventListener('click', function handleClick(event) {
//   console.log('button clicked');
//   console.log(event);
//   console.log(event.target);
// });

}
