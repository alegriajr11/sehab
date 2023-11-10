/* eslint-disable prettier/prettier */
import { ClasificacionEntity } from "./clasificacion/clasificacion.entity";
import { ClaseEntity } from "./clase/clase.entity";
import { TipoEntity } from "./tipo/tipo.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { MunicipioEntity } from "src/municipio/municipio.entity";
import { DominioEntity } from "src/sic/dominio.entity";
import { EvaluacionipsEntity } from "src/sp/sp_ips/evaluacionips.entity";
import { ServiciosVerificadosEntity } from "src/resolucion/servicios_capacidad/servicios_verificados.entity";
import { CapacidadInstaladaEntity } from "src/resolucion/servicios_capacidad/capacidad_instalada.entity";
import { CumplimientoEstandarSicEntity } from "src/sic/cumplimientoestandar.entity";
import { CumplimientoCirugiaEntity } from "src/resolucion/evaluacion/grupo_quirurgico/cirugia/cumplimiento_cirugia.entity";
import { CumplimientoServiciosEntity } from "src/resolucion/evaluacion/todos_servicios/servicios/cumplimiento_servicios.entity";
import { CumplimientoDiagnosticoVascularEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/diagnostico_vascular/cumplimiento_diagnost_vascular.entity";
import { CumplimientoDialisisEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/dialisis/cumplimiento_dialisis.entity";
import { CumplimientoGestionPretransfusionalEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/gestion_pretransfusional/cumplimiento_gestion_pretrans.entity";
import { CumplimientoHermoIntervenEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/hemodinamia_intervencionismo/cumplimiento_hemo_inter.entity";
import { CumplimientoImgRadIonizanteEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/imagenes_diagnosticas_rad_ionizantes/cumplimiento_img_rad_ionizantes.entity";
import { CumplimientoImgRadNoIonizanteEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/imagenes_diagnosticas_rad_noionizantes/cumplimiento_img_rad_noionizantes.entity";
import { CumplimientoLabUterinaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/laboratorio_citologias_uterinas/cumplimiento_lab_citologia_uterina.entity";
import { CumplimientoLabClinicoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/laboratorio_clinico/cumplimiento_lab_clinico.entity";
import { CumplimientoLabHistotecnEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/laboratorio_histotecnologia/cumplimiento_lab_histotec.entity";
import { CumplimientoMedNuclearEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/medicina_nuclear/cumplimineto_medicina_nuclear.entity";
import { CumplimientoPatologiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/patologia/cumplimiento_patologia.entity";
import { CumplimientoQuimioterapiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/quimioterapia/cumplimiento_quimioterapia.entity";
import { CumplimientoRadOdontologicaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/radiologia_odont/cumplimiento_radio_odont.entity";
import { CumplimientoRadioterapiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/radioterapia/cumplimiento_radioterapia.entity";
import { CumplimientoSerFarmaceuticoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/servicio_farmaceutico/cumplimiento_s_farmaceutico.entity";
import { CumplimientoTerapiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/terapias/cumplimiento_terapias.entity";
import { CumplimientoCuelloUterinoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/toma_muestras_cuello_uterino/cumplimiento_tom_muest_cuello.entity";
import { CumplimientoMuestLabClinicoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/toma_muestras_laboratorio_clinico/cumplimiento_tom_muestras.entity";
import { CumplimientoPartoEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/parto/cumplimiento_parto.entity";
import { CumplimientoPrehospitalariaEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/prehospitalaria/cumplimiento_prehospitalaria.entity";
import { CumplimientoTranspAsistencialEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/transporte_asistencial/cumplimiento_trans_asistencial.entity";
import { CumplimientoUrgenciasEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/urgencias/cumplimiento_urgencias.entity";
import { CumplimientoEspecializadaEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/externa_especializada/cumplimiento_especializada.entity";
import { CumplimientoExternaGeneralEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/externa_general/cumplimiento_ext_general.entity";
import { CumplimientoSaludTrabajoEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/seguridad_salud_trabajo/cumplimiento_salud_trabajo.entity";
import { CumplimientoVacunacionEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/vacunacion/cumplimiento_vacunacion.entity";
import { CumplimientoConsPsicoactivasEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_basico_consumo_psicoactivas/cumplimiento_cuid_cons_psicoact.entity";
import { CumplimientoCuidBasNeonatalEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_basico_neonatal/cumplimiento_cuid_basic_neonatal.entity";
import { CumplimientoIntAdultoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intensivo_adulto/cumplimiento_cuid_intens_adulto.entity";
import { CumplimientoCuidIntNeonatalEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intensivo_neonatal/cumplimiento_cuid_intens_neonatal.entity";
import { CumplimientoCuidIntPediatricoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intensivo_pediatrico/cumplimiento_cuid_intens_pediatrico.entity";
import { CumplimientoCuidInterAdultoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intermedio_adulto/cumplimiento_cuid_inter_adulto.entity";
import { CumplimientoCuidInterNeonatalEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intermedio_neonatal/cumplimiento_cuid_inter_neonatal.entity";
import { CumplimientoCuidInterPediatricoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intermedio_pediatrico/cumplimiento_cuid_inter_pediatrico.entity";
import { CumplimientoHospitCronicoEntity } from "src/resolucion/evaluacion/grupo_internacion/hospitalizacion_paciente_cronico/cumplimiento_hosp_paciente_cron.entity";
import { CumplimientoHospitalizacionParcialEntity } from "src/resolucion/evaluacion/grupo_internacion/hospitalizacion_parcial/cumplimiento_hosp_parcial.entity";
import { CumplimientoHospitalizacionMentalEntity } from "src/resolucion/evaluacion/grupo_internacion/hospitalizacion_salud_mental/cumplimiento_hosp_salud_mental.entity";
import { CumplimientoHospitalizacionEntity } from "src/resolucion/evaluacion/grupo_internacion/hospitalizacion/cumplimiento_hospitalizacion.entity";
import { EvaluacionPamecEntity } from "src/pamec/evaluacion-pamec.entity";
import { EvaluacionIndependientesEntity } from "src/sp/sp_ind/evaluacion-independientes.entity";
import { EvaluacionSicEntity } from "src/sic/evaluacionsic.entity";
import { SedeEntity } from "./sede/sede.entity";
import { EvaluacionipsCreadasEntity } from "src/sp/sp_ips/evaluacion_ips_creada.entity";



@Entity({ name: 'prestador' })
export class PrestadorEntity {

    @PrimaryColumn({ type: 'varchar', length: 15, nullable: false, unique: false })
    pre_cod_habilitacion: string

    @Column({ type: 'varchar', length: 100, nullable: false })
    pre_nombre: string;

    @Column({ type: 'varchar', length: 11, nullable: false })
    pre_nit: string;

    @Column({ type: 'varchar', length: 90, nullable: false })
    pre_direccion: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    pre_telefono: string;

    @Column({ type: 'varchar', length: 120, nullable: false })
    pre_email: string;

    @Column({ type: 'varchar', length: 3, nullable: false })
    pre_habilitado: string;

    @Column({ type: 'varchar', length: 60, nullable: true })
    pre_representante: string;


    //Relacion MUCHOS a UNO
    @ManyToOne(type => ClasificacionEntity, clasificacion => clasificacion.cla_prestador)
    pre_clasificacion: ClasificacionEntity;

    @ManyToOne(type => ClaseEntity, clase => clase.clas_prestador)
    pre_clase: ClaseEntity;

    @ManyToOne(type => TipoEntity, tipo => tipo.tip_prestador)
    pre_tipo: TipoEntity;

    //Relacion UNO a MUCHOS PRESTADOR - SEDE
    @OneToMany(type => SedeEntity, sede => sede.sede_prestador)
    pre_sede: SedeEntity

    @ManyToOne(type => MunicipioEntity, municipio => municipio.mun_prestador)
    pre_municipio: MunicipioEntity

    //Relacion Uno a Muchos PRESTADORES - EVALUACION-PAMEC
    @OneToMany(type => EvaluacionPamecEntity, evaluacionPamec => evaluacionPamec.eval_prestador)
    prestador_eval_pamec: EvaluacionPamecEntity

    //Relacion Uno a Muchos PRESTADORES - EVALUACION-INDEPENDIENTES
    @OneToMany(type => EvaluacionIndependientesEntity, evaluacionIndependientes => evaluacionIndependientes.eval_prestador)
    prestador_eval_independientes: EvaluacionIndependientesEntity

    //Relacion Uno a Muchos PRESTADORES - EVALUACION - SP IPS
    @OneToMany(type => EvaluacionipsCreadasEntity, evaluacionIps => evaluacionIps.eval_ips_prestator)
    prestator_eval_ips: EvaluacionipsCreadasEntity;

    //Relacion Uno a Muchos PRESTADORES - EVALUACION-SIC
    @OneToMany(type => EvaluacionSicEntity, evaluacionSic => evaluacionSic.eval_sic_prestator)
    prestator_eval_sic: EvaluacionSicEntity;


    //Relacion Uno a Muchos PRESTADORES - CAPACIDAD INSTALADA
    @OneToMany(type => CapacidadInstaladaEntity, capacidad_instalada => capacidad_instalada.prestadores)
    capacidad_instalada: CapacidadInstaladaEntity

    //Relacion Uno a Muchos PRESTADORES - SERVICIOS VERIFICADOS
    @OneToMany(type => ServiciosVerificadosEntity, servicios_verf => servicios_verf.prestadores)
    servicios_verificados: ServiciosVerificadosEntity

}