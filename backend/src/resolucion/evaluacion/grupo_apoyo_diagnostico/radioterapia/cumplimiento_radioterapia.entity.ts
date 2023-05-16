/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioRadioterapiaEntity } from "./criterio_radioterapia.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_radioterapia' })
export class CumplimientoRadioterapiaEntity {
    @PrimaryGeneratedColumn('increment')
    cump_rad_ter_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_rad_ter_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_rad_ter_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_rad_ter_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_rad_ter_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_rad_ter_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO RADIOTERAPIA - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador. cumplimiento_radioterapia)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioRadioterapiaEntity)
    @JoinColumn()
    criterio_radioterapia: CriterioRadioterapiaEntity

}