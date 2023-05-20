/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioHospitalizacionMentalEntity } from "./criterio_hosp_salud_mental.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_hospitalizacion_mental' })
export class CumplimientoHospitalizacionMentalEntity {
    @PrimaryGeneratedColumn('increment')
    cump_hosp_ment_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_hosp_ment_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_hosp_ment_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_hosp_ment_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_hosp_ment_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_hosp_ment_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO HOSPITALIZACION_MENTAL - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_hospitalizacion_mental)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioHospitalizacionMentalEntity)
    @JoinColumn()
    criterio_hospitalizacion_mental: CriterioHospitalizacionMentalEntity

}