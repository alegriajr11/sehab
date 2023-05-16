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
    @OneToMany(type => TodoServiciosEntity, todos_servicios => todos_servicios.prestador)
    todos_servicios: TodoServiciosEntity


    //-----GRUPO CONSULTA EXTERNA------///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - CONSULTA_EXTERNA_ESPECIALIZADA
    @OneToMany(type => ExternaEspecializadaEntity, ext_especializada => ext_especializada.prestador)
    ext_especializada: ExternaEspecializadaEntity

    //Relación Uno a Muchos PRESTADORES - CONSULTA_EXTERNA_GENERAL
    @OneToMany(type => ExternaGeneralEntity, ext_general => ext_general.prestador)
    ext_general: ExternaGeneralEntity

    //Relación Uno a Muchos PRESTADORES - CONSULTA_EXTERNA_SALUD_TRABAJO
    @OneToMany(type => SaludTrabajoEntity, salud_trabajo => salud_trabajo.prestador)
    salud_trabajo: SaludTrabajoEntity

    //Relación Uno a Muchos PRESTADORES - VACUNACION
    @OneToMany(type => VacunacionEntity, vacunacion => vacunacion.prestador)
    vacunacion: VacunacionEntity


    //-----GRUPO APOYO DIAGNOSTICO-----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - DIAGNOSTICO_VASCULAR
    @OneToMany(type => DiagnosticoVascularEntity, diag_vascular => diag_vascular.prestador)
    diagnostico_vascular: DiagnosticoVascularEntity

    //Relación Uno a Muchos PRESTADORES - DIALISIS
    @OneToMany(type => DialisisEntity, dialisis => dialisis.prestador)
    dialisis: DialisisEntity

    //Relación Uno a Muchos PRESTADORES - GESTION PRETRANSFUSIONAL
    @OneToMany(type => GestionPretransfusionalEntity, gest_preytansfusional => gest_preytansfusional.prestador)
    gest_pretransfusional: GestionPretransfusionalEntity

    //Relación Uno a Muchos PRESTADORES - HERMODINAMIA INTERVENSIONISMO
    @OneToMany(type => HermodIntervenEntity, hermo_interven => hermo_interven.prestador)
    hermod_interven: HermodIntervenEntity

    //Relación Uno a Muchos PRESTADORES - IMAGENES DIAGNOSTICAS IONIZANTES
    @OneToMany(type => ImgRadIonizantesEntity, img_ionizantes => img_ionizantes.prestador)
    img_ionizantes: ImgRadIonizantesEntity

    //Relación Uno a Muchos PRESTADORES - LABORATORIO CITOLOGIA UTERINA
    @OneToMany(type => LabCitologiaUterinaEntity, lab_cit_uterina => lab_cit_uterina.prestador)
    lab_uterina: LabCitologiaUterinaEntity

    //Relación Uno a Muchos PRESTADORES - LABORATORIO CLINICO
    @OneToMany(type => LabClinicoEntity, lab_clinico => lab_clinico.prestador)
    lab_clinico: LabClinicoEntity

    //Relación Uno a Muchos PRESTADORES - LABORATORIO HISTOTECNOLOGIA
    @OneToMany(type => LabHistotecnologiaEntity, lab_histotecnologia => lab_histotecnologia.prestador)
    lab_histotecnologia: LabHistotecnologiaEntity

    //Relación Uno a Muchos PRESTADORES - MEDICINA NUCLEAR
    @OneToMany(type => MedNuclearEntity, med_nuclear => med_nuclear.prestador)
    med_nuclear: MedNuclearEntity

    //Relación Uno a Muchos PRESTADORES - PATOLOGIA
    @OneToMany(type => PatologiaEntity, patologia => patologia.prestador)
    patologia: PatologiaEntity

    //Relación Uno a Muchos PRESTADORES - QUIMIOTERAPIA
    @OneToMany(type => QuimioterapiaEntity, quimioterapia => quimioterapia.prestador)
    quimioterapia: QuimioterapiaEntity

    //Relación Uno a Muchos PRESTADORES - RADIOLOGIA_ODONTOLOGICA
    @OneToMany(type => RadiologiaOdontoEntity, rad_odtontologica => rad_odtontologica.prestador)
    rad_odtontologica: RadiologiaOdontoEntity

    //Relación Uno a Muchos PRESTADORES - RADIOTERAPIA
    @OneToMany(type => RadioterapiaEntity, radioterapia => radioterapia.prestador)
    radioterapia: RadioterapiaEntity

    //Relación Uno a Muchos PRESTADORES - SERVICIO_FARMACEUTICO
    @OneToMany(type => RadioterapiaEntity, ser_farmaceutico => ser_farmaceutico.prestador)
    ser_farmaceutico: RadioterapiaEntity

    //Relación Uno a Muchos PRESTADORES - TERAPIA
    @OneToMany(type => TerapiasEntity, terapia => terapia.prestador)
    terapia: TerapiasEntity

    //Relación Uno a Muchos PRESTADORES - TOMA_MUESTRAS_CUELLO_UTERINO
    @OneToMany(type => CuelloUterinoEntity, tom_mue_uterino => tom_mue_uterino.prestador)
    tom_mue_uterino: CuelloUterinoEntity

    //Relación Uno a Muchos PRESTADORES - TOMA_MUESTRAS_LABORATORIO_CLINICO
    @OneToMany(type => MuestrasLabClinicoEntity, tom_mue_lab_clinico => tom_mue_lab_clinico.prestador)
    tom_mue_lab_clinico: MuestrasLabClinicoEntity


    //---------------------------------///
    //-----GRUPO ATENCIÓN INMEDIATA----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - PARTO
    @OneToMany(type => PartoEntity, parto => parto.prestador)
    parto: PartoEntity

    //Relación Uno a Muchos PRESTADORES - PREHOSPITALARIA
    @OneToMany(type => PrehospitalariaEntity, prehospitalaria => prehospitalaria.prestador)
    prehospitalaria: PrehospitalariaEntity

    //Relación Uno a Muchos PRESTADORES - TRANSPORTE_ASISTENCIAL
    @OneToMany(type => TranspAsistencialEntity, transp_asistencial => transp_asistencial.prestador)
    transp_asistencial: TranspAsistencialEntity

    //Relación Uno a Muchos PRESTADORES - URGENCIAS
    @OneToMany(type => UrgenciasEntity, urgencias => urgencias.prestador)
    urgencias: UrgenciasEntity


    //---------------------------------///
    //-----GRUPO QUIRURGICO----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - CUMPLIMIENTO_CIRUGIA
    @OneToMany(type => CumplimientoCirugiaEntity, cumplimiento_cirugia => cumplimiento_cirugia.prestador)
    cumplimineto_cirugia: CumplimientoCirugiaEntity




    //---------------------------------///
    //-----GRUPO INTERNACIÓN----///
    //--------------------------------///
    //Relación Uno a Muchos PRESTADORES - CUIDADO_BASICO_CONSUMO_PSICOACTIVAS
    @OneToMany(type => ConsumoPsicoactivasEntity, cons_psicoactivas => cons_psicoactivas.prestador)
    cons_psicoactivas: ConsumoPsicoactivasEntity

    //Relación Uno a Muchos PRESTADORES - CUIDADO_BASICO_NEONATAL
    @OneToMany(type => CuidBasNeonatalEntity, cuid_bas_neonatal => cuid_bas_neonatal.prestador)
    cuid_bas_neonatal: CuidBasNeonatalEntity

    //Relación Uno a Muchos PRESTADORES - CUIDADO_INTENSIVO_ADULTO
    @OneToMany(type => CuidIntAdultoEntity, cuid_int_adulto => cuid_int_adulto.prestador)
    cuid_int_adulto: CuidIntAdultoEntity

    //Relación Uno a Muchos PRESTADORES - CUIDADO_INTENSIVO_NEONATAL
    @OneToMany(type => CuidInteNeonatalEntity, cuid_int_neonatal => cuid_int_neonatal.prestador)
    cuid_int_neonatal: CuidInteNeonatalEntity

    //Relación Uno a Muchos PRESTADORES - CUIDADO_INTENSIVO_PEDIATRICO
    @OneToMany(type => CuidIntePediatricoEntity, cuid_int_pediatrico => cuid_int_pediatrico.prestador)
    cuid_int_pediatrico: CuidIntePediatricoEntity

    //Relación Uno a Muchos PRESTADORES - CUIDADO_INTERMEDIO_ADULTO
    @OneToMany(type => CuidIntermAdultoEntity, cuid_inter_adulto => cuid_inter_adulto.prestador)
    cuid_inter_adulto: CuidIntermAdultoEntity

    //Relación Uno a Muchos PRESTADORES - CUIDADO_INTERMEDIO_NEONATAL
    @OneToMany(type => CuidIntermNeonatalEntity, cuid_inter_neonatal => cuid_inter_neonatal.prestador)
    cuid_inter_neonatal: CuidIntermNeonatalEntity

    //Relación Uno a Muchos PRESTADORES - CUIDADO_INTERMEDIO_PEDIATRICO
    @OneToMany(type => CuidIntermPediatricoEntity, cuid_inter_pediatrico => cuid_inter_pediatrico.prestador)
    cuid_inter_pediatrico: CuidIntermPediatricoEntity

    //Relación Uno a Muchos PRESTADORES - HOSPITALIZACION
    // @OneToMany(type => HospitalizacionEntity, hospitalizacion => hospitalizacion.prestador)
    // hospitalizacion: HospitalizacionEntity

    //Relación Uno a Muchos PRESTADORES - HOSPITALIZACION_CRONICO
    @OneToMany(type => HospitalizacionCronicoEntity, hospit_cronico => hospit_cronico.prestador)
    hospit_cronico: HospitalizacionCronicoEntity

    //Relación Uno a Muchos PRESTADORES - HOSPITALIZACION_CRONICO
    @OneToMany(type => HospitalizacionParcialEntity, hospitalizacion_parcial => hospitalizacion_parcial.prestador)
    hospitalizacion_parcial: HospitalizacionParcialEntity

    //Relación Uno a Muchos PRESTADORES - HOSPITALIZACION
    @OneToMany(type => HospitalizacionMentalEntity, hospitalizacion_mental => hospitalizacion_mental.prestador)
    hospitalizacion_mental: HospitalizacionMentalEntity
    
}