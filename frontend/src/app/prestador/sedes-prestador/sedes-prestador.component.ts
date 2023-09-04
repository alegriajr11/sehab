import { Component } from '@angular/core';
import { SedesPrestadorService } from 'src/app/services/sedes-prestador.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sedes-prestador',
  templateUrl: './sedes-prestador.component.html',
  styleUrls: ['./sedes-prestador.component.css']
})
export class SedesPrestadorComponent {

  sedesPrestador: any[] = [];

  listaVacia: any = undefined;

  isAdmin: boolean;

  public page: number;

  sede_nombre: string;

  constructor(
    private tokenService: TokenService,
    private sedesService: SedesPrestadorService
  ) { }

  ngOnInit(): void {
    this.cargarSedesPrestadores();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarSedesPrestadores(): void {
    this.sedesService.listaSedes().subscribe(
      data => {
        this.sedesPrestador = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
    this.page = 1;
  }

  cargarSedesNombre() {
    this.sedesService.listaSedesNombre(this.sede_nombre).subscribe(
      data => {
        this.sedesPrestador = data
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
        this.sedesPrestador = []
      }
    )
    if (!this.sede_nombre) {
      this.cargarSedesPrestadores();
    }
  }

  // Método para calcular el ID global
  calcularIDGlobal(index: number, currentPage: number, itemsPerPage: number): number {
    return index + 1 + (currentPage - 1) * itemsPerPage;
  }


}
