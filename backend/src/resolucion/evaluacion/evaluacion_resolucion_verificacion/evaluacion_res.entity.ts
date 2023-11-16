import { ActaVerificacionEntity } from "src/generarpdf/resolucion/verificacion/acta-verificacion.entity";
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'evaluacion-resolucion-verificacion' })
export class EvaluacionResVerificacionEntity {
    @PrimaryGeneratedColumn('increment')
    eva_id: number;

    @Column({ type: 'date', nullable: false })
    eva_creado: Date;


    //RELACION ONE TO ONE EVALUACION CON ACTA VERIFICACION
    @OneToOne(() => ActaVerificacionEntity, actaVerificacion => actaVerificacion.act_eval_veri)
    @JoinColumn()
    eval_acta_veri: ActaVerificacionEntity;

    //Relacion Muchos a Uno EVALUACION-RESOLUCION-VERIFICACION - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestadorVerificacion => prestadorVerificacion.eval_prestador_verificacion)
    eval_verificacion_prestador: PrestadorEntity;
}