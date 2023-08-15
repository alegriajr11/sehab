import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import SignaturePad from 'signature_pad';
import { SharedServiceService } from 'src/app/services/Sic/shared-service.service';

@Component({
  selector: 'app-modal-firma',
  templateUrl: './modal-firma.component.html',
  styleUrls: ['./modal-firma.component.css']
})
export class ModalFirmaComponent implements AfterViewInit {



  @ViewChild('signatureCanvas', { static: true }) signatureCanvas: ElementRef<HTMLCanvasElement>;
  signaturePad: SignaturePad;

  firma: string;

  @Input('dataFromParent') public modalRef: BsModalRef;



  constructor(
    public sharedService: SharedServiceService,
    private toastrService: ToastrService
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

  ngOnInit() {
  }

  clearSignature() {
    // Limpia la firma en el canvas
    this.signaturePad.clear();
  }
  capturarFirma() {
    if (this.signaturePad.isEmpty()) {
      this.toastrService.error('Debes Hacer una firma', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
    } else {
      const firmaDataURL = this.signatureCanvas.nativeElement.toDataURL();
      this.firma = firmaDataURL;
      this.sharedService.setFirma(this.firma);

      this.toastrService.success('Firma Agregada Exitosamente', 'Ok', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
      this.modalRef?.hide();
    }
  }

}
