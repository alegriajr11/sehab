import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginUsuarioDto } from '../models/login-usuario.dto';
import { Observable } from 'rxjs';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';
import { TokenDto } from '../models/token.dto';
import { CambiarPasswordDto } from '../models/cambiar-password.dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;
  usuarioNewURL = environment.usuarioNewURL;
  usuarioAdmin = environment.usuarioURL;

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'login', dto);
  }

  registroAdmin(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioAdmin, dto);
  }

  registroSic(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioNewURL + 'sic', dto);
  }

  registroSp(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioNewURL + 'sp', dto);
  }

  registroPamec(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioNewURL + 'pamec', dto);
  }

  registroReso(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.usuarioNewURL + 'res', dto);
  }

  refresh(dto: TokenDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'refresh', dto);
  }

  cambiarPassword(dto: CambiarPasswordDto) {
    return this.httpClient.post<any>(this.authURL + 'cambiar-contraseña', dto);
  }
}