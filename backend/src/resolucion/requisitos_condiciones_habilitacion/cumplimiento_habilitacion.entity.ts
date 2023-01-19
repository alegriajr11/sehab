import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConceptoResEntity } from "./concepto_res.entity";


@Entity({ name: 'cumplimiento_habilitacion' })
export class CumplimientoHabilitacionEntity {
    @PrimaryGeneratedColumn('increment')
    cumpl_id: number;

    @Column({ type: 'varchar', length: 11, nullable: false, unique: false })
    cumpl_estado: string;
    

    //Relacion MUCHOS a MUCHOS CUMPLIMIENTORES - CRITERIOSRES
    @OneToMany(type => ConceptoResEntity, conceptos_res => conceptos_res.cumplimientohab_res)
    conceptos_res: ConceptoResEntity;

}