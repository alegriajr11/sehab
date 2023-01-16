/* eslint-disable prettier/prettier */
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";


export class ChangePasswordDto {
    @IsNotBlank({message: 'la contraseña no puede estar vacia'})
    usu_oldPassword: string;

    @IsNotBlank({message: 'la contraseña no puede estar vacia'})
    usu_newPassword: string;
}