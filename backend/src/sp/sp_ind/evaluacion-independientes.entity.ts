/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EtapaInd } from "./etapaind.entity";
import { ActaSpIndependientePdfEntity } from "src/generarpdf/sp/sp-independientes/sp-ind-acta.entity";



@Entity({ name: 'evaluacion-sp-independientes' })
export class EvaluacionIndependientesEntity {
    @PrimaryGeneratedColumn('increment')
    eva_id: number;

    @Column({ type: 'date', nullable: false })
    eva_creado: Date;


    //Relacion Muchos a Uno EVALUACION-INDEPENDIENTES - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestadorIndependientes => prestadorIndependientes.prestador_eval_independientes)
    eval_prestador: PrestadorEntity;

    //Relacion Muchos a Muchos  EVALUACION-INDEPENDIENTES - ETAPA-INDEPENDIENTES
    @ManyToMany(type => EtapaInd, etapaIndependientes => etapaIndependientes.eta_evaluacion_independientes, { eager: true })
    @JoinTable({
        name: 'eta_eva_ind',
        joinColumn: { name: 'eva_eta_id' },
        inverseJoinColumn: { name: 'eta_eva_id' }
    })
    eval_etapa_independientes: EtapaInd[];

    @OneToOne(() => ActaSpIndependientePdfEntity, actaIndependientes => actaIndependientes.act_eval_ind)
    @JoinColumn()
    eval_acta_ind: ActaSpIndependientePdfEntity;
}