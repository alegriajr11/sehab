import { Component, OnInit } from '@angular/core';
import { Criterio } from 'src/app/models/Sic/criterio.dto';
import { Indicador } from 'src/app/models/Sic/indicador.dto';
import { Dominio } from 'src/app/models/Sic/sic.dto';
import { CriterioService } from 'src/app/services/Sic/criterio.service';
import { DominioService } from 'src/app/services/Sic/dominio.service';
import { IndicadorService } from 'src/app/services/Sic/indicador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-criteriosic',
  templateUrl: './criteriosic.component.html',
  styleUrls: ['./criteriosic.component.css']
})
export class CriteriosicComponent implements OnInit {

  dominio: Dominio[];
  indicador: Indicador[];
  criterio: Criterio[];

  indId: string

  controlCriterio = false;

  listaVacia: any = undefined;

  constructor(
    private dominioService: DominioService,
    private indicadorService: IndicadorService,
    private criterioService: CriterioService
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
    
    var dom_nombre = (document.getElementById('dom_nombre')) as HTMLSpanElement
    dom_nombre.textContent = null

    var ind_nombre = (document.getElementById('ind_nombre')) as HTMLSpanElement
    ind_nombre.textContent = null
    
    this.controlCriterio = false

    this.criterio = []

  }


  cargarCriteriosByInd(): any{
    var id = (document.getElementById('ind_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Valor = (<HTMLSelectElement><unknown>opt).value;

    this.criterioService.listInd(Valor).subscribe(
      data => {
        this.criterio = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
    
    this.controlCriterio = true;
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

    this.indId = ValorInd
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

  borrar(criid: number, indid: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.criterioService.delete(criid, indid).subscribe(res => this.cargarCriteriosByInd());
        Swal.fire(
          'OK',
          'Criterio Eliminado',
          'success'
        );
        

        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Criterio a salvo',
          'error'
        );
      }
    });

  }
    
}


