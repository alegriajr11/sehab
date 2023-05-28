/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioHospitalizacionEntity } from "./criterio_hospitalizacion.entity";



// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_hospitalizacion' })
export class CumplimientoHospitalizacionEntity {
    @PrimaryGeneratedColumn('increment')
    cump_hosp_id: number;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: true })
    cump_hosp_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: true, unique: false })
    cump_hosp_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: true, unique: false })
    cump_hosp_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: true, unique: false })
    cump_hosp_responsable: string;

    @Column({ type: 'date', nullable: false, unique: true })
    cump_hosp_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO HOSPITALIZACION_MENTAL - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_hospitalizacion)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioHospitalizacionEntity)
    @JoinColumn()
    criterio_hospitalizacion: CriterioHospitalizacionEntity

}