import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
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

  //Atributos de busqueda
  year: number
  act_id: number
  //PRESTADOR O NIT
  act_prestador: string = ''
  act_nit: string = ''

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
    this.incializarMetodos();
  }

  incializarMetodos() {
    this.cargarActas();
    this.obtenerAnios();
  }

  cargarActas(): void {
    const token = this.tokenService.getToken()
    this.actapdfService.listaSpIps(token).subscribe(
      data => {
        this.evaluaciones = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
    this.page = 1;
  }


  openModal(modalTemplate: TemplateRef<any>, id: number, name: string) {
    this.sharedService.setIdSpIps(id)
    this.sharedService.setNombrePrestador(name)
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: true,
        keyboard: true
      }
    );

    // Suscribirse al evento hide.bs.modal para cargar actas después de cerrar el modal y ver el icono cerrar acta
    this.modalRef.onHide.subscribe(() => {
      this.cargarActas();
    });
  }



  obtenerAnios(): void {
    const selectAnio = document.getElementById("select-year") as HTMLSelectElement;
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();

    for (let i = anioActual; i >= 1900; i--) {
      const option = document.createElement("option");
      option.text = i.toString();
      option.value = i.toString();
      selectAnio.add(option);
    }
  }

  //CARGAR ACTAS POR ID_ACTA O AÑO O NOMBRE DE PRESTADOR O NIT
  cargarActasFilter() {
    this.actapdfService.listaActasSpIpsFilter(this.year, this.act_id, this.act_prestador, this.act_nit).subscribe(
      data => {
        this.evaluaciones = data
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
        this.evaluaciones = []
      }
    )
    if (!this.year && !this.act_id && !this.act_prestador && !this.act_nit) {
      this.cargarActas();
    }
  }

}
