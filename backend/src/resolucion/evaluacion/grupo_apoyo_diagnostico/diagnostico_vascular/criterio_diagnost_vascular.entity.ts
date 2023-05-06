/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DiagnosticoVascularEntity } from "./diagnostico_vascular.entity";



@Entity({ name: 'criterio_diagnost_vascular' })
export class CriterioDiagnostVascularEntity {
    @PrimaryGeneratedColumn('increment')
    crivac_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cridiagv_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cridiagv_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cridiagv_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cridiagv_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cridiagv_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cridiagv_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_DIAGNOSTICO_VASCULAR - DIAGNOSTICO_VASCULAR (ESTANDARES)
    @ManyToOne(type => DiagnosticoVascularEntity,  diagnostico_vascular=> diagnostico_vascular.criterios_diag_vascular)
    diagnostico_vascular: DiagnosticoVascularEntity;


}