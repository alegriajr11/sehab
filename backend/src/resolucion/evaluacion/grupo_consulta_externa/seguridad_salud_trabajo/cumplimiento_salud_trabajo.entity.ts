/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioSaludTrabajoEntity } from "./criterios_salud_trabajo.entity";

// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_salud_trabajo' })
export class CumplimientoSaludTrabajoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_saltra_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_saltra_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_saltra_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_saltra_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_saltra_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_saltra_fecha_limite: string;
    
     //Relación MUCHOS a UNO CUMPLIMIENTO CONSULTA_EXTERNA_SALUD_TRABAJO - PRESTAOR
     @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_salud_trabajo)
     prestador: PrestadorEntity

    @OneToOne(() => CriterioSaludTrabajoEntity)
    @JoinColumn()
    criterio_salud_trabajo: CriterioSaludTrabajoEntity

}