/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CriterioSaludTrabajoEntity } from "./criterios_salud_trabajo.entity";






@Entity({ name: 'salud_trabajo' })
export class SaludTrabajoEntity {
    @PrimaryGeneratedColumn('increment')
    saltra_id: number;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: true })
    saltra_nombre_estandar: string;

    //Relacion UNO a MUCHOS SEGURIDAD Y SALUD EN EL TRABAJO (ESTANDARES) - CRITERIOS_SEGURIDAD Y SALUD EN EL TRABAJO
    @OneToMany(type => CriterioSaludTrabajoEntity,  cri_salud_trabajo=> cri_salud_trabajo.salud_trabajo)
    criterios_salud_trabajo: CriterioSaludTrabajoEntity;

}
