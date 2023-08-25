import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  id: number;
  pre_cod_habilitacion: string

  cumpl_cumple: string

  criteriosGuardados: number[] = [];

  private firmaActaSic: string;
  private firmaActaVisitaVerificacion: string;
  private firmaActaVisitaIvc: string;
  private firmaUsuario: string;


  //NOMBRES PRESTADORES MODAL
  pres_nombre: string
    
  constructor() { }

  //METODOS SET
  setFirmaActaSic(firmaActaSic: string){
    this.firmaActaSic = firmaActaSic
  }

  setFirmaActaVisitaVerificacion(firmaVisitaVerificacion: string){
    this.firmaActaVisitaVerificacion = firmaVisitaVerificacion
  }

  setFirmaActaVisitaIvc(firmaVisitaIvc: string){
    this.firmaActaVisitaIvc = firmaVisitaIvc
  }

  setFirmaUsuario(firmaUsuario: string){
    this.firmaUsuario = firmaUsuario
  }

  
  //METODOS GET
  getFirmaActaSic(): string{
    return this.firmaActaSic
  }

  getFirmaActaVisitaVerificacion(): string{
    return this.firmaActaVisitaVerificacion
  }

  getFirmaActaVisitaIvc(): string{
    return this.firmaActaVisitaIvc
  }

  getFirmaUsuario(): string{
    return this.firmaUsuario
  }



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
