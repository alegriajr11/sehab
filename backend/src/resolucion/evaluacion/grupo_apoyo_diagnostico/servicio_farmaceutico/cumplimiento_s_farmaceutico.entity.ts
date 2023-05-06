/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioSerFarmaceuticoEntity } from "./criterios_s_farmaceutico.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_ser_farmaceutico' })
export class CumplimientoSerFarmaceuticoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_ser_farm_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_ser_farm_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_ser_farm_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_ser_farm_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_ser_farm_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_ser_farm_fecha_limite: string;
    

    @OneToOne(() => CriterioSerFarmaceuticoEntity)
    @JoinColumn()
    criterio_ser_farmaceutico: CriterioSerFarmaceuticoEntity

}