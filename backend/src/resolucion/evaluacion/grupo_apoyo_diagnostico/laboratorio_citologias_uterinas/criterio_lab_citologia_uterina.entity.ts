/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LabCitologiaUterinaEntity } from "./lab_citologia_uterina.entity";



@Entity({ name: 'criterio_lab_uterina' })
export class CriterioLabUterinaEntity {
    @PrimaryGeneratedColumn('increment')
    cri_lab_ute_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_lab_ute_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_lab_ute_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_lab_ute_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_lab_ute_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_lab_ute_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_lab_ute_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_LAB CITOLOGIA UTERINA - DIALISIS (ESTANDARES)
    @ManyToOne(type => LabCitologiaUterinaEntity,  lab_cit_uterina=> lab_cit_uterina.criterios_lab_uterina)
    lab_cit_uterina: LabCitologiaUterinaEntity;

}