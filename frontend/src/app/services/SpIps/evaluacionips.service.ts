import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvaluacionIpsDto } from 'src/app/models/SpIps/evaluacion.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionipsService {

  evaluacionipsURL = environment.evaluacionipsURL;
  planeacionURL = environment.planeacionURL;


  constructor(private httpClient: HttpClient) { }

  public listOne(eva_id: number): Observable<EvaluacionIpsDto>{
    return this.httpClient.get<EvaluacionIpsDto>(this.evaluacionipsURL + eva_id)
  }

  public lista(): Observable<EvaluacionIpsDto[]>{
    return this.httpClient.get<EvaluacionIpsDto[]>(this.evaluacionipsURL)
  }

  //LISTAR EVALUACIONES POR ID_ACTA LLAVE FORANEA
  public listaEvaActId(id_acta: number): Observable<EvaluacionIpsDto[]>{
    return this.httpClient.get<EvaluacionIpsDto[]>(this.evaluacionipsURL + 'acta/evaluaciones/' + id_acta)
  }
}
