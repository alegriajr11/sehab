/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name: 'acta-sp-ips'})
export class ActaSpIpsEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 15, nullable: true})
    act_id: number;

    @Column({type: 'varchar', length: 2, nullable: true})
    act_visita_inicial: string;

    @Column({type: 'varchar', length: 2, nullable: true})
    act_visita_seguimiento: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_fecha_inicial: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_fecha_final: string;

    @Column({type: 'varchar', length: 20, nullable: false})
    act_municipio: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    act_prestador: string;

    @Column({type: 'varchar', length: 11, nullable: false})
    act_nit: string;

    @Column({type: 'varchar', length: 55, nullable: false})
    act_direccion: string;

    @Column({type: 'varchar', length: 85, nullable: false})
    act_barrio: string;

    @Column({type: 'varchar', length: 85, nullable: false})
    act_telefono: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    act_email: string;

    @Column({type: 'varchar', length: 55, nullable: false})
    act_representante: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_cod_prestador

    @Column({type: 'varchar', length: 150, nullable: false})
    act_obj_visita
    
    @Column({type: 'varchar', length: 70, nullable: false})
    act_nombre_funcionario

    @Column({type: 'varchar', length: 50, nullable: false})
    act_cargo_funcionario

    @Column({type: 'varchar', length: 70, nullable: false})
    act_nombre_prestador

    @Column({type: 'varchar', length: 50, nullable: false})
    act_cargo_prestador

    @CreateDateColumn()
    act_creado: Timestamp;
}