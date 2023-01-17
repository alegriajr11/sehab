import { Component } from '@angular/core';
import { CriterioPam } from 'src/app/models/Pamec/criteriopam.dto';
import { CriteriopamService } from 'src/app/services/Pamec/criteriopam.service';

@Component({
  selector: 'app-evaluacion-pamec',
  templateUrl: './evaluacion-pamec.component.html',
  styleUrls: ['./evaluacion-pamec.component.css']
})
export class EvaluacionPamecComponent {

  criteriopam: CriterioPam[];

  listaVacia: any = undefined;

  captUsuario: string
  captCargoUsuario: string
  captCargoPres: string

  constructor(
    private criteriopamService: CriteriopamService
  ) { }

  ngOnInit(): void {
    this.cargarCriterios()
    this.capturarNombres();
  }

  cargarCriterios(): void{

    this.criteriopamService.lista().subscribe(
      data => {
        this.criteriopam = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  capturarNombres(): void {
    //CAPURAR NOMBRE DEL PRESTADOR
    var copy = document.getElementById("nombre-prestador");
    var captPrestador = sessionStorage.getItem("nombre-pres-pamec");
    copy.textContent = " " + captPrestador + "."

    //CAPTURAR NOMBRE DE USUARIO
    this.captUsuario = sessionStorage.getItem("nombre-usuario");
    
    //CAPTURAR CARGO DEL USUARIO
    this.captCargoUsuario = sessionStorage.getItem("cargo-usuario");
    
    //CAPTURAR CARGO DEL PRESTADOR
    this.captCargoPres = sessionStorage.getItem("cargo-prestador")
    
  }

  onRegister(): void{
    
  }
}
