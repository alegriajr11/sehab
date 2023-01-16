import { Component, OnInit } from '@angular/core';
import { Criterio } from 'src/app/models/Sic/criterio.dto';
import { Indicador } from 'src/app/models/Sic/indicador.dto';
import { Dominio } from 'src/app/models/Sic/sic.dto';
import { DominioService } from 'src/app/services/Sic/dominio.service';
import { IndicadorService } from 'src/app/services/Sic/indicador.service';
import { CriterioIndService } from 'src/app/services/SpInd/criterio.service';

@Component({
  selector: 'app-agregarcrisic',
  templateUrl: './agregarcrisic.component.html',
  styleUrls: ['./agregarcrisic.component.css']
})
export class AgregarcrisicComponent implements OnInit {
  
  dominio: Dominio[];
  indicador: Indicador[];
  criterio: Criterio[];

  listaVacia: any = undefined;

  constructor(
    private dominioService: DominioService,
    private indicadorService: IndicadorService,
    private criterioService: CriterioIndService
  ) { }

  ngOnInit(): void {
    this.cargarDominio();
  }

  cargarDominio(): void{
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

  cargarIndicadoresByDom(): void{
    var id = (document.getElementById('dom_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Valor = (<HTMLSelectElement><unknown>opt).value;

    console.log(Valor);

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
  
      console.log(ValorInd)
  
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

    onRegister(): void{

    }
}
