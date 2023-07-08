import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActaPdfDto } from 'src/app/models/Sic/actapdf.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActapdfService {

  //  acta_pdf_URL: 'http://localhost:8080/sic-acta/',
  //localhost:8080/sic-acta/ultima/acta/sic
  actasic_pdfUrl = environment.acta_pdf_URL

  constructor(private httpClient: HttpClient) { }
  
  //SOLICITUD LISTAR ACTAS DEL ROL SIC
  public lista(): Observable<ActaPdfDto[]>{
    return this.httpClient.get<ActaPdfDto[]>(this.actasic_pdfUrl)
  }

  //SOLICITUD ULTIMA ACTA DEL ROL SIC
  public listaUltimaSic(): Observable<ActaPdfDto>{
    return this.httpClient.get<ActaPdfDto>(this.actasic_pdfUrl +'ultima/acta/sic')
  }


  //SOLICITUD MOSTRAR UN ACTA DEL ROL SIC
  public one(id: number): Observable<ActaPdfDto> {
    return this.httpClient.get<ActaPdfDto>(`${this.actasic_pdfUrl}${id}`);
  }

  //SOLICITUD FILTRAR ACTA SIC POR FECHA - ROL SIC
  public actaSicDate(dateString: string): Observable<ActaPdfDto[]> {
    return this.httpClient.get<ActaPdfDto[]>(this.actasic_pdfUrl + 'fecha/'+ dateString)
  }
}
