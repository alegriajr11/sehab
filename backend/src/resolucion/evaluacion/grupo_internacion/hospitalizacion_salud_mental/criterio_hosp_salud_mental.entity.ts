/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HospitalizacionMentalEntity } from "./hosp_salud_mental.entity";



@Entity({ name: 'criterio_hospitalizacion_mental' })
export class CriterioHospitalizacionMentalEntity {
    @PrimaryGeneratedColumn('increment')
    crihosp_ment_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crihosp_ment_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crihosp_ment_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crihosp_ment_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    crihosp_ment_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crihosp_ment_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    crihosp_ment_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_HOSPITALIZACION_MENTAL - HOSPITALIZACION_MENTAL (ESTANDARES)
    @ManyToOne(type => HospitalizacionMentalEntity,  hospitalizacion_mental=> hospitalizacion_mental.criterios_hospitalizacion_mental)
    hospitalizacion_mental: HospitalizacionMentalEntity;


}