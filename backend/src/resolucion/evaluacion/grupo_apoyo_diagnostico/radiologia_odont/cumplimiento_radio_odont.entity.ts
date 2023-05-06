/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioRadiologiaOdontoEntity } from "./criterio_radio_odont.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_rad_odontologica' })
export class CumplimientoRadOdontologicaEntity {
    @PrimaryGeneratedColumn('increment')
    cump_rad_odont_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_rad_odont_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_rad_odont_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_rad_odont_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_rad_odont_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_rad_odont_fecha_limite: string;
    

    @OneToOne(() => CriterioRadiologiaOdontoEntity)
    @JoinColumn()
    criterio_rad_odontologica: CriterioRadiologiaOdontoEntity

}