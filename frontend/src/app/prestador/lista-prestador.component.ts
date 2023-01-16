import { Component, OnInit } from '@angular/core';
import { PrestadorDto } from '../models/prestador.dto';
import { PrestadorService } from '../services/prestador.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-lista-prestador',
  templateUrl: './lista-prestador.component.html',
  styleUrls: ['./lista-prestador.component.css']
})
export class ListaPrestadorComponent implements OnInit {
  
  prestador: any[] = [];

  listaVacia: any = undefined;

  isAdmin: boolean;

  public page: number;
  searchText: any;

  constructor(
    private prestadorService: PrestadorService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  this.cargarPrestadores();
  this.isAdmin = this.tokenService.isAdmin();
  }

  cargarPrestadores(): void {
    this.prestadorService.lista().subscribe(
      data => {
        this.prestador = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }



}
