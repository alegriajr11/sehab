export class Usuario {

    usu_id?: number;
    usu_nombre: string;
    usu_apellido: string;
    usu_nombreUsuario: string;
    usu_password: string;
    usu_estado: string;
    usu_creado: Date;
    resetPasswordToken: string
    roles: string[];


    constructor(usu_nombre: string, usu_apellido: string, usu_nombreUsuario: string, usu_password: string, usu_estado: string, usu_creado: Date, 
        resetPasswordToken: string, roles: string[]) {
        this.usu_nombre = usu_nombre;
        this.usu_apellido = usu_apellido;
        this.usu_nombreUsuario = usu_nombreUsuario;
        this.usu_password = usu_password;
        this.usu_estado = usu_estado;
        this.usu_creado = usu_creado;
        this.resetPasswordToken = resetPasswordToken;
        this.roles = roles;   
    }
}