import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';


@Component({
  selector: 'app-evaluacion-uno',
  templateUrl: './evaluacion-uno.component.html',
  styleUrls: ['./evaluacion-uno.component.css']
})
export class EvaluacionUnoComponent {

  captCargoPres: string
  captCodPres: string

  nombrePrestador: string = '';



  constructor(
    private sharedService: SharedServiceService,
    private router: Router
    ) { }


  ngOnInit(): void {

  }

  volver(){
    this.router.navigate(['/sp/home-evaluacion-ips']);
  }

  // inicializarMetodos() {
  //   this.capturarNombres();
  // }
  // capturarNombres(): void {


  //   //CAPTURAR ID DEL PRESTADOR
  //   this.captCodPres = sessionStorage.getItem("cod-pres-sp-ips");
  // }
}
