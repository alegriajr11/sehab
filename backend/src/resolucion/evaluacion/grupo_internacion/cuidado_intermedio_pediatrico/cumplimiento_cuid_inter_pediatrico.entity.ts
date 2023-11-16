/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioCuidIntermPediatricoEntity } from "./criterio_cuid_inter_pediatrico.entity";
import { EvaluacionResEntity } from "../../evaluacion_res/evaluacion_res.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_cui_inter_pediatrico' })
export class CumplimientoCuidInterPediatricoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_inter_pedi_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_inter_pedi_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_inter_pedi_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_inter_pedi_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_inter_pedi_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_inter_pedi_fecha_limite: string;

    

    @OneToOne(() => CriterioCuidIntermPediatricoEntity)
    @JoinColumn()
    criterio_cuid_inter_pedia: CriterioCuidIntermPediatricoEntity

    //Relacion Muchos a CUMPLIMIENTO - EVALUACION-SIC
    @ManyToOne(type => EvaluacionResEntity, evasic => evasic.eva_inter_pedi_cumplimiento)
    cump_eva_inter_pedi: EvaluacionResEntity

}