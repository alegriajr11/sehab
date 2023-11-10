import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-servicios',
  templateUrl: './todos-servicios.component.html',
  styleUrls: ['./todos-servicios.component.css']
})
export class TodosServiciosComponent {


  selectedStandard: string = '';
  standards = [
    { id: 'standard1', name: 'TALENTO HUMANO' },
    { id: 'standard2', name: 'INFRAESTRUCTURA' },
    { id: 'standard3', name: 'DOTACIÓN' },
    { id: 'standard4', name: 'MEDICAMENTOS, DM E INSUMOS' },
    { id: 'standard5', name: 'PROCESOS PRIORITARIOS' },
    { id: 'standard6', name: 'HISTORIA CLINICA Y REGISTROS' },
    { id: 'standard7', name: 'INTERDEPENDENCIA' },
  ];

  criteria = [
    { id: '1)', name: 'El talento humano en salud y otros profesionales que se relacionan con la atención o resultados en salud de los usuarios, cuentan con los títulos, según aplique, de educación superior o certificados de aptitud ocupacional, expedidos por la entidad educativa competente. En el caso de títulos o certificados obtenidos en el extranjero, copia de la resolución de convalidación expedida por el Ministerio de Educación Nacional', state: '', observations: '', guardado: false },
    { id: '2)', name: 'El talento humano en salud cuenta con copia de la resolución de autorización del ejercicio expedido por la autoridad competente o inscripción en el Registro Único Nacional de Talento Humano en Salud -ReTHUS.', state: '', observations: '', guardado: false },
    { id: '3)', name: 'El prestador de servicios de salud determina la cantidad necesaria de talento humano requerido para cada uno de los servicios ofertados y prestados, de acuerdo con la capacidad instalada, la relación entre oferta y demanda, la oportunidad en la prestación, tiempo de la atención y el riesgo en la atención. Este criterio no aplica para el profesional independiente de salud', state: '', observations: '', guardado: false },
    { id: '4)', name: 'El prestador de servicios de salud que actúe como escenario de práctica formativa en el área de la salud, cuenta con:', state: '', observations: '', guardado: false },
    { id: '5)', name: 'En los servicios de salud diferentes al servicio de consulta externa especializada de dolor y cuidado paliativo', state: '', observations: '', guardado: false },
    { id: '6)', name: 'El talento humano en salud de los servicios de atención del parto, cuidado intensivo y cuidado intermedio neonatal, pediátrico y adultos', state: '', observations: '', guardado: false },
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
