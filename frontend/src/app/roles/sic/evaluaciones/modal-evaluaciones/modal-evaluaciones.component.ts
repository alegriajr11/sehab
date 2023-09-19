import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { TokenService } from 'src/app/services/token.service';
import { GenerarPdfActaService } from 'src/app/services/Sic/generar-pdf-acta.service';
import { Router } from '@angular/router';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { TokenDto } from 'src/app/models/token.dto';
import { ActaSicPdfDto } from 'src/app/models/actaSicpdf.dto';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-evaluaciones',
  templateUrl: './modal-evaluaciones.component.html',
  styleUrls: ['./modal-evaluaciones.component.css']
})
export class ModalEvaluacionesComponent {

  id_evaluacion: number
  nombre_prestador: string

  acta_sic: ActaSicPdfDto;

  //VARIABLE SI ES ADMIN
  isAdmin: boolean;

  //ESTADO DE ACTA
  estado_acta: string;



  iconClass = 'fas fa-door-open fa-lg'; // Icono inicial

  @Input('dataFromParent') public modalRef: BsModalRef;

  constructor(
    public sharedService: SharedServiceService,
    private generarPdfActaSic: GenerarPdfActaService,
    private tokenService: TokenService,
    private actaSicPdfService: ActapdfService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_evaluacion = this.sharedService.id_evaluacion_sic
    this.nombre_prestador = this.sharedService.pres_nombre
    this.isAdmin = this.tokenService.isAdmin();
    this.estadoActa();
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

  editarEvaluacion() {
    this.modalRef.hide()
    this.router.navigate(['/sic/evaluacion']);
  }

  async estadoActa() {
    // Obtener el estado actual del acta
    const data = await this.actaSicPdfService.oneActaSic(this.id_evaluacion).toPromise();
    this.estado_acta = data.act_estado;
    if (this.estado_acta === '1') {
      localStorage.setItem('boton-editar-acta-sic', 'true')
    }
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
        const data = await this.actaSicPdfService.oneActaSic(this.id_evaluacion).toPromise();
        if (!data.act_firma_prestador || !data.act_firma_funcionario) {
          Swal.fire(
            'No se puede cerrar el acta porque no está firmada',
            'Debes firmar el acta',
            'error'
          );
        } else {
          await this.actaSicPdfService.cerrarActaSic(this.id_evaluacion, tokenDto).toPromise();

          // Obtener el estado actualizado del acta
          this.estado_acta = data.act_estado;

          // Mostrar notificación Acta cerrada
          this.toastrService.success('El Acta ha sido Cerrada', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.modalRef.hide();

          localStorage.setItem('boton-acta-sic', 'false'); //RESTRINGIR LA RUTA - EVALUACIÓN_SIC
        }
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
    }
  }

}
