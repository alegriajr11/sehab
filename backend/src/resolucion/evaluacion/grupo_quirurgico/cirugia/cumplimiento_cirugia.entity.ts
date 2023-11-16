/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioCirugiaEntity } from "./criterio_cirugia.entity";
import { CirugiaEntity } from "./cirugia.entity";
import { EvaluacionResEntity } from "../../evaluacion_res/evaluacion_res.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_cirugia' })
export class CumplimientoCirugiaEntity {
    @PrimaryGeneratedColumn('increment')
    cump_ciru_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_ciru_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_ciru_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_ciru_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_ciru_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_ciru_fecha_limite: string;

   //relacion OneToOne de  cumplimiento a criterios cirugia  
    @OneToOne(() => CriterioCirugiaEntity)
    @JoinColumn()
    criterio_cirugia: CriterioCirugiaEntity

    //Relacion Muchos a CUMPLIMIENTO - EVALUACION-SIC
    @ManyToOne(type => EvaluacionResEntity, evasic => evasic.eva_cirugia_cumplimiento)
    cump_eva_cirugia: EvaluacionResEntity

}