import { Component } from '@angular/core';
import { Actividad } from 'src/app/models/Pamec/actividad.dto';
import { CriterioPam } from 'src/app/models/Pamec/criteriopam.dto';
import { ActividadService } from 'src/app/services/Pamec/actividad.service';
import { CriteriopamService } from 'src/app/services/Pamec/criteriopam.service';

@Component({
  selector: 'app-evaluacion-pamec',
  templateUrl: './evaluacion-pamec.component.html',
  styleUrls: ['./evaluacion-pamec.component.css']
})
export class EvaluacionPamecComponent {

  actividad: Actividad[];
  criteriopam: CriterioPam[];

  listaVacia: any = undefined;

  captUsuario: string
  captCargoUsuario: string
  captCargoPres: string

  aplica: string
  calificacion: number

  controlCriterio = false;

  selectedOption: string;
  optionsAplica = [
    { value: 'si', label: 'Si' },
    { value: 'no', label: 'No' },
  ];

  optionsCalificacion = [
    { value: 5, nota: 5 },
    { value: 3, nota: 3 },
    { value: 1, nota: 1 },
  ];

  constructor(
    private criteriopamService: CriteriopamService,
    private actividadService: ActividadService,
  ) { }

  ngOnInit(): void {
    this.capturarNombres()
    this.cargarActividad()
    this.activarSelect()
  }

  cargarActividad(): void{
    this.actividadService.lista().subscribe(
      data => {
        this.actividad = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  cargarCriterios(): void{
    var id = (document.getElementById('act_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Valor = (<HTMLSelectElement><unknown>opt).value;

    this.criteriopamService.listAct(Valor).subscribe(
      data => {
        this.criteriopam = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
    this.controlCriterio = true;
  }

  disableItem(): void {
    var id = (document.getElementById('act_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Valor = (<HTMLSelectElement><unknown>opt).value;


    
  }

  capturarNombres(): void {
    //CAPURAR NOMBRE DEL PRESTADOR
    var copy = document.getElementById("nombre-prestador");
    var captPrestador = sessionStorage.getItem("nombre-pres-pamec");
    copy.textContent = " " + captPrestador + "."

    //CAPTURAR NOMBRE DE USUARIO
    this.captUsuario = sessionStorage.getItem("nombre-usuario-pamec");

    //CAPTURAR CARGO DEL USUARIO
    this.captCargoUsuario = sessionStorage.getItem("cargo-usuario-pamec");

    //CAPTURAR CARGO DEL PRESTADOR
    this.captCargoPres = sessionStorage.getItem("cargo-prestador-pamec")

  }

  activarSelect(): void {
    var table = (document.getElementById('tabla-evaluacion')) as HTMLTableElement

    for(let i = 1; i<= this.criteriopam.length; i++){
      var valorIdAplica = '#sel-aplica-'
      var valorIdCalificacion = '#sel-calificacion-'
      var selAplica = (table.querySelector(valorIdAplica + i)) as HTMLSelectElement
      var selCalificacion = (table.querySelector(valorIdCalificacion + i)) as HTMLSelectElement
      if(selAplica.value === 'no'){
        selCalificacion.disabled = true
        selCalificacion.value = ""
      }else {
        selCalificacion.disabled = false
      }
    }


  }

  obtenerValor(): void {
    var table = (document.getElementById('tabla-evaluacion')) as HTMLTableElement
    for (let i = 1; i <= this.criteriopam.length; i++) {
      var valorIdAplica = '#sel-aplica-'
      var valorIdCalificacion = '#sel-calificacion-'
      var selAplica = (table.querySelector(valorIdAplica + i)) as HTMLSelectElement
      var selCalificacion = (table.querySelector(valorIdCalificacion + i)) as HTMLSelectElement
      if (selAplica.value) {
        console.log(selAplica.value)
      }if(selCalificacion.value){
        console.log(selCalificacion.value)
      }
      // var resultado = console.log(sel.value)
    }
  }


  onRegister(): void {

  }
}
