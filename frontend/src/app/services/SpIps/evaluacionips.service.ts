import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planeacion } from 'src/app/models/SpIps/criterioPlaneacion.dto';
import { Evaluacion } from 'src/app/models/SpIps/evaluacion.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionipsService {

  evaluacionipsURL = environment.evaluacionipsURL;
  planeacionURL = environment.planeacionURL;


  constructor(private httpClient: HttpClient) { }

  public listOne(eva_id: string): Observable<Evaluacion>{
    return this.httpClient.get<Evaluacion>(this.evaluacionipsURL + eva_id)
  }

  public lista(): Observable<Evaluacion[]>{
    return this.httpClient.get<Evaluacion[]>(this.evaluacionipsURL)
  }

  //LISTAR EVALUACIONES POR ID_ACTA LLAVE PRIMARIA
  public listaEvaActId(id_acta: number): Observable<Evaluacion[]>{
    return this.httpClient.get<Evaluacion[]>(this.evaluacionipsURL + 'acta/evaluaciones/' + id_acta)
  }
}
