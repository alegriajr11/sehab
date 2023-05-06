/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MedNuclearEntity } from "./medicina_nuclear.entity";



@Entity({ name: 'criterio_med_nuclear' })
export class CriterioMedicinaNuclearEntity {
    @PrimaryGeneratedColumn('increment')
    crimed_nucl_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crimed_nucl_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crimed_nucl_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crimed_nucl_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    crimed_nucl_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crimed_nucl_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    crimed_nucl_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_MEDICINA_NUCLEAR - MEDICINA_NUCLEAR (ESTANDARES)
    @ManyToOne(type => MedNuclearEntity,  med_nuclear=> med_nuclear.criterios_med_nuclear)
    med_nuclear: MedNuclearEntity;


}