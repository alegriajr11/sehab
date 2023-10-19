import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-servicios',
  templateUrl: './todos-servicios.component.html',
  styleUrls: ['./todos-servicios.component.css']
})
export class TodosServiciosComponent {


  selectedStandard: string = '';
  standards = [
    { id: 'standard1', name: 'Estándar 1' },
    { id: 'standard2', name: 'Estándar 2' },
    { id: 'standard3', name: 'Estándar 3' },
  ];

  criteria = [
    { id: '1)', name: 'Criterio 1', state: '', observations: '', guardado: false },
    { id: '2)', name: 'Criterio 2', state: '', observations: '', guardado: false },
    { id: '3)', name: 'Criterio 3', state: '', observations: '', guardado: false },
  ];

  getStandardName(id: string) {
    return this.standards.find((standard) => standard.id === id)?.name || '';
  }

  getCriterions(standardId: string) {
    return this.criteria;
  }

  guardarCriterio(criterion: any) {
    // Aquí implementa la lógica para guardar el estado y observaciones del criterio.
    console.log("Guardando criterio:", criterion);
    // Puedes hacer una solicitud HTTP al servidor para guardar los datos, o cualquier otra acción necesaria.
    criterion.guardado = true; // Marcamos el criterio como guardado
}

selectedStandardState: string = ''; // Propiedad para rastrear el estado del estándar

// Función que se ejecuta cuando cambia el estado del estándar
onStandardStateChange() {
  // Aquí puedes realizar acciones adicionales si es necesario
  console.log('Estado del estándar:', this.selectedStandardState);
}

}
