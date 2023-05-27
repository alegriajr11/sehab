/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PatologiaEntity } from "./patologia.entity";



@Entity({ name: 'criterio_patologia' })
export class CriterioPatologiaEntity {
    @PrimaryGeneratedColumn('increment')
    cripat_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cripat_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cripat_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cripat_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cripat_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cripat_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cripat_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_PATOLOGIA - PATOLOGIA (ESTANDARES)
    @ManyToOne(type => PatologiaEntity,  patologia=> patologia.criterios_patologia)
    patologia: PatologiaEntity;


}