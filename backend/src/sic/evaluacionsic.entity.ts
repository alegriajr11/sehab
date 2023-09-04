import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioEstandarSicEntity } from "./criteriosEstandar.entity";
import { CriteriosicEntity } from "./criteriosic.entity";
import { IndicadorEntity } from "./indicador.entity";
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { ActaSicPdfEntity } from "src/generarpdf/sic/sic-acta/sic-acta-pdf.entity";
import { DominioEntity } from "./dominio.entity";
import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";


@Entity({ name: 'evaluacionsic' })
export class EvaluacionSicEntity {
    @PrimaryGeneratedColumn('increment')
    eva_id: number;

    @Column({ type: 'date', nullable: false })
    eva_creado: Date;


    //Relacion MUCHOS a UNO EVALUACION SIC - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador_sic => prestador_sic.prestator_eval_sic)
    eval_sic_prestator: PrestadorEntity;

    //Relacion UNO a UNO EVALUACION SIC - ACTAS SIC
    @OneToOne(() => ActaSicPdfEntity, actaSic => actaSic.act_eval_sic)
    @JoinColumn()
    eval_acta_sic: ActaSicPdfEntity;

    //Relacion Uno a Muchos EVALUACION SIC - DOMINIO 
    @ManyToMany(type => DominioEntity, dominio => dominio.dom_eva_sic, { eager: true })
    @JoinTable({
        name: 'dom_eva_sic',
        joinColumn: { name: 'eva_dom_id' },
        inverseJoinColumn: { name: 'dom_eva_id' }
    })
    eva_sic_dom: DominioEntity[];

    //Relacion Uno a Muchos EVALUACION SIC - CUMPLIMIENTO_ESTANDAR_SIC 
    @OneToMany(type => CumplimientoEstandarSicEntity, cumplimineto_estandar => cumplimineto_estandar.cumplimiento_eva_sic)
    eva_sic_cumplimiento: CumplimientoEstandarSicEntity[];
}