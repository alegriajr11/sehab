/* eslint-disable prettier/prettier */

import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { Column } from "typeorm";

export class IpsDto {

    @IsNotBlank()
    act_id: string;
    
    @Column({ nullable: true })
    act_visita_inicial?: string;

    @Column({ nullable: true })
    act_visita_seguimiento?: string;

    @IsNotBlank()
    act_fecha_inicial: string

    @IsNotBlank()
    act_fecha_final: string

    @IsNotBlank()
    act_municipio: string

    @IsNotBlank()
    act_prestador: string

    @IsNotBlank()
    act_nit: string

    @IsNotBlank()
    act_direccion: string

    @IsNotBlank()
    act_barrio: string

    @IsNotBlank()
    act_telefono: string

    @IsNotBlank()
    act_email: string

    @IsNotBlank()
    act_representante: string   

    @IsNotBlank()
    act_cod_prestador: string

    @IsNotBlank()
    act_obj_visita: string

    @IsNotBlank()
    act_nombre_funcionario: string

    @IsNotBlank()
    act_cargo_funcionario: string

    @IsNotBlank()
    act_nombre_prestador: string

    @IsNotBlank()
    act_cargo_prestador: string


}