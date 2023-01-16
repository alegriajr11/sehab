/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";


export class CriterioPamDto {
    
    @IsNotBlank()
    @IsString()
    @MaxLength(650, {message: 'el criterio debe tener: longitud máxima de 650 caracteres'})
    crip_nombre: string;


}