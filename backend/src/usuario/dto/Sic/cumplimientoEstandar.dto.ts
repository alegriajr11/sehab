/* eslint-disable prettier/prettier */
import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { IsOptional } from 'class-validator';



export class CumplimientoEstandarSicDto {

    @IsNotBlank()
    @IsString()
    @MaxLength(11, {message: 'El Cumplimiento debe tener: longitud máxima de 11 caracteres'})
    cumpl_cumple: string;

    @IsString()
    @IsOptional()
    @MaxLength(300, {message: 'La Observacion debe tener: longitud máxima de 300 caracteres'})
    cumpl_observaciones: any;

    @IsNumber()
    crie_id: number

    @IsString()
    pre_cod_habilitacion: string
    
}