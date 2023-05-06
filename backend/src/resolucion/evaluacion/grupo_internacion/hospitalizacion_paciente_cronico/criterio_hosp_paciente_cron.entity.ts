/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HospitalizacionCronicoEntity } from "./hospi_paciente_cronico.entity";



@Entity({ name: 'criterio_hospitalizacion_cronico' })
export class CriterioHospitCronicoEntity {
    @PrimaryGeneratedColumn('increment')
    crihosp_cron_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crihosp_cron_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crihosp_cron_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crihosp_cron_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    crihosp_cron_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crihosp_cron_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    crihosp_cron_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_HOSPITALIZACION_CRONICO - HOSPITALIZACION_CRONICO (ESTANDARES)
    @ManyToOne(type => HospitalizacionCronicoEntity,  hospitalizacion_cronico=> hospitalizacion_cronico.criterios_hospit_cronico)
    hospit_cronico: HospitalizacionCronicoEntity;


}