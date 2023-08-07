import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { TokenDto } from '../models/token.dto';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  usuarioURL = environment.usuarioURL;
  usuarioNewURL = environment.usuarioNewURL;

  generarPdfURL = environment.generarPdfURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }

  public detail(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.usuarioURL}${id}`);
  }

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(`${this.usuarioNewURL}`, usuario);
  }

  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(`${this.usuarioURL}${id}`, usuario);
  }



  public delete(id: number, tokenDto: TokenDto): Observable<any> {
    return this.httpClient.delete<any>(`${this.usuarioURL}${id}`, { body: tokenDto});
  }

  public pdf(){
    return this.httpClient.get(`${this.generarPdfURL}` , {responseType: 'blob'}).subscribe(res => {
      const file = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    })
  }
}
