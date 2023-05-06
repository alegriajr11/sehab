/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TranspAsistencialEntity } from "./transporte_asistencial.entity";



@Entity({ name: 'criterio_trans_asistencial' })
export class CriterioTranspAsistencialEntity {
    @PrimaryGeneratedColumn('increment')
    cri_trans_asis_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_trans_asis_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_trans_asis_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_trans_asis_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_trans_asis_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_trans_asis_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_trans_asis_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_TRANSPORTE_ASISTENCIAL - TRANSPORTE_ASISTENCIAL (ESTANDARES)
    @ManyToOne(type => TranspAsistencialEntity,  transp_asistencial=> transp_asistencial.criterios_transp_asistencial)
    transp_asistencial: TranspAsistencialEntity;


}