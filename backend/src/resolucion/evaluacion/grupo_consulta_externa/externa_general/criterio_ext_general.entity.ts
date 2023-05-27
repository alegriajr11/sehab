/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExternaGeneralEntity } from "./general.entity";


@Entity({ name: 'criterio_externa_general' })
export class CriterioExternaGeneralEntity {
    @PrimaryGeneratedColumn('increment')
    criextg_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    criextg_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    criextg_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    criextg_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    criextg_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    criextg_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    criextg_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CONSULTA_EXTERNA_GENERAL - EXTERNA_GENERAL (ESTANDARES)
    @ManyToOne(type => ExternaGeneralEntity,  externa_general=> externa_general.criterios_externa_general)
    externa_general: ExternaGeneralEntity;


}