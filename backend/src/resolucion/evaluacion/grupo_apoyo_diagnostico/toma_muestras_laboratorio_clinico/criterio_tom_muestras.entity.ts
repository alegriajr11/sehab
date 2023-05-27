/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MuestrasLabClinicoEntity } from "./tom_muestras.entity";



@Entity({ name: 'criterio_muestra_lab_clinico' })
export class CriterioMuestraLabClinicoEntity {
    @PrimaryGeneratedColumn('increment')
    cri_muest_cli_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_muest_cli_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_muest_cli_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_muest_cli_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_muest_cli_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_muest_cli_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_muest_cli_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_TOMA_MUESTRAS_LABORATORIO_CLINICO - TOMA_MUESTRAS_LABORATORIO_CLINICO (ESTANDARES)
    @ManyToOne(type => MuestrasLabClinicoEntity,  tom_mue_lab_clinico=> tom_mue_lab_clinico.criterios_muest_lab_clinico)
    tom_mue_lab_clinico: MuestrasLabClinicoEntity;


}