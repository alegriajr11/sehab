/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CriteriopamEntity } from "./criteriopam.entity";

@Entity({ name: 'actividad' })
export class ActividadEntity {
    @PrimaryGeneratedColumn('increment')
    act_id: number;

    @Column({ type: 'varchar', length: 70, nullable: false, unique: false })
    act_nombre: string;


    //Relacion MUCHOS a MUCHOS ACTIVIDAD - PRESTADOR
    @ManyToMany(type => PrestadorEntity, prestador => prestador.actividades, { eager: true })
    @JoinTable({
        name: 'act_pres',
        joinColumn: { name: 'act_pres_id' },
        inverseJoinColumn: { name: 'pres_act_id' }
    })
    prestadores: PrestadorEntity[];

    //Relacion Uno a Muchos ACTIVIDAD - CRITERIOPAM
    @OneToMany(type => CriteriopamEntity, criteriopam => criteriopam.crip_actividad)
    act_criteriopam: CriteriopamEntity;

}