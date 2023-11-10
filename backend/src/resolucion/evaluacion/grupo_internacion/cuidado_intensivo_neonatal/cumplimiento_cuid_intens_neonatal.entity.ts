/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioCuidInteNeonatalEntity } from "./criterio_cuid_intens_neonatal.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_cui_int_neonatal' })
export class CumplimientoCuidIntNeonatalEntity {
    @PrimaryGeneratedColumn('increment')
    cump_int_neon_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_int_neon_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_int_neon_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_int_neon_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_int_neon_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_int_neon_fecha_limite: string;

    

    @OneToOne(() => CriterioCuidInteNeonatalEntity)
    @JoinColumn()
    criterio_cuid_int_neonatal: CriterioCuidInteNeonatalEntity

}