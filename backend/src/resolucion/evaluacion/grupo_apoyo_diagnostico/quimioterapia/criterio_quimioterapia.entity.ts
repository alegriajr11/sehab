/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuimioterapiaEntity } from "./quimioterapia.entity";



@Entity({ name: 'criterio_quimioterapia' })
export class CriterioQuimioterapiaEntity {
    @PrimaryGeneratedColumn('increment')
    criquim_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criquim_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criquim_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criquim_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    criquim_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criquim_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    criquim_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_QUIMIOTERAPIA - QUIMIOTERAPIA (ESTANDARES)
    @ManyToOne(type => QuimioterapiaEntity,  quimioterapia=> quimioterapia.criterios_quimioterapia)
    quimioterapia: QuimioterapiaEntity;


}