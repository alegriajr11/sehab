import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActaSicPdfDto } from 'src/app/models/actaSicpdf.dto';
import { ActaSpPdfDto } from 'src/app/models/actaSpPdf.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActapdfService {

  //  acta_pdf_URL: 'http://localhost:8080/sic-acta/',
  //localhost:8080/sic-acta/ultima/acta/sic
  //actaSpIps_pdf_URL: 'http://localhost:8080/sp-ips/',
  actasic_pdfUrl = environment.actaSic_pdf_URL
  actasp_ips_pdfurl = environment.actaSpIps_pdf_URL
  actaSp_ind_pdf_URL = environment.actaSpInd_pdf_URL

  constructor(private httpClient: HttpClient) { }

  /*ROL SIC*/
  //SOLICITUD LISTAR ACTAS DEL ROL SIC
  public listaSic(): Observable<ActaSicPdfDto[]> {
    return this.httpClient.get<ActaSicPdfDto[]>(this.actasic_pdfUrl)
  }

  //SOLICITUD ULTIMA ACTA DEL ROL SIC
  public listaUltimaSic(): Observable<ActaSicPdfDto> {
    return this.httpClient.get<ActaSicPdfDto>(this.actasic_pdfUrl + 'ultima/acta/sic')
  }

  //SOLICITUD MOSTRAR UN ACTA DEL ROL SIC
  public one(id: number): Observable<ActaSicPdfDto> {
    return this.httpClient.get<ActaSicPdfDto>(`${this.actasic_pdfUrl}${id}`);
  }

  //SOLICITUD FILTRAR ACTA SIC POR FECHA - ROL SIC
  public actaSicDate(dateString: string): Observable<ActaSicPdfDto[]> {
    return this.httpClient.get<ActaSicPdfDto[]>(this.actasic_pdfUrl + 'fecha/' + dateString)
  }





  /*ROL SP*/
  /*ROL SP - IPS*/
  //SOLICITUD LISTAR ACTAS DEL ROL SP - IPS
  public listaSpIps(): Observable<ActaSpPdfDto[]> {
    return this.httpClient.get<ActaSpPdfDto[]>(this.actasp_ips_pdfurl)
  }

  //SOLICITUD ULTIMA ACTA DEL ROL SP_IPS
  public listaUltimaSpIps(): Observable<ActaSpPdfDto> {
    return this.httpClient.get<ActaSpPdfDto>(this.actasp_ips_pdfurl + 'ultima/acta/spips')
  }

  //SOLICITUD ULTIMA ACTA DEL ROL SP_IND
  public listaUltimaSpInd(): Observable<ActaSpPdfDto> {
    return this.httpClient.get<ActaSpPdfDto>(this.actaSp_ind_pdf_URL + 'ultima/acta/spind')
  }

  //SOLICITUD LISTAR ACTAS DEL ROL SP - IPS
  public listaSpInd(): Observable<ActaSpPdfDto[]> {
    return this.httpClient.get<ActaSpPdfDto[]>(this.actaSp_ind_pdf_URL)
  }

}
