/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioCuidBasNeonatalEntity } from "./criterio_cuid_basic_neonatal.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_cui_bas_neonatal' })
export class CumplimientoCuidBasNeonatalEntity {
    @PrimaryGeneratedColumn('increment')
    cump_cui_neona_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_cui_neona_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_cui_neona_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_cui_neona_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_cui_neona_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_cui_neona_fecha_limite: string;
    

    @OneToOne(() => CriterioCuidBasNeonatalEntity)
    @JoinColumn()
    criterio_cuid_bas_neonatal: CriterioCuidBasNeonatalEntity

}