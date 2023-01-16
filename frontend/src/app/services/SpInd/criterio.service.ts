import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriterioInd } from 'src/app/models/SpInd/criterioind.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriterioIndService {

  //criterioindURL: 'http://localhost:8080/criterioind/',
  //criteindURL: 'http://localhost:8080/criterioind/criterio/',

  criterioindURL = environment.criterioindURL;
  criteindURL = environment.criteindURL;

  constructor(private httpClient: HttpClient) { }

  public listaAct(act: string): Observable<CriterioInd[]>{
    return this.httpClient.get<CriterioInd[]>(this.criterioindURL + act)
  }

  public detail(id: number): Observable<CriterioInd> {
    return this.httpClient.get<CriterioInd>(`${this.criteindURL}${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.criterioindURL}${id}`);
  }

  
  public update(id: number, criterio: CriterioInd): Observable<any> {
    return this.httpClient.put<any>(`${this.criterioindURL}${id}`, criterio);
  }

  public save(id: string, criterio: CriterioInd): Observable<any> {
    return this.httpClient.post<any>(`${this.criterioindURL}${id}`, criterio)

  }

}
