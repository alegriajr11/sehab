/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioHospitCronicoEntity } from "./criterio_hosp_paciente_cron.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_hospitalizacion_cronico' })
export class CumplimientoHospitCronicoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_hosp_cron_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_hosp_cron_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_hosp_cron_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_hosp_cron_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_hosp_cron_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_hosp_cron_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO HOSPITALIZACION_CRONICO - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_hospit_cronico)
    prestador: PrestadorEntity

    

    @OneToOne(() => CriterioHospitCronicoEntity)
    @JoinColumn()
    criterio_hospit_cronico: CriterioHospitCronicoEntity

}