import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CriterioSicEstandarDto } from 'src/app/models/Sic/criterioSicEstandar.dto';
import { CumplimientoSicEstandarDto } from 'src/app/models/Sic/cumplimientoEstandar.dto';
import { CriterioSicService } from 'src/app/services/Sic/criterio.service';
import { CumplimientoEstandarService } from 'src/app/services/Sic/cumplimiento-estandar.service';
import { SharedServiceService } from 'src/app/services/Sic/shared-service.service';


@Component({
  selector: 'app-modalsic',
  templateUrl: './modalsic.component.html',
  styleUrls: ['./modalsic.component.css']
})

export class ModalsicComponent {



  cumplimientoEstandar: CumplimientoSicEstandarDto = null
  cumpl_cumple: string;
  cumpl_observaciones: string;
  crie_id: number 
  pre_cod_habilitacion: string 
  @Input('dataFromParent') public modalRef: BsModalRef;

  constructor(
    private criterioSicService: CriterioSicService,
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private sharedService: SharedServiceService,
    private cumplimientoEstandarService: CumplimientoEstandarService
    ) { }

  ngOnInit(): void {

  }

  onRegister(): void{
    this.crie_id = this.sharedService.id;
    this.pre_cod_habilitacion = sessionStorage.getItem("cod-pres-sic")
    this.cumplimientoEstandar = new CumplimientoSicEstandarDto(
      this.cumpl_cumple,
      this.cumpl_observaciones,
      this.crie_id,
      this.pre_cod_habilitacion
    );
    this.cumplimientoEstandarService.createCumplimientoEstandar(this.cumplimientoEstandar).subscribe(
      (data) => {
        this.toastr.success(data.message, 'Ok', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        //this.sharedService.criteriosGuardados.push(this.crie_id);
        this.sharedService.criteriosGuardados.push(this.crie_id)
        this.modalRef.hide()
      },
      (err) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
    this.sharedService.setCumple(this.cumpl_cumple)
  }

}
