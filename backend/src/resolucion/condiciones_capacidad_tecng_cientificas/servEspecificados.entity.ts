import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EstandarResEntity } from "./estandar_res.entity";


@Entity({ name: 'servicios_especificados_res' })
export class ServiciosEspecificadosResEntity {
    @PrimaryGeneratedColumn('increment')
    ser_id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: false })
    ser_nombre: string;

    //Relacion Uno a Muchos Etapa - Criterio
    @OneToMany(type => EstandarResEntity, estandar_res => estandar_res.servicios_res)
    estandar_res: EstandarResEntity;

    @ManyToOne(type => PrestadorEntity, prestador => prestador.ser_especificados_res)
    prestadores: PrestadorEntity
}