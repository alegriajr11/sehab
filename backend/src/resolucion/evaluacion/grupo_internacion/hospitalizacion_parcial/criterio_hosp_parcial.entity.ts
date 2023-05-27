true/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HospitalizacionParcialEntity } from "./hospitalizacion_parcial.entity";



@Entity({ name: 'criterio_hospitalizacion_parcial' })
export class CriterioHospitalizacionParcialEntity {
    @PrimaryGeneratedColumn('increment')
    crihosp_parc_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crihosp_parc_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    crihosp_parc_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crihosp_parc_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    crihosp_parc_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    crihosp_parc_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    crihosp_parc_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_HOSPITALIZACION_PARCIAL - HOSPITALIZACION_PARCIAL (ESTANDARES)
    @ManyToOne(type => HospitalizacionParcialEntity,  hospitalizacion_parcial=> hospitalizacion_parcial.criterios_hospitalizacion_parcial)
    hospitalizacion_parcial: HospitalizacionParcialEntity;


}