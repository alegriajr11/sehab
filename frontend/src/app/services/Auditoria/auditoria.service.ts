import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auditoria } from 'src/app/models/Auditoria/auditoria.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {

    //auditoriaUrl: 'localhost:8080/auditoria-registro/',

    auditoriaUrl = environment.auditoriaUrl

  constructor(private httpClient: HttpClient) { }

  listAdutitoria(fechaInicio: Date, fechaFin: Date, accion: string): Observable<Auditoria[]> {

    if(fechaInicio && fechaFin){
      const url = `${this.auditoriaUrl}fecha/date?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&accion=${accion}`;
      return this.httpClient.get<Auditoria[]>(url);
    }else {
      const url = `${this.auditoriaUrl}fecha/date?&accion=${accion}`;
      return this.httpClient.get<Auditoria[]>(url);
    }


  }
  
  
}
