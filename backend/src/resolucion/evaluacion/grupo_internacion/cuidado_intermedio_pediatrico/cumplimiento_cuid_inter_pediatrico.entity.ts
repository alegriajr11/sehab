/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioCuidIntermPediatricoEntity } from "./criterio_cuid_inter_pediatrico.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_cui_inter_pediatrico' })
export class CumplimientoCuidInterPediatricoEntity {
    @PrimaryGeneratedColumn('increment')
    cump_inter_pedi_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_inter_pedi_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_inter_pedi_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_inter_pedi_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_inter_pedi_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_inter_pedi_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO CUIDADO_INTERMEDIO_PEDIATRICO - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_cuid_inter_pediatrico)
    prestador: PrestadorEntity

    

    @OneToOne(() => CriterioCuidIntermPediatricoEntity)
    @JoinColumn()
    criterio_cuid_inter_pedia: CriterioCuidIntermPediatricoEntity

}