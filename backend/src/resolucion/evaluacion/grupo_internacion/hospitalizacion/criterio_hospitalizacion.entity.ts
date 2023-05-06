/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HospitalizacionEntity } from "./hospitalizacion.entity";



@Entity({ name: 'criterio_hospitalizacion' })
export class CriterioHospitalizacionEntity {
    @PrimaryGeneratedColumn('increment')
    crihosp_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crihosp_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crihosp_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crihosp_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    crihosp_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crihosp_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    crihosp_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_HOSPITALIZACION - HOSPITALIZACION (ESTANDARES)
    @ManyToOne(type => HospitalizacionEntity,  hospitalizacion=> hospitalizacion.criterios_hospitalizacion)
    hospitalizacion: HospitalizacionEntity;


}