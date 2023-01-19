import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServiciosResEntity } from "./servicios.entity";
import { CriteriosResEntity } from "./criteriosres.entity";


@Entity({name: 'estandar_res'})
export class EstandarResEntity {
    @PrimaryGeneratedColumn('increment')
    est_id: number;

    @Column({type: 'varchar', length: 40, nullable: false, unique: false})
    est_nombre: string;

    @ManyToOne(type => ServiciosResEntity, servicios_res => servicios_res.estandar_res)
    servicios_res: ServiciosResEntity

    @OneToMany(type => CriteriosResEntity, criterios_res => criterios_res.estandar_res)
    criterios_res: CriteriosResEntity
}