export class NuevoUsuarioDto {
    
    usu_nombre: string;

    usu_apellido: string;

    usu_email: string;

    usu_nombreUsuario: string;

    usu_password: string;

    usu_estado: string;


    constructor(usu_nombre:string, usu_apellido:string, usu_email: string, usu_nombreUsuario: string, usu_password: string, usu_estado: string){
        this.usu_nombre = usu_nombre;
        this.usu_apellido = usu_apellido;
        this.usu_email = usu_email;
        this.usu_nombreUsuario = usu_nombreUsuario;
        this.usu_password = usu_password;
        this.usu_estado =  usu_estado;
    }
}
