import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriteriosResEntity } from "./criteriosres.entity";



@Entity({ name: 'cumplimiento_res' })
export class CumplimientoResEntity {
    @PrimaryGeneratedColumn('increment')
    cumpl_id: number;

    @Column({ type: 'varchar', length: 11, nullable: false, unique: false })
    cumpl_estado: string;
    
    @Column({ type: 'varchar', length: 255, nullable: false, unique: false })
    cumpl_comentarios: string;

    //Relacion MUCHOS a MUCHOS CUMPLIMIENTORES - CRITERIOSRES
    @ManyToMany(type => CriteriosResEntity, criterios_res => criterios_res.cumplimientos_res)
    criterios_res: CriteriosResEntity[];

}