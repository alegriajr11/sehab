import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Municipio } from 'src/app/models/Prestador/municipio';
import { SedesDto } from 'src/app/models/sedes.dto';
import { SedesPrestadorService } from 'src/app/services/sedes-prestador.service';

@Component({
  selector: 'app-agregar-sedes-prestador',
  templateUrl: './agregar-sedes-prestador.component.html',
  styleUrls: ['./agregar-sedes-prestador.component.css']
})
export class AgregarSedesPrestadorComponent {

  sedePrestador: SedesDto
  municipio: Municipio[];
  prestadores: any[] = [];

  //ID MUNICIPIO
  municipio_id: number
  prestador_id: string

  sede_numero: string
  sede_nombre: string
  sede_gerente: string;
  sede_principal: string
  sede_numero_principal: string
  sede_direccion: string
  sede_barrio: string

  constructor(
    private sedesPrestadorService: SedesPrestadorService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  onRegister(): void {
    this.sedePrestador = new SedesDto(
      this.sede_numero,
      this.sede_nombre,
      this.sede_gerente,
      this.sede_principal,
      this.sede_numero_principal,
      this.sede_direccion,
      this.sede_barrio,
      {
        pre_cod_habilitacion: this.prestador_id
      },
    );
    this.sedesPrestadorService.registroSedePrestador(this.sedePrestador).subscribe(
      (data) => {
        this.toastrService.success(data.message, 'Ok', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/prestadores/sede']);
      },
      (err) => {
        this.toastrService.error(err.error.message, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );

  }
}