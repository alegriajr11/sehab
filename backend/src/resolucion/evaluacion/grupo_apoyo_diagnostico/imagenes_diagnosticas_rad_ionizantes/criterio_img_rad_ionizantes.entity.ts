/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImgRadIonizantesEntity } from "./img_rad_ionizantes.entity";



@Entity({ name: 'criterio_img_ionizante' })
export class CriterioImgRadIonizantesEntity {
    @PrimaryGeneratedColumn('increment')
    cri_imgioni_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_imgioni_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_imgioni_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_imgioni_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_imgioni_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_imgioni_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_imgioni_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_IMGIONIZANTES - DIALISIS (ESTANDARES)
    @ManyToOne(type => ImgRadIonizantesEntity,  img_ionizante=> img_ionizante.criterios_img_ionizantes)
    imgrad_ionizante: ImgRadIonizantesEntity;

}