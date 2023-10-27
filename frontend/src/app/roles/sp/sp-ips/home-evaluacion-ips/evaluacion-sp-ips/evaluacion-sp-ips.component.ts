import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';


@Component({
  selector: 'app-evaluacion-sp-ips',
  templateUrl: './evaluacion-sp-ips.component.html',
  styleUrls: ['./evaluacion-sp-ips.component.css']
})
export class EvaluacionSpIpsComponent {

  captCargoPres: string
  captCodPres: string

  nombrePrestador: string = '';



  constructor(
    private sharedService: SharedServiceService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.nombrePrestador = localStorage.getItem('nombre-pres-sp-ips')
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
