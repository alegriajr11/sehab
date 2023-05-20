/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioExternaGeneralEntity } from "./criterio_ext_general.entity";

// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_externa_general' })
export class CumplimientoExternaGeneralEntity {
    @PrimaryGeneratedColumn('increment')
    cump_extg_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_extg_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_extg_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_extg_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_extg_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_extg_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO CONSULTA_EXTERNA_ESPECIALIZADA - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_ext_general)
    prestador: PrestadorEntity

    

    @OneToOne(() => CriterioExternaGeneralEntity)
    @JoinColumn()
    criterio_externa_general: CriterioExternaGeneralEntity

}