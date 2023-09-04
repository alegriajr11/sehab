import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActaPamecDto } from 'src/app/models/actaPamePdf.dto';
import { ActaSicPdfDto } from 'src/app/models/actaSicpdf.dto';
import { ActaSpPdfDto } from 'src/app/models/actaSpPdf.dto';
import { TokenDto } from 'src/app/models/token.dto';
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
  actaPamec_pdf_url = environment.actaPamec_pdf_url

  constructor(private httpClient: HttpClient) { }

  /*ROL SIC*/
  //SOLICITUD LISTAR ACTAS DEL ROL SIC
  public listaSic(): Observable<ActaSicPdfDto[]> {
    return this.httpClient.get<ActaSicPdfDto[]>(this.actasic_pdfUrl)
  }

  //SOLICITUD ULTIMA ACTA DEL ROL SIC
  public obtenerUltimaActaSic(): Observable<ActaSicPdfDto> {
    return this.httpClient.get<ActaSicPdfDto>(this.actasic_pdfUrl + 'ultima/acta/sic')
  }
  public ultimaActaSicPk(): Observable<ActaSicPdfDto> {
    return this.httpClient.get<ActaSicPdfDto>(this.actasic_pdfUrl + 'ultima/acta/sic/pk')
  }

  //SOLICITUD MOSTRAR UN ACTA DEL ROL SIC
  public oneActaSic(id: number): Observable<ActaSicPdfDto> {
    return this.httpClient.get<ActaSicPdfDto>(`${this.actasic_pdfUrl}${id}`);
  }

  //FILTRAR ACTA POR FECHA - No ACTA - PRESTADOR - NIT
  public listaActasSicFilter(year: number, act_id: number, act_prestador: string, act_nit: string): Observable<ActaSicPdfDto[]> {
    let url = `${this.actasic_pdfUrl}busqueda/fecha/acta/prestador/nit?`;

    if (year) {
      url += `year=${year}&`;
    }
    if (act_id) {
      url += `acta_id=${act_id}&`;
    }
    if (act_prestador) {
      url += `act_prestador=${act_prestador}&`;
    }
    if (act_nit) {
      url += `act_nit=${act_nit}&`;
    }

    return this.httpClient.get<ActaSicPdfDto[]>(url);
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

  //SP
  //SOLICITUD MOSTRAR UN ACTA DEL ROL SP_IPS
  public oneActaSpIps(id: number): Observable<ActaSpPdfDto> {
    return this.httpClient.get<ActaSpPdfDto>(`${this.actasp_ips_pdfurl}${id}`);
  }

  //SOLICITUD ULTIMA ACTA DEL ROL SP_IND
  public listaUltimaSpInd(): Observable<ActaSpPdfDto> {
    return this.httpClient.get<ActaSpPdfDto>(this.actaSp_ind_pdf_URL + 'ultima/acta/spind')
  }


  //SOLICITUD ULTIMA ACTA DEL ROL SP_IND
  public listaUltimaPamec(): Observable<ActaPamecDto> {
    return this.httpClient.get<ActaPamecDto>(this.actaPamec_pdf_url + 'ultima/acta/pamec')
  }


  //SOLICITUD MOSTRAR UN ACTA DEL ROL SP_IND
  public oneActaSpInd(id: number): Observable<ActaSpPdfDto> {
    return this.httpClient.get<ActaSpPdfDto>(`${this.actaSp_ind_pdf_URL}${id}`);
  }

    //SOLICITUD MOSTRAR UN ACTA DEL ROL PAMEC
    public oneActaPamec(id: number): Observable<ActaPamecDto> {
      return this.httpClient.get<ActaPamecDto>(`${this.actaPamec_pdf_url}${id}`);
    }


  //FILTRAR ACTA POR FECHA - No ACTA - PRESTADOR - NIT
  public listaActasSpIndFilter(year: number, act_id: number, act_prestador: string, act_nit: string): Observable<ActaSpPdfDto[]> {
    let url = `${this.actaSp_ind_pdf_URL}busqueda/fecha/acta/prestador/nit?`;

    if (year) {
      url += `year=${year}&`;
    }
    if (act_id) {
      url += `acta_id=${act_id}&`;
    }
    if (act_prestador) {
      url += `act_prestador=${act_prestador}&`;
    }
    if (act_nit) {
      url += `act_nit=${act_nit}&`;
    }

    return this.httpClient.get<ActaSpPdfDto[]>(url);
  }


  //FILTRAR ACTA POR FECHA - No ACTA - PRESTADOR - NIT
  public listaActasSpIpsFilter(year: number, act_id: number, act_prestador: string, act_nit: string): Observable<ActaSpPdfDto[]> {
    let url = `${this.actasp_ips_pdfurl}busqueda/fecha/acta/prestador/nit?`;

    if (year) {
      url += `year=${year}&`;
    }
    if (act_id) {
      url += `acta_id=${act_id}&`;
    }
    if (act_prestador) {
      url += `act_prestador=${act_prestador}&`;
    }
    if (act_nit) {
      url += `act_nit=${act_nit}&`;
    }

    return this.httpClient.get<ActaSpPdfDto[]>(url);
  }


  //FILTRAR ACTA POR FECHA - No ACTA - PRESTADOR - NIT
  public listaActasPamec(year: number, act_id: number, act_prestador: string, act_nit: string): Observable<ActaPamecDto[]> {
    let url = `${this.actaPamec_pdf_url}busqueda/fecha/acta/prestador/nit?`;

    if (year) {
      url += `year=${year}&`;
    }
    if (act_id) {
      url += `acta_id=${act_id}&`;
    }
    if (act_prestador) {
      url += `act_prestador=${act_prestador}&`;
    }
    if (act_nit) {
      url += `act_nit=${act_nit}&`;
    }

    return this.httpClient.get<ActaPamecDto[]>(url);
  }



  //SOLICITUD LISTAR ACTAS DEL ROL SP - IPS
  public listaSpInd(): Observable<ActaSpPdfDto[]> {
    return this.httpClient.get<ActaSpPdfDto[]>(this.actaSp_ind_pdf_URL)
  }

  //SOLICITUD LISTAR ACTAS DEL ROL PAMEC
  public listaPamec(): Observable<ActaPamecDto[]> {
    return this.httpClient.get<ActaPamecDto[]>(this.actaPamec_pdf_url)
  }



  //METODOS CERRAR ACTAS
  //CERRAR EL ACTA SIC
  public cerrarActaSic(id: number, tokenDto: TokenDto): Observable<any> {
    const body = {
      tokenDto: tokenDto
    }
    return this.httpClient.put<any>(this.actasic_pdfUrl + 'cerrar/' + id, body)
  }

  //CERRAR EL ACTA SP IND
  public cerrarActaSpInd(id: number, tokenDto: TokenDto): Observable<any> {
    const body = {
      tokenDto: tokenDto
    }
    return this.httpClient.put<any>(this.actaSp_ind_pdf_URL + 'cerrar/' + id, body)
  }

  //CERRAR EL ACTA SP IPS
  public cerrarActaSpIps(id: number, tokenDto: TokenDto): Observable<any> {
    const body = {
      tokenDto: tokenDto
    }
    return this.httpClient.put<any>(this.actasp_ips_pdfurl + 'cerrar/' + id, body)
  }

    //CERRAR EL ACTA PAMEC
    public cerrarActaPamec(id: number, tokenDto: TokenDto): Observable<any> {
      const body = {
        tokenDto: tokenDto
      }
      return this.httpClient.put<any>(this.actaPamec_pdf_url + 'cerrar/' + id, body)
    }
}
