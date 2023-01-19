import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: 'servicios_verificados' })
export class ServiciosVerificadosEntity {
    @PrimaryGeneratedColumn('increment')
    ser_id: number;

    @Column({ type: 'varchar', length: 5, nullable: false, unique: false })
    ser_codigo: string;
    
    @Column({ type: 'varchar', length: 40, nullable: false, unique: false })
    ser_grupo: string;

    @Column({ type: 'varchar', length: 40, nullable: false, unique: false })
    ser_nombre_servicio: string;

    @Column({ type: 'varchar', length: 40, nullable: false, unique: false })
    ser_modalidad: string;
    
    @Column({ type: 'varchar', length: 8, nullable: false, unique: false })
    ser_complejidad: string;
    
    @Column({ type: 'varchar', length: 30, nullable: false, unique: false })
    ser_num_distintivo: string;


    @ManyToOne(type => PrestadorEntity, prestador => prestador.servicios_verificados)
    prestadores: PrestadorEntity
}