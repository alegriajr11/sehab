/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuelloUterinoEntity } from "./tom_muestras_cuello_uter.entity";



@Entity({ name: 'criterio_cuello_uterino' })
export class CriterioCuelloUterinoEntity {
    @PrimaryGeneratedColumn('increment')
    cri_cuel_ute_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_cuel_ute_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_cuel_ute_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_cuel_ute_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_cuel_ute_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_cuel_ute_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_cuel_ute_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_TOMA_MUESTRAS_CUELLO_UTERINO - TOMA_MUESTRAS_CUELLO_UTERINO (ESTANDARES)
    @ManyToOne(type => CuelloUterinoEntity,  cuel_uterino=> cuel_uterino.criterios_cuello_uterino)
    cue_uterino: CuelloUterinoEntity;


}