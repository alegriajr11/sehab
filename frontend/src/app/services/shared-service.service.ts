import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {


  id_evaluacion_sic: number;
  id_evaluacion_sp_ind: number;
  id_evaluacion_sp_ips: number;
  id_evaluacion_pamec: number;
  pre_cod_habilitacion: string;

  id_acta_sic: number

  crie_id: number
  cumpl_asignado: string

  criteriosGuardados: number[] = [];

  nombreUsuario: string;

  private firmaActaSic: string;
  private firmaActaSpIpsPrestador: string;
  private firmaActaSpIpsAcompanante: string;
  private firmaActaSpInd: string;
  private firmaActaPamec: string;
  private firmaActaVisitaVerificacion: string;
  private firmaActaVisitaIvc: string;
  private firmaUsuario: string;


  private cumplAsignadoSubject = new BehaviorSubject<string>(''); // Inicializado con un valor vacío
  cumplAsignado$: Observable<string> = this.cumplAsignadoSubject.asObservable();



  //NOMBRES PRESTADORES MODAL
  pres_nombre: string
    
  constructor() { }

  //METODOS SET
  setFirmaActaSic(firmaActaSic: string){
    this.firmaActaSic = firmaActaSic
  }

  setFirmaActaSpIpsPrestador(firmaActaSpIpsPrestador: string){
    this.firmaActaSpIpsPrestador = firmaActaSpIpsPrestador
  }

  setFirmaActaSpIpsAcompanante(firmaActaSpIpsAcompanante: string){
    this.firmaActaSpIpsAcompanante = firmaActaSpIpsAcompanante
  }

  setFirmaActaSpInd(firmaActaSpInd: string){
    this.firmaActaSpInd = firmaActaSpInd
  }

  setFirmaActaPamec(firmaActaPamec: string){
    this.firmaActaPamec = firmaActaPamec
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

  //Capturar Nombre de Usuario
  setNombreUsuario(usu_nombre: string){
    this.nombreUsuario =  usu_nombre
  }

  
  //METODOS GET
  getFirmaActaSic(): string{
    return this.firmaActaSic
  }

  getFirmaActaSpIpsPrestador(): string{
    return this.firmaActaSpIpsPrestador
  }

  getFirmaActaSpIpsAcompanante(): string{
    return this.firmaActaSpIpsAcompanante
  }

  getFirmaActaSpInd(): string{
    return this.firmaActaSpInd
  }

  getFirmaActaPamec(): string{
    return this.firmaActaPamec
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


  setIdSic(id: number) {
    this.id_evaluacion_sic = id;
  }

  setIdActaSic(id: number) {
    this.id_acta_sic = id
  }

  setIdCriterioSic(id: number) {
    this.crie_id = id;
  }


  setIdSpIps(id: number) {
    this.id_evaluacion_sp_ips = id;
  }

  setIdSpInd(id: number) {
    this.id_evaluacion_sp_ind = id;
  }

  setIdPamec(id: number) {
    this.id_evaluacion_pamec = id;
  }

  setNombrePrestador(name: string){
    this.pres_nombre = name
  }


  setIdPrestador(id: string){
    this.pre_cod_habilitacion = id
  }

  setCumpleAsignado(cumpleAsignado: string) {
    this.cumplAsignadoSubject.next(cumpleAsignado);
  }

}
