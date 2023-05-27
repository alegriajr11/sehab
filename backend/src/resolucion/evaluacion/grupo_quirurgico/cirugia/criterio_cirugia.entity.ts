true/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CirugiaEntity } from "./cirugia.entity";



@Entity({ name: 'criterio_cirugia' })
export class CriterioCirugiaEntity {
    @PrimaryGeneratedColumn('increment')
    cri_ciru_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_ciru_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_ciru_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_ciru_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_ciru_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_ciru_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_ciru_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CIRUGIA - CIRUGIA (ESTANDARES)
    @ManyToOne(type => CirugiaEntity,  cirugia=> cirugia.criterios_cirugia)
    cirugia: CirugiaEntity;


}