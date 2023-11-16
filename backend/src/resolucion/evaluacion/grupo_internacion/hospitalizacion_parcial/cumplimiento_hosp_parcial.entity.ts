/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioHospitalizacionParcialEntity } from "./criterio_hosp_parcial.entity";
import { EvaluacionResEntity } from "../../evaluacion_res/evaluacion_res.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_hospitalizacion_parcial' })
export class CumplimientoHospitalizacionParcialEntity {
    @PrimaryGeneratedColumn('increment')
    cump_hosp_parc_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_hosp_parc_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_hosp_parc_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_hosp_parc_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_hosp_parc_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_hosp_parc_fecha_limite: string;



    @OneToOne(() => CriterioHospitalizacionParcialEntity)
    @JoinColumn()
    criterio_hospitalizacion_parcial: CriterioHospitalizacionParcialEntity

    //Relacion Muchos a CUMPLIMIENTO - EVALUACION-SIC
    @ManyToOne(type => EvaluacionResEntity, evasic => evasic.eva_hospi_parcial_cumplimiento)
    cump_eva_hospi_parcial: EvaluacionResEntity

}