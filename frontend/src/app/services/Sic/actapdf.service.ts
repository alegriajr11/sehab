import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActaPdfDto } from 'src/app/models/Sic/actapdf.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActapdfService {

  actasic_pdfUrl = environment.acta_pdf_URL

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<ActaPdfDto[]>{
    return this.httpClient.get<ActaPdfDto[]>(this.actasic_pdfUrl)
  }

  public one(id: number): Observable<ActaPdfDto> {
    return this.httpClient.get<ActaPdfDto>(`${this.actasic_pdfUrl}${id}`);
  }

}
