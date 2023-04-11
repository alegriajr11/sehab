/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaludTrabajoEntity } from "./salud_trabajo.entity";



@Entity({ name: 'criterio_salud_trabajo' })
export class CriterioSaludTrabajoEntity {
    @PrimaryGeneratedColumn('increment')
    crisaltra_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crisaltra_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crisaltra_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crisaltra_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    crisaltra_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crisaltra_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    crisaltra_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_SEGURIDAD Y SALUD EN EL TRABAJO - SEGURIDAD Y SALUD EN EL TRABAJO  (ESTANDARES)
    @ManyToOne(type => SaludTrabajoEntity,  salud_trabajo=> salud_trabajo.criterios_salud_trabajo)
    salud_trabajo: SaludTrabajoEntity;


}