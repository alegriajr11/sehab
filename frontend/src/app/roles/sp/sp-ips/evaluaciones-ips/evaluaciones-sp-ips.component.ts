import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { SharedServiceService } from 'src/app/services/Sic/shared-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-evaluaciones-sp-ips',
  templateUrl: './evaluaciones-sp-ips.component.html',
  styleUrls: ['./evaluaciones-sp-ips.component.css']
})
export class EvaluacionesSpIpsComponent implements OnInit {

  evaluaciones: any[] = [];

  listaVacia: any = undefined;

  searchText: any;

  public modalRef: BsModalRef;

  public fechaSeleccionada: string;

  public page!: number;

  constructor(
    private modalService: BsModalService,
    public sharedService: SharedServiceService,
    private actapdfService: ActapdfService,
    private tokenService: TokenService,
    ) { }

  ngOnInit(): void {
    this.cargarActas();
    this.obtenerAnios();
  }

  cargarActas(): void {
    this.actapdfService.listaSpIps().subscribe(
      data => {
        this.evaluaciones = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }


  openModal(modalTemplate: TemplateRef<any>, id: number, name: string) {
    this.sharedService.setId(id)
    this.sharedService.setNombrePrestador(name)
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }

    );

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
