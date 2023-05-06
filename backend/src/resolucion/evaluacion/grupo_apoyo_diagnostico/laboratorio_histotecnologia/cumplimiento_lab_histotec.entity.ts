/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioLabHistotecnologiaEntity } from "./criterio_lab_histotec.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_lab_histotecnologia' })
export class CumplimientoLabHistotecnEntity {
    @PrimaryGeneratedColumn('increment')
    cump_labhistot_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_labhistot_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_labhistot_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_labhistot_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_labhistot_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_labhistot_fecha_limite: string;
    

    @OneToOne(() => CriterioLabHistotecnologiaEntity)
    @JoinColumn()
    criterio_lab_histotecnologia: CriterioLabHistotecnologiaEntity

}