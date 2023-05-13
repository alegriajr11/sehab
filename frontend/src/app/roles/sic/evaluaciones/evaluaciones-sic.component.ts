import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Usuario } from 'src/app/models/usuario';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { SharedServiceService } from 'src/app/services/Sic/shared-service.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-evaluaciones-sic',
  templateUrl: './evaluaciones-sic.component.html',
  styleUrls: ['./evaluaciones-sic.component.css']
})
export class EvaluacionesSicComponent implements OnInit {

  // evaluaciones: Usuario[] = [];

  evaluaciones: any[] = [];
  
  listaVacia: any = undefined;
  
  searchText: any;

  public modalRef: BsModalRef;

  public page!: number;

  constructor(
    private modalService: BsModalService,
    public sharedService: SharedServiceService,
    private actapdfService: ActapdfService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.cargarActas();
  }

  cargarActas(): void {
    this.actapdfService.lista().subscribe(
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

  generarActaPdf(): void{
    
  }



}
