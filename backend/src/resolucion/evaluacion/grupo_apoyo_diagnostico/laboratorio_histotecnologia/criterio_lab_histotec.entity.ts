/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LabHistotecnologiaEntity } from "./lab_histotecnologia.entity";



@Entity({ name: 'criterio_lab_histotecnologia' })
export class CriterioLabHistotecnologiaEntity {
    @PrimaryGeneratedColumn('increment')
    cri_lab_histo_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_lab_histo_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_lab_histo_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_lab_histo_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_lab_histo_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_lab_histo_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_lab_histo_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_LAB_HISTOTECNOLOGIA- LABORATORIO_HISTOTECNOLOGIA (ESTANDARES)
    @ManyToOne(type => LabHistotecnologiaEntity,  lab_histotecnologia=> lab_histotecnologia.criterios_lab_histotecnologia)
    lab_histotecnologia: LabHistotecnologiaEntity;

}