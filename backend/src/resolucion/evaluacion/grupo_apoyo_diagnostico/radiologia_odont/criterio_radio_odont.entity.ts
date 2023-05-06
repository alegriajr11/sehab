/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RadiologiaOdontoEntity } from "./radiologia_odont.entity";



@Entity({ name: 'criterio_rad_odontologica' })
export class CriterioRadiologiaOdontoEntity {
    @PrimaryGeneratedColumn('increment')
    crirad_odon_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crirad_odon_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    crirad_odon_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crirad_odon_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    crirad_odon_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    crirad_odon_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    crirad_odon_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_RADIOLOGIA_ODONTOLOGICA - RADIOLOGIA_ODONTOLOGICA (ESTANDARES)
    @ManyToOne(type => RadiologiaOdontoEntity,  rad_odontologica=> rad_odontologica.criterios_rad_odontologica)
    rad_odontologica: RadiologiaOdontoEntity;


}