/* eslint-disable prettier/prettier */
import { ClasificacionEntity } from "./clasificacion/clasificacion.entity";
import { ClaseEntity } from "./clase/clase.entity";
import { TipoEntity } from "./tipo/tipo.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { MunicipioEntity } from "src/municipio/municipio.entity";
import { DominioEntity } from "src/sic/dominio.entity";
import { ActividadEntity } from "src/pamec/actividad.entity";
import { EvaluacionipsEntity } from "src/sp/sp_ips/evaluacionips.entity";
import { EtapaInd } from "src/sp/sp_ind/etapaind.entity";
import { RequisitoResEntity } from "src/resolucion/requisitos_condiciones_habilitacion/requisito_res.entity";
import { ServiciosVerificadosEntity } from "src/resolucion/servicios_capacidad/servicios_verificados.entity";
import { CapacidadInstaladaEntity } from "src/resolucion/servicios_capacidad/capacidad_instalada.entity";
import { CriterioEstandarSicEntity } from "src/sic/criteriosEstandar.entity";
import { CumplimientoEstandarSicEntity } from "src/sic/cumplimientoestandar.entity";
import { TodoServiciosEntity } from "src/resolucion/evaluacion/todos_servicios/servicios/todos_servicios.entity";
import { ExternaEspecializadaEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/externa_especializada/especializada.entity";
import { ExternaGeneralEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/externa_general/general.entity";
import { SaludTrabajoEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/seguridad_salud_trabajo/salud_trabajo.entity";
import { VacunacionEntity } from "src/resolucion/evaluacion/grupo_consulta_externa/vacunacion/vacunacion.entity";
import { DiagnosticoVascularEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/diagnostico_vascular/diagnostico_vascular.entity";
import { DialisisEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/dialisis/dialisis.entity";
import { GestionPretransfusionalEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/gestion_pretransfusional/gestion_pretrans.entity";
import { HermodIntervenEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/hemodinamia_intervencionismo/hemod_interven.entity";
import { ImgRadIonizantesEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/imagenes_diagnosticas_rad_ionizantes/img_rad_ionizantes.entity";
import { LabCitologiaUterinaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/laboratorio_citologias_uterinas/lab_citologia_uterina.entity";
import { LabClinicoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/laboratorio_clinico/laboratorio_clinico.entity";
import { LabHistotecnologiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/laboratorio_histotecnologia/lab_histotecnologia.entity";
import { MedNuclearEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/medicina_nuclear/medicina_nuclear.entity";
import { PatologiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/patologia/patologia.entity";
import { QuimioterapiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/quimioterapia/quimioterapia.entity";
import { RadiologiaOdontoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/radiologia_odont/radiologia_odont.entity";
import { RadioterapiaEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/radioterapia/radioterapia.entity";
import { TerapiasEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/terapias/terapias.entity";
import { CuelloUterinoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/toma_muestras_cuello_uterino/tom_muestras_cuello_uter.entity";
import { MuestrasLabClinicoEntity } from "src/resolucion/evaluacion/grupo_apoyo_diagnostico/toma_muestras_laboratorio_clinico/tom_muestras.entity";
import { PartoEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/parto/parto.entity";
import { PrehospitalariaEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/prehospitalaria/prehospitalaria.entity";
import { TranspAsistencialEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/transporte_asistencial/transporte_asistencial.entity";
import { UrgenciasEntity } from "src/resolucion/evaluacion/grupo_atencion_inmediata/urgencias/urgencias.entity";
import { CirugiaEntity } from "src/resolucion/evaluacion/grupo_quirurgico/cirugia/cirugia.entity";
import { ConsumoPsicoactivasEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_basico_consumo_psicoactivas/cuid_consumo_psicoactivas.entity";
import { CuidBasNeonatalEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_basico_neonatal/cuid_basic_neonatal.entity";
import { CuidIntAdultoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intensivo_adulto/cuid_intens_adulto.entity";
import { CuidInteNeonatalEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intensivo_neonatal/cuid_intens_neonatal.entity";
import { CuidIntePediatricoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intensivo_pediatrico/cuid_intens_pediatrico.entity";
import { CuidIntermAdultoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intermedio_adulto/cuid_inter_adulto.entity";
import { CuidIntermNeonatalEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intermedio_neonatal/cuid_inter_neonatal.entity";
import { CuidIntermPediatricoEntity } from "src/resolucion/evaluacion/grupo_internacion/cuidado_intermedio_pediatrico/cuid_inter_pediatrico.entity";
import { HospitalizacionCronicoEntity } from "src/resolucion/evaluacion/grupo_internacion/hospitalizacion_paciente_cronico/hospi_paciente_cronico.entity";
import { HospitalizacionParcialEntity } from "src/resolucion/evaluacion/grupo_internacion/hospitalizacion_parcial/hospitalizacion_parcial.entity";
import { HospitalizacionMentalEntity } from "src/resolucion/evaluacion/grupo_internacion/hospitalizacion_salud_mental/hosp_salud_mental.entity";
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


    @ManyToOne(type => MunicipioEntity, municipio => municipio.mun_prestador)
    pre_municipio: MunicipioEntity


    //Relacion Muchos a Muchos PRESTADOR - DOMINIO
    @ManyToMany(type => DominioEntity, dominio => dominio.prestadores, { eager: true })
    @JoinTable({
        name: 'dom_pre',
        joinColumn: { name: 'dom_pre_id' },
        inverseJoinColumn: { name: 'pre_dom_id' }
    })
    dominios: DominioEntity[];

    //Relacion Muchos a Muchos PRESTADOR - EVALUACIONIPS
    @ManyToMany(type => EvaluacionipsEntity, evaluacionips => evaluacionips.prestadores, { eager: true })
    @JoinTable({
        name: 'evaips_pre',
        joinColumn: { name: 'pre_eva_id' },
        inverseJoinColumn: { name: 'eva_pre_id' }
    })
    evaluacionesips: EvaluacionipsEntity[];

    @ManyToMany(type => ActividadEntity, actividad => actividad.prestadores)
    actividades: ActividadEntity[];

    //Relacion Muchos a Muchos CRITERIOSIC - INDICADOR
    @ManyToMany(type => EtapaInd, etapa => etapa.prestadores)
    etapaInd: EtapaInd[];



    //Relacion Uno a Muchos PRESTADORES - SERVICIOS VERIFICADOS
    @OneToMany(type => ServiciosVerificadosEntity, servicios_verf => servicios_verf.prestadores)
    servicios_verificados: ServiciosVerificadosEntity

    //Relacion Uno a Muchos PRESTADORES - CAPACIDAD INSTALADA
    @OneToMany(type => CapacidadInstaladaEntity, capacidad_instalada => capacidad_instalada.prestadores)
    capacidad_instalada: CapacidadInstaladaEntity


    //Relacion Uno a Muchos PRESTADORES - CUMPLIMIENTOESTANDARSIC
    @OneToMany(type => CumplimientoEstandarSicEntity, cumplimientoestandar => cumplimientoestandar.prestadores)
    cumplimientoEstandar: CumplimientoEstandarSicEntity


    //Relación Uno a Muchos PRESTADORES - TODOS_SERVICIOS
    @OneToMany(type => CumplimientoServiciosEntity, cumplimiento_servicios => cumplimiento_servicios.prestador)
    cumplimiento_servicios: CumplimientoServiciosEntity


    //-----GRUPO CONSULTA EXTERNA------///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CONSULTA_EXTERNA_ESPECIALIZADA
    @OneToMany(type => CumplimientoEspecializadaEntity, cump_ext_especializada => cump_ext_especializada.prestador)
    cump_ext_especializada: CumplimientoEspecializadaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CONSULTA_EXTERNA_GENERAL
    @OneToMany(type => CumplimientoExternaGeneralEntity, cump_ext_general => cump_ext_general.prestador)
    cump_ext_general: CumplimientoExternaGeneralEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CONSULTA_EXTERNA_SALUD_TRABAJO
    @OneToMany(type => CumplimientoSaludTrabajoEntity, cump_salud_trabajo => cump_salud_trabajo.prestador)
    cump_salud_trabajo: CumplimientoSaludTrabajoEntity

    //Relación Uno a Muchos CUMPLIMIENTO PRESTADORES - VACUNACION
    @OneToMany(type => CumplimientoVacunacionEntity, cump_vacunacion => cump_vacunacion.prestador)
    cump_vacunacion: CumplimientoVacunacionEntity


    //-----GRUPO APOYO DIAGNOSTICO-----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - DIAGNOSTICO_VASCULAR
    @OneToMany(type => CumplimientoDiagnosticoVascularEntity, cum_diag_vascular => cum_diag_vascular.prestador)
    cum_diag_vascular: CumplimientoDiagnosticoVascularEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO DIALISIS
    @OneToMany(type => CumplimientoDialisisEntity, cumplimiento_dialisis => cumplimiento_dialisis.prestador)
    cumplimiento_dialisis: CumplimientoDialisisEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO GESTION PRETRANSFUSIONAL
    @OneToMany(type => CumplimientoGestionPretransfusionalEntity, cum_gest_preytansfusional => cum_gest_preytansfusional.prestador)
    cum_gest_pretransfusional: CumplimientoGestionPretransfusionalEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO HERMODINAMIA INTERVENSIONISMO
    @OneToMany(type => CumplimientoHermoIntervenEntity, cum_hermo_interven => cum_hermo_interven.prestador)
    cum_hermo_interven: CumplimientoHermoIntervenEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO IMAGENES DIAGNOSTICAS IONIZANTES
    @OneToMany(type => CumplimientoImgRadIonizanteEntity, cum_img_ionizantes => cum_img_ionizantes.prestador)
    cum_img_ionizantes: CumplimientoImgRadIonizanteEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO IMAGENES DIAGNOSTICAS NO IONIZANTES
    @OneToMany(type => CumplimientoImgRadNoIonizanteEntity, cum_img_no_ionizantes => cum_img_no_ionizantes.prestador)
    cum_img_no_ionizantes: CumplimientoImgRadNoIonizanteEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO B LABORATORIO CITOLOGIA UTERINA
    @OneToMany(type => CumplimientoLabUterinaEntity, cum_lab_cit_uterina => cum_lab_cit_uterina.prestador)
    cum_lab_cit_uterina: CumplimientoLabUterinaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO LABORATORIO CLINICO
    @OneToMany(type => CumplimientoLabClinicoEntity, cum_lab_clinico => cum_lab_clinico.prestador)
    cum_lab_clinico: CumplimientoLabClinicoEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO LABORATORIO HISTOTECNOLOGIA
    @OneToMany(type => CumplimientoLabHistotecnEntity, cum_lab_histotecnologia => cum_lab_histotecnologia.prestador)
    cum_lab_histotecnologia: CumplimientoLabHistotecnEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO MEDICINA NUCLEAR
    @OneToMany(type => CumplimientoMedNuclearEntity, cum_med_nuclear => cum_med_nuclear.prestador)
    cum_med_nuclear: CumplimientoMedNuclearEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO PATOLOGIA
    @OneToMany(type => CumplimientoPatologiaEntity, cumplimiento_patologia =>cumplimiento_patologia.prestador)
    cumplimiento_patologia: CumplimientoPatologiaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO QUIMIOTERAPIA
    @OneToMany(type => CumplimientoQuimioterapiaEntity, cumplimiento_quimioterapia => cumplimiento_quimioterapia.prestador)
    cumplimiento_quimioterapia: CumplimientoQuimioterapiaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO RADIOLOGIA_ODONTOLOGICA
    @OneToMany(type => CumplimientoRadOdontologicaEntity, cum_rad_odtontologica => cum_rad_odtontologica.prestador)
    cum_rad_odtontologica: CumplimientoRadOdontologicaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO RADIOTERAPIA
    @OneToMany(type => CumplimientoRadioterapiaEntity, cumplimiento_radioterapia => cumplimiento_radioterapia.prestador)
    cumplimiento_radioterapia: CumplimientoRadioterapiaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO SERVICIO_FARMACEUTICO
    @OneToMany(type => CumplimientoSerFarmaceuticoEntity, cum_ser_farmaceutico => cum_ser_farmaceutico.prestador)
    cum_ser_farmaceutico: CumplimientoSerFarmaceuticoEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO TERAPIA
    @OneToMany(type => CumplimientoTerapiaEntity, cumplimiento_terapia => cumplimiento_terapia.prestador)
    cumplimiento_terapia: CumplimientoTerapiaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO TOMA_MUESTRAS_CUELLO_UTERINO
    @OneToMany(type => CumplimientoCuelloUterinoEntity, cum_tom_mue_uterino => cum_tom_mue_uterino.prestador)
    cum_tom_mue_uterino: CumplimientoCuelloUterinoEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO TOMA_MUESTRAS_LABORATORIO_CLINICO
    @OneToMany(type => CumplimientoMuestLabClinicoEntity, cum_tom_mue_lab_clinico => cum_tom_mue_lab_clinico.prestador)
    cum_tom_mue_lab_clinico: CumplimientoMuestLabClinicoEntity


    //---------------------------------///
    //-----GRUPO ATENCIÓN INMEDIATA----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO PARTO
    @OneToMany(type => CumplimientoPartoEntity, cumplimiento_parto => cumplimiento_parto.prestador)
    cumplimiento_parto
    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO  PREHOSPITALARIA
    @OneToMany(type => CumplimientoPrehospitalariaEntity, cumpl_prehospitalaria => cumpl_prehospitalaria.prestador)
    cumpl_prehospitalaria: CumplimientoPrehospitalariaEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO TRANSPORTE_ASISTENCIAL
    @OneToMany(type => CumplimientoTranspAsistencialEntity, cump_transp_asistencial => cump_transp_asistencial.prestador)
    cump_transp_asistencial: CumplimientoTranspAsistencialEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO URGENCIAS
    @OneToMany(type => CumplimientoUrgenciasEntity, cump_urgencias => cump_urgencias.prestador)
    cump_urgencias: CumplimientoUrgenciasEntity


    //---------------------------------///
    //-----GRUPO QUIRURGICO----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO_CIRUGIA
    @OneToMany(type => CumplimientoCirugiaEntity, cumplimiento_cirugia => cumplimiento_cirugia.prestador)
    cumplimineto_cirugia: CumplimientoCirugiaEntity




    //---------------------------------///
    //-----GRUPO INTERNACIÓN----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_BASICO_CONSUMO_PSICOACTIVAS
    @OneToMany(type => CumplimientoConsPsicoactivasEntity, cump_cons_psicoactivas => cump_cons_psicoactivas.prestador)
    cump_cons_psicoactivas: CumplimientoConsPsicoactivasEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_BASICO_NEONATAL
    @OneToMany(type => CumplimientoCuidBasNeonatalEntity, cump_cuid_bas_neonatal => cump_cuid_bas_neonatal.prestador)
    cump_cuid_bas_neonatal: CumplimientoCuidBasNeonatalEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_INTENSIVO_ADULTO
    @OneToMany(type => CumplimientoIntAdultoEntity, cump_cuid_int_adulto => cump_cuid_int_adulto.prestador)
    cump_cuid_int_adulto: CumplimientoIntAdultoEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_INTENSIVO_NEONATAL
    @OneToMany(type => CumplimientoCuidIntNeonatalEntity, cump_cuid_int_neonatal => cump_cuid_int_neonatal.prestador)
    cump_cuid_int_neonatal: CumplimientoCuidIntNeonatalEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_INTENSIVO_PEDIATRICO
    @OneToMany(type => CumplimientoCuidIntPediatricoEntity, cump_cuid_int_pediatrico => cump_cuid_int_pediatrico.prestador)
    cump_cuid_int_pediatrico: CumplimientoCuidIntPediatricoEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_INTERMEDIO_ADULTO
    @OneToMany(type => CumplimientoCuidInterAdultoEntity, cump_cuid_inter_adulto => cump_cuid_inter_adulto.prestador)
    cump_cuid_inter_adulto: CumplimientoCuidInterAdultoEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_INTERMEDIO_NEONATAL
    @OneToMany(type => CumplimientoCuidInterNeonatalEntity, cump_cuid_inter_neonatal => cump_cuid_inter_neonatal.prestador)
    cump_cuid_inter_neonatal: CumplimientoCuidInterNeonatalEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO CUIDADO_INTERMEDIO_PEDIATRICO
    @OneToMany(type => CumplimientoCuidInterPediatricoEntity, cump_cuid_inter_pediatrico => cump_cuid_inter_pediatrico.prestador)
    cump_cuid_inter_pediatrico: CumplimientoCuidInterPediatricoEntity

    //Relación Uno a Muchos PRESTADORES - HOSPITALIZACION
    // @OneToMany(type => HospitalizacionEntity, hospitalizacion => hospitalizacion.prestador)
    // hospitalizacion: HospitalizacionEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO HOSPITALIZACION_CRONICO
    @OneToMany(type => CumplimientoHospitCronicoEntity, cump_hospit_cronico => cump_hospit_cronico.prestador)
    cump_hospit_cronico: CumplimientoHospitCronicoEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO HOSPITALIZACION_CRONICO
    @OneToMany(type => CumplimientoHospitalizacionParcialEntity, cump_hospitalizacion_parcial => cump_hospitalizacion_parcial.prestador)
    cump_hospitalizacion_parcial: CumplimientoHospitalizacionParcialEntity

    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO HOSPITALIZACION MENTAL
    @OneToMany(type => CumplimientoHospitalizacionMentalEntity, cump_hospitalizacion_mental => cump_hospitalizacion_mental.prestador)
    cump_hospitalizacion_mental: CumplimientoHospitalizacionMentalEntity
    
}