/* eslint-disable prettier/prettier */

import { IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { Column } from "typeorm";

export class ActaPamecIpsDto {


    @IsNotBlank()
    act_id: number;

    @Column({ nullable: true })
    act_fecha_visita?: string;

    @Column({ nullable: true })
    act_tipo_visita?: string;

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
    act_nombre_funcionario: string

    @IsNotBlank()
    act_cargo_funcionario: string

    act_nombre_funcionario2: string

    act_cargo_funcionario2: string

    @IsNotBlank()
    act_nombre_prestador: string

    @IsNotBlank()
    act_cargo_prestador: string

    act_nombre_prestador2: string

    act_cargo_prestador2: string

    @IsNotBlank()
    act_obj_visita: string

}