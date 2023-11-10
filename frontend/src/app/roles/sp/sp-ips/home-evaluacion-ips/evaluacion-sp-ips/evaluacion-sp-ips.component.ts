import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AjusteDto } from 'src/app/models/SpIps/criterioAjuste.dto';
import { ImplementacionDto } from 'src/app/models/SpIps/criterioImplementacion.dto';
import { PlaneacionDto } from 'src/app/models/SpIps/criterioPlaneacion.dto';
import { VerificacionDto } from 'src/app/models/SpIps/criterioVerificacion.dto';
import { AjusteService } from 'src/app/services/SpIps/ajuste.service';
import { EvaluacionipsService } from 'src/app/services/SpIps/evaluacionips.service';
import { ImplementacionService } from 'src/app/services/SpIps/implementacion.service';
import { PlaneacionService } from 'src/app/services/SpIps/planeacion.service';
import { VerificacionService } from 'src/app/services/SpIps/verificacion.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';


@Component({
  selector: 'app-evaluacion-sp-ips',
  templateUrl: './evaluacion-sp-ips.component.html',
  styleUrls: ['./evaluacion-sp-ips.component.css']
})
export class EvaluacionSpIpsComponent {

  captCargoPres: string
  captCodPres: string

  numero_evaluacion: number
  nombre_evaluacion: string

  nombrePrestador: string = '';

  id_evaluacion_ips: number

  listaVacia: any = undefined;

  //ARREGLOS PARA ALMACENAR LOS CRITERIOS POR ID DE EVALUACIÓN
  criteriosAjuste: AjusteDto[]
  criteriosImplementacion: ImplementacionDto[]
  criteriosPlaneacion: PlaneacionDto[]
  criteriosVerificacion: VerificacionDto[]

  constructor(
    private sharedService: SharedServiceService,
    private evaluacionIpsService: EvaluacionipsService,
    private criteriosAjusteService: AjusteService,
    private criteriosImplementacionService: ImplementacionService,
    private criteriosPlaneacionService: PlaneacionService,
    private criteriosVerificacionService: VerificacionService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.nombrePrestador = localStorage.getItem('nombre-pres-sp-ips')
    const idEvaluacionStr = localStorage.getItem('id_evaluacion_ips'); // Obtener el valor de localStorage como una cadena
    this.id_evaluacion_ips = parseInt(idEvaluacionStr, 10);

    this.inicializarMetodos();
  }

  volver() {
    this.router.navigate(['/sp/home-evaluacion-ips']);
  }

  //INICIALIZAR METODOS PARA ngOnInit
  inicializarMetodos() {
    this.cargarCriteriosAjuste();
    this.cargarCriteriosImplementacion();
    this.cargarCriteriosPlaneacion();
    this.cargarCriteriosVerificacion();
    this.nombreEvaluacion();
  }

  //OBTENER EL NOMBRE DE LA EVALUACION
  async nombreEvaluacion(){
    const evaluacion =  await this.evaluacionIpsService.listOne(this.id_evaluacion_ips).toPromise()
    this.nombre_evaluacion = evaluacion.evips_nombre
    this.numero_evaluacion = evaluacion.evips_id
  }

  //LISTAR CRITERIOS AJUSTE
  cargarCriteriosAjuste() {
    this.criteriosAjusteService.listaAjuste(this.id_evaluacion_ips).subscribe(
      data => {
        this.criteriosAjuste = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  //LISTAR CRITERIOS IMPLEMENTACION
  cargarCriteriosImplementacion() {
    this.criteriosImplementacionService.listaImpl(this.id_evaluacion_ips).subscribe(
      data => {
        this.criteriosImplementacion = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  //LISTAR CRITERIOS PLANEACION
  cargarCriteriosPlaneacion() {
    this.criteriosPlaneacionService.listaPlaneacion(this.id_evaluacion_ips).subscribe(
      data => {
        this.criteriosPlaneacion = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  //LISTAR CRITERIOS VERIFICACION
  cargarCriteriosVerificacion() {
    this.criteriosVerificacionService.listaVerf(this.id_evaluacion_ips).subscribe(
      data => {
        this.criteriosVerificacion = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

}
