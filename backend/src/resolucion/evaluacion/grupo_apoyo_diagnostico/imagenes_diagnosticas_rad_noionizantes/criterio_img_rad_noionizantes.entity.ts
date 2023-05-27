/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImgRadNoIonizantesEntity } from "./img_rad_noionizantes.entity";



@Entity({ name: 'criterio_img_noionizante' })
export class CriterioImgRadNoIonizantesEntity {
    @PrimaryGeneratedColumn('increment')
    cri_img_noioni_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_img_noioni_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_img_noioni_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_img_noioni_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_img_noioni_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_img_noioni_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_img_noioni_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_IMGIONIZANTES - DIALISIS (ESTANDARES)
    @ManyToOne(type => ImgRadNoIonizantesEntity,  img_noionizante=> img_noionizante.criterios_img_noionizantes)
    imgrad_noionizante: ImgRadNoIonizantesEntity;

}