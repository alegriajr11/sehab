import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Verificacion } from 'src/app/models/SpIps/criterioVerificacion.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerificacionService {
  //verificacionURL: 'http://localhost:8080/criterioverif/',
  //verificacionOneURL: 'http://localhost:8080/criterioverif/verificacion/',


  verificacionURL = environment.verificacionURL;
  verificacionOneURL = environment.verificacionOneURL;


  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<Verificacion> {
    return this.httpClient.get<Verificacion>(`${this.verificacionOneURL}${id}`);
  }

  public listaVerf(id: string): Observable<Verificacion[]>{
    return this.httpClient.get<Verificacion[]>(this.verificacionURL + id)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.verificacionURL}${id}`);
  }

  public update(id: number, criterio: Verificacion): Observable<any> {
    return this.httpClient.put<any>(`${this.verificacionURL}${id}`, criterio);
  }

}
