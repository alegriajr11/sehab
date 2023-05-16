/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioDiagnostVascularEntity } from "./criterio_diagnost_vascular.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_diagnostico_vascular' })
export class CumplimientoDiagnosticoVascularEntity {
    @PrimaryGeneratedColumn('increment')
    cump_diagv_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_diagv_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_diagv_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_diagv_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_diagv_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_diagv_fecha_limite: string;

    //Relacion MUCHOS A UNO CUMPLIMIENTO DIAGNOSTICO VASCULAR a PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cum_diag_vascular)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioDiagnostVascularEntity)
    @JoinColumn()
    criterio_diag_vascular: CriterioDiagnostVascularEntity

}