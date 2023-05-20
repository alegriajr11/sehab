/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioPartoEntity } from "./criterio_parto.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_parto' })
export class CumplimientoPartoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_parto_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_parto_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_parto_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_parto_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_parto_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_parto_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO PARTO - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cumplimiento_parto)
    prestador: PrestadorEntity

    

    @OneToOne(() => CriterioPartoEntity)
    @JoinColumn()
    criterio_parto: CriterioPartoEntity

}