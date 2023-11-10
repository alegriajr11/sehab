/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioTranspAsistencialEntity } from "./criterio_trans_asistencial.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_transp_asistencial' })
export class CumplimientoTranspAsistencialEntity {
    @PrimaryGeneratedColumn('increment')
    cump_trans_asis_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_trans_asis_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_trans_asis_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_trans_asis_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_trans_asis_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_trans_asis_fecha_limite: string;

    

    @OneToOne(() => CriterioTranspAsistencialEntity)
    @JoinColumn()
    criterio_transp_asistencial: CriterioTranspAsistencialEntity

}