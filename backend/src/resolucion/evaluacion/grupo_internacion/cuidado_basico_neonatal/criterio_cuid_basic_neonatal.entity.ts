/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuidBasNeonatalEntity } from "./cuid_basic_neonatal.entity";



@Entity({ name: 'criterio_cuid_bas_neonatal' })
export class CriterioCuidBasNeonatalEntity {
    @PrimaryGeneratedColumn('increment')
    cri_neona_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_neona_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_neona_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_neona_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_neona_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_neona_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_neona_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CUIDADO_BASICO_NEONATAL - CUIDADO_BASICO_NEONATAL (ESTANDARES)
    @ManyToOne(type => CuidBasNeonatalEntity,  cuid_bas_neonatal=> cuid_bas_neonatal.criterios_cuid_bas_neonatal)
    cuid_bas_neonatal: CuidBasNeonatalEntity;


}