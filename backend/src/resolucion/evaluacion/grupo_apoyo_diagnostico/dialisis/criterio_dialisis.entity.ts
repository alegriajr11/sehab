/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DialisisEntity } from "./dialisis.entity";



@Entity({ name: 'criterio_dialisis' })
export class CriterioDialisisEntity {
    @PrimaryGeneratedColumn('increment')
    cridial_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cridial_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cridial_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cridial_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cridial_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cridial_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cridial_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_DIALISIS - DIALISIS (ESTANDARES)
    @ManyToOne(type => DialisisEntity,  dialisis=> dialisis.criterios_dialisis)
    dialisis: DialisisEntity;


}