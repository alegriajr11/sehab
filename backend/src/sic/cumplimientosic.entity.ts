/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioEstandarSicEntity } from "./criteriosEstandar.entity";
import { CriteriosicEntity } from "./criteriosic.entity";


@Entity({ name: 'cumplimientosic' })
export class CumplimientoSicEntity {
    @PrimaryGeneratedColumn('increment')
    cumpl_id: number;

    @Column({ type: 'varchar', length: 11, nullable: false, unique: false })
    cumpl_cumple: string;

    //Relacion MUCHOS a UNO CUMPLIMIENTO - CRITERIOS ESTANDAR
    @ManyToOne(type => CriterioEstandarSicEntity, criterio_estandar => criterio_estandar.cumplimiento)
    criterio_estandar: CriterioEstandarSicEntity;

    //Relacion MUCHOS a UNO CUMPLIMIENTO - CRITERIOS SIC
    @ManyToOne(type => CriteriosicEntity, criterio_sic => criterio_sic.cumplimiento_sic)
    criterio_sic: CriteriosicEntity;
}