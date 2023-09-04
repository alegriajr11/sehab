import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerarPdfActaPamecService {

  constructor() { }

    //GENERAR PDF ULTIMA ACTA CREADA
    async ActaPdf(id_acta: number): Promise<void> {
      
    }
}
