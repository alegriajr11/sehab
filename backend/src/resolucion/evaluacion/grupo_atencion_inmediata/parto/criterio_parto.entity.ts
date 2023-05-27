/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PartoEntity } from "./parto.entity";



@Entity({ name: 'criterio_parto' })
export class CriterioPartoEntity {
    @PrimaryGeneratedColumn('increment')
    criparto_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    criparto_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    criparto_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    criparto_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    criparto_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    criparto_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    criparto_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_PARTO - PARTO (ESTANDARES)
    @ManyToOne(type => PartoEntity,  parto=> parto.criterios_parto)
    parto: PartoEntity;


}