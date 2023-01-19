/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ActividadEntity } from "./actividad.entity";
import { CalificacionpamEntity } from "./calificacionpam.entity";

@Entity({name: 'criteriopam'})
export class CriteriopamEntity {
    @PrimaryGeneratedColumn('increment')
    crip_id: number;

    @Column({type: 'varchar', length: 700, nullable: false, unique: false})
    crip_nombre: string;

    @Column({type: 'varchar', length: 700, nullable: false, unique: false})
    crip_desarrollo_etapas: string;


    @ManyToOne(type => ActividadEntity, actividad => actividad.act_criteriopam)
    crip_actividad: ActividadEntity;

    @ManyToMany(type => CalificacionpamEntity, calificacion => calificacion.criteriopam, {eager: true})
    @JoinTable({
        name: 'cri_cal',
        joinColumn: {name: 'cri_cal_id'},
        inverseJoinColumn: {name: 'cal_cri_id'} 
    })
    calificacionpam: CalificacionpamEntity[]
}