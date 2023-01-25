import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  id: number;
  pre_cod_habilitacion: string

  cumpl_cumple: string
    
  constructor() { }

  setId(id: number) {
    this.id = id;
  }

  setIdPrestador(id: string){
    this.pre_cod_habilitacion = id
  }

  setCumple(cumple: string){
    this.cumpl_cumple = cumple
  }
}
