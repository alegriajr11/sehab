import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActaSicPdfDto } from 'src/app/models/actaSicpdf.dto';
import { ActapdfService } from 'src/app/services/Sic/actapdf.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-home-evaluacion-ips',
  templateUrl: './home-evaluacion-ips.component.html',
  styleUrls: ['./home-evaluacion-ips.component.css']
})
export class HomeEvaluacionIpsComponent implements OnInit {

  captUsuario: string
  captCargoUsuario: string
  captCargoPres: string
  captCodPres: string

  id_evaluacion: number


  nombrePrestador: string;


  constructor(
    private sharedService: SharedServiceService,
    private actaPdfService: ActapdfService,
  ) { }

  ngOnInit(): void {
    this.nombrePrestador = localStorage.getItem('nombre-pres-sp-ips')
    this.id_evaluacion = this.sharedService.id_evaluacion_sic
    console.log(this.id_evaluacion)
    // this.capturarNombres()
  }


  limpiarNombrePrestador() {
    // Limpiar el localStorage para DESHABILITAR LA RUTA
    localStorage.removeItem('boton-acta-sp-ips');
    localStorage.removeItem('nombre-pres-sp-ips');

  }
}
