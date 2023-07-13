import { IsNotBlank } from "src/decorators/is-not-blank.decorator";


export class CapacidadInstaladaDto {

@IsNotBlank()
cap_grupo: string;

@IsNotBlank()
cap_concepto: string;

@IsNotBlank()
cap_inscritas: string;

@IsNotBlank()
cap_observados: string;

@IsNotBlank()
cap_num_placa: string;

@IsNotBlank()
cap_movilidad: string;

@IsNotBlank()
cap_modelo: string;

@IsNotBlank()
cap_tarjeta_propiedad: string;
}