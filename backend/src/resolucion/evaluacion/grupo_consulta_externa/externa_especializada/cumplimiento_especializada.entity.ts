/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioEspecializadaEntity } from "./criterio_especializada.entity";



@Entity({ name: 'cumplimiento_externa_especializada' })
export class CumplimientoEspecializadaEntity {
    @PrimaryGeneratedColumn('increment')
    cump_exte_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_exte_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_exte_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_exte_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_exte_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_exte_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO CONSULTA_EXTERNA_ESPECIALIZADA - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_ext_especializada)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioEspecializadaEntity)
    @JoinColumn()
    criterio_externa_especializada: CriterioEspecializadaEntity

}