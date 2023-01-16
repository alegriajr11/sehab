import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etapa } from 'src/app/models/SpInd/etapa.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtapaService {

  etapaURL = environment.etapaURL

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Etapa[]>{
    return this.httpClient.get<Etapa[]>(this.etapaURL)
  }

  public listEtaOne(eta: string): Observable<Etapa[]>{
    return this.httpClient.get<Etapa[]>(this.etapaURL +  eta)
  }

}
