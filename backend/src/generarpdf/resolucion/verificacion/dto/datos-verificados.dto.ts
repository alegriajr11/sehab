import { IsString } from "class-validator";

export class DatosVerificadosDto {

    @IsString()
    act_direccion: string

    @IsString()
    act_telefono: string

    @IsString()
    act_correo: string

    @IsString()
    act_observaciones: string
}