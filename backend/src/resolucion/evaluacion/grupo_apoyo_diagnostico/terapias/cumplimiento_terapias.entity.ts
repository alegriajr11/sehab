/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioTerapiaEntity } from "./criterios_terapias.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_terapia' })
export class CumplimientoTerapiaEntity {
    @PrimaryGeneratedColumn('increment')
    cump_ter_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_ter_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_ter_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_ter_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_ter_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_ter_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO TERAPIA - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cumplimiento_terapia)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioTerapiaEntity)
    @JoinColumn()
    criterio_terapia: CriterioTerapiaEntity

}