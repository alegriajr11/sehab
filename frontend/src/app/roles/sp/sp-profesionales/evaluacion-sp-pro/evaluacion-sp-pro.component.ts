import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CriterioIndDto } from 'src/app/models/SpInd/criterioind.dto';
import { EtapaDto } from 'src/app/models/SpInd/etapa.dto';
import { CriterioIndService } from 'src/app/services/SpInd/criterio.service';

@Component({
  selector: 'app-evaluacion-sp-pro',
  templateUrl: './evaluacion-sp-pro.component.html',
  styleUrls: ['./evaluacion-sp-pro.component.css']
})
export class EvaluacionSpProComponent {
  criterioIndEtapa1: CriterioIndDto[];
  criterioIndEtapa2: CriterioIndDto[];
  criterioIndEtapa3: CriterioIndDto[];
  criterioIndEtapa4: CriterioIndDto[];

  etapaInd: EtapaDto

  Etapa1: string = 'COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE'
  Etapa2: string = 'CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE'
  Etapa3: string = 'REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO'
  Etapa4: string = 'DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO'

  valorEtapa1: string = '1'
  valorEtapa2: string = '2'
  valorEtapa3: string = '3'
  valorEtapa4: string = '4'

  listaVacia: any = undefined;

  public modalRef: BsModalRef;

  constructor(
    private criterioIndService: CriterioIndService
  ){}

  ngOnInit(): void {
    this.cargarCriteriosIndEtapa1()
    this.cargarCriteriosIndEtapa2()
    this.cargarCriteriosIndEtapa3()
    this.cargarCriteriosIndEtapa4()
    console.log()
  }

  cargarCriteriosIndEtapa1(): void {
    this.criterioIndService.listaAct(this.valorEtapa1).subscribe(
      data => {
        this.criterioIndEtapa1 = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  cargarCriteriosIndEtapa2(): void {
    this.criterioIndService.listaAct(this.valorEtapa2).subscribe(
      data => {
        this.criterioIndEtapa2 = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  cargarCriteriosIndEtapa3(): void {
    this.criterioIndService.listaAct(this.valorEtapa3).subscribe(
      data => {
        this.criterioIndEtapa3 = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  cargarCriteriosIndEtapa4(): void {
    this.criterioIndService.listaAct(this.valorEtapa4).subscribe(
      data => {
        this.criterioIndEtapa4 = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }
}
