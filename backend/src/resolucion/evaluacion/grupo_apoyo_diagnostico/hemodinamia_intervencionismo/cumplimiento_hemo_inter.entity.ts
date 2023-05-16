/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioHermoIntervenEntity } from "./criterio_hemo_inter.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_hermo_interven' })
export class CumplimientoHermoIntervenEntity {
    @PrimaryGeneratedColumn('increment')
    cump_herminter_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_herminter_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_herminter_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_herminter_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_herminter_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_herminter_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO HERMODINAMIA - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cum_hermo_interven)
    prestador: PrestadorEntity

    @OneToOne(() => CriterioHermoIntervenEntity)
    @JoinColumn()
    criterio_hermo_interven: CriterioHermoIntervenEntity

}