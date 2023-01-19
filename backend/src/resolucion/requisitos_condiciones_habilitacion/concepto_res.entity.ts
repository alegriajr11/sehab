import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CumplimientoHabilitacionEntity } from "./cumplimiento_habilitacion.entity";
import { RequisitoResEntity } from "./requisito_res.entity";



@Entity({ name: 'concepto_res' })
export class ConceptoResEntity {
    @PrimaryGeneratedColumn('increment')
    conc_id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: false })
    conc_nombre: string;

    //Relacion Muchos a Uno CONCEPTO - REQUISITOS
    @ManyToOne(type => RequisitoResEntity, requisito_res => requisito_res.concepto_res)
    requisito_res: RequisitoResEntity;

    //Relacion Muchos a Uno CONCEPTO - REQUISITOS
    @ManyToOne(type => CumplimientoHabilitacionEntity, cumplimientohab => cumplimientohab.conceptos_res)
    cumplimientohab_res: CumplimientoHabilitacionEntity;
}