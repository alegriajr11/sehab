import { ActaVerificacionEntity } from "src/generarpdf/resolucion/verificacion/acta-verificacion.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'evaluacion-res' })
export class EvaluacionResEntity {
    @PrimaryGeneratedColumn('increment')
    eva_id: number;

    @Column({ type: 'date', nullable: false })
    eva_creado: Date;


    @OneToOne(() => ActaVerificacionEntity, actaVerificacion => actaVerificacion.act_eval_veri)
    @JoinColumn()
    eval_acta_veri: ActaVerificacionEntity;
}