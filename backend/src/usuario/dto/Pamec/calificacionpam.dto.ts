/* eslint-disable prettier/prettier */
import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";


export class CalificacionPamDto {
    
    @IsNumber()
    cal_nota: number;


    @IsString()
    @MaxLength(11, {message: 'Aplica debe tener: longitud máxima de 11 caracteres'})
    cal_aplica: string

    @IsString()
    @MaxLength(255, {message: 'La observacion: longitud máxima de 255 caracteres'})
    cal_observaciones

}