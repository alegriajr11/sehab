import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-informes-realizados-resolucion',
  templateUrl: './informes-realizados-resolucion.component.html',
  styleUrls: ['./informes-realizados-resolucion.component.css']
})
export class InformesRealizadosResolucionComponent {
  informes: any[] = [];

  listaVacia: any = undefined;

  searchText: any;

  public modalRef: BsModalRef;

  public fechaSeleccionada: string;

  public page!: number;

  constructor(
    private modalService: BsModalService,
    public sharedService: SharedServiceService,
  ) { }

  ngOnInit(): void {
    this.cargarActas();
    this.obtenerAnios();
  }

  cargarActas(): void {
  }


  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: true,
        keyboard: true
      }

    );

  }

  obtenerActasFechas(date: string) {

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
