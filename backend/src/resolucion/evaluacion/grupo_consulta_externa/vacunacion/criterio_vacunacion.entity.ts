/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { VacunacionEntity } from "./vacunacion.entity";



@Entity({ name: 'criterio_vacunacion' })
export class CriterioVacunacionEntity {
    @PrimaryGeneratedColumn('increment')
    crivac_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crivac_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crivac_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crivac_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    crivac_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crivac_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    crivac_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_VACUNACION - VACUNACION (ESTANDARES)
    @ManyToOne(type => VacunacionEntity,  vacunacion=> vacunacion.criterios_vacunacion)
    vacunacion: VacunacionEntity;


}