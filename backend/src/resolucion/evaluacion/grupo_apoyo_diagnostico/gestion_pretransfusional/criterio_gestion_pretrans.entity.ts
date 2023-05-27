/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GestionPretransfusionalEntity } from "./gestion_pretrans.entity";



@Entity({ name: 'criterio_gest_pretransfusional' })
export class CriterioGestionPretransfusionalEntity {
    @PrimaryGeneratedColumn('increment')
    crigestpre_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crigestpre_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crigestpre_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crigestpre_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    crigestpre_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crigestpre_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    crigestpre_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_DIALISIS - DIALISIS (ESTANDARES)
    @ManyToOne(type => GestionPretransfusionalEntity,  gestion_pretransfusional=> gestion_pretransfusional.criterios_gest_pretransfusional)
    gestion_pretransfusional: GestionPretransfusionalEntity;


}