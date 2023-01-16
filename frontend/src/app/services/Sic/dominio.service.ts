import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dominio } from 'src/app/models/Sic/sic.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  dominioURL = environment.dominioURL

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Dominio[]>{
    return this.httpClient.get<Dominio[]>(`${this.dominioURL}`)
  }

  public listaOne(dom: string): Observable<Dominio[]>{
    return this.httpClient.get<Dominio[]>(this.dominioURL + dom)
  }

}
