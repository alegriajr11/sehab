import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CumplimientoSicEstandarDto } from 'src/app/models/Sic/cumplimientoEstandar.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CumplimientoEstandarService {


  cumplimientoEstandarURL = environment.cumplimientoEstandarURL
  cumpleEstandarURL = environment.cumpleEstandarURL

  constructor(private httpClient: HttpClient) { }

  createCumplimientoEstandar(dto: CumplimientoSicEstandarDto): Observable<any> {
    return this.httpClient.post<any>(`${this.cumplimientoEstandarURL}`, dto);
  }

  public oneCumple(id: number): Observable<CumplimientoSicEstandarDto> {
    return this.httpClient.get<CumplimientoSicEstandarDto>(this.cumpleEstandarURL + id);
  }

}
