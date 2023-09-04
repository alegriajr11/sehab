/* eslint-disable prettier/prettier */
import { EvaluacionipsCreadasEntity } from "src/sp/sp_ips/evaluacion_ips_creada.entity";
import { EvaluacionipsEntity } from "src/sp/sp_ips/evaluacionips.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name: 'acta-sp-ips-pdf'})
export class ActaSpIpsEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 15, nullable: true})
    act_id: number;

    @Column({type: 'varchar', length: 2, nullable: true})
    act_visita_inicial: string;

    @Column({type: 'varchar', length: 2, nullable: true})
    act_visita_seguimiento: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_fecha_inicial: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_fecha_final: string;

    @Column({type: 'varchar', length: 20, nullable: false})
    act_municipio: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    act_prestador: string;

    @Column({type: 'varchar', length: 11, nullable: false})
    act_nit: string;

    @Column({type: 'varchar', length: 55, nullable: false})
    act_direccion: string;

    @Column({type: 'varchar', length: 85, nullable: false})
    act_barrio: string;

    @Column({type: 'varchar', length: 85, nullable: false})
    act_telefono: string;

    @Column({type: 'varchar', length: 120, nullable: false})
    act_email: string;

    @Column({type: 'varchar', length: 55, nullable: false})
    act_representante: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_cod_prestador

    @Column({type: 'varchar', length: 150, nullable: false})
    act_obj_visita
    
    @Column({type: 'varchar', length: 70, nullable: false})
    act_nombre_funcionario

    @Column({type: 'varchar', length: 70, nullable: false})
    act_cargo_funcionario

    @Column({type: 'varchar', length: 70, nullable: false})
    act_nombre_prestador

    @Column({type: 'varchar', length: 70, nullable: false})
    act_cargo_prestador

    @Column({ type: 'date' })
    act_creado: Date;

    @Column({ type: 'text', nullable: false })
    act_firma_funcionario: string; // Esta columna almacenará la firma en formato base64

    @Column({ type: 'text', nullable: false })
    act_firma_prestador: string; // Esta columna almacenará la firma en formato base64

    @Column({ type: 'varchar', nullable: false,  default:true })
    act_estado: string;


    @BeforeInsert()
    async setDate() {
        this.act_creado = new Date();
    }

    //Relacion UNO a UNO EVALUACION SP IPS - ACTAS SP IPS
    @OneToOne(() => EvaluacionipsCreadasEntity, evaluacionIps => evaluacionIps.eval_acta_spips)
    act_eval_ips: EvaluacionipsCreadasEntity;
}