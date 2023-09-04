import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginUsuarioDto } from '../models/login-usuario.dto';
import { Observable } from 'rxjs';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';
import { TokenDto } from '../models/token.dto';
import { CambiarPasswordDto } from '../models/cambiar-password.dto';
import { RestablecerPasswordDto } from '../models/reset-password.dto';
import { ActaSicPdfDto } from '../models/actaSicpdf.dto';
import { ActaSpPdfDto } from '../models/actaSpPdf.dto';
import { NuevoUsuarioAdminDto } from '../models/nuevo-usuario-admin.dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authURL: 'http://localhost:8080/auth/',
  //actaSpIps_pdf_URL: 'http://localhost:8080/sp-ips/',

  authURL = environment.authURL;
  restablecerContraseña = environment.restablecerContraseña;
  usuarioNewURL = environment.usuarioNewURL;
  usuarioAdmin = environment.usuarioURL;
  acta_sic_pdfUrl = environment.actaSic_pdf_URL;
  acta_SpIps_pdfUrl = environment.actaSpIps_pdf_URL;
  acta_SpInd_pdfUrl = environment.actaSpInd_pdf_URL;

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'login', dto);
  }

  registroAdmin(dto: NuevoUsuarioAdminDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioAdmin, dto);
  }

  registroSic(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioNewURL + 'sic', dto);
  }

  registroSp(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioNewURL + 'sp', dto);
  }

  registroPamec(dto: NuevoUsuarioDto, tokenDto: TokenDto): Observable<any> {
    const body = {
      dto: dto,
      tokenDto: tokenDto
    }
    return this.httpClient.post<any>(this.usuarioNewURL + 'pamec', body);
  }


  registroReso(dto: NuevoUsuarioDto, tokenDto: TokenDto): Observable<any> {
    const body = {
      dto: dto,
      tokenDto: tokenDto
    }
    return this.httpClient.post<any>(this.usuarioNewURL + 'res', body);
  }

  refresh(dto: TokenDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'refresh', dto);
  }

  cambiarPassword(dto: CambiarPasswordDto) {
    return this.httpClient.patch<any>(this.authURL + 'change-password', dto);
  }

  requestPassword(id: number): Observable<any> {
    return this.httpClient.patch<any>(`${this.restablecerContraseña}${id}`, null);
  }

  restablecerPassword(dto: RestablecerPasswordDto) {
    return this.httpClient.patch<any>(this.authURL + 'reset-password', dto);
  }

  resetPassword(dto: RestablecerPasswordDto) {
    return this.httpClient.patch<any>(this.authURL + 'reset-password', dto)
  }

  //REGISTRO ACTA PDF SIC
  registroActaSicPdf(dto: ActaSicPdfDto, tokenDto: TokenDto): Observable<any> {
    const body = {
      dto: dto,
      tokenDto: tokenDto
    }
    return this.httpClient.post<any>(this.acta_sic_pdfUrl, body);
  }

  //REGISTRO ACTA PDF SP_IPS
  registroActaSpIpsPdf(dto: ActaSpPdfDto, tokenDto: TokenDto): Observable<any> {
    const body = {
      dto: dto,
      tokenDto: tokenDto
    }
    return this.httpClient.post<any>(this.acta_SpIps_pdfUrl, body);
  }

  //REGISTRO ACTA PDF SP_IPS
  registroActaSpIndPdf(dto: ActaSpPdfDto, tokenDto: TokenDto): Observable<any> {
    const body = {
      dto: dto,
      tokenDto: tokenDto
    }
    return this.httpClient.post<any>(this.acta_SpInd_pdfUrl, body);
  }
}
