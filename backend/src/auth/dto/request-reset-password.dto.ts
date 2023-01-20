import { IsEmail } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class RequestResetPasswordDTO {
    @IsNotBlank({message: 'El email no puede estar vacio'})
    @IsEmail({}, { message: 'Email no valido' })
    usu_email: string;
}