/* eslint-disable prettier/prettier */
import { IsNumber, IsString, MaxLength} from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";


export class CalificacionAjusteDto {
    
    @IsNotBlank()
    cal_nota: number;

    @IsString()
    @MaxLength(255, {message: 'La observacion debe tener: longitud máxima de 255 caracteres'})
    cal_observaciones: string

    @IsNumber()
    cal_acta: number

    @IsNumber()
    cal_evaluacion: number

}