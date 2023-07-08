import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-evaluaciones-sp-pro',
  templateUrl: './evaluaciones-sp-pro.component.html',
  styleUrls: ['./evaluaciones-sp-pro.component.css']
})
export class EvaluacionesSpProComponent implements OnInit {

  evaluaciones: any[] = [];

  listaVacia: any = undefined;

  searchText: any;

  public modalRef: BsModalRef;

  public fechaSeleccionada: string;

  public page!: number;

  constructor() { }

  ngOnInit(): void {
    this.obtenerAnios();
  }

  obtenerAnios(): void {
    const selectAnio = document.getElementById("select-anio") as HTMLSelectElement;
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    
    for (let i = anioActual; i >= 1900; i--) {
      const option = document.createElement("option");
      option.text = i.toString();
      option.value = i.toString();
      selectAnio.add(option);
    }
  }

}
