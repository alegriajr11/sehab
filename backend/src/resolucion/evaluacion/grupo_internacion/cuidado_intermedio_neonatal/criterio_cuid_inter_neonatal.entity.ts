/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuidIntermNeonatalEntity } from "./cuid_inter_neonatal.entity";



@Entity({ name: 'criterio_cuid_interm_neonatal' })
export class CriterioCuidIntermNeonatalEntity {
    @PrimaryGeneratedColumn('increment')
    cri_inter_neon_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_inter_neon_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_inter_neon_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_inter_neon_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_inter_neon_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_inter_neon_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_inter_neon_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CUIDADO_INTERMEDIO_NEONATAL - CUIDADO_INTERMEDIO_NEONATAL (ESTANDARES)
    @ManyToOne(type => CuidIntermNeonatalEntity,  cuid_inter_neonatal=> cuid_inter_neonatal.criterios_cuid_inter_neonatal)
    cuid_inter_neonatal: CuidIntermNeonatalEntity;


}