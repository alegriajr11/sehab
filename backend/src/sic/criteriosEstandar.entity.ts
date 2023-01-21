/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CumplimientoSicEntity } from "./cumplimientosic.entity";


@Entity({ name: 'criterio_estandarsic' })
export class CriterioEstandarSicEntity {
    @PrimaryGeneratedColumn('increment')
    crie_id: number;

    @Column({ type: 'varchar', length: 220, nullable: false, unique: false })
    crie_nombre: string;

    //Relacion UNO a MUCHOS CRITERIOS ESTANDAR - CUMPLIMIENTO
    @OneToMany(type => CumplimientoSicEntity, cumplimiento => cumplimiento.criterio_estandar)
    cumplimiento: CumplimientoSicEntity;
}