/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrehospitalariaEntity } from "./prehospitalaria.entity";



@Entity({ name: 'criterio_prehospitalaria' })
export class CriterioPrehospitalariaEntity {
    @PrimaryGeneratedColumn('increment')
    cripreh_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cripreh_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cripreh_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cripreh_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cripreh_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cripreh_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cripreh_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_PREHOSPITALARIA - PREHOSPITALARIA (ESTANDARES)
    @ManyToOne(type => PrehospitalariaEntity,  prehospitalaria=> prehospitalaria.criterios_prehospitalaria)
    prehospitalaria: PrehospitalariaEntity;


}