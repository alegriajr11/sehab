import { IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class SedeDto {

    @IsNotBlank()
    @IsString()
    @MaxLength(3, {message: 'EL numero debe tener una longitud máxima de 3 caracteres'})
    sede_numero: string;

    @IsNotBlank()
    @IsString()
    @MaxLength(100, {message: 'El nombre debe tener una longitud máxima de 105 caracteres'})
    sede_nombre: string;

    
    @IsNotBlank()
    @IsString()
    @MaxLength(3, {message: 'La sede principal debe tener una longitud máxima de 105 caracteres'})
    sede_principal: string;

    
    @IsNotBlank()
    @IsString()
    @MaxLength(2, {message: 'El numero de sede principal debe tener una longitud máxima de 105 caracteres'})
    sede_numero_principal: string;

    @IsNotBlank()
    @IsString()
    @MaxLength(90, {message: 'La direccion debe tener una longitud máxima de 105 caracteres'})
    sede_direccion: string;
    
    @IsNotBlank()
    @IsString()
    @MaxLength(90, {message: 'El barrio debe tener una longitud máxima de 105 caracteres'})
    sede_barrio: string;

}
