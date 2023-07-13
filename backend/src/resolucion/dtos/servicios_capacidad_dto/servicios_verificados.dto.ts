import { IsNotBlank } from "src/decorators/is-not-blank.decorator";


export class ServiciosVerificadosDto {

    @IsNotBlank()
    ser_codigo: string;
    
    @IsNotBlank()
    ser_grupo: string;
    
    @IsNotBlank()
    ser_nombre_servicio: string;
    
    @IsNotBlank()
    ser_modalidad: string;
    
    @IsNotBlank()
    ser_complejidad: string;
    
    @IsNotBlank()
    ser_num_distintivo: string;
    
    }