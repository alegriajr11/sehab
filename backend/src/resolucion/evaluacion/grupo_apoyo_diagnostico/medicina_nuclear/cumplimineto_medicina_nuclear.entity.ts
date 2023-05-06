/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioMedicinaNuclearEntity } from "./criterio_medicina_nuclear.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_med_nuclear' })
export class CumplimientoMedNuclearEntity {
    @PrimaryGeneratedColumn('increment')
    cump_med_nucl_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_med_nucl_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_med_nucl_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_med_nucl_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_med_nucl_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_med_nucl_fecha_limite: string;
    

    @OneToOne(() => CriterioMedicinaNuclearEntity)
    @JoinColumn()
    criterio_med_nuclear: CriterioMedicinaNuclearEntity

}