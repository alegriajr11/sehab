/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HermodIntervenEntity } from "./hemod_interven.entity";



@Entity({ name: 'criterio_hermo_interven' })
export class CriterioHermoIntervenEntity {
    @PrimaryGeneratedColumn('increment')
    criherminte_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    criherminte_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    criherminte_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    criherminte_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    criherminte_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    criherminte_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    criherminte_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_DIALISIS - DIALISIS (ESTANDARES)
    @ManyToOne(type => HermodIntervenEntity,  hermo_interven=> hermo_interven.criterios_hermod_interven)
    hermod_interven: HermodIntervenEntity;


}