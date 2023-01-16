import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criterio } from 'src/app/models/Sic/criterio.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriterioService {

  criterios_URL = environment.criterios_URL
  criterioURL = environment.dominioURL


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Criterio[]>{
    return this.httpClient.get<Criterio[]>(this.criterios_URL)
  }

  public listInd(ind: string): Observable<Criterio[]>{
    return this.httpClient.get<Criterio[]>(this.criterios_URL + ind)
  }

  public delete(criid: number, indid: string): Observable<any> {
    return this.httpClient.delete<any>(this.criterioURL + criid + '/' + indid);
  }
}
