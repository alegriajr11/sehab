import { Column, Entity,  JoinTable,  ManyToMany,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServiciosResEntity } from "./servicios.entity";
import { CumplimientoResEntity } from "./cumplimientores.entity";
import { EstandarResEntity } from "./estandar_res.entity";


@Entity({name: 'criterios_res'})
export class CriteriosResEntity {
    @PrimaryGeneratedColumn('increment')
    cri_id: number;

    @Column({type: 'varchar', length: 700, nullable: false, unique: false})
    cri_nombre: string;

    @ManyToOne(type => EstandarResEntity, estandar_res => estandar_res.criterios_res)
    estandar_res: EstandarResEntity

    //Relacion Muchos a Muchos CRITERIOSRES - CUMPLIMIENTORES
    @ManyToMany(type => CumplimientoResEntity, cumplimiento => cumplimiento.criterios_res, { eager: true })
    @JoinTable({
        name: 'cump_crires',
        joinColumn: { name: 'cump_crires_id' },
        inverseJoinColumn: { name: 'crires_cump_id' }
    })
    cumplimientos_res: CumplimientoResEntity[];
}