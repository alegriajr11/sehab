import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiciosVerificadosEntity } from "./servicios_verificados.entity";


@Entity({ name: 'complejidad' })
export class ComplejidadEntity {
    @PrimaryGeneratedColumn('increment')
    comp_id: number;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: true })
    comp_nombre: string;

    //Relacion UNO a MUCHOS COMPLEJIDAD - SERVICIOS VERIFICADOS
    @OneToMany(type => ServiciosVerificadosEntity, ser_veri => ser_veri.complejidad)
    seriv_verif_comp: ServiciosVerificadosEntity;


}