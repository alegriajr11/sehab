/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioCuelloUterinoEntity } from "./criterio_tom_muest_cuello.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_cuello_uterino' })
export class CumplimientoCuelloUterinoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_cue_uter_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_cue_uter_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_cue_uter_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_cue_uter_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_cue_uter_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_cue_uter_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO TOMA_MUESTRAS_CUELLO_UTERINO - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cum_tom_mue_uterino)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioCuelloUterinoEntity)
    @JoinColumn()
    criterio_cuello_uterino: CriterioCuelloUterinoEntity

}