import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  id: number;
  pre_cod_habilitacion: string

  cumpl_cumple: string

  criteriosGuardados: number[] = [];


  //NOMBRES PRESTADORES MODAL
  pres_nombre: string
    
  constructor() { }

  setId(id: number) {
    this.id = id;
  }

  setNombrePrestador(name: string){
    this.pres_nombre = name
  }

  setIdPrestador(id: string){
    this.pre_cod_habilitacion = id
  }

  setCumple(cumple: string){
    this.cumpl_cumple = cumple
  }

  // cumplimientosCreados(): void {
  //   this.municipioService.lista().subscribe(
  //     data => {
  //       this.municipio = data;
  //       this.listaVacia = undefined;
  //     },
  //     err => {
  //       this.listaVacia = err.error.message;
  //     }
  //   )
  // }
}
