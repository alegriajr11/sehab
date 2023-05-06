/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LabClinicoEntity } from "./laboratorio_clinico.entity";



@Entity({ name: 'criterio_lab_clinico' })
export class CriterioLabClinicoEntity {
    @PrimaryGeneratedColumn('increment')
    cri_lab_cli_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_lab_cli_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_lab_cli_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_lab_cli_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_lab_cli_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_lab_cli_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_lab_cli_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_LAB_CLINICO - LABORATORIO CLINICO (ESTANDARES)
    @ManyToOne(type => LabClinicoEntity,  lab_clinico=> lab_clinico.criterios_lab_clinico)
    lab_clinico: LabClinicoEntity;

}