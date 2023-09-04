import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrestadorDto } from '../models/prestador.dto';
import { EditarPrestadorDto } from '../models/editar-prestador-dto';


@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  //prestadorURL: 'http://localhost:8080/prestador/',
  prestadorURL = environment.prestadorURL;
  prestadorMunicipioURL = environment.prestadorMunicipioURL
  prestadorPamecMunicipioURL = environment.prestadorPamecMunicipioURL
  prestadorIpsMunicipioURL = environment.prestadorIpsMunicipioURL
  prestadorIndMunicipioURL = environment.prestadorIndMunicipioURL


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<PrestadorDto[]>{
    return this.httpClient.get<PrestadorDto[]>(`${this.prestadorURL}`)
  }

  public listaOne(id: string): Observable<PrestadorDto>{
    return this.httpClient.get<PrestadorDto>(`${this.prestadorURL}` + id)
  }


  public listMun(mun: string): Observable<PrestadorDto[]>{
    return this.httpClient.get<PrestadorDto[]>(this.prestadorMunicipioURL + mun)
  }

  public listMunPamec(mun: string): Observable<PrestadorDto[]>{
    return this.httpClient.get<PrestadorDto[]>(this.prestadorPamecMunicipioURL + mun)
  }

  public listMunIps(mun: string): Observable<PrestadorDto[]>{
    return this.httpClient.get<PrestadorDto[]>(this.prestadorIpsMunicipioURL + mun)
  }

  public listMunInd(mun: string): Observable<PrestadorDto[]>{
    return this.httpClient.get<PrestadorDto[]>(this.prestadorIndMunicipioURL + mun)
  }



  public registroPrestador(prestador: PrestadorDto): Observable<any> {
    return this.httpClient.post<any>(`${this.prestadorURL}`, prestador);
  }
  
  public update(id: string, prestador: PrestadorDto): Observable<any> {
    return this.httpClient.put<any>(`${this.prestadorURL}${id}`, prestador);
  }

}
