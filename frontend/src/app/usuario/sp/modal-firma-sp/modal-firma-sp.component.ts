import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import SignaturePad from 'signature_pad';
import { SharedServiceService } from 'src/app/services/Sic/shared-service.service';

@Component({
  selector: 'app-modal-firma-sp',
  templateUrl: './modal-firma-sp.component.html',
  styleUrls: ['./modal-firma-sp.component.css']
})
export class ModalFirmaSpComponent {

  @ViewChild('signatureCanvas', { static: true }) signatureCanvas: ElementRef<HTMLCanvasElement>;
  signaturePad: SignaturePad;

  @Input('dataFromParent') public modalRef: BsModalRef;



  constructor(
    public sharedService: SharedServiceService,
  ) { }

  ngAfterViewInit() {
    // Configura el objeto SignaturePad en el canvas
    this.signaturePad = new SignaturePad(this.signatureCanvas.nativeElement);

    // Establece el grosor del trazo (puedes ajustar el valor según tus necesidades)
    const grosorTrazo = 0.1;

    // Configura el grosor del trazo en el contexto del canvas
    this.signaturePad = new SignaturePad(this.signatureCanvas.nativeElement, {
      minWidth: grosorTrazo,
      maxWidth: grosorTrazo
    });
  }

  clearSignature() {
    // Limpia la firma en el canvas
    this.signaturePad.clear();
  }
}