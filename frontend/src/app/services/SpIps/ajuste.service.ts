import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ajuste } from 'src/app/models/SpIps/criterioAjuste.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AjusteService {


  //ajusteURL: 'http://localhost:8080/criterioajuste/',
  //ajusteDetailURL: 'http://localhost:8080/criterioajuste/ajuste/',

  ajusteURL = environment.ajusteURL;
  ajusteDetailURL = environment.ajusteDetailURL

  constructor(private httpClient: HttpClient) { }


  public listaAjuste(id: string): Observable<Ajuste[]>{
    return this.httpClient.get<Ajuste[]>(this.ajusteURL + id)
  }

  public detail(id: number): Observable<Ajuste> {
    return this.httpClient.get<Ajuste>(`${this.ajusteDetailURL}${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.ajusteURL}${id}`);
  }

  
  public update(id: number, criterio: Ajuste): Observable<any> {
    return this.httpClient.put<any>(`${this.ajusteURL}${id}`, criterio);
  }
}
