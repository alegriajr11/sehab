import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Implementacion } from 'src/app/models/SpIps/criterioImplementacion.dto';
import { TokenDto } from 'src/app/models/token.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImplementacionService {

  //implementacionURL: 'http://localhost:8080/criterioimple/',

  implementacionURL = environment.implementacionURL;
  implementacionOneURL = environment.implementacionOneURL;


  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<Implementacion> {
    return this.httpClient.get<Implementacion>(`${this.implementacionOneURL}${id}`);
  }

  public listaImpl(id: string): Observable<Implementacion[]>{
    return this.httpClient.get<Implementacion[]>(`${this.implementacionURL}${id}`)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.implementacionURL}${id}`);
  }

  public update(id: number, criterio: Implementacion): Observable<any> {
    return this.httpClient.put<any>(`${this.implementacionURL}${id}`, criterio);
  }
}
