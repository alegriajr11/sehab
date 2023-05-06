/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConsumoPsicoactivasEntity } from "./cuid_consumo_psicoactivas.entity";



@Entity({ name: 'criterio_cons_psicoactivas' })
export class CriterioConsumoPsicoactivasEntity {
    @PrimaryGeneratedColumn('increment')
    cri_cons_psic_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_cons_psic_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_cons_psic_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_cons_psic_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_cons_psic_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_cons_psic_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_cons_psic_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CUIDADO_BASICO_CONSUMO_PSICOACTIVAS - CUIDADO_BASICO_CONSUMO_PSICOACTIVAS (ESTANDARES)
    @ManyToOne(type => ConsumoPsicoactivasEntity,  cons_psicoactivas=> cons_psicoactivas.criterios_cons_psicoactivas)
    cons_psicoactivas: ConsumoPsicoactivasEntity;


}