import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/Sic/indicador.dto';
import { Dominio } from 'src/app/models/Sic/sic.dto';
import { CriterioService } from 'src/app/services/Sic/criterio.service';
import { DominioService } from 'src/app/services/Sic/dominio.service';
import { IndicadorService } from 'src/app/services/Sic/indicador.service';

@Component({
  selector: 'app-evaluacion-sic',
  templateUrl: './evaluacion-sic.component.html',
  styleUrls: ['./evaluacion-sic.component.css']
})
export class EvaluacionSicComponent implements OnInit {

  dominio: Dominio[]
  indicador: Indicador[]

  captUsuario: string
  captCargoUsuario: string
  captCargoPres: string

  listaVacia: any = undefined;

  addInd: boolean;
  addDomInd: boolean;
  constructor(
    private dominioService: DominioService,
    private indicadorService: IndicadorService,
    private criterioService: CriterioService
  ) { }

  ngOnInit(): void {
    this.cargarDominio();
    this.capturarNombres();
  }

  cargarDominio(): void {
    this.dominioService.lista().subscribe(
      data => {
        this.dominio = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  cargarIndicadoresByDom(): void {
    var id = (document.getElementById('dom_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Valor = (<HTMLSelectElement><unknown>opt).value;


    this.indicadorService.listDom(Valor).subscribe(
      data => {
        this.indicador = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  capturarNombres(): void {
    //CAPURAR NOMBRE DEL PRESTADOR
    var copy = document.getElementById("nombre-prestador");
    var captPrestador = sessionStorage.getItem("nombre-pres-sic");
    copy.textContent = " " + captPrestador + "."

    //CAPTURAR NOMBRE DE USUARIO
    this.captUsuario = sessionStorage.getItem("nombre-usuario-sic");
    
    //CAPTURAR CARGO DEL USUARIO
    this.captCargoUsuario = sessionStorage.getItem("cargo-usuario-sic");
    
    //CAPTURAR CARGO DEL PRESTADOR
    this.captCargoPres = sessionStorage.getItem("cargo-prestador-sic")
    
  }

  agregarIndicador(): void {

    // <div class="container_head" id="indicador">
    // <p class="ind_title">Dominio:</p>
    // <select class="form-select form-control" name="dom_id" id="dom_id" (change)="cargarIndicadoresByDom()">
    //   <option hidden selected value="">Selecciona el Dominio...</option>
    //   <option *ngFor="let dominio of dominio" value="{{dominio.dom_id}}">{{dominio.dom_nombre}}</option>
    // </select>

    // <p class="ind_title">Indicador:</p>
    // <select class="form-select form-control" name="ind_id" id="ind_id">
    //   <option hidden selected value="">Selecciona el Indicador...</option>
    //   <option *ngFor="let indicador of indicador" value="{{indicador.ind_id}}">{{indicador.ind_nombre}}</option>
    // </select>

    // <!-- Agregar -->
    // <div class="botones">
    //   <button (click)="addIndi()" class="btn-dark plus">
    //     <i class="fa fa-plus"></i>
    //   </button>
    // </div>

    var creardiv = (document.createElement("div")) as HTMLElement;
    // creardiv.innerHTML = " <button onclick='borrarUno(this)'>Eliminar</button>";


    creardiv.innerHTML = '<p>Dominio:</p>'
    creardiv.innerHTML = '<p>Indicador:</p>'
    var div = (document.getElementById("dominio")) as HTMLElement


    // const ind_id = (document.getElementById('indicador')) as HTMLDivElement;
    // const dominio = document.createElement('div')
    // dominio.innerHTML = "<strong>Importante</strong>"
    // // ind_id.innerHTML = 
    // this.addInd = true
  }

  cerrarIndicador(): void {
    this.addInd = false
  }

  addIndi(): void {
    var dom_id = (document.getElementById('dom_id')) as HTMLSelectElement
    var sel = dom_id.selectedIndex;
    var opt = dom_id.options[sel]
    var ValorDom = (<HTMLSelectElement><unknown>opt).value;

    this.addDomInd = true
    this.addInd = false

  }


}
