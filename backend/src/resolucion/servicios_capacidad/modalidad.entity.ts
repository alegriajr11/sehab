import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiciosVerificadosEntity } from "./servicios_verificados.entity";



@Entity({ name: 'modalidad' })
export class ModalidadEntity {
    @PrimaryGeneratedColumn('increment')
    mod_id: number;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: true })
    mod_nombre: string;

    //Relacion UNO a MUCHOS MODALIDAD - SERVICIOS VERIFICADOS
    @OneToMany(type => ServiciosVerificadosEntity, ser_veri => ser_veri.modalidad)
    seriv_verif_mod: ServiciosVerificadosEntity;


}