import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { TokenService } from 'src/app/services/token.service';
import { GenerarPdfActaService } from 'src/app/services/Sic/generar-pdf-acta.service';

@Component({
  selector: 'app-modal-evaluaciones',
  templateUrl: './modal-evaluaciones.component.html',
  styleUrls: ['./modal-evaluaciones.component.css']
})
export class ModalEvaluacionesComponent {

  id_evaluacion: number
  nombre_prestador: string

  //VARIABLE SI ES ADMIN
  isAdmin: boolean;


  iconClass = 'fas fa-door-open fa-lg'; // Icono inicial

  @Input('dataFromParent') public modalRef: BsModalRef;

  constructor(
    public sharedService: SharedServiceService,
    private generarPdfActaSic: GenerarPdfActaService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.id_evaluacion = this.sharedService.id
    this.nombre_prestador = this.sharedService.pres_nombre
    this.isAdmin = this.tokenService.isAdmin();
  }


  changeIcon() {
    this.iconClass = 'fas fa-door-closed fa-lg'; // Icono al pasar el mouse
  }

  restoreIcon() {
    this.iconClass = 'fas fa-door-open fa-lg'; // Icono al quitar el mouse
  }

  async generarPdfActa(): Promise<void> {
    await this.generarPdfActaSic.ActaPdf(this.id_evaluacion);
    this.modalRef.hide()
  }

}
