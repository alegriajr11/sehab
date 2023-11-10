import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CalificacionIpsDto } from 'src/app/models/SpIps/calificacionIps.dto';
import { CalificacionIpsService } from 'src/app/services/SpIps/calificacion-ips.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-modal-editar-calificacion-sp-ips',
  templateUrl: './modal-editar-calificacion-sp-ips.component.html',
  styleUrls: ['./modal-editar-calificacion-sp-ips.component.css']
})
export class ModalEditarCalificacionSpIpsComponent {

  @ViewChild('calObservaciones', { static: false }) calObservaciones: ElementRef;



  calificacionInd: CalificacionIpsDto = null
  cal_id: number;
  cal_nota: number;
  cal_observaciones: string;
  cal_asignado: string

  //IDS CRITERIO Y EVALUACIÓN
  cri_ips_id: number;
  eva_ips_id: number;

  isEditing: boolean


  @Input('dataFromParent') public modalRef: BsModalRef;

  constructor(
    private sharedService: SharedServiceService,
    private toastrService: ToastrService,
    private calificacionIpsService: CalificacionIpsService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    //CAPTURAR LOS ID DEL CRITERIO Y EVALUACION DEL SERVICIO COMPARTIDO
    this.cri_ips_id = this.sharedService.cri_ips_id;
    this.eva_ips_id = this.sharedService.id_evaluacion_sp_ips
  }

  agregarItemOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // Evitar el comportamiento predeterminado de "Enter" (salto de línea)
      event.preventDefault();

      // Verificar si el texto no contiene una viñeta
      if (!this.cal_observaciones.includes('•')) {
        this.cal_observaciones += '';
      } else if (this.cal_observaciones.endsWith('•')) {
        this.cal_observaciones += '\n•';
      } else if(this.cal_observaciones.includes('•')){
        this.cal_observaciones += '\n•';
      }
      // Enfocar el elemento del textarea
      this.calObservaciones.nativeElement.focus();
    }
  }

  agregarItem() {
    // Agregar la nueva observación al texto existente con un salto de línea
    this.cal_observaciones = this.cal_observaciones + '\n•';
    // Enfocar el elemento del textarea
    this.calObservaciones.nativeElement.focus();
  }

  onUpdate() {

  }
}
