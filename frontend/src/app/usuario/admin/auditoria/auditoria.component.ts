import { Component } from '@angular/core';
import { AuditoriaService } from 'src/app/services/Auditoria/auditoria.service';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent {

  auditoria: any[] = [];

  fechaInicio: Date
  fechaFin: Date
  accion: string = '';

  habilitarfechaFin = false;

  listaVacia: any = undefined;
  public page: number;


  constructor(private auditoria_services: AuditoriaService){}

  
  ngOnInit(): void {

  }

  habilitarFechaFinal(){
    this.habilitarfechaFin = true;
  }

  cargarAuditorias(){
    const fechaFinAjustada = new Date(this.fechaFin);
    fechaFinAjustada.setDate(fechaFinAjustada.getDate() + 1);
    this.auditoria_services.listAdutitoria(this.fechaInicio, fechaFinAjustada, this.accion).subscribe(
      data => {
        this.auditoria = data
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
        this.auditoria = []
      }
    )
    this.page = 1;
  }
}
