/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";


export class CreateUsuarioDto {
    
    @IsString()
    @MaxLength(20, {message: 'nombre: longitud máxima de 20'})
    usu_nombre: string;

    @IsString()
    @MaxLength(20, {message: 'nombre: longitud máxima de 20'})
    usu_apellido: string;

    @IsEmail()
    usu_email: string;

    @IsNotBlank({message: 'el nombre de usuario no puede estar vacio'})
    @MaxLength(10, {message: 'nombre de usuario: longitud máxima de 10'})
    usu_nombreUsuario: string;

    @IsNotBlank({message: 'la contraseña del usuario no puede estar vacia'})
    usu_password: string;

    @IsString()
    usu_estado: string;

    usu_creado: string;


}