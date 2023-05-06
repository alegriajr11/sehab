/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuidIntermPediatricoEntity } from "./cuid_inter_pediatrico.entity";



@Entity({ name: 'criterio_cuid_interm_pediatrico' })
export class CriterioCuidIntermPediatricoEntity {
    @PrimaryGeneratedColumn('increment')
    cri_inter_pedia_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_inter_pedia_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_inter_pedia_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_inter_pedia_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_inter_pedia_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_inter_pedia_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_inter_pedia_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CUIDADO_INTERMEDIO_PEDIATRICO - CUIDADO_INTERMEDIO_PEDIATRICO (ESTANDARES)
    @ManyToOne(type => CuidIntermPediatricoEntity,  cuid_inter_pediatrico=> cuid_inter_pediatrico.criterios_cuid_inter_pediatrico)
    cuid_inter_pediatrico: CuidIntermPediatricoEntity;


}