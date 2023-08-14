import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioEstandarSicEntity } from "./criteriosEstandar.entity";
import { CriteriosicEntity } from "./criteriosic.entity";
import { IndicadorEntity } from "./indicador.entity";
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { ActaSicPdfEntity } from "src/generarpdf/sic/sic-acta/sic-acta-pdf.entity";
import { DominioEntity } from "./dominio.entity";


@Entity({ name: 'evaluacionsic' })
export class EvaluacionSicEntity {
    @PrimaryGeneratedColumn('increment')
    eva_id: number;

    @Column({ type: 'date', nullable: false })
    eva_crea: Date;


    //Relacion MUCHOS a UNO EVALUACION SID - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador_sic => prestador_sic.prestator_eval_sic)
    eval_sic_prestator: PrestadorEntity;

    //Relacion UNO a UNO EVALUACION SIC - ACTAS SIC
    @OneToOne(() => ActaSicPdfEntity, actaSic => actaSic.act_eval_sic)
    @JoinColumn()
    eval_acta_sic: ActaSicPdfEntity;

    //Relacion Uno a Muchos EVALUACION SIC - DOMINIO 
    @OneToMany(type => DominioEntity, dominio => dominio.dom_eva_sic)
    eva_sic_dom: DominioEntity;
}