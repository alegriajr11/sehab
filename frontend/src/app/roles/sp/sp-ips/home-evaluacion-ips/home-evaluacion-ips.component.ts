import { Component } from '@angular/core';

@Component({
  selector: 'app-home-evaluacion-ips',
  templateUrl: './home-evaluacion-ips.component.html',
  styleUrls: ['./home-evaluacion-ips.component.css']
})
export class HomeEvaluacionIpsComponent {

  captUsuario: string
  captCargoUsuario: string
  captCargoPres: string
  captCodPres: string


  constructor(){}

  ngOnInit(): void {

  }

  capturarNombres(): void {
    //CAPURAR NOMBRE DEL PRESTADOR
    var copy = document.getElementById("nombre-prestador");
    var captPrestador = sessionStorage.getItem("nombre-pres-sp-ips");
    copy.textContent = " " + captPrestador + "."
    //CAPTURAR ID DEL PRESTADOR
    this.captCodPres = sessionStorage.getItem("cod-pres-sp-ips");
    
    //CAPTURAR NOMBRE DE USUARIO
    this.captUsuario = sessionStorage.getItem("nombre-usuario-sp-ips");
    //CAPTURAR CARGO DEL USUARIO
    this.captCargoUsuario = sessionStorage.getItem("cargo-usuario-sp-ips");
    //CAPTURAR CARGO DEL PRESTADOR
    this.captCargoPres = sessionStorage.getItem("cargo-prestador-sp-ips")

  }
}
