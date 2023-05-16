/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioMuestraLabClinicoEntity } from "./criterio_tom_muestras.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_muestra_lab_clinico' })
export class CumplimientoMuestLabClinicoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_mues_clin_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_mues_clin_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_mues_clin_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_mues_clin_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_mues_clin_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_mues_clin_fecha_limite: string;
    
    //Relación MUCHOS a UNO CUMPLIMIENTO TOMA_MUESTRAS_LABORATORIO_CLINICO - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cum_tom_mue_lab_clinico)
    prestador: PrestadorEntity

    @OneToOne(() => CriterioMuestraLabClinicoEntity)
    @JoinColumn()
    criterio_muest_lab_clinico: CriterioMuestraLabClinicoEntity

}