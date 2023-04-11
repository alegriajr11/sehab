/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExternaEspecializadaEntity } from "./especializada.entity";



@Entity({ name: 'criterio_externa_especializada' })
export class CriterioEspecializadaEntity {
    @PrimaryGeneratedColumn('increment')
    criextg_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criexte_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criexte_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criexte_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    criexte_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criexte_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    criexte_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CONSULTA_EXTERNA_ESPECIALIZADA - EXTERNA_ESPECIALIZADA (ESTANDARES)
    @ManyToOne(type => ExternaEspecializadaEntity,  externa_especializada=> externa_especializada.criterios_externa_especializada)
    externa_especializada: ExternaEspecializadaEntity;


}