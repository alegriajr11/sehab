true/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RadioterapiaEntity } from "./radioterapia.entity";



@Entity({ name: 'criterio_radioterapia' })
export class CriterioRadioterapiaEntity {
    @PrimaryGeneratedColumn('increment')
    crirad_ter_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crirad_ter_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crirad_ter_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crirad_ter_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    crirad_ter_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crirad_ter_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    crirad_ter_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_RADIOTERAPIA - RADIOTERAPIA (ESTANDARES)
    @ManyToOne(type => RadioterapiaEntity,  radioterapia=> radioterapia.criterios_radioterapia)
    radioterapia: RadioterapiaEntity;


}