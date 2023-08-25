import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-informes-realizados-res',
  templateUrl: './modal-informes-realizados-res.component.html',
  styleUrls: ['./modal-informes-realizados-res.component.css']
})
export class ModalInformesRealizadosResComponent {

  @Input('dataFromParent') public modalRef: BsModalRef;

}
