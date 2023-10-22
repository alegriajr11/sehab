import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActaVerificacionDto } from 'src/app/models/Actas/actaVerificacion.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActaVerificacionService {

  actaVerifcacion = environment.actaVerificacion

  constructor(private httpClient: HttpClient) { }

  //SOLICITUD ULTIMA ACTA VERIFICACION
  public listaUltimaSpIps(tipo_visita: string): Observable<ActaVerificacionDto> {
    let url = `${this.actaVerifcacion}ultima?`
    if(tipo_visita){
      url += `tipo_visita=${tipo_visita}`;
    }
    return this.httpClient.get<ActaVerificacionDto>(url)
  }
}
