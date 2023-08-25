import { SedeEntity } from "src/prestador/sede/sede.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { ProfesionalApoyoEntity } from "../profesional/profesional.entity";
import { ActaVerificacionEntity } from "../verificacion/acta-verificacion.entity";

@Entity({name: 'datos-verificados'})
export class DatosVisitVErificadoEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 20, nullable: false})
    act_municipio: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    act_prestador: string;

    @Column({type: 'varchar', length: 11, nullable: false})
    act_nit: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    act_sede: string;

    @Column({type: 'varchar', length: 55, nullable: false})
    act_direccion: string;

    @Column({type: 'varchar', length: 70, nullable: false})
    act_clasificacion: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_cod_habilitacion: string;

    @Column({type: 'varchar', length: 12, nullable: false})
    act_cod_sede: string;

    @Column({type: 'varchar', length: 85, nullable: false})
    act_telefono: string;

    @Column({type: 'varchar', length: 55, nullable: false})
    act_representante: string;
    
    @Column({type: 'varchar', length: 55, nullable: false})
    act_gerente: string;

    @Column({type: 'varchar', length: 50, nullable: false})
    act_correo: string;


    // RELACION UNO A UNO ACTA VERIFICACION - DATOS VCERIFICADOS ENCONTRADOS
    @OneToOne(() => ActaVerificacionEntity, actaVerificacion => actaVerificacion.act_datos_encontrados_verificacion)
    @JoinColumn()
    acta_verificacion_datos_encontrados: ActaVerificacionEntity;
    
}