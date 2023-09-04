import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ActaSpPdfDto } from 'src/app/models/actaSpPdf.dto';
import { TokenDto } from 'src/app/models/token.dto';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { GenerarPdfActaIndService } from 'src/app/services/SpInd/generar-pdf-acta-ind.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-evaluaciones-sp-pro',
  templateUrl: './modal-evaluaciones-sp-pro.component.html',
  styleUrls: ['./modal-evaluaciones-sp-pro.component.css']
})
export class ModalEvaluacionesSpProComponent {

  
  id_evaluacion: number
  nombre_prestador: string

  actaSpIps: ActaSpPdfDto;

  //VARIABLE SI ES ADMIN
  isAdmin: boolean;

  //ESTADO DE ACTA
  estado_acta: string;


  iconClass = 'fas fa-door-open fa-lg'; // Icono inicial

  @Input('dataFromParent') public modalRef: BsModalRef;

  constructor(
    public sharedService: SharedServiceService,
    private generarPdfActaSpInd: GenerarPdfActaIndService,
    private tokenService: TokenService,
    private actaPdfService: ActapdfService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_evaluacion = this.sharedService.id_evaluacion_sp_ind
    this.nombre_prestador = this.sharedService.pres_nombre
    this.isAdmin = this.tokenService.isAdmin();
    this.estadoActa();
    console.log(this.id_evaluacion)
  }


  changeIcon() {
    this.iconClass = 'fas fa-door-closed fa-lg'; // Icono al pasar el mouse
  }

  restoreIcon() {
    this.iconClass = 'fas fa-door-open fa-lg'; // Icono al quitar el mouse
  }

  async generarPdfActa(): Promise<void> {
    await this.generarPdfActaSpInd.ActaPdf(this.id_evaluacion);
    this.modalRef.hide()
  }

  // editarEvaluacion() {
  //   this.modalRef.hide()
  //   this.router.navigate(['/sic/evaluacion']);
  // }

  async estadoActa() {
    // Obtener el estado actual del acta
    const data = await this.actaPdfService.oneActaSpInd(this.id_evaluacion).toPromise();
    this.estado_acta = data.act_estado;
  }

  async cerrarActa() {
    const token = this.tokenService.getToken();
    const tokenDto: TokenDto = new TokenDto(token);

    try {
      const result = await Swal.fire({
        title: '¿Estás seguro de cerrar el acta?',
        text: 'No habrá marcha atrás después de cerrar el acta.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar acta',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        // Cerrar el acta
        await this.actaPdfService.cerrarActaSpInd(this.id_evaluacion, tokenDto).toPromise();

        // Obtener el estado actualizado del acta
        const data = await this.actaPdfService.oneActaSpInd(this.id_evaluacion).toPromise();
        this.estado_acta = data.act_estado;

        // Mostrar notificación Acta cerrada
        this.toastrService.success('El Acta ha sido Cerrada', 'Éxito', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.modalRef.hide();

        localStorage.setItem('boton-acta-sp-ind', 'false'); //RESTRINGIR LA RUTA - EVALUACIÓN_SIC

        console.log(this.estado_acta);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Acta sin Cerrar',
          'error'
        );
      }
    } catch (error) {
      this.toastrService.error('Error al Cerrar el Acta', 'Fail', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
      console.log(error);
    }
  }

}
