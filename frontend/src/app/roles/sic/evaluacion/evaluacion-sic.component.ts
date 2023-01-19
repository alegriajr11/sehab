import { Component, OnInit } from '@angular/core';
import { Criterio } from 'src/app/models/Sic/criterio.dto';
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
  criterio: Criterio[];


  captUsuario: string
  captCargoUsuario: string
  captCargoPres: string

  listaVacia: any = undefined;

  mostrarDiv: boolean = false;
  mostrarDivCriterios: boolean = false

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

  enableDiv() {

  }

  

  cerrarIndicador(): void {

  }

  cargarCriteriosByInd(): any{

    
  }


  addIndi(): void {
    // var id = (document.getElementById('ind_id')) as HTMLSelectElement
    // var sel = id.selectedIndex;
    // var opt = id.options[sel]
    // var Valor = (<HTMLSelectElement><unknown>opt).value;

    // let originalDiv = (document.getElementById("myDiv2")) as HTMLDivElement
    // let cloneButton = document.getElementById("botonPlus");
    // let counter = 1;
    
    // cloneButton.addEventListener("click", function() {
    //   let newDiv = (originalDiv.cloneNode(true)) as HTMLElement;
    //   newDiv.id = "myDiv2-" + counter;
    //   newDiv.innerHTML = "Este es el div clonado número " + counter;
    //   document.body.appendChild(newDiv);
    //   counter++;
    // });

    // this.criterioService.listInd(Valor).subscribe(
    //   data => {
    //     this.criterio = data;
    //     this.listaVacia = undefined
    //   },
    //   err => {
    //     this.listaVacia = err.error.message;
    //   }
    // );

    // this.mostrarDiv = false
    // this.mostrarDivCriterios = true

  }




  llenarSpan(): void{
    var id = (document.getElementById('dom_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var ValorDom = (<HTMLSelectElement><unknown>opt).value;

    this.dominioService.listaOne(ValorDom).subscribe(
      data => {
        for(const doms of this.dominio){
          if(doms.dom_id.toString() === ValorDom){
            var dom_nombre = (document.getElementById('dom_nombre')) as HTMLSpanElement
            dom_nombre.textContent = doms.dom_nombre
          }
        }
      }
    )

    var id = (document.getElementById('ind_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var ValorInd = (<HTMLSelectElement><unknown>opt).value;


    this.indicadorService.listIndOne(ValorInd).subscribe(
      data => {
        for(const inds of this.indicador){
          if(inds.ind_id === ValorInd){
            var ind_nombre = (document.getElementById('ind_nombre')) as HTMLSpanElement
            ind_nombre.textContent = inds.ind_nombre
          }
        }
      }
    )
  }
}
