/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioPatologiaEntity } from "./criterio_patologia.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_patologia' })
export class CumplimientoPatologiaEntity {
    @PrimaryGeneratedColumn('increment')
    cump_pato_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_pato_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_pato_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_pato_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_pato_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_pato_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO PATOLOGIA - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cumplimiento_patologia)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioPatologiaEntity)
    @JoinColumn()
    criterio_patologia: CriterioPatologiaEntity

}