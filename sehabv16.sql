-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.31 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para sehab
CREATE DATABASE IF NOT EXISTS `sehab` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sehab`;

-- Volcando estructura para tabla sehab.acta-pamec-pdf
CREATE TABLE IF NOT EXISTS `acta-pamec-pdf` (
  `id` int NOT NULL AUTO_INCREMENT,
  `act_id` varchar(15) DEFAULT NULL,
  `act_fecha_visita` varchar(12) NOT NULL,
  `act_tipo_visita` varchar(12) NOT NULL,
  `act_municipio` varchar(20) NOT NULL,
  `act_prestador` varchar(100) NOT NULL,
  `act_nit` varchar(11) NOT NULL,
  `act_direccion` varchar(55) NOT NULL,
  `act_barrio` varchar(85) NOT NULL,
  `act_telefono` varchar(85) NOT NULL,
  `act_email` varchar(120) NOT NULL,
  `act_representante` varchar(55) NOT NULL,
  `act_cod_prestador` varchar(12) NOT NULL,
  `act_nombre_funcionario` varchar(70) NOT NULL,
  `act_cargo_funcionario` varchar(70) NOT NULL,
  `act_nombre_funcionario2` varchar(70) NOT NULL,
  `act_cargo_funcionario2` varchar(70) NOT NULL,
  `act_nombre_prestador` varchar(70) NOT NULL,
  `act_cargo_prestador` varchar(70) NOT NULL,
  `act_obj_visita` varchar(150) NOT NULL,
  `act_creado` date NOT NULL,
  `act_firma_funcionario` text NOT NULL,
  `act_firma_prestador` text NOT NULL,
  `act_estado` varchar(255) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.acta-pamec-pdf: ~0 rows (aproximadamente)
DELETE FROM `acta-pamec-pdf`;

-- Volcando estructura para tabla sehab.acta-sic-pdf
CREATE TABLE IF NOT EXISTS `acta-sic-pdf` (
  `id` int NOT NULL AUTO_INCREMENT,
  `act_id` int NOT NULL,
  `act_visita_inicial` varchar(2) DEFAULT NULL,
  `act_visita_seguimiento` varchar(2) DEFAULT NULL,
  `act_fecha_inicial` varchar(12) NOT NULL,
  `act_fecha_final` varchar(12) NOT NULL,
  `act_municipio` varchar(20) NOT NULL,
  `act_prestador` varchar(100) NOT NULL,
  `act_nit` varchar(11) NOT NULL,
  `act_direccion` varchar(55) NOT NULL,
  `act_barrio` varchar(85) NOT NULL,
  `act_telefono` varchar(85) NOT NULL,
  `act_email` varchar(120) NOT NULL,
  `act_sede_principal` varchar(100) NOT NULL,
  `act_sede_localidad` varchar(35) DEFAULT NULL,
  `act_sede_direccion` varchar(35) DEFAULT NULL,
  `act_representante` varchar(55) NOT NULL,
  `act_cod_prestador` varchar(12) NOT NULL,
  `act_cod_sede` varchar(20) NOT NULL,
  `act_obj_visita` varchar(150) NOT NULL,
  `act_id_funcionario` int DEFAULT NULL,
  `act_nombre_funcionario` varchar(70) NOT NULL,
  `act_cargo_funcionario` varchar(70) NOT NULL,
  `act_nombre_prestador` varchar(70) NOT NULL,
  `act_cargo_prestador` varchar(70) NOT NULL,
  `act_firma_funcionario` text,
  `act_firma_prestador` text,
  `act_estado` varchar(255) NOT NULL DEFAULT '1',
  `act_creado` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.acta-sic-pdf: ~0 rows (aproximadamente)
DELETE FROM `acta-sic-pdf`;

-- Volcando estructura para tabla sehab.acta-sp-ind-pdf
CREATE TABLE IF NOT EXISTS `acta-sp-ind-pdf` (
  `id` int NOT NULL AUTO_INCREMENT,
  `act_id` varchar(15) DEFAULT NULL,
  `act_visita_inicial` varchar(2) DEFAULT NULL,
  `act_visita_seguimiento` varchar(2) DEFAULT NULL,
  `act_fecha_inicial` varchar(12) NOT NULL,
  `act_fecha_final` varchar(12) NOT NULL,
  `act_municipio` varchar(20) NOT NULL,
  `act_prestador` varchar(100) NOT NULL,
  `act_nit` varchar(11) NOT NULL,
  `act_direccion` varchar(55) NOT NULL,
  `act_barrio` varchar(85) NOT NULL,
  `act_telefono` varchar(85) NOT NULL,
  `act_email` varchar(120) NOT NULL,
  `act_representante` varchar(55) NOT NULL,
  `act_cod_prestador` varchar(15) NOT NULL,
  `act_obj_visita` varchar(150) NOT NULL,
  `act_id_funcionario` int DEFAULT NULL,
  `act_nombre_funcionario` varchar(70) NOT NULL,
  `act_cargo_funcionario` varchar(70) NOT NULL,
  `act_nombre_prestador` varchar(70) NOT NULL,
  `act_cargo_prestador` varchar(70) NOT NULL,
  `act_creado` date NOT NULL,
  `act_firma_funcionario` text,
  `act_firma_prestador` text,
  `act_estado` varchar(255) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.acta-sp-ind-pdf: ~0 rows (aproximadamente)
DELETE FROM `acta-sp-ind-pdf`;

-- Volcando estructura para tabla sehab.acta-sp-ips-pdf
CREATE TABLE IF NOT EXISTS `acta-sp-ips-pdf` (
  `id` int NOT NULL AUTO_INCREMENT,
  `act_id` varchar(15) DEFAULT NULL,
  `act_visita_inicial` varchar(2) DEFAULT NULL,
  `act_visita_seguimiento` varchar(2) DEFAULT NULL,
  `act_fecha_inicial` varchar(12) NOT NULL,
  `act_fecha_final` varchar(12) NOT NULL,
  `act_municipio` varchar(20) NOT NULL,
  `act_prestador` varchar(100) NOT NULL,
  `act_nit` varchar(11) NOT NULL,
  `act_direccion` varchar(55) NOT NULL,
  `act_barrio` varchar(85) NOT NULL,
  `act_telefono` varchar(85) NOT NULL,
  `act_email` varchar(120) NOT NULL,
  `act_representante` varchar(55) NOT NULL,
  `act_cod_prestador` varchar(12) NOT NULL,
  `act_obj_visita` varchar(150) NOT NULL,
  `act_id_funcionario` int DEFAULT NULL,
  `act_nombre_funcionario` varchar(70) NOT NULL,
  `act_cargo_funcionario` varchar(70) NOT NULL,
  `act_nombre_prestador` varchar(70) NOT NULL,
  `act_cargo_prestador` varchar(70) NOT NULL,
  `act_creado` date NOT NULL,
  `act_firma_funcionario` text,
  `act_firma_prestador` text,
  `act_estado` varchar(255) NOT NULL DEFAULT '1',
  `act_fecha_orden` varchar(30) NOT NULL,
  `act_hora_orden` varchar(30) NOT NULL,
  `act_num_oficio` varchar(30) NOT NULL,
  `act_fecha_oficio` varchar(30) NOT NULL,
  `act_fecha_envio_oficio` varchar(30) NOT NULL,
  `act_captura_imagen` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.acta-sp-ips-pdf: ~0 rows (aproximadamente)
DELETE FROM `acta-sp-ips-pdf`;

-- Volcando estructura para tabla sehab.acta-verificacion
CREATE TABLE IF NOT EXISTS `acta-verificacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `act_id` varchar(15) DEFAULT NULL,
  `act_visita_previa` varchar(2) DEFAULT NULL,
  `act_visita_seguimiento` varchar(2) DEFAULT NULL,
  `act_visita_reactivacion` varchar(2) DEFAULT NULL,
  `act_municipio` varchar(20) NOT NULL,
  `act_prestador` varchar(100) NOT NULL,
  `act_nit` varchar(11) NOT NULL,
  `act_sede` varchar(100) NOT NULL,
  `act_direccion` varchar(55) NOT NULL,
  `act_clasificacion` varchar(70) NOT NULL,
  `act_cod_habilitacion` varchar(12) NOT NULL,
  `act_cod_sede` varchar(12) NOT NULL,
  `act_telefono` varchar(85) NOT NULL,
  `act_representante` varchar(55) NOT NULL,
  `act_gerente` varchar(55) NOT NULL,
  `act_correo` varchar(50) NOT NULL,
  `act_fecha_inicio` date NOT NULL,
  `act_fecha_fin` date NOT NULL,
  `act_observaciones` varchar(100) NOT NULL,
  `act_firma_prestador` text NOT NULL,
  `act_usu_adicional` varchar(40) DEFAULT NULL,
  `actSedeVeriSedeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_ed8ce48852ea34dd2fccb07a5d` (`actSedeVeriSedeId`),
  CONSTRAINT `FK_ed8ce48852ea34dd2fccb07a5d8` FOREIGN KEY (`actSedeVeriSedeId`) REFERENCES `sede` (`sede_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.acta-verificacion: ~0 rows (aproximadamente)
DELETE FROM `acta-verificacion`;

-- Volcando estructura para tabla sehab.actaips_evaluacion
CREATE TABLE IF NOT EXISTS `actaips_evaluacion` (
  `acta_id` int NOT NULL,
  `eva_id` int NOT NULL,
  PRIMARY KEY (`acta_id`,`eva_id`),
  KEY `IDX_1fa90d71653d3d573c4b56d019` (`acta_id`),
  KEY `IDX_64bb3f2431cecdd87ed380d49b` (`eva_id`),
  CONSTRAINT `FK_1fa90d71653d3d573c4b56d019a` FOREIGN KEY (`acta_id`) REFERENCES `acta-sp-ips-pdf` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_64bb3f2431cecdd87ed380d49b2` FOREIGN KEY (`eva_id`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.actaips_evaluacion: ~0 rows (aproximadamente)
DELETE FROM `actaips_evaluacion`;

-- Volcando estructura para tabla sehab.actividad
CREATE TABLE IF NOT EXISTS `actividad` (
  `act_id` int NOT NULL AUTO_INCREMENT,
  `act_nombre` varchar(70) NOT NULL,
  PRIMARY KEY (`act_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.actividad: ~0 rows (aproximadamente)
DELETE FROM `actividad`;
INSERT INTO `actividad` (`act_id`, `act_nombre`) VALUES
	(1, 'ACTIVIDADES PREVIAS'),
	(2, 'AUTOEVALUACIÓN'),
	(3, 'SELECCIÓN DE LOS PROCESOS A MEJORAR'),
	(4, 'PRIORIZACION'),
	(5, 'DEFINICIÓN DE LA CALIDAD ESPERADA'),
	(6, 'DEFINICIÓN DE LA CALIDAD OBSERVADA'),
	(7, 'PLAN DE MEJORAMIENTO PARA EL CIERRE DE BRECHAS'),
	(8, 'EJECUCION Y SEGUIMIENTO AL PLAN DE MEJORAMIENTO'),
	(9, 'EVALUACION PLAN DE MEJORAMIENTO'),
	(10, 'APRENDIZAJE ORGANIZACIONAL');

-- Volcando estructura para tabla sehab.auditoria-registro
CREATE TABLE IF NOT EXISTS `auditoria-registro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usu_nombre` varchar(255) NOT NULL,
  `usu_apellido` varchar(255) NOT NULL,
  `accion` varchar(255) NOT NULL,
  `detalles` varchar(455) NOT NULL,
  `direccionIp` varchar(255) NOT NULL,
  `creadoEn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.auditoria-registro: ~0 rows (aproximadamente)
DELETE FROM `auditoria-registro`;
INSERT INTO `auditoria-registro` (`id`, `usu_nombre`, `usu_apellido`, `accion`, `detalles`, `direccionIp`, `creadoEn`) VALUES
	(1, 'EDWARD SAMIR', 'ALEGRIA SALAZAR', 'Inicio de Sesión', 'El usuario EDWARD SAMIR ALEGRIA SALAZAR ha iniciado sesión ', '192.168.19.1', '2023-09-21 03:41:42');

-- Volcando estructura para tabla sehab.calificacionpam
CREATE TABLE IF NOT EXISTS `calificacionpam` (
  `cal_id` int NOT NULL AUTO_INCREMENT,
  `cal_nota` int NOT NULL,
  `cal_aplica` varchar(11) NOT NULL,
  `cal_observaciones` varchar(255) NOT NULL,
  `cal_asignado` varchar(10) NOT NULL DEFAULT '1',
  `criteriopamCalificacionCripId` int DEFAULT NULL,
  PRIMARY KEY (`cal_id`),
  KEY `FK_74d77154433a4115a34f313c02d` (`criteriopamCalificacionCripId`),
  CONSTRAINT `FK_74d77154433a4115a34f313c02d` FOREIGN KEY (`criteriopamCalificacionCripId`) REFERENCES `criteriopam` (`crip_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.calificacionpam: ~0 rows (aproximadamente)
DELETE FROM `calificacionpam`;

-- Volcando estructura para tabla sehab.calificacion_ind
CREATE TABLE IF NOT EXISTS `calificacion_ind` (
  `cal_id` int NOT NULL AUTO_INCREMENT,
  `cal_nota` int NOT NULL,
  `cal_observaciones` varchar(255) NOT NULL,
  `cal_asignado` varchar(10) NOT NULL DEFAULT '1',
  `criterioCalCriId` int DEFAULT NULL,
  PRIMARY KEY (`cal_id`),
  KEY `FK_9f50f5c37e8c29560d1edaf65df` (`criterioCalCriId`),
  CONSTRAINT `FK_9f50f5c37e8c29560d1edaf65df` FOREIGN KEY (`criterioCalCriId`) REFERENCES `criterioind` (`cri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.calificacion_ind: ~0 rows (aproximadamente)
DELETE FROM `calificacion_ind`;

-- Volcando estructura para tabla sehab.calificacion_ips_ajuste
CREATE TABLE IF NOT EXISTS `calificacion_ips_ajuste` (
  `cal_id` int NOT NULL AUTO_INCREMENT,
  `cal_nota` int NOT NULL,
  `cal_observaciones` varchar(255) NOT NULL,
  `calificacionipsAjusteCriAjuId` int DEFAULT NULL,
  PRIMARY KEY (`cal_id`),
  KEY `FK_b5c92b08bb83892a5a7532556dd` (`calificacionipsAjusteCriAjuId`),
  CONSTRAINT `FK_b5c92b08bb83892a5a7532556dd` FOREIGN KEY (`calificacionipsAjusteCriAjuId`) REFERENCES `criterio_ajuste` (`cri_aju_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.calificacion_ips_ajuste: ~0 rows (aproximadamente)
DELETE FROM `calificacion_ips_ajuste`;

-- Volcando estructura para tabla sehab.calificacion_ips_implementacion
CREATE TABLE IF NOT EXISTS `calificacion_ips_implementacion` (
  `cal_id` int NOT NULL AUTO_INCREMENT,
  `cal_nota` int NOT NULL,
  `cal_observaciones` varchar(255) NOT NULL,
  `calificacionipsImplCriImpId` int DEFAULT NULL,
  PRIMARY KEY (`cal_id`),
  KEY `FK_ca07467703a5cfa772f5c1e2caa` (`calificacionipsImplCriImpId`),
  CONSTRAINT `FK_ca07467703a5cfa772f5c1e2caa` FOREIGN KEY (`calificacionipsImplCriImpId`) REFERENCES `criterio_implementacion` (`cri_imp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.calificacion_ips_implementacion: ~0 rows (aproximadamente)
DELETE FROM `calificacion_ips_implementacion`;

-- Volcando estructura para tabla sehab.calificacion_ips_planeacion
CREATE TABLE IF NOT EXISTS `calificacion_ips_planeacion` (
  `cal_id` int NOT NULL AUTO_INCREMENT,
  `cal_nota` int NOT NULL,
  `cal_observaciones` varchar(255) NOT NULL,
  `calificacionipsPlaneacionCriPlaId` int DEFAULT NULL,
  PRIMARY KEY (`cal_id`),
  KEY `FK_242e3ed25945a0317a454af3681` (`calificacionipsPlaneacionCriPlaId`),
  CONSTRAINT `FK_242e3ed25945a0317a454af3681` FOREIGN KEY (`calificacionipsPlaneacionCriPlaId`) REFERENCES `criterio_planeacion` (`cri_pla_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.calificacion_ips_planeacion: ~0 rows (aproximadamente)
DELETE FROM `calificacion_ips_planeacion`;

-- Volcando estructura para tabla sehab.calificacion_ips_verificacion
CREATE TABLE IF NOT EXISTS `calificacion_ips_verificacion` (
  `cal_id` int NOT NULL AUTO_INCREMENT,
  `cal_nota` int NOT NULL,
  `cal_observaciones` varchar(255) NOT NULL,
  `calificacionipsVerifCriVerId` int DEFAULT NULL,
  PRIMARY KEY (`cal_id`),
  KEY `FK_f66e8545127e8ca0c725520f189` (`calificacionipsVerifCriVerId`),
  CONSTRAINT `FK_f66e8545127e8ca0c725520f189` FOREIGN KEY (`calificacionipsVerifCriVerId`) REFERENCES `criterio_verificacion` (`cri_ver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.calificacion_ips_verificacion: ~0 rows (aproximadamente)
DELETE FROM `calificacion_ips_verificacion`;

-- Volcando estructura para tabla sehab.cal_eva_ind
CREATE TABLE IF NOT EXISTS `cal_eva_ind` (
  `eva_cal_id` int NOT NULL,
  `cal_eva_id` int NOT NULL,
  PRIMARY KEY (`eva_cal_id`,`cal_eva_id`),
  KEY `IDX_988e26696ba542d97cf7dd28b4` (`eva_cal_id`),
  KEY `IDX_edd9d5ea6bc33db75d39cad2a5` (`cal_eva_id`),
  CONSTRAINT `FK_988e26696ba542d97cf7dd28b42` FOREIGN KEY (`eva_cal_id`) REFERENCES `evaluacion-sp-independientes` (`eva_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_edd9d5ea6bc33db75d39cad2a56` FOREIGN KEY (`cal_eva_id`) REFERENCES `calificacion_ind` (`cal_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cal_eva_ind: ~0 rows (aproximadamente)
DELETE FROM `cal_eva_ind`;

-- Volcando estructura para tabla sehab.cal_eva_pam
CREATE TABLE IF NOT EXISTS `cal_eva_pam` (
  `cal_eva_id` int NOT NULL,
  `eva_cal_id` int NOT NULL,
  PRIMARY KEY (`cal_eva_id`,`eva_cal_id`),
  KEY `IDX_f937defee093394d4b005b6cda` (`cal_eva_id`),
  KEY `IDX_c29906a1134fc03d93d734b3b1` (`eva_cal_id`),
  CONSTRAINT `FK_c29906a1134fc03d93d734b3b1d` FOREIGN KEY (`eva_cal_id`) REFERENCES `calificacionpam` (`cal_id`),
  CONSTRAINT `FK_f937defee093394d4b005b6cda1` FOREIGN KEY (`cal_eva_id`) REFERENCES `evaluacion-pamec` (`eva_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cal_eva_pam: ~0 rows (aproximadamente)
DELETE FROM `cal_eva_pam`;

-- Volcando estructura para tabla sehab.capacidad_instalada
CREATE TABLE IF NOT EXISTS `capacidad_instalada` (
  `cap_id` int NOT NULL AUTO_INCREMENT,
  `cap_grupo` varchar(20) NOT NULL,
  `cap_concepto` varchar(20) NOT NULL,
  `cap_inscritas` varchar(3) NOT NULL,
  `cap_observados` varchar(3) NOT NULL,
  `cap_num_placa` varchar(8) NOT NULL,
  `cap_movilidad` varchar(15) NOT NULL,
  `cap_modelo` varchar(5) NOT NULL,
  `cap_tarjeta_propiedad` varchar(13) NOT NULL,
  `prestadoresPreCodHabilitacion` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`cap_id`),
  KEY `FK_cae5163f14236b0bee142728b96` (`prestadoresPreCodHabilitacion`),
  CONSTRAINT `FK_cae5163f14236b0bee142728b96` FOREIGN KEY (`prestadoresPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.capacidad_instalada: ~0 rows (aproximadamente)
DELETE FROM `capacidad_instalada`;

-- Volcando estructura para tabla sehab.cirugia
CREATE TABLE IF NOT EXISTS `cirugia` (
  `ciru_id` int NOT NULL AUTO_INCREMENT,
  `ciru_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`ciru_id`),
  UNIQUE KEY `IDX_7994d6d4caa7bbfe79d253eae5` (`ciru_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cirugia: ~0 rows (aproximadamente)
DELETE FROM `cirugia`;

-- Volcando estructura para tabla sehab.clase
CREATE TABLE IF NOT EXISTS `clase` (
  `clas_id` int NOT NULL AUTO_INCREMENT,
  `clas_nombre` varchar(10) NOT NULL,
  PRIMARY KEY (`clas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.clase: ~0 rows (aproximadamente)
DELETE FROM `clase`;
INSERT INTO `clase` (`clas_id`, `clas_nombre`) VALUES
	(1, 'JURIDICO'),
	(2, 'NATURAL');

-- Volcando estructura para tabla sehab.clasificacion
CREATE TABLE IF NOT EXISTS `clasificacion` (
  `cla_id` int NOT NULL AUTO_INCREMENT,
  `cla_nombre` varchar(70) NOT NULL,
  PRIMARY KEY (`cla_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.clasificacion: ~0 rows (aproximadamente)
DELETE FROM `clasificacion`;
INSERT INTO `clasificacion` (`cla_id`, `cla_nombre`) VALUES
	(1, 'Instituciones Prestadoras de Servicios de Salud - IPS'),
	(2, 'Objeto Social Diferente a la Prestación de Servicios de Salud'),
	(3, 'Profesional Independiente'),
	(4, 'Transporte Especial de Pacientes');

-- Volcando estructura para tabla sehab.concepto_res
CREATE TABLE IF NOT EXISTS `concepto_res` (
  `conc_id` int NOT NULL AUTO_INCREMENT,
  `conc_nombre` varchar(100) NOT NULL,
  `requisitoResReqId` int DEFAULT NULL,
  PRIMARY KEY (`conc_id`),
  KEY `FK_7586c3fded9d85242da62eb6a41` (`requisitoResReqId`),
  CONSTRAINT `FK_7586c3fded9d85242da62eb6a41` FOREIGN KEY (`requisitoResReqId`) REFERENCES `requisito_res` (`req_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.concepto_res: ~0 rows (aproximadamente)
DELETE FROM `concepto_res`;

-- Volcando estructura para tabla sehab.consumo_psicoactivas
CREATE TABLE IF NOT EXISTS `consumo_psicoactivas` (
  `cons_psi_id` int NOT NULL AUTO_INCREMENT,
  `cons_psi_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cons_psi_id`),
  UNIQUE KEY `IDX_18e2ebd74f2eb2e3dbd944cc7c` (`cons_psi_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.consumo_psicoactivas: ~0 rows (aproximadamente)
DELETE FROM `consumo_psicoactivas`;

-- Volcando estructura para tabla sehab.criterioind
CREATE TABLE IF NOT EXISTS `criterioind` (
  `cri_id` int NOT NULL AUTO_INCREMENT,
  `cri_nombre` varchar(350) NOT NULL,
  `cri_verificacion` varchar(120) NOT NULL,
  `etaItemEtaId` int DEFAULT NULL,
  PRIMARY KEY (`cri_id`),
  KEY `FK_17d0f1724aa96af7118a4f4d44b` (`etaItemEtaId`),
  CONSTRAINT `FK_17d0f1724aa96af7118a4f4d44b` FOREIGN KEY (`etaItemEtaId`) REFERENCES `etapaind` (`eta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterioind: ~0 rows (aproximadamente)
DELETE FROM `criterioind`;
INSERT INTO `criterioind` (`cri_id`, `cri_nombre`, `cri_verificacion`, `etaItemEtaId`) VALUES
	(1, 'De  acuerdo a la actividad profesional que  usted realiza,  tiene definido los propósitos trazadores (mínimo 3), que pretende alcanzar con la prestación segura de sus servicios', 'Solicite Programa  de seguridad del Paciente y formato N. 1 del MSPS.', 1),
	(2, 'Con  base  en  las  buenas  prácticas  para  la  seguridad  del  paciente,  obligatorias  en  el  Manual  de  Habilitación de Prestadores de Servicios de Salud, tiene definido  cual o cuales acciones seguras usted implementa en la prestación de los servicios de salud.', 'Solicite Programa de S.P y formato N. 1 del MSPS', 1),
	(3, 'Se encuentran definidos los indicadores que medirá para hacer seguimiento a la seguridad de la atención brindada o Relacionados con: •Infecciones asociadas a la atención en salud. ¿Cuál o cuáles? • Relacionados con la frecuencia de fallas (eventos adversos e incidentes) en la prestación del servicio. ¿Cuál o cuáles? ', 'Solicite Fichas técnicas de los indicadores', 1),
	(4, 'Se encuentran gestionados los    indicadores  que  medirá  para  hacer  seguimiento  a  la seguridad del paciente.', 'Solicite Fichas técnicas gestionadas de los indicadores', 1),
	(5, 'Se  ha definido cuales son los eventos adversos  e incidentes que se le pueden presentar.', 'Solicite listados de eventos adversos a reportar', 1),
	(6, 'Evidencia de análisis de causas de fallas en la atención por el profesional independiente.', 'Solicite reportes y verifique varios eventos adversos  o incidentes reportados durante los últimos dos meses.', 1),
	(7, 'Evidencia de adopción de guías o protocolos  de práctica clínica de las patologías que atiende con mayor frecuencia ', 'Solicite guías o protocolos.', 1),
	(8, 'Evidencia  de protocolo para el uso racional de antibióticos si los prescribe', 'Solicite protocolo', 1),
	(9, 'Evidencia  de protocolo de identificación segura de pacientes.', 'Solicite protocolo', 1),
	(10, 'Registro en la historia clínica de alergias a medicamentos', '', 1),
	(11, 'El profesional tiene definido conceptos básicos como: \n•Seguridad del paciente\n•Evento Adverso\n•Incidente\n•Acción Insegura \n•Barrera de seguridad', 'Solicite Programa de S.P y formato N. 2 del MSPS', 2),
	(12, 'El profesional tiene definido cuales son los factores que pueden contribuir a la generación de fallas en la prestación del servicio, mínimo 3 (Factores contributivos protocolo de Londres)', 'Solicite Programa de S.P y formato N. 2 del MSPS', 2),
	(13, 'El profesional tiene definido cuales son las barreras de seguridad para su consultorio o sitio de trabajo ( mínimo 3)', 'Solicite Programa de S.P y formato N. 2 del MSPS', 2),
	(14, 'Debe contar con un registro de las fallas que se presenten durante la atención.', 'Formato gestionado de reporte de fallas en la atención y/o formato 3 del MSPS.', 3),
	(15, 'Cuenta con un formato para registrar las acciones de mejora que el  profesional independiente va a implementar para evitar que se vuelvan a presentar los eventos adversos o incidentes.', 'Formato gestionado de registro  de plan de mejoramiento  y/o formato  4 del MSPS', 3),
	(16, 'Se tienen documentados los lineamientos frente a la higiene  de manos y el uso seguro de guantes.', 'Protocolo para la higiene de manos y uso seguro de guantes.', 4),
	(17, 'Se tienen documentados los protocolos de:\r\n•Asepsia, desinfección y esterilización\r\n• protocolos de re-uso y  re envase\r\n• Manual de buenas prácticas de esterilización\r\n• Profilaxis antibiótica', 'Solicite Protocolos.', 4),
	(18, 'Presencia de insumos  para la higiene de manos como por ejemplo:\n•Toallas desechables\n•Solución de alcohol Glicerinado\n•Jabón antibacterial.\nEn concordancia con el protocolo  de higiene de manos', 'Presencia de insumos para la higiene de manos', 4);

-- Volcando estructura para tabla sehab.criteriopam
CREATE TABLE IF NOT EXISTS `criteriopam` (
  `crip_id` int NOT NULL AUTO_INCREMENT,
  `crip_nombre` varchar(700) NOT NULL,
  `crip_desarrollo_etapas` varchar(700) NOT NULL,
  `cripActividadActId` int DEFAULT NULL,
  PRIMARY KEY (`crip_id`),
  KEY `FK_6199af2fce493ec55dde52bdd4e` (`cripActividadActId`),
  CONSTRAINT `FK_6199af2fce493ec55dde52bdd4e` FOREIGN KEY (`cripActividadActId`) REFERENCES `actividad` (`act_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criteriopam: ~0 rows (aproximadamente)
DELETE FROM `criteriopam`;
INSERT INTO `criteriopam` (`crip_id`, `crip_nombre`, `crip_desarrollo_etapas`, `cripActividadActId`) VALUES
	(1, 'La organización ha desarrollado con sus miembros actividades de sensibilización en el proceso.', '•5• = Existen evidencias que la organización ha planeado y desarrollado de manera sistemática actividades de sensibilización frente al PAMEC y al mejoramiento continuo\n•3• = Existen algunas evidencias aisladas del desarrollo de algunas actividades de sensibilización del proceso\n•1• = No se encuentran evidencias del desarrollo de actividades de sensibilización frente al PAMEC, ni frente a los procesos de mejoramiento.', 1),
	(2, 'La organización tiene identificado, seleccionado y definido las personas que hacen parte de los equipos de autoevaluación y mejoramiento, el equipo ha recibido capacitación teórica donde se profundice el proceso para el desarrollo de la ruta crítica del PAMEC.', '•5•= Existe evidencias que la organización ha seleccionado y conformado los equipos de mejoramiento, se encuentra plenamente documentado, estos se encuentran capacitados en el desarrollo de la ruta crítica del PAMEC\n•3•= La conformación de los equipos de mejoramiento no ha sido explicito, ni se encuentra documentado y se evidencia el desarrollo de algunas actividades de capacitación en el desarrollo de la ruta crítica del PAMEC\n•1•= No se encuentran evidencias de la selección y conformación de los equipos de mejoramiento, no se encuentran evidencias del desarrollo de actividades de capacitación en el desarrollo de la ruta crítica del PAMEC.', 1),
	(3, 'La organización ha diseñado los instrumentos necesarios que se utilizaran para la implementación de la ruta crítica del PAMEC, como son formatos de autoevaluación, de priorización, de desarrollo de planes de mejoramiento entre otros.', '•5•= Existe evidencia que demuestra que la organización ha definido los diferentes instrumentos que utilizará para el desarrollo e implementación del PAMEC.\n•3•= La organización ha definido algunos formatos e instrumentos que utilizará para el desarrollo de la ruta crítica del PAMEC.\n•1•= No se encuentran evidencias de la construcción de instrumentos para la implementación de la ruta crítica del PAMEC.', 1),
	(4, 'La institución cuenta con un cronograma de trabajo para formular e implementar el PAMEC de acuerdo con los lineamientos del MINISTERIO DE SALUD Y PROTECCION SOCIAL', '•5•= Existe evidencia que demuestra que la organización ha definido un cronograma de trabajo amplio que cubre cada uno de los pasos para la implementación de la ruta crítica del PAMEC.\n•3•= Existe evidencia que la organización ha definido un cronograma de trabajo, sin embargo, este no cubre la totalidad de los pasos para la implementación de la ruta crítica del PAMEC.\n•1•= No se encuentran evidencias de la construcción del cronograma de trabajo para la implementación del PAMEC.', 1),
	(5, 'La organización tiene un documento en el que define el periodo de duración de implementación y la metodología a aplicar para el desarrollo del componente Auditoria para el Mejoramiento de la Calidad.', '•5•= Existe evidencia que demuestra que la organización ha definido la duración y metodología alineada con las Pautas de auditoria para el desarrollo de cada uno de los pasos de la ruta crítica del PAMEC.\n•3•= Existe evidencia que la organización ha definido la duración y metodología la cual es poco estructurada y no alineada con las pautas de auditoría para la implementación del PAMEC.\n•1•= No se encuentran evidencias de la construcción de un documento que contenga la metodología para la implementación del PAMEC.', 1),
	(6, 'La organización tiene definido un enfoque explícito que orienta el desarrollo del PAMEC en alguno de los siguientes temas:\n•Sistema Único de Acreditación\n•Sistema de Información para la Calidad\n•Seguimiento a Riesgos\n•Buenas Prácticas de seguridad del paciente.', '•5•= La institución ha establecido de manera explícita el enfoque con el que desarrollara la ruta de mejoramiento, y este se encuentra dentro de las opciones dadas por el Ministerio de Salud y Protección Social.\n•3•= La institución no ha definido de manera explícita el enfoque con el que desarrollará el mejoramiento, pero se evidencia la implementación de alguna de las orientaciones dadas por el Ministerio de Salud y Protección Social.\n•1•= La institución no ha definido de manera explícita el enfoque con el que desarrollara el mejoramiento, o este se realiza con enfoque diferente a los lineamientos brindados por el Ministerio.', 1),
	(7, 'La organización ha definido con claridad cuáles son las acciones de auditoria a aplicar en el proceso de mejoramiento.  \n•Preventivas \n•Seguimiento \n•Coyunturales ', '•5•= Existe evidencia que la institución ha definido claramente las acciones preventivas, de seguimiento y coyunturales\n\n•3•= Existe evidencia que la institución no ha definido con suficiente claridad las acciones de auditoria\n\n•1•= La institución no ha definido las acciones de auditoria a aplicar en el desarrollo del PAMEC', 1),
	(8, 'Conoce el Gerente y su equipo Directivo el Programa de Auditoría de su entidad.', '•5•= Existe evidencia que demuestra que el Gerente conoce con detalle el PAMEC institucional.\n•3•= Existe evidencia parcial del conocimiento del PAMEC institucional\n•1•= No se refleja conocimiento del PAMEC institucional', 1),
	(9, 'Evidencia del análisis de los resultados de las auditorías Internas que realiza la IPS, como base del inicio del PAMEC.', '•5• = Existe evidencia en la institución de los informes resultados de las auditorías internas realizadas durante el periodo.\n•3• = Existe en la institución algunos análisis y resultados de informes de auditorías internas.\n•1• = No existe evidencia en la institución de los informes resultados de las auditorías internas realizadas durante el periodo.', 2),
	(10, 'Resultado de las Auditorías externas que proveen información de las partes interesadas y/o clientes y que reflejan la medición objetiva de aspectos claves en la prestación de servicios de salud de índole legal que también orientan a la IPS en la mejora continua de la calidad', '•5• = Existe evidencia que demuestra que la institución ha recibido auditorías externas y ha desarrollado las acciones de mejora de cada uno de ellos.\n•3• = Existe evidencias aisladas del cumplimiento al desarrollo de los planes de mejoramiento pactados en las auditorías externas.\n•1• = No se encuentra evidencias del cumplimiento al desarrollo de los planes de mejoramiento pactados en las auditorías externas.', 2),
	(11, 'Resultados de la gestión de los Comités Institucionales a partir de sus planes de acción definidos para cada vigencia. El cumplimiento de dichos planes reflejará el compromiso de la entidad en el mejoramiento continuo de la calidad.', '•5• = La organización ha realizado análisis a la gestión de los comités institucionales de acuerdo al plan de acción.\n•3• = La organización ha realizado algunos análisis a la gestión de los comités institucionales de acuerdo al plan de acción.\n•1• = La organización no ha realizado análisis a la gestión de los comités institucionales de acuerdo al plan de acción.', 2),
	(12, 'Análisis de los resultados de los indicadores reglamentarios y de los institucionales que reflejen el estado de los mismos frente a unos estándares o metas definidas.', '•5• = Existe evidencia que la organización ha realizado análisis a los indicadores reglamentarios y/o los que permitan continuar hacia el mejoramiento. \n•3• = Existe evidencia que la organización ha realizado algunos análisis a los indicadores reglamentarios y/o los que permitan continuar hacia el mejoramiento.\n•1• = No existe evidencia que la organización ha realizado análisis a los indicadores reglamentarios y/o los que permitan continuar hacia el mejoramiento.', 2),
	(13, 'Análisis de los resultados sobre el impacto en el usuario y su familia de todas las acciones de mejoramiento emprendidas en la institución y es el medidor por excelencia del enfoque en el cliente de una entidad', '•5• = Existe evidencia del análisis de los resultados arrojados en las encuestas de satisfacción de los usuarios.\n•3• = Existe algunas evidencias del análisis de los resultados arrojados en las encuestas de satisfacción de los usuarios.\n•1• = No existe evidencia del análisis de los resultados arrojados en las encuestas de satisfacción de los usuarios.', 2),
	(14, 'La autoevaluación aplicada ha identificado las fortalezas y oportunidades de mejora de la organización frente a cada uno de los estándares del enfoque definido (Cuando esta se desarrollará frente a los criterios de acreditación deberá contar con el componente cuantitativo y cualitativo).', '', 2),
	(15, 'La organización cuenta con mapa de procesos, procesos y procedimientos documentados e identifica las oportunidades de mejora en la autoevaluación realizada y las confronta frente a los diferentes procesos a los cuáles pertenecen.  ', '•5•= Existe evidencia del mapa de procesos, procesos y de procedimientos documentados y vigentes, se confrontan las oportunidades de mejora con el mapa de procesos de la organización y se determina a que procesos pertenecen.\n•3•= Existen evidencias del mapa de procesos, procesos y procedimientos están documentados, pero no se confrontan las oportunidades de mejora con el mapa de procesos de la organización y determinan a que procesos pertenecen. \n•1•= No existe evidencia de la documentación del mapa de procesos, ni de los procesos y procedimientos, no se evidencia correlación entre oportunidades de mejora con el mapa de procesos.', 3),
	(16, 'La organización tiene definido la metodología utilizada para el desarrollo de la priorización (Lluvia de ideas, Pareto, matrices de priorización entre otros) y tiene establecido los criterios para la priorización de las oportunidades de mejoramiento.', '•5•= Existe evidencia y tiene definido de manera explícita la metodología y criterios de priorización\n•3•= La organización ha definido la metodología y criterios de priorización, pero no de manera explícita\n•1•= No existen evidencias que demuestre que la organización tiene definida una metodología y criterios de priorización', 4),
	(17, 'La organización ha aplicado la priorización de las oportunidades de mejoramiento y/o estándares de las normas seleccionadas.  Para los estándares del SUA deberá realizar priorización para cada uno de los grupos de estándares.  Para Fortalecimiento del Programa de Seguridad del Paciente deberá priorizar cada una de buenas prácticas.  Para sistema de información para la calidad o gestión del riesgo deberá realizar oportunidades de mejoramiento identificadas a partir del análisis de la información.', '•5•= La organización ha identificado oportunidades de mejoramiento y/o estándares prioritarios a intervenir a partir de la aplicación de los criterios definidos\n•3•= La organización ha identificado algunas oportunidades de mejoramiento y/o estándares prioritarios a intervenir a partir de la aplicación de los criterios definidos \n•1•= No existen evidencias que demuestre que la organización ha priorizado las oportunidades de mejoramiento y/o estándares.', 4),
	(18, 'Se tiene definida la calidad esperada para cada uno de los procesos priorizados en la vigencia así:  Para SUA se debe evidenciar el nivel de desarrollo (calificación cuantitativa), al que se quiere llegar en la autoevaluación cuantitativa y las metas pertinentes y cuantificables del nivel deseado.   Para SIC, indicar la meta a cumplir en cada uno de estos indicadores.   Para Gestión del Riesgo, indicar el nivel deseado de riesgo al que se espera llegar.   Para programa de Seguridad del Paciente indicar el logro esperado de los indicadores sugeridos en cada una de las prácticas.', '•5•= La organización ha definido la calidad esperada, para cada una de las prioridades definidas\n\n•3•= La organización ha definido parcialmente la calidad esperada, de acuerdo a las prioridades definidas \n\n•1•= No existen evidencias que demuestre que la organización haya definido la calidad esperada para las prioridades definidas.', 5),
	(19, 'Se han desarrollado indicadores a partir de la definición de la calidad esperada. ', '•5•= La organización ha definido los indicadores que permitan medir la calidad esperada\n•3•= La organización ha definido parcialmente algunos indicadores que permiten medir la calidad esperada\n•1•= No existen evidencias de indicadores que permitan medir la calidad esperada.', 5),
	(20, 'Los indicadores definidos en la calidad esperada cuentan con sus fichas técnicas estandarizadas', '•5•= La organización ha definido las fichas técnicas de los indicadores desarrollados en la calidad esperada\n•3•= La organización ha definido parcialmente algunas fichas técnicas de indicadores que permiten medir la calidad deseada\n•1•= No existen evidencias de fichas técnicas de indicadores que permitan medir la calidad deseada', 5),
	(21, 'Listado de las auditorias planeadas en la vigencia del PAMEC y evidencia gradual de la implementación con la identificación de hallazgos y oportunidades de mejoramiento recomendadas.', '•5•=Existe evidencia de un plan de auditorías e informes de auditorías internas realizadas por la organización en la vigencia del PAMEC.\n•3•= Existen algunas evidencias de un plan de auditorías e informes de auditorías internas realizadas por la organización en la vigencia del PAMEC.\n•1•= No existe evidencia de un plan de auditorías e informes de auditorías internas realizadas por la organización en la vigencia del PAMEC.', 6),
	(22, 'La entidad ha desarrollado un plan de mejoramiento para el cierre de brechas.    En SUA se debe evidenciar el desarrollo de planes de mejoramiento para cada uno de los grupos de estándares, que dé respuesta a cada uno de los estándares y oportunidades de mejoramiento priorizadas, para los demás alcances el plan de mejoramiento debe incluir las acciones para las oportunidades de mejoramiento de prácticas priorizadas. ', '•5•= La organización ha definido un plan de mejoramiento con acciones pertinentes para el cierre de las brechas \n•3•= La organización ha definido un plan de mejoramiento con algunas acciones que impactan directamente en las brechas identificadas \n•1•= No existen planes de mejoramiento para el cierre de brechas', 7),
	(23, 'El plan de mejoramiento diseñado tiene definido los responsables, fechas para el cumplimiento de las actividades, es conocido por el personal de la institución.', '•5•= El plan de mejoramiento diseñado tiene claramente definido los responsables, fechas y existe evidencia de que el personal conoce el plan de mejoramiento para el cierre de las brechas identificadas. \n•3•= El plan de mejoramiento es parcial, no tiene claridad de los responsables y fechas, existe un conocimiento parcial sobre el plan de mejora.\n•1•= No existen planes de mejoramiento para el cierre de brechas, el personal no conoce el plan de mejoramiento para el cierre de las brechas identificadas.', 7),
	(24, 'Se tienen definidas las personas encargadas de realizar el seguimiento al PAMEC.', '•5•= Se tienen definidas de manera explícita las personas encargadas del seguimiento al PAMEC  \n•3•= Se tienen definidas las personas encargadas del seguimiento al PAMEC, pero no de manera explícita\n•1•= No se evidencia la delegación de funciones para el seguimiento al PAMEC', 8),
	(25, 'La organización realiza seguimiento a las acciones de mejoramiento planteadas dentro de los planes de mejoramiento y éstos se ejecutan en los tiempos estipulados.', '•5•= Existe evidencia del seguimiento desarrollado por la institución a las acciones de mejoramiento planteadas dentro del plan de mejoramiento y son ejecutadas dentro de los plazos previstos.\n•3•= El seguimiento a los planes de mejoramiento no es sistemático y existe alguna evidencia que son ejecutados en el tiempo previsto.\n•1•= No se evidencia el seguimiento realizado a los planes de mejoramiento elaborados, no se ejecuta en los tiempos estipulados.', 8),
	(26, 'La organización establece planes de choque cuando encuentra que el plan o las acciones de mejora no se han desarrollado dentro de los plazos establecidos.', '•5•= Existe evidencia de las acciones emprendidas por la organización, cuando en el seguimiento se identifican acciones de mejoramiento por fuera de los plazos definidos\n•3•= Existe evidencia de algunas acciones emprendidas por la organización, cuando en el seguimiento se identifican acciones de mejoramiento por fuera de los plazos definidos\n•1•= No se evidencia el desarrollo de planes de choque cuando se encuentran acciones de mejoramiento por fuera de los plazos establecidos', 8),
	(27, 'La organización tiene evidencia documental del seguimiento realizado a la ejecución de las acciones de mejoramiento documentadas en los planes de mejoramiento formulados para alcanzar la calidad esperada. Incluye el seguimiento desde el autocontrol y de la auditoría interna.', '•5•= Existe evidencia documental del seguimiento realizado a la ejecución de acciones de mejoramiento.\n•3•= Existe evidencia documental del seguimiento realizado a la ejecución de acciones de mejoramiento, pero los resultados no se analizan respecto a la efectividad de las acciones del plan. \n•1•= No se evidencia seguimiento a la ejecución de acciones de mejoramiento.', 9),
	(28, 'La organización realiza capacitación y reentrenamiento al personal responsable de los procesos mejorados para que se continúe la implementación del proceso con los cambios que ya se aprobaron.', '•5•= Existe evidencia sólida de las capacitaciones o entrenamientos de los procesos mejorados \n•3•= Existe evidencia de algunos entrenamientos desarrollados por la organización de los procesos mejorados\n•1•= No se evidencia el entrenamiento y capacitación del personal de los procesos mejorados.', 10),
	(29, 'La organización realiza un informe que evidencie el análisis de la ejecución del PAMEC, luego de finalizado el periodo de implementación definido, con el fin de identificar las acciones que deben estandarizarse en la entidad.', '•5•= Se cuenta con informe que permite conocer el proceso de mejoramiento para generar aprendizaje organizacional y análisis de las acciones que deben estandarizarse en la entidad.\n•3•= Existen algunos datos aislados que evidencian el proceso de mejoramiento.\n•1•= No se evidencia consolidación de la información del proceso de mejoramiento y estandarización de lecciones aprendidas.', 10),
	(30, 'La organización desarrolla actividades de comunicación de los resultados a todos los clientes internos involucrados en el proceso de mejoramiento.', '•5•= Se evidencia piezas comunicacionales para dar a conocer el proceso de mejoramiento y las lecciones aprendidas  \n•3•= Se evidencian algunos mecanismos no sistemáticos para comunicar el proceso de mejoramiento y las lecciones aprendidas\n•1•= No se evidencia de la comunicación de las lecciones aprendidas', 10);

-- Volcando estructura para tabla sehab.criteriosic
CREATE TABLE IF NOT EXISTS `criteriosic` (
  `cri_id` int NOT NULL AUTO_INCREMENT,
  `cri_nombre` varchar(120) NOT NULL,
  PRIMARY KEY (`cri_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criteriosic: ~0 rows (aproximadamente)
DELETE FROM `criteriosic`;
INSERT INTO `criteriosic` (`cri_id`, `cri_nombre`) VALUES
	(1, 'Se ha definido y documentado el procedimiento  para la implementación del indicador.'),
	(2, 'Se han diseñado y adoptado herramientas para la captura de la información.'),
	(3, 'Los procedimientos son conocidos por el personal responsable del registro en la fuente primaria de información.'),
	(4, 'Se ha definido la periodicidad de la generación de la información en la ficha del indicador.'),
	(5, 'Se ha definido la meta del indicador en la ficha.'),
	(6, 'La IPS reporta el indicador con la periodicidad establecida en la norma.'),
	(7, 'Se realiza análisis de los indicadores.'),
	(8, 'Se realiza planes de mejoramiento con el resultado del análisis de indicadores.');

-- Volcando estructura para tabla sehab.criterio_ajuste
CREATE TABLE IF NOT EXISTS `criterio_ajuste` (
  `cri_aju_id` int NOT NULL AUTO_INCREMENT,
  `cri_aju_nombre` varchar(500) NOT NULL,
  `cri_aju_verificacion` varchar(200) NOT NULL,
  `criAjuEvaEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`cri_aju_id`),
  KEY `FK_25d3098bc5505821cc783211277` (`criAjuEvaEvipsId`),
  CONSTRAINT `FK_25d3098bc5505821cc783211277` FOREIGN KEY (`criAjuEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_ajuste: ~0 rows (aproximadamente)
DELETE FROM `criterio_ajuste`;
INSERT INTO `criterio_ajuste` (`cri_aju_id`, `cri_aju_nombre`, `cri_aju_verificacion`, `criAjuEvaEvipsId`) VALUES
	(1, 'Que mejoras se han realizado a partir de los resultados de la implementación de la política de seguridad y demás estrategias de seguridad implementadas.', 'Solicite actas de comité, Planes de mejoramiento donde se analice los resultados de la aplicación de la estrategia de seguridad, la política y el foco de seguridad.', 1),
	(2, 'Las mejoras desarrolladas son estandarizadas en los diferentes procesos para evitar que los eventos adversos vuelvan a suceder.', 'Solicite alguno de los procesos o procedimientos del día a día y verifique la incorporación de estas lecciones aprendidas.', 1),
	(3, 'Qué mejoras se han realizado a partir del análisis de los resultados obtenidos.', 'Solicite actas de comité, planes de mejoramiento donde se analice los resultados de la adherencia a las acciones implementadas.', 2),
	(4, 'Qué mejoras se han realizado a partir de la implementación de las acciones para la prevención de infecciones asociadas al cuidado.', 'Solicite actas de comité, Planes de mejoramiento donde se analice los resultados de la adherencia a las acciones implementadas para la prevención de infecciones asociadas al cuidado', 3),
	(5, 'Qué lecciones aprendidas se generaron a partir de la implementación de los programas de uso seguro de medicamentos', 'Solicite material, fotos, actas otras evidencias donde se muestre evidencie el desarrollo de estas actividades.', 4),
	(6, 'Qué mejoras se han realizado a partir de la implementación de las acciones para la correcta identificación del paciente.', 'Solicite actas de comité, Planes de mejoramiento donde se analice los resultados de la adherencia a las acciones implementadas la correcta', 5),
	(7, 'Qué  mejoras se han realizado a partir de la implementación de las acciones para garantizar la seguridad de la gestante y el recién nacido', 'Solicite actas de comité, Planes de mejoramiento donde se analice los resultados de la adherencia a las acciones implementadas para garantizar la seguridad de la gestante y el recién nacido', 6),
	(8, 'Qué lecciones aprendidas se generaron a partir de la implementación procedimientos para mejorar la seguridad de los procedimientos quirúrgicos.', 'Solicite material, fotos, actas otras evidencias donde se muestre evidencie el desarrollo de estas actividades.', 7),
	(9, 'Evidencia documental del análisis de causa del evento adverso: lesión por presencia de úlceras por presión cuando se presente, identificando las acciones inseguras, los factores contributivos y definiendo las acciones de mejoramiento que conduzcan a la disminución de dicho evento adverso. El análisis se debe desarrollar en un comité de seguridad.', '', 8),
	(10, 'Que mejoras se han implementado frente a la implementación de protocolos para control de los riesgos de atención.', 'Solicite actas de comité, planes de mejoramiento relacionados con este tema.', 8),
	(11, 'Qué lecciones aprendidas se generaron a partir de la implementación de la prevención y reducción de la frecuencia de caídas.', 'Solicite material, fotos, actas otras evidencias donde se muestre evidencie el desarrollo de estas actividades.', 9);

-- Volcando estructura para tabla sehab.criterio_cirugia
CREATE TABLE IF NOT EXISTS `criterio_cirugia` (
  `cri_ciru_id` int NOT NULL AUTO_INCREMENT,
  `cri_ciru_modalidad` varchar(105) DEFAULT NULL,
  `cri_ciru_complejidad` varchar(105) DEFAULT NULL,
  `cri_ciru_articulo` varchar(10) DEFAULT NULL,
  `cri_ciru_seccion` varchar(3) DEFAULT NULL,
  `cri_ciru_apartado` varchar(10) DEFAULT NULL,
  `cri_ciru_nombre_criterio` varchar(700) DEFAULT NULL,
  `cirugiaCiruId` int DEFAULT NULL,
  PRIMARY KEY (`cri_ciru_id`),
  KEY `FK_2e6b3ce34b0714c891464433d1e` (`cirugiaCiruId`),
  CONSTRAINT `FK_2e6b3ce34b0714c891464433d1e` FOREIGN KEY (`cirugiaCiruId`) REFERENCES `cirugia` (`ciru_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cirugia: ~0 rows (aproximadamente)
DELETE FROM `criterio_cirugia`;

-- Volcando estructura para tabla sehab.criterio_cons_psicoactivas
CREATE TABLE IF NOT EXISTS `criterio_cons_psicoactivas` (
  `cri_cons_psic_id` int NOT NULL AUTO_INCREMENT,
  `cri_cons_psic_modalidad` varchar(105) DEFAULT NULL,
  `cri_cons_psic_complejidad` varchar(105) DEFAULT NULL,
  `cri_cons_psic_articulo` varchar(10) DEFAULT NULL,
  `cri_cons_psic_seccion` varchar(3) DEFAULT NULL,
  `cri_cons_psic_apartado` varchar(10) DEFAULT NULL,
  `cri_cons_psic_nombre_criterio` varchar(700) DEFAULT NULL,
  `consPsicoactivasConsPsiId` int DEFAULT NULL,
  PRIMARY KEY (`cri_cons_psic_id`),
  KEY `FK_5c0062b35813ac928b6d6f64718` (`consPsicoactivasConsPsiId`),
  CONSTRAINT `FK_5c0062b35813ac928b6d6f64718` FOREIGN KEY (`consPsicoactivasConsPsiId`) REFERENCES `consumo_psicoactivas` (`cons_psi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cons_psicoactivas: ~0 rows (aproximadamente)
DELETE FROM `criterio_cons_psicoactivas`;

-- Volcando estructura para tabla sehab.criterio_cuello_uterino
CREATE TABLE IF NOT EXISTS `criterio_cuello_uterino` (
  `cri_cuel_ute_id` int NOT NULL AUTO_INCREMENT,
  `cri_cuel_ute_modalidad` varchar(105) DEFAULT NULL,
  `cri_cuel_ute_complejidad` varchar(105) DEFAULT NULL,
  `cri_cuel_ute_articulo` varchar(10) DEFAULT NULL,
  `cri_cuel_ute_seccion` varchar(3) DEFAULT NULL,
  `cri_cuel_ute_apartado` varchar(10) DEFAULT NULL,
  `cri_cuel_ute_nombre_criterio` varchar(700) DEFAULT NULL,
  `cueUterinoCuelUteId` int DEFAULT NULL,
  PRIMARY KEY (`cri_cuel_ute_id`),
  KEY `FK_c4e5deb00a75e33c0648a5820ab` (`cueUterinoCuelUteId`),
  CONSTRAINT `FK_c4e5deb00a75e33c0648a5820ab` FOREIGN KEY (`cueUterinoCuelUteId`) REFERENCES `cuello_uterino` (`cuel_ute_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuello_uterino: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuello_uterino`;

-- Volcando estructura para tabla sehab.criterio_cuid_bas_neonatal
CREATE TABLE IF NOT EXISTS `criterio_cuid_bas_neonatal` (
  `cri_neona_id` int NOT NULL AUTO_INCREMENT,
  `cri_neona_modalidad` varchar(105) DEFAULT NULL,
  `cri_neona_complejidad` varchar(105) DEFAULT NULL,
  `cri_neona_articulo` varchar(10) DEFAULT NULL,
  `cri_neona_seccion` varchar(3) DEFAULT NULL,
  `cri_neona_apartado` varchar(10) DEFAULT NULL,
  `cri_neona_nombre_criterio` varchar(700) DEFAULT NULL,
  `cuidBasNeonatalCuidNeonaId` int DEFAULT NULL,
  PRIMARY KEY (`cri_neona_id`),
  KEY `FK_152a85667cbc952eb520551eb5e` (`cuidBasNeonatalCuidNeonaId`),
  CONSTRAINT `FK_152a85667cbc952eb520551eb5e` FOREIGN KEY (`cuidBasNeonatalCuidNeonaId`) REFERENCES `cuid_bas_neonatal` (`cuid_neona_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuid_bas_neonatal: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuid_bas_neonatal`;

-- Volcando estructura para tabla sehab.criterio_cuid_intens_adulto
CREATE TABLE IF NOT EXISTS `criterio_cuid_intens_adulto` (
  `cri_int_adult_id` int NOT NULL AUTO_INCREMENT,
  `cri_int_adult_modalidad` varchar(105) DEFAULT NULL,
  `cri_int_adult_complejidad` varchar(105) DEFAULT NULL,
  `cri_int_adult_articulo` varchar(10) DEFAULT NULL,
  `cri_int_adult_seccion` varchar(3) DEFAULT NULL,
  `cri_int_adult_apartado` varchar(10) DEFAULT NULL,
  `cri_int_adult_nombre_criterio` varchar(700) DEFAULT NULL,
  `cuidIntAdultoCuidIntAdultId` int DEFAULT NULL,
  PRIMARY KEY (`cri_int_adult_id`),
  KEY `FK_9800d33fc10e7b63cab680b7f50` (`cuidIntAdultoCuidIntAdultId`),
  CONSTRAINT `FK_9800d33fc10e7b63cab680b7f50` FOREIGN KEY (`cuidIntAdultoCuidIntAdultId`) REFERENCES `cuid_int_adulto` (`cuid_int_adult_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuid_intens_adulto: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuid_intens_adulto`;

-- Volcando estructura para tabla sehab.criterio_cuid_interm_adulto
CREATE TABLE IF NOT EXISTS `criterio_cuid_interm_adulto` (
  `cri_inter_adult_id` int NOT NULL AUTO_INCREMENT,
  `cri_inter_adult_modalidad` varchar(105) DEFAULT NULL,
  `cri_inter_adult_complejidad` varchar(105) DEFAULT NULL,
  `cri_inter_adult_articulo` varchar(10) DEFAULT NULL,
  `cri_inter_adult_seccion` varchar(3) DEFAULT NULL,
  `cri_inter_adult_apartado` varchar(10) DEFAULT NULL,
  `cri_inter_adult_nombre_criterio` varchar(700) DEFAULT NULL,
  `cuidInterAdultoCuidInterAdultId` int DEFAULT NULL,
  PRIMARY KEY (`cri_inter_adult_id`),
  KEY `FK_4bbacc6a0b05457af926eced694` (`cuidInterAdultoCuidInterAdultId`),
  CONSTRAINT `FK_4bbacc6a0b05457af926eced694` FOREIGN KEY (`cuidInterAdultoCuidInterAdultId`) REFERENCES `cuid_interm_adulto` (`cuid_inter_adult_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuid_interm_adulto: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuid_interm_adulto`;

-- Volcando estructura para tabla sehab.criterio_cuid_interm_neonatal
CREATE TABLE IF NOT EXISTS `criterio_cuid_interm_neonatal` (
  `cri_inter_neon_id` int NOT NULL AUTO_INCREMENT,
  `cri_inter_neon_modalidad` varchar(105) DEFAULT NULL,
  `cri_inter_neon_complejidad` varchar(105) DEFAULT NULL,
  `cri_inter_neon_articulo` varchar(10) DEFAULT NULL,
  `cri_inter_neon_seccion` varchar(3) DEFAULT NULL,
  `cri_inter_neon_apartado` varchar(10) DEFAULT NULL,
  `cri_inter_neon_nombre_criterio` varchar(700) DEFAULT NULL,
  `cuidInterNeonatalCuidInterAdultId` int DEFAULT NULL,
  PRIMARY KEY (`cri_inter_neon_id`),
  KEY `FK_926b717329c9828dc05cbebfe7b` (`cuidInterNeonatalCuidInterAdultId`),
  CONSTRAINT `FK_926b717329c9828dc05cbebfe7b` FOREIGN KEY (`cuidInterNeonatalCuidInterAdultId`) REFERENCES `cuid_interm_neonatal` (`cuid_inter_adult_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuid_interm_neonatal: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuid_interm_neonatal`;

-- Volcando estructura para tabla sehab.criterio_cuid_interm_pediatrico
CREATE TABLE IF NOT EXISTS `criterio_cuid_interm_pediatrico` (
  `cri_inter_pedia_id` int NOT NULL AUTO_INCREMENT,
  `cri_inter_pedia_modalidad` varchar(105) DEFAULT NULL,
  `cri_inter_pedia_complejidad` varchar(105) DEFAULT NULL,
  `cri_inter_pedia_articulo` varchar(10) DEFAULT NULL,
  `cri_inter_pedia_seccion` varchar(3) DEFAULT NULL,
  `cri_inter_pedia_apartado` varchar(10) DEFAULT NULL,
  `cri_inter_pedia_nombre_criterio` varchar(700) DEFAULT NULL,
  `cuidInterPediatricoCuidInterPediId` int DEFAULT NULL,
  PRIMARY KEY (`cri_inter_pedia_id`),
  KEY `FK_a80cac5ecb22b853315759b8c25` (`cuidInterPediatricoCuidInterPediId`),
  CONSTRAINT `FK_a80cac5ecb22b853315759b8c25` FOREIGN KEY (`cuidInterPediatricoCuidInterPediId`) REFERENCES `cuid_interm_pediatrico` (`cuid_inter_pedi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuid_interm_pediatrico: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuid_interm_pediatrico`;

-- Volcando estructura para tabla sehab.criterio_cuid_inte_neonatal
CREATE TABLE IF NOT EXISTS `criterio_cuid_inte_neonatal` (
  `cri_neona_id` int NOT NULL AUTO_INCREMENT,
  `cri_neona_modalidad` varchar(105) DEFAULT NULL,
  `cri_neona_complejidad` varchar(105) DEFAULT NULL,
  `cri_neona_articulo` varchar(10) DEFAULT NULL,
  `cri_neona_seccion` varchar(3) DEFAULT NULL,
  `cri_neona_apartado` varchar(10) DEFAULT NULL,
  `cri_neona_nombre_criterio` varchar(700) DEFAULT NULL,
  `cuidIntNeonatalCuidIntNeonaId` int DEFAULT NULL,
  PRIMARY KEY (`cri_neona_id`),
  KEY `FK_206199a8109e7246fb6e56b0a8f` (`cuidIntNeonatalCuidIntNeonaId`),
  CONSTRAINT `FK_206199a8109e7246fb6e56b0a8f` FOREIGN KEY (`cuidIntNeonatalCuidIntNeonaId`) REFERENCES `cuid_int_neonatal` (`cuid_int_neona_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuid_inte_neonatal: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuid_inte_neonatal`;

-- Volcando estructura para tabla sehab.criterio_cuid_inte_pediatrico
CREATE TABLE IF NOT EXISTS `criterio_cuid_inte_pediatrico` (
  `cri_int_ped_id` int NOT NULL AUTO_INCREMENT,
  `cri_int_ped_modalidad` varchar(105) DEFAULT NULL,
  `cri_int_ped_complejidad` varchar(105) DEFAULT NULL,
  `cri_int_ped_articulo` varchar(10) DEFAULT NULL,
  `cri_int_ped_seccion` varchar(3) DEFAULT NULL,
  `cri_int_ped_apartado` varchar(10) DEFAULT NULL,
  `cri_int_ped_nombre_criterio` varchar(700) DEFAULT NULL,
  `cuidIntPediatricoCuidIntPediId` int DEFAULT NULL,
  PRIMARY KEY (`cri_int_ped_id`),
  KEY `FK_a0d76f4c084711e8b6b39fa424b` (`cuidIntPediatricoCuidIntPediId`),
  CONSTRAINT `FK_a0d76f4c084711e8b6b39fa424b` FOREIGN KEY (`cuidIntPediatricoCuidIntPediId`) REFERENCES `cuid_int_pediatrico` (`cuid_int_pedi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_cuid_inte_pediatrico: ~0 rows (aproximadamente)
DELETE FROM `criterio_cuid_inte_pediatrico`;

-- Volcando estructura para tabla sehab.criterio_diagnost_vascular
CREATE TABLE IF NOT EXISTS `criterio_diagnost_vascular` (
  `crivac_id` int NOT NULL AUTO_INCREMENT,
  `cridiagv_modalidad` varchar(105) DEFAULT NULL,
  `cridiagv_complejidad` varchar(105) DEFAULT NULL,
  `cridiagv_articulo` varchar(10) DEFAULT NULL,
  `cridiagv_seccion` varchar(3) DEFAULT NULL,
  `cridiagv_apartado` varchar(10) DEFAULT NULL,
  `cridiagv_nombre_criterio` varchar(700) DEFAULT NULL,
  `diagnosticoVascularDiagVasId` int DEFAULT NULL,
  PRIMARY KEY (`crivac_id`),
  KEY `FK_530d5a960e2fe4cb4f78a2b8d68` (`diagnosticoVascularDiagVasId`),
  CONSTRAINT `FK_530d5a960e2fe4cb4f78a2b8d68` FOREIGN KEY (`diagnosticoVascularDiagVasId`) REFERENCES `diagnostico_vascular` (`diag_vas_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_diagnost_vascular: ~0 rows (aproximadamente)
DELETE FROM `criterio_diagnost_vascular`;

-- Volcando estructura para tabla sehab.criterio_dialisis
CREATE TABLE IF NOT EXISTS `criterio_dialisis` (
  `cridial_id` int NOT NULL AUTO_INCREMENT,
  `cridial_modalidad` varchar(105) DEFAULT NULL,
  `cridial_complejidad` varchar(105) DEFAULT NULL,
  `cridial_articulo` varchar(10) DEFAULT NULL,
  `cridial_seccion` varchar(3) DEFAULT NULL,
  `cridial_apartado` varchar(10) DEFAULT NULL,
  `cridial_nombre_criterio` varchar(700) DEFAULT NULL,
  `dialisisDialId` int DEFAULT NULL,
  PRIMARY KEY (`cridial_id`),
  KEY `FK_a3a9e166ef264be9b331c163746` (`dialisisDialId`),
  CONSTRAINT `FK_a3a9e166ef264be9b331c163746` FOREIGN KEY (`dialisisDialId`) REFERENCES `dialisis` (`dial_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_dialisis: ~0 rows (aproximadamente)
DELETE FROM `criterio_dialisis`;

-- Volcando estructura para tabla sehab.criterio_estandarsic
CREATE TABLE IF NOT EXISTS `criterio_estandarsic` (
  `crie_id` int NOT NULL AUTO_INCREMENT,
  `crie_nombre` varchar(220) NOT NULL,
  PRIMARY KEY (`crie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_estandarsic: ~0 rows (aproximadamente)
DELETE FROM `criterio_estandarsic`;
INSERT INTO `criterio_estandarsic` (`crie_id`, `crie_nombre`) VALUES
	(1, '¿Existe en la entidad un funcionario o funcionarios responsables de la coordinación de los procesos del Sistema de Información para la calidad, con funciones claramente definidas?'),
	(2, '¿Se ha hecho socialización de las normas que reglamentan el Sistema de Información para la calidad (Resolución 256 del 05 de febrero de 2016)'),
	(3, '¿La IPS ha definido un equipo de trabajo y un espacio para el análisis de los indicadores del Sistema?'),
	(4, '¿Consolidan la información de los indicadores como lo exige la resolución 256 de 2016?'),
	(5, '¿Realizan encuestas de satisfacción como lo exige la norma?'),
	(6, '¿Cuantas encuestas realizan trimestralmente?'),
	(7, '¿La IPS reporta la resolución 256 de 2016 con la periodicidad establecida en la norma?'),
	(8, 'Acta de apertura del buzón de PQR'),
	(9, 'La IPS Cuenta con buzón de sugerencias (señalización visible y clara, formatos PQRS, lapicero)');

-- Volcando estructura para tabla sehab.criterio_externa_especializada
CREATE TABLE IF NOT EXISTS `criterio_externa_especializada` (
  `criextg_id` int NOT NULL AUTO_INCREMENT,
  `criexte_modalidad` varchar(105) DEFAULT NULL,
  `criexte_complejidad` varchar(105) DEFAULT NULL,
  `criexte_articulo` varchar(10) DEFAULT NULL,
  `criexte_seccion` varchar(3) DEFAULT NULL,
  `criexte_apartado` varchar(10) DEFAULT NULL,
  `criexte_nombre_criterio` varchar(700) DEFAULT NULL,
  `externaEspecializadaExteId` int DEFAULT NULL,
  PRIMARY KEY (`criextg_id`),
  KEY `FK_f5a735a63a88314b770022ed01d` (`externaEspecializadaExteId`),
  CONSTRAINT `FK_f5a735a63a88314b770022ed01d` FOREIGN KEY (`externaEspecializadaExteId`) REFERENCES `externa_especializada` (`exte_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_externa_especializada: ~0 rows (aproximadamente)
DELETE FROM `criterio_externa_especializada`;

-- Volcando estructura para tabla sehab.criterio_externa_general
CREATE TABLE IF NOT EXISTS `criterio_externa_general` (
  `criextg_id` int NOT NULL AUTO_INCREMENT,
  `criextg_modalidad` varchar(105) DEFAULT NULL,
  `criextg_complejidad` varchar(105) DEFAULT NULL,
  `criextg_articulo` varchar(10) DEFAULT NULL,
  `criextg_seccion` varchar(3) DEFAULT NULL,
  `criextg_apartado` varchar(10) DEFAULT NULL,
  `criextg_nombre_criterio` varchar(700) DEFAULT NULL,
  `externaGeneralExtgId` int DEFAULT NULL,
  PRIMARY KEY (`criextg_id`),
  KEY `FK_17bc60481f43183162f7122dbff` (`externaGeneralExtgId`),
  CONSTRAINT `FK_17bc60481f43183162f7122dbff` FOREIGN KEY (`externaGeneralExtgId`) REFERENCES `externa_general` (`extg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_externa_general: ~0 rows (aproximadamente)
DELETE FROM `criterio_externa_general`;

-- Volcando estructura para tabla sehab.criterio_gest_pretransfusional
CREATE TABLE IF NOT EXISTS `criterio_gest_pretransfusional` (
  `crigestpre_id` int NOT NULL AUTO_INCREMENT,
  `crigestpre_modalidad` varchar(105) DEFAULT NULL,
  `crigestpre_complejidad` varchar(105) DEFAULT NULL,
  `crigestpre_articulo` varchar(10) DEFAULT NULL,
  `crigestpre_seccion` varchar(3) DEFAULT NULL,
  `crigestpre_apartado` varchar(10) DEFAULT NULL,
  `crigestpre_nombre_criterio` varchar(700) DEFAULT NULL,
  `gestionPretransfusionalGestpId` int DEFAULT NULL,
  PRIMARY KEY (`crigestpre_id`),
  KEY `FK_b8ef5c34059782f83c10f1c793a` (`gestionPretransfusionalGestpId`),
  CONSTRAINT `FK_b8ef5c34059782f83c10f1c793a` FOREIGN KEY (`gestionPretransfusionalGestpId`) REFERENCES `gestion_pretransfusional` (`gestp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_gest_pretransfusional: ~0 rows (aproximadamente)
DELETE FROM `criterio_gest_pretransfusional`;

-- Volcando estructura para tabla sehab.criterio_hermo_interven
CREATE TABLE IF NOT EXISTS `criterio_hermo_interven` (
  `criherminte_id` int NOT NULL AUTO_INCREMENT,
  `criherminte_modalidad` varchar(105) DEFAULT NULL,
  `criherminte_complejidad` varchar(105) DEFAULT NULL,
  `criherminte_articulo` varchar(10) DEFAULT NULL,
  `criherminte_seccion` varchar(3) DEFAULT NULL,
  `criherminte_apartado` varchar(10) DEFAULT NULL,
  `criherminte_nombre_criterio` varchar(700) DEFAULT NULL,
  `hermodIntervenHermointerId` int DEFAULT NULL,
  PRIMARY KEY (`criherminte_id`),
  KEY `FK_92edcd31015b3c3ced127ba65cb` (`hermodIntervenHermointerId`),
  CONSTRAINT `FK_92edcd31015b3c3ced127ba65cb` FOREIGN KEY (`hermodIntervenHermointerId`) REFERENCES `hermod_interven` (`hermointer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_hermo_interven: ~0 rows (aproximadamente)
DELETE FROM `criterio_hermo_interven`;

-- Volcando estructura para tabla sehab.criterio_hospitalizacion
CREATE TABLE IF NOT EXISTS `criterio_hospitalizacion` (
  `crihosp_id` int NOT NULL AUTO_INCREMENT,
  `crihosp_modalidad` varchar(105) DEFAULT NULL,
  `crihosp_complejidad` varchar(105) DEFAULT NULL,
  `crihosp_articulo` varchar(10) DEFAULT NULL,
  `crihosp_seccion` varchar(3) DEFAULT NULL,
  `crihosp_apartado` varchar(10) DEFAULT NULL,
  `crihosp_nombre_criterio` varchar(700) DEFAULT NULL,
  `hospitalizacionHospId` int DEFAULT NULL,
  PRIMARY KEY (`crihosp_id`),
  KEY `FK_039721dee076ce8feef388dce20` (`hospitalizacionHospId`),
  CONSTRAINT `FK_039721dee076ce8feef388dce20` FOREIGN KEY (`hospitalizacionHospId`) REFERENCES `hospitalizacion` (`hosp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_hospitalizacion: ~0 rows (aproximadamente)
DELETE FROM `criterio_hospitalizacion`;

-- Volcando estructura para tabla sehab.criterio_hospitalizacion_cronico
CREATE TABLE IF NOT EXISTS `criterio_hospitalizacion_cronico` (
  `crihosp_cron_id` int NOT NULL AUTO_INCREMENT,
  `crihosp_cron_modalidad` varchar(105) DEFAULT NULL,
  `crihosp_cron_complejidad` varchar(105) DEFAULT NULL,
  `crihosp_cron_articulo` varchar(10) DEFAULT NULL,
  `crihosp_cron_seccion` varchar(3) DEFAULT NULL,
  `crihosp_cron_apartado` varchar(10) DEFAULT NULL,
  `crihosp_cron_nombre_criterio` varchar(700) DEFAULT NULL,
  `hospitCronicoHospCronId` int DEFAULT NULL,
  PRIMARY KEY (`crihosp_cron_id`),
  KEY `FK_121a7b8af59163e2f8729d4cc77` (`hospitCronicoHospCronId`),
  CONSTRAINT `FK_121a7b8af59163e2f8729d4cc77` FOREIGN KEY (`hospitCronicoHospCronId`) REFERENCES `hospitalizacion_cronico` (`hosp_cron_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_hospitalizacion_cronico: ~0 rows (aproximadamente)
DELETE FROM `criterio_hospitalizacion_cronico`;

-- Volcando estructura para tabla sehab.criterio_hospitalizacion_mental
CREATE TABLE IF NOT EXISTS `criterio_hospitalizacion_mental` (
  `crihosp_ment_id` int NOT NULL AUTO_INCREMENT,
  `crihosp_ment_modalidad` varchar(105) DEFAULT NULL,
  `crihosp_ment_complejidad` varchar(105) DEFAULT NULL,
  `crihosp_ment_articulo` varchar(10) DEFAULT NULL,
  `crihosp_ment_seccion` varchar(3) DEFAULT NULL,
  `crihosp_ment_apartado` varchar(10) DEFAULT NULL,
  `crihosp_ment_nombre_criterio` varchar(700) DEFAULT NULL,
  `hospitalizacionMentalHospMentalId` int DEFAULT NULL,
  PRIMARY KEY (`crihosp_ment_id`),
  KEY `FK_0163cc8974bb45834cee961d248` (`hospitalizacionMentalHospMentalId`),
  CONSTRAINT `FK_0163cc8974bb45834cee961d248` FOREIGN KEY (`hospitalizacionMentalHospMentalId`) REFERENCES `hospitalizacion_mental` (`hosp_mental_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_hospitalizacion_mental: ~0 rows (aproximadamente)
DELETE FROM `criterio_hospitalizacion_mental`;

-- Volcando estructura para tabla sehab.criterio_hospitalizacion_parcial
CREATE TABLE IF NOT EXISTS `criterio_hospitalizacion_parcial` (
  `crihosp_parc_id` int NOT NULL AUTO_INCREMENT,
  `crihosp_parc_modalidad` varchar(105) DEFAULT NULL,
  `crihosp_parc_complejidad` varchar(105) DEFAULT NULL,
  `crihosp_parc_articulo` varchar(10) DEFAULT NULL,
  `crihosp_parc_seccion` varchar(3) DEFAULT NULL,
  `crihosp_parc_apartado` varchar(10) DEFAULT NULL,
  `crihosp_parc_nombre_criterio` varchar(700) DEFAULT NULL,
  `hospitalizacionParcialHospParc_id` int DEFAULT NULL,
  PRIMARY KEY (`crihosp_parc_id`),
  KEY `FK_4640ef3bd63ec7e2369fb8d3587` (`hospitalizacionParcialHospParc_id`),
  CONSTRAINT `FK_4640ef3bd63ec7e2369fb8d3587` FOREIGN KEY (`hospitalizacionParcialHospParc_id`) REFERENCES `hospitalizacion_parcial` (`hosp_parc__id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_hospitalizacion_parcial: ~0 rows (aproximadamente)
DELETE FROM `criterio_hospitalizacion_parcial`;

-- Volcando estructura para tabla sehab.criterio_img_ionizante
CREATE TABLE IF NOT EXISTS `criterio_img_ionizante` (
  `cri_imgioni_id` int NOT NULL AUTO_INCREMENT,
  `cri_imgioni_modalidad` varchar(105) DEFAULT NULL,
  `cri_imgioni_complejidad` varchar(105) DEFAULT NULL,
  `cri_imgioni_articulo` varchar(10) DEFAULT NULL,
  `cri_imgioni_seccion` varchar(3) DEFAULT NULL,
  `cri_imgioni_apartado` varchar(10) DEFAULT NULL,
  `cri_imgioni_nombre_criterio` varchar(700) DEFAULT NULL,
  `imgradIonizanteImgradionId` int DEFAULT NULL,
  PRIMARY KEY (`cri_imgioni_id`),
  KEY `FK_7094b43ab11cd06156960207990` (`imgradIonizanteImgradionId`),
  CONSTRAINT `FK_7094b43ab11cd06156960207990` FOREIGN KEY (`imgradIonizanteImgradionId`) REFERENCES `img_rad_ionizantes` (`imgradion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_img_ionizante: ~0 rows (aproximadamente)
DELETE FROM `criterio_img_ionizante`;

-- Volcando estructura para tabla sehab.criterio_img_noionizante
CREATE TABLE IF NOT EXISTS `criterio_img_noionizante` (
  `cri_img_noioni_id` int NOT NULL AUTO_INCREMENT,
  `cri_img_noioni_modalidad` varchar(105) DEFAULT NULL,
  `cri_img_noioni_complejidad` varchar(105) DEFAULT NULL,
  `cri_img_noioni_articulo` varchar(10) DEFAULT NULL,
  `cri_img_noioni_seccion` varchar(3) DEFAULT NULL,
  `cri_img_noioni_apartado` varchar(10) DEFAULT NULL,
  `cri_img_noioni_nombre_criterio` varchar(700) DEFAULT NULL,
  `imgradNoionizanteImgradNoionId` int DEFAULT NULL,
  PRIMARY KEY (`cri_img_noioni_id`),
  KEY `FK_e30cf16570e58d3e836b7291fdb` (`imgradNoionizanteImgradNoionId`),
  CONSTRAINT `FK_e30cf16570e58d3e836b7291fdb` FOREIGN KEY (`imgradNoionizanteImgradNoionId`) REFERENCES `img_rad_noionizantes` (`imgrad_noion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_img_noionizante: ~0 rows (aproximadamente)
DELETE FROM `criterio_img_noionizante`;

-- Volcando estructura para tabla sehab.criterio_implementacion
CREATE TABLE IF NOT EXISTS `criterio_implementacion` (
  `cri_imp_id` int NOT NULL AUTO_INCREMENT,
  `cri_imp_nombre` varchar(500) NOT NULL,
  `cri_imp_verificacion` varchar(200) NOT NULL,
  `criImpEvaEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`cri_imp_id`),
  KEY `FK_a226df9f79a2839ea92a58c627c` (`criImpEvaEvipsId`),
  CONSTRAINT `FK_a226df9f79a2839ea92a58c627c` FOREIGN KEY (`criImpEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_implementacion: ~0 rows (aproximadamente)
DELETE FROM `criterio_implementacion`;
INSERT INTO `criterio_implementacion` (`cri_imp_id`, `cri_imp_nombre`, `cri_imp_verificacion`, `criImpEvaEvipsId`) VALUES
	(1, 'La organización ha desplegado entre los colaboradores la intención de trabajar por la seguridad del paciente desde la estrategia corporativa, así como la política de seguridad del paciente y el programa de seguridad del paciente', 'Solicite actas de despliegue, fotos y otros mecanismos evidenciables de despliegue.', 1),
	(2, 'La organización ha desplegado las metas estratégicas en torno a la seguridad del paciente', 'Revise la inclusión de metas relacionadas con la seguridad del paciente.', 1),
	(3, 'La organización ha incluido en el plan de capacitación aspectos relevantes de la seguridad del paciente', 'Solicite el plan de capacitación que incluya temas de seguridad del paciente.', 1),
	(4, 'Se han diseñado estrategias para evaluar la cultura de la seguridad', 'Solicitar los instrumentos para evaluar la cultura deseada en seguridad del paciente.', 1),
	(5, 'Evidencia de análisis de causas de fallas en la atención por el comité de seguridad o instancia definida por la institución.', 'Solicite reportes y verifique varios eventos adversos reportados durante los últimos dos meses.', 1),
	(6, 'Se cuentan con los instrumentos para la medición de los diferentes indicadores que evalúan la política y programa de seguridad.', 'Solicite instrumentos de evaluación.', 2),
	(7, 'Se cuenta con un cronograma de medición de los indicadores, dentro de los cuales se encuentran los relacionados con la seguridad del paciente. ', 'Solicite Cronograma de medición de indicadores y tablero de mando.', 2),
	(8, 'La organización ha desplegado los lineamientos relacionados con la prevención de infecciones asociadas a la atención', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue.', 3),
	(9, 'La organización ha incluido el tema de prevención de infecciones dentro del plan de capacitación del personal en el tema de seguridad del paciente y en los principales riesgos de la atención.', 'Solicite el plan de capacitación del año en curso.', 3),
	(10, 'Auditorías semestrales de adherencia a la higiene de manos para todos los servicios asistenciales y documentación de acciones de mejora si aplica.', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue.', 3),
	(11, 'La organización ha desplegado los lineamientos relacionados con el uso seguro de medicamentos', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue.', 4),
	(12, 'La organización ha incluido el tema del uso seguro de medicamentos dentro del plan de capacitación', 'Solicite el plan de capacitación.', 4),
	(13, 'La organización ha desplegado los lineamientos relacionados para asegurar la correcta identificación de los pacientes.', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue.', 5),
	(14, 'La organización ha incluido el tema de correcta identificación de los pacientes dentro del plan de capacitación.', 'Solicite el plan de capacitación.', 5),
	(15, 'Se encuentra estandarizado los mecanismos de identificación del paciente entre los distintos establecimientos dentro de un sistema de atención sanitaria. Por ejemplo, el uso de bandas de identificación blancas sobre las que se pueda escribir un patrón o marcador estándar e información específica (por ejemplo, nombre y fecha de nacimiento) o la implementación de tecnologías biométricas', 'Verifique procedimientos o protocolos para la correcta identificación de pacientes.', 5),
	(18, 'La organización ha desplegado los lineamientos para garantizar la seguridad de la gestante y el recién nacido', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue', 6),
	(19, 'La organización ha incluido el tema la seguridad de la gestante y el recién nacido dentro del plan de capacitación', 'Solicite el plan de capacitación del año en curso', 6),
	(20, 'La organización ha desplegado los lineamientos relacionados a la seguridad de los procedimientos quirúrgicos.', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue.', 7),
	(21, 'La institución ha adoptado y se encuentran disponibles las listas de chequeo de cirugía segura.', 'Solicite lista de chequeo de cirugía segura aplicada. ', 7),
	(22, 'La organización ha desplegado los lineamientos relacionados con la prevención de ulceras de presión', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue.', 8),
	(23, 'La organización ha incluido el tema de prevención de ulceras de presión dentro del plan de capacitación', 'Solicite el plan de capacitación.', 8),
	(24, '-Se han definido y diseñado formatos para identificar los pacientes con riesgo de Úlceras por Presión.\r\n-Se han implementado mecanismos estandarizados para identificar los pacientes con riesgo (por eje con barras de color o manillas).', 'Solicite el instrumento de valoración del riesgo de ulceras por presión.', 8),
	(25, 'La organización ha desplegado los lineamientos relacionados con la prevención y reducción de la frecuencia de caídas', 'Solicite actas de despliegue, listas de asistencia, fotos y otros mecanismos evidenciables de despliegue.', 9),
	(26, 'La institución ha adoptado y se encuentran disponibles herramientas de valoración del riesgo de caídas.', 'Solicite el instrumento de valoración del riesgo de caídas.', 9),
	(27, 'La institución ha implementado un mecanismo de identificación de los pacientes con riesgo.', 'Solicite el protocolo y/o inclusión dentro del programa de seguridad del paciente.', 9);

-- Volcando estructura para tabla sehab.criterio_lab_clinico
CREATE TABLE IF NOT EXISTS `criterio_lab_clinico` (
  `cri_lab_cli_id` int NOT NULL AUTO_INCREMENT,
  `cri_lab_cli_modalidad` varchar(105) DEFAULT NULL,
  `cri_lab_cli_complejidad` varchar(105) DEFAULT NULL,
  `cri_lab_cli_articulo` varchar(10) DEFAULT NULL,
  `cri_lab_cli_seccion` varchar(3) DEFAULT NULL,
  `cri_lab_cli_apartado` varchar(10) DEFAULT NULL,
  `cri_lab_cli_nombre_criterio` varchar(700) DEFAULT NULL,
  `labClinicoLabclinId` int DEFAULT NULL,
  PRIMARY KEY (`cri_lab_cli_id`),
  KEY `FK_588f28f7d6b6b59416353f02977` (`labClinicoLabclinId`),
  CONSTRAINT `FK_588f28f7d6b6b59416353f02977` FOREIGN KEY (`labClinicoLabclinId`) REFERENCES `lab_clinico` (`labclin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_lab_clinico: ~0 rows (aproximadamente)
DELETE FROM `criterio_lab_clinico`;

-- Volcando estructura para tabla sehab.criterio_lab_histotecnologia
CREATE TABLE IF NOT EXISTS `criterio_lab_histotecnologia` (
  `cri_lab_histo_id` int NOT NULL AUTO_INCREMENT,
  `cri_lab_histo_modalidad` varchar(105) DEFAULT NULL,
  `cri_lab_histo_complejidad` varchar(105) DEFAULT NULL,
  `cri_lab_histo_articulo` varchar(10) DEFAULT NULL,
  `cri_lab_histo_seccion` varchar(3) DEFAULT NULL,
  `cri_lab_histo_apartado` varchar(10) DEFAULT NULL,
  `cri_lab_histo_nombre_criterio` varchar(700) DEFAULT NULL,
  `labHistotecnologiaLabhistoId` int DEFAULT NULL,
  PRIMARY KEY (`cri_lab_histo_id`),
  KEY `FK_2da95f774d0b1457957eb38cc5a` (`labHistotecnologiaLabhistoId`),
  CONSTRAINT `FK_2da95f774d0b1457957eb38cc5a` FOREIGN KEY (`labHistotecnologiaLabhistoId`) REFERENCES `lab_histotecnologia` (`labhisto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_lab_histotecnologia: ~0 rows (aproximadamente)
DELETE FROM `criterio_lab_histotecnologia`;

-- Volcando estructura para tabla sehab.criterio_lab_uterina
CREATE TABLE IF NOT EXISTS `criterio_lab_uterina` (
  `cri_lab_ute_id` int NOT NULL AUTO_INCREMENT,
  `cri_lab_ute_modalidad` varchar(105) DEFAULT NULL,
  `cri_lab_ute_complejidad` varchar(105) DEFAULT NULL,
  `cri_lab_ute_articulo` varchar(10) DEFAULT NULL,
  `cri_lab_ute_seccion` varchar(3) DEFAULT NULL,
  `cri_lab_ute_apartado` varchar(10) DEFAULT NULL,
  `cri_lab_ute_nombre_criterio` varchar(700) DEFAULT NULL,
  `labCitUterinaLabcitUterId` int DEFAULT NULL,
  PRIMARY KEY (`cri_lab_ute_id`),
  KEY `FK_021a03c3b47bde4cec7c25af8d7` (`labCitUterinaLabcitUterId`),
  CONSTRAINT `FK_021a03c3b47bde4cec7c25af8d7` FOREIGN KEY (`labCitUterinaLabcitUterId`) REFERENCES `lab_citologia_uterina` (`labcit_uter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_lab_uterina: ~0 rows (aproximadamente)
DELETE FROM `criterio_lab_uterina`;

-- Volcando estructura para tabla sehab.criterio_med_nuclear
CREATE TABLE IF NOT EXISTS `criterio_med_nuclear` (
  `crimed_nucl_id` int NOT NULL AUTO_INCREMENT,
  `crimed_nucl_modalidad` varchar(105) DEFAULT NULL,
  `crimed_nucl_complejidad` varchar(105) DEFAULT NULL,
  `crimed_nucl_articulo` varchar(10) DEFAULT NULL,
  `crimed_nucl_seccion` varchar(3) DEFAULT NULL,
  `crimed_nucl_apartado` varchar(10) DEFAULT NULL,
  `crimed_nucl_nombre_criterio` varchar(700) DEFAULT NULL,
  `medNuclearMedNuclId` int DEFAULT NULL,
  PRIMARY KEY (`crimed_nucl_id`),
  KEY `FK_1af779096a16f8ee243696cbd38` (`medNuclearMedNuclId`),
  CONSTRAINT `FK_1af779096a16f8ee243696cbd38` FOREIGN KEY (`medNuclearMedNuclId`) REFERENCES `med_nuclear` (`med_nucl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_med_nuclear: ~0 rows (aproximadamente)
DELETE FROM `criterio_med_nuclear`;

-- Volcando estructura para tabla sehab.criterio_muestra_lab_clinico
CREATE TABLE IF NOT EXISTS `criterio_muestra_lab_clinico` (
  `cri_muest_cli_id` int NOT NULL AUTO_INCREMENT,
  `cri_muest_cli_modalidad` varchar(105) DEFAULT NULL,
  `cri_muest_cli_complejidad` varchar(105) DEFAULT NULL,
  `cri_muest_cli_articulo` varchar(10) DEFAULT NULL,
  `cri_muest_cli_seccion` varchar(3) DEFAULT NULL,
  `cri_muest_cli_apartado` varchar(10) DEFAULT NULL,
  `cri_muest_cli_nombre_criterio` varchar(700) DEFAULT NULL,
  `tomMueLabClinicoMueLabCliId` int DEFAULT NULL,
  PRIMARY KEY (`cri_muest_cli_id`),
  KEY `FK_125cbe12ce04986551ee9b51ec4` (`tomMueLabClinicoMueLabCliId`),
  CONSTRAINT `FK_125cbe12ce04986551ee9b51ec4` FOREIGN KEY (`tomMueLabClinicoMueLabCliId`) REFERENCES `muestras_lab_clinico` (`mue_lab_cli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_muestra_lab_clinico: ~0 rows (aproximadamente)
DELETE FROM `criterio_muestra_lab_clinico`;

-- Volcando estructura para tabla sehab.criterio_parto
CREATE TABLE IF NOT EXISTS `criterio_parto` (
  `criparto_id` int NOT NULL AUTO_INCREMENT,
  `criparto_modalidad` varchar(105) DEFAULT NULL,
  `criparto_complejidad` varchar(105) DEFAULT NULL,
  `criparto_articulo` varchar(10) DEFAULT NULL,
  `criparto_seccion` varchar(3) DEFAULT NULL,
  `criparto_apartado` varchar(10) DEFAULT NULL,
  `criparto_nombre_criterio` varchar(700) DEFAULT NULL,
  `partoPartoId` int DEFAULT NULL,
  PRIMARY KEY (`criparto_id`),
  KEY `FK_c4483c4f6635db9a216b89adffb` (`partoPartoId`),
  CONSTRAINT `FK_c4483c4f6635db9a216b89adffb` FOREIGN KEY (`partoPartoId`) REFERENCES `parto` (`parto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_parto: ~0 rows (aproximadamente)
DELETE FROM `criterio_parto`;

-- Volcando estructura para tabla sehab.criterio_patologia
CREATE TABLE IF NOT EXISTS `criterio_patologia` (
  `cripat_id` int NOT NULL AUTO_INCREMENT,
  `cripat_modalidad` varchar(105) DEFAULT NULL,
  `cripat_complejidad` varchar(105) DEFAULT NULL,
  `cripat_articulo` varchar(10) DEFAULT NULL,
  `cripat_seccion` varchar(3) DEFAULT NULL,
  `cripat_apartado` varchar(10) DEFAULT NULL,
  `cripat_nombre_criterio` varchar(700) DEFAULT NULL,
  `patologiaPatoId` int DEFAULT NULL,
  PRIMARY KEY (`cripat_id`),
  KEY `FK_d2309c7711a5760e0d46fed8799` (`patologiaPatoId`),
  CONSTRAINT `FK_d2309c7711a5760e0d46fed8799` FOREIGN KEY (`patologiaPatoId`) REFERENCES `patologia` (`pato_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_patologia: ~0 rows (aproximadamente)
DELETE FROM `criterio_patologia`;

-- Volcando estructura para tabla sehab.criterio_planeacion
CREATE TABLE IF NOT EXISTS `criterio_planeacion` (
  `cri_pla_id` int NOT NULL AUTO_INCREMENT,
  `cri_pla_nombre` varchar(620) NOT NULL,
  `cri_pla_verificacion` varchar(300) NOT NULL,
  `criPlaEvaEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`cri_pla_id`),
  KEY `FK_8d6604e124f7b9d2256c0796a26` (`criPlaEvaEvipsId`),
  CONSTRAINT `FK_8d6604e124f7b9d2256c0796a26` FOREIGN KEY (`criPlaEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_planeacion: ~0 rows (aproximadamente)
DELETE FROM `criterio_planeacion`;
INSERT INTO `criterio_planeacion` (`cri_pla_id`, `cri_pla_nombre`, `cri_pla_verificacion`, `criPlaEvaEvipsId`) VALUES
	(1, 'La organización ha definido una política de seguridad de la paciente alineada con el direccionamiento estratégico.', 'Solicite Política de seguridad y acto de adopción por la alta gerencia. ', 1),
	(2, 'El programa de seguridad del paciente tiene definido: los objetivos, Referente de Seguridad, comité de seguridad del paciente, el Sistema de Reporte de eventos adversos, Homologación de Conceptos, Prioridad de la Sensibilización y Capacitación, Articulación en la entidad con las demás políticas institucionales, Corresponsabilidad con el usuario y el Compromiso con recursos.', 'Solicite programa de seguridad del paciente donde se pueda evidenciar lo anteriormente mencionado y acta de conformación de comité de seguridad del paciente.', 1),
	(3, 'La entidad ha definido estrategias para involucrar a los líderes de la organización en la estrategia de seguridad (Rondas de seguridad, sesiones breves, u otros mecanismos)', 'Solicite los documentos que demuestren la implementación de estrategias de como la alta dirección se involucra en temas relacionados con la seguridad del paciente.', 1),
	(4, 'La organización ha establecido metas estratégicas en torno a la seguridad del paciente', 'Solicite los indicadores del plan de desarrollo u otros relacionados con la seguridad del paciente.', 1),
	(5, 'La organización cuenta con un documento donde se describen entre otros, los riesgos identificados de los procesos, el sistema de clasificación, las características del sistema de reporte, como se realiza la gestión, manejo de la lección aprendida, establecimiento de barreras de seguridad, cuales procesos inseguros deberán ser rediseñados, el apoyo institucional a las acciones de mejoramiento y los mecanismos de búsqueda activa de los eventos adversos.', 'Solicite documento que demuestre. ', 1),
	(6, 'La organización ha definido cuales son los eventos adversos que se les pueden presentar.', 'Solicite listados de eventos adversos a reportar y planes para minimizar su recurrencia.', 1),
	(7, 'La institución ha planeado la evaluación de la política y programa de seguridad', 'Solicite Fichas técnicas de los indicadores de la entidad.', 2),
	(8, 'Se tienen documentados los lineamientos frente a la higiene de manos y el uso seguro de guantes.', 'Protocolo para la higiene de manos desarrollado o adoptado por la institución y Actualizado con la periodicidad que defina la institución, pero dicha actualización no debe ser superior a los cinco años. El protocolo incorpora los cinco momentos del lavado de manos recomendado por la OMS.', 3),
	(9, 'Se tienen documentados los protocolos de:\r\n•Asepsia, desinfección y esterilización\r\n• protocolos de re-uso y re envase\r\n• Manual de buenas prácticas de esterilización\r\n• Profilaxis antibiótica\r\n• Manejo de heridas.\r\n• Protocolo de inserción de sondas urinarias.\r\n• protocolo para colocación de catéteres. \r\n• Protocolo institucional de asepsia y antisepsia de herida quirúrgica.', 'Solicite protocolos de asepsia, desinfección y esterilización, re uso y re envase, Manual de esterilización y demás protocolos definidos en este numeral.', 3),
	(10, 'Se han definido las normas de bioseguridad para cada servicio', 'Solicite el manual de normas de bioseguridad.', 3),
	(11, 'Se cuentan con lineamientos frente a la vacunación del personal que incluyen: Hepatitis B, Influencia, sarampión, rubeola, tétanos, varicela etc.', 'Verificar programa de salud ocupacional requisitos de ingreso y el programa de detección, prevención y control de infecciones asociadas al cuidado.', 3),
	(12, 'Se tiene documentado el protocolo de fármaco vigilancia.', 'Solicite el documento de fármaco vigilancia.', 4),
	(13, 'Se han documentado protocolos para la Dispensación informada de los medicamentos', 'Solicite los procedimientos de dispensación informada de medicamentos.', 4),
	(14, 'Se han definido los procesos para la compra, selección de proveedores, recepción de medicamentos, almacenamiento (que incluya cadena de frio, custodia a medicamentos de control especial)', 'Solicite los procedimientos de compra, selección de proveedores, recepción y almacenamiento de medicamentos.', 4),
	(15, 'La organización ha definido procedimientos, protocolos o lineamientos para la correcta identificación de los pacientes.', 'Verifique procedimientos o protocolos para la correcta identificación de pacientes.', 5),
	(16, 'Se cuentan con protocolos de identificación del paciente neonato.', 'Verifique procedimientos o protocolos para la correcta identificación de pacientes.', 5),
	(17, 'Se cuenta con protocolos o lineamientos definidos para identificar pacientes que carezcan de identificación (documento de identidad).', 'Verifique procedimientos o protocolos para la correcta identificación de pacientes.', 5),
	(18, 'Se cuenta con protocolos o lineamientos definidos para distinguir la identidad de los pacientes con el mismo nombre.', 'Verifique procedimientos para la correcta identificación de pacientes, ejemplo (segundo apellido, nombre de la madre, fecha de nacimiento)', 5),
	(19, 'Se cuenta con protocolos o lineamientos definidos para la identificación con enfoque no orales para pacientes comatosos o confundidos.', 'Verifique procedimientos o protocolos para la correcta identificación de pacientes.', 5),
	(20, 'Existen lineamientos para la participación del paciente en su correcta identificación.', 'Verifique procedimientos o protocolos para la correcta identificación de pacientes.', 5),
	(21, 'Se cuenta con mecanismos definidos para el etiquetado de los recipientes utilizados para la sangre y demás muestras en presencia del paciente.', 'Verifique procedimientos de toma de muestras o protocolos para la correcta identificación de pacientes.', 5),
	(34, 'Evidencia de la existencia de una Guía o protocolo para la atención prioritaria a la gestante sin exponerla a demoras injustificadas y a trámites administrativos innecesarios.', 'Verificar los lineamientos o políticas', 6),
	(35, 'Se cuentan con lineamientos documentados para el seguimiento a inasistentes a las citas de control, como a los programas educativos que brinda la institución.', 'Lineamientos para los inasistentes a los programas de PYP', 6),
	(36, 'Se han estructurado programas para la prevención temprana de complicaciones de la gestación parto y puerperio que incluyen: \r\n• Medidas  implementadas  para  la identificación e intervención de  los riesgos  para  la gestación, parto y puerperio\r\n• Atención integral a la gestante, con manejo interdisciplinario y con un enfoque familiar\r\n• referencia de las pacientes', 'Los programas de promoción y prevención', 6),
	(37, 'La institución ha realizado, adaptado o adoptado guías de práctica clínica basadas en la evidencia para una atención integral de la embarazada, el recién nacido y los mecanismos para garantizar su adherencia. Dentro de las guías existentes se encuentran:\r\n\r\n• Vigilancia del trabajo de parto y su atención. \r\nAtención del recién nacido\r\n• Reanimación del recién nacido\r\n• Diagnóstico y manejo de la sífilis gestacional y congénita. pym\r\n• Manejo de trastornos hipertensivos asociados a la gestación.pym\r\n •Manejo de la hemorragia obstétrica (Código Rojo).\r\n• Suministro de hemoderivados en la paciente obstétrica.', 'Guías de práctica clínica basadas en la evidencia', 6),
	(38, 'Se han definido guías o protocolos para la prevención de la enfermedad tromboembólica venosa durante la gestación y el posparto.', 'Guía o protocolo basado en evidencia', 6),
	(39, 'Se han definido lineamientos para garantizar oportunidad y seguridad en los procesos de referencia y contra referencia del binomio madre e hijo.', 'Verificar la inclusión de estos lineamientos en el manual de referencia y contra referencia u otro.', 6),
	(40, 'Se tienen definidos protocolos para asegurar la cirugía correcta, al paciente correcto y en el sitio (órgano o lado) correcto', 'Solicite el protocolo.', 7),
	(41, 'Se tienen definidos procedimientos para la prevención del fuego en cirugía. (Revisión y verificación de los equipos e instalaciones eléctricas antes de la cirugía y durante la realización de ésta).', 'Verifique la existencia del procedimiento.', 7),
	(42, 'Se cuentan con protocolos de inducción y manejo anestésico de acuerdo con el tipo de procedimiento, edad y comorbilidades del paciente.', 'Solicitar protocolos de inducción y manejo anestésico.', 7),
	(43, 'Se han definido lineamientos y/o protocolo y/o procedimiento de limpieza y desinfección en las áreas de cirugía.', 'Solicitar procedimiento de limpieza y desinfección en las áreas de cirugía.', 7),
	(44, 'Se cuenta con Protocolo para la minimización de riesgos de aparición de úlceras por presión o escaras desarrollado o adoptado por la institución y actualizado con la periodicidad que defina la institución, pero dicha actualización no debe ser superior a los cinco años. Dicho protocolo debe incluir esquemas de movilización de pacientes en riesgo, cuidados de la piel con soluciones adecuadas, valoración permanente del estado de la piel y condiciones de higiene.', 'Verifique la existencia de guías para procesos seguros en el servicio hospitalario.', 8),
	(45, 'Se tiene definido un protocolo para la prevención de caídas de paciente', 'Solicite el protocolo y/o inclusión dentro del programa de seguridad del paciente.', 9),
	(46, 'Se cuentan con lineamientos para la educación y acompañamiento para los pacientes identificados como de alto riesgo.', 'Solicite protocolo de educación y acompañamiento para los pacientes identificados como de alto riesgo o programa de seguridad donde incluya el tema.', 9);

-- Volcando estructura para tabla sehab.criterio_prehospitalaria
CREATE TABLE IF NOT EXISTS `criterio_prehospitalaria` (
  `cripreh_id` int NOT NULL AUTO_INCREMENT,
  `cripreh_modalidad` varchar(105) DEFAULT NULL,
  `cripreh_complejidad` varchar(105) DEFAULT NULL,
  `cripreh_articulo` varchar(10) DEFAULT NULL,
  `cripreh_seccion` varchar(3) DEFAULT NULL,
  `cripreh_apartado` varchar(10) DEFAULT NULL,
  `cripreh_nombre_criterio` varchar(700) DEFAULT NULL,
  `prehospitalariaPartoId` int DEFAULT NULL,
  PRIMARY KEY (`cripreh_id`),
  KEY `FK_9503066091df269d8ca5294a265` (`prehospitalariaPartoId`),
  CONSTRAINT `FK_9503066091df269d8ca5294a265` FOREIGN KEY (`prehospitalariaPartoId`) REFERENCES `prehospitalaria` (`parto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_prehospitalaria: ~0 rows (aproximadamente)
DELETE FROM `criterio_prehospitalaria`;

-- Volcando estructura para tabla sehab.criterio_quimioterapia
CREATE TABLE IF NOT EXISTS `criterio_quimioterapia` (
  `criquim_id` int NOT NULL AUTO_INCREMENT,
  `criquim_modalidad` varchar(105) DEFAULT NULL,
  `criquim_complejidad` varchar(105) DEFAULT NULL,
  `criquim_articulo` varchar(10) DEFAULT NULL,
  `criquim_seccion` varchar(3) DEFAULT NULL,
  `criquim_apartado` varchar(10) DEFAULT NULL,
  `criquim_nombre_criterio` varchar(700) DEFAULT NULL,
  `quimioterapiaQuimId` int DEFAULT NULL,
  PRIMARY KEY (`criquim_id`),
  KEY `FK_f775bb8739a0b56af097f850d52` (`quimioterapiaQuimId`),
  CONSTRAINT `FK_f775bb8739a0b56af097f850d52` FOREIGN KEY (`quimioterapiaQuimId`) REFERENCES `quimioterapia` (`quim_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_quimioterapia: ~0 rows (aproximadamente)
DELETE FROM `criterio_quimioterapia`;

-- Volcando estructura para tabla sehab.criterio_radioterapia
CREATE TABLE IF NOT EXISTS `criterio_radioterapia` (
  `crirad_ter_id` int NOT NULL AUTO_INCREMENT,
  `crirad_ter_modalidad` varchar(105) DEFAULT NULL,
  `crirad_ter_complejidad` varchar(105) DEFAULT NULL,
  `crirad_ter_articulo` varchar(10) DEFAULT NULL,
  `crirad_ter_seccion` varchar(3) DEFAULT NULL,
  `crirad_ter_apartado` varchar(10) DEFAULT NULL,
  `crirad_ter_nombre_criterio` varchar(700) DEFAULT NULL,
  `radioterapiaRadiId` int DEFAULT NULL,
  PRIMARY KEY (`crirad_ter_id`),
  KEY `FK_f1d019acb83d5a73b365aef1da0` (`radioterapiaRadiId`),
  CONSTRAINT `FK_f1d019acb83d5a73b365aef1da0` FOREIGN KEY (`radioterapiaRadiId`) REFERENCES `radioterapia` (`radi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_radioterapia: ~0 rows (aproximadamente)
DELETE FROM `criterio_radioterapia`;

-- Volcando estructura para tabla sehab.criterio_rad_odontologica
CREATE TABLE IF NOT EXISTS `criterio_rad_odontologica` (
  `crirad_odon_id` int NOT NULL AUTO_INCREMENT,
  `crirad_odon_modalidad` varchar(105) DEFAULT NULL,
  `crirad_odon_complejidad` varchar(105) DEFAULT NULL,
  `crirad_odon_articulo` varchar(10) DEFAULT NULL,
  `crirad_odon_seccion` varchar(3) DEFAULT NULL,
  `crirad_odon_apartado` varchar(10) DEFAULT NULL,
  `crirad_odon_nombre_criterio` varchar(700) DEFAULT NULL,
  `radOdontologicaRadOdontId` int DEFAULT NULL,
  PRIMARY KEY (`crirad_odon_id`),
  KEY `FK_dc09576d52c282b651975587a23` (`radOdontologicaRadOdontId`),
  CONSTRAINT `FK_dc09576d52c282b651975587a23` FOREIGN KEY (`radOdontologicaRadOdontId`) REFERENCES `radiologia_odonto` (`rad_odont_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_rad_odontologica: ~0 rows (aproximadamente)
DELETE FROM `criterio_rad_odontologica`;

-- Volcando estructura para tabla sehab.criterio_salud_trabajo
CREATE TABLE IF NOT EXISTS `criterio_salud_trabajo` (
  `crisaltra_id` int NOT NULL AUTO_INCREMENT,
  `crisaltra_modalidad` varchar(105) DEFAULT NULL,
  `crisaltra_complejidad` varchar(105) DEFAULT NULL,
  `crisaltra_articulo` varchar(10) DEFAULT NULL,
  `crisaltra_seccion` varchar(3) DEFAULT NULL,
  `crisaltra_apartado` varchar(10) DEFAULT NULL,
  `crisaltra_nombre_criterio` varchar(700) DEFAULT NULL,
  `saludTrabajoSaltraId` int DEFAULT NULL,
  PRIMARY KEY (`crisaltra_id`),
  KEY `FK_a61022ed4c3b41dd60b634f81d0` (`saludTrabajoSaltraId`),
  CONSTRAINT `FK_a61022ed4c3b41dd60b634f81d0` FOREIGN KEY (`saludTrabajoSaltraId`) REFERENCES `salud_trabajo` (`saltra_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_salud_trabajo: ~0 rows (aproximadamente)
DELETE FROM `criterio_salud_trabajo`;

-- Volcando estructura para tabla sehab.criterio_servicios
CREATE TABLE IF NOT EXISTS `criterio_servicios` (
  `cris_id` int NOT NULL AUTO_INCREMENT,
  `cris_modalidad` varchar(105) DEFAULT NULL,
  `cris_articulo` varchar(10) DEFAULT NULL,
  `cris_seccion` varchar(3) DEFAULT NULL,
  `cris_apartado` varchar(10) DEFAULT NULL,
  `cris_nombre_criterio` varchar(700) DEFAULT NULL,
  `todosServiciosTodId` int DEFAULT NULL,
  PRIMARY KEY (`cris_id`),
  KEY `FK_692e4aa5620426ba9a9cafa86d3` (`todosServiciosTodId`),
  CONSTRAINT `FK_692e4aa5620426ba9a9cafa86d3` FOREIGN KEY (`todosServiciosTodId`) REFERENCES `todos_servicios` (`tod_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_servicios: ~0 rows (aproximadamente)
DELETE FROM `criterio_servicios`;

-- Volcando estructura para tabla sehab.criterio_ser_farmaceutico
CREATE TABLE IF NOT EXISTS `criterio_ser_farmaceutico` (
  `criser_farm_id` int NOT NULL AUTO_INCREMENT,
  `criser_farm_modalidad` varchar(105) DEFAULT NULL,
  `criser_farm_complejidad` varchar(105) DEFAULT NULL,
  `criser_farm_articulo` varchar(10) DEFAULT NULL,
  `criser_farm_seccion` varchar(3) DEFAULT NULL,
  `criser_farm_apartado` varchar(10) DEFAULT NULL,
  `criser_farm_nombre_criterio` varchar(700) DEFAULT NULL,
  `serFarmaceuticoSerFarmaId` int DEFAULT NULL,
  PRIMARY KEY (`criser_farm_id`),
  KEY `FK_e9a2ba0abd600ba8e48c99ea21a` (`serFarmaceuticoSerFarmaId`),
  CONSTRAINT `FK_e9a2ba0abd600ba8e48c99ea21a` FOREIGN KEY (`serFarmaceuticoSerFarmaId`) REFERENCES `servicio_farmaceutico` (`ser_farma_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_ser_farmaceutico: ~0 rows (aproximadamente)
DELETE FROM `criterio_ser_farmaceutico`;

-- Volcando estructura para tabla sehab.criterio_terapia
CREATE TABLE IF NOT EXISTS `criterio_terapia` (
  `criter_id` int NOT NULL AUTO_INCREMENT,
  `criter_modalidad` varchar(105) DEFAULT NULL,
  `criter_complejidad` varchar(105) DEFAULT NULL,
  `criter_articulo` varchar(10) DEFAULT NULL,
  `criter_seccion` varchar(3) DEFAULT NULL,
  `criter_apartado` varchar(10) DEFAULT NULL,
  `criter_nombre_criterio` varchar(700) DEFAULT NULL,
  `terapiaTerId` int DEFAULT NULL,
  PRIMARY KEY (`criter_id`),
  KEY `FK_e201a6f48435e41fed281405e55` (`terapiaTerId`),
  CONSTRAINT `FK_e201a6f48435e41fed281405e55` FOREIGN KEY (`terapiaTerId`) REFERENCES `terapias` (`ter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_terapia: ~0 rows (aproximadamente)
DELETE FROM `criterio_terapia`;

-- Volcando estructura para tabla sehab.criterio_trans_asistencial
CREATE TABLE IF NOT EXISTS `criterio_trans_asistencial` (
  `cri_trans_asis_id` int NOT NULL AUTO_INCREMENT,
  `cri_trans_asis_modalidad` varchar(105) DEFAULT NULL,
  `cri_trans_asis_complejidad` varchar(105) DEFAULT NULL,
  `cri_trans_asis_articulo` varchar(10) DEFAULT NULL,
  `cri_trans_asis_seccion` varchar(3) DEFAULT NULL,
  `cri_trans_asis_apartado` varchar(10) DEFAULT NULL,
  `cri_trans_asis_nombre_criterio` varchar(700) DEFAULT NULL,
  `transpAsistencialTransAsisId` int DEFAULT NULL,
  PRIMARY KEY (`cri_trans_asis_id`),
  KEY `FK_b18aa903d11dc6cf858e2599f88` (`transpAsistencialTransAsisId`),
  CONSTRAINT `FK_b18aa903d11dc6cf858e2599f88` FOREIGN KEY (`transpAsistencialTransAsisId`) REFERENCES `transporte_asistencial` (`trans_asis_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_trans_asistencial: ~0 rows (aproximadamente)
DELETE FROM `criterio_trans_asistencial`;

-- Volcando estructura para tabla sehab.criterio_urgencias
CREATE TABLE IF NOT EXISTS `criterio_urgencias` (
  `criurge_id` int NOT NULL AUTO_INCREMENT,
  `criurge_modalidad` varchar(105) DEFAULT NULL,
  `criurge_complejidad` varchar(105) DEFAULT NULL,
  `criurge_articulo` varchar(10) DEFAULT NULL,
  `criurge_seccion` varchar(3) DEFAULT NULL,
  `criurge_apartado` varchar(10) DEFAULT NULL,
  `criurge_nombre_criterio` varchar(700) DEFAULT NULL,
  `urgenciasUrgId` int DEFAULT NULL,
  PRIMARY KEY (`criurge_id`),
  KEY `FK_a18f8d48fa8ce4c488e06020fac` (`urgenciasUrgId`),
  CONSTRAINT `FK_a18f8d48fa8ce4c488e06020fac` FOREIGN KEY (`urgenciasUrgId`) REFERENCES `urgencias` (`urg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_urgencias: ~0 rows (aproximadamente)
DELETE FROM `criterio_urgencias`;

-- Volcando estructura para tabla sehab.criterio_vacunacion
CREATE TABLE IF NOT EXISTS `criterio_vacunacion` (
  `crivac_id` int NOT NULL AUTO_INCREMENT,
  `crivac_modalidad` varchar(105) DEFAULT NULL,
  `crivac_complejidad` varchar(105) DEFAULT NULL,
  `crivac_articulo` varchar(10) DEFAULT NULL,
  `crivac_seccion` varchar(3) DEFAULT NULL,
  `crivac_apartado` varchar(10) DEFAULT NULL,
  `crivac_nombre_criterio` varchar(700) DEFAULT NULL,
  `vacunacionVacId` int DEFAULT NULL,
  PRIMARY KEY (`crivac_id`),
  KEY `FK_828945d5a05f5ab0a1f67a4a700` (`vacunacionVacId`),
  CONSTRAINT `FK_828945d5a05f5ab0a1f67a4a700` FOREIGN KEY (`vacunacionVacId`) REFERENCES `vacunacion` (`vac_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_vacunacion: ~0 rows (aproximadamente)
DELETE FROM `criterio_vacunacion`;

-- Volcando estructura para tabla sehab.criterio_verificacion
CREATE TABLE IF NOT EXISTS `criterio_verificacion` (
  `cri_ver_id` int NOT NULL AUTO_INCREMENT,
  `cri_ver_nombre` varchar(530) NOT NULL,
  `cri_ver_verificacion` varchar(200) NOT NULL,
  `criVerEvaEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`cri_ver_id`),
  KEY `FK_807e47344a9c743d41ef75af1e2` (`criVerEvaEvipsId`),
  CONSTRAINT `FK_807e47344a9c743d41ef75af1e2` FOREIGN KEY (`criVerEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.criterio_verificacion: ~0 rows (aproximadamente)
DELETE FROM `criterio_verificacion`;
INSERT INTO `criterio_verificacion` (`cri_ver_id`, `cri_ver_nombre`, `cri_ver_verificacion`, `criVerEvaEvipsId`) VALUES
	(1, 'Se cuenta con un grupo de indicadores que evalúan el cumplimiento de la política de seguridad y el programa de seguridad del paciente.', 'Tablero de mando', 1),
	(2, 'Se cuenta con mediciones de los indicadores que monitorean la seguridad del paciente.', 'Solicite Tablero de mando.', 2),
	(3, 'Se han definido instrumentos para evaluar la adherencia a: \r\n\r\n• Higiene de manos acordes a los 5 momentos de la OMS\r\n• Uso de medidas de bioseguridad', 'Instrumento para evaluar cada uno de estos protocolos y Medición semestral de adherencia a las guías y documentación de acciones de mejora si aplica.', 3),
	(4, 'Presencia de insumos institucionales para la higiene de manos como, por ejemplo:\r\n-Toallas desechables\r\n- Solución de alcohol Glicerinado\r\n- Jabón antibacterial\r\nEn concordancia con el protocolo institucional de higiene de manos.', 'Presencia de insumos institucionales para la higiene de manos.', 3),
	(5, 'Se tienen definido y estandarizado los indicadores asociados con esta práctica dentro de los cuales se incluyen: \r\n• Proporción de reacciones adversas a medicamentos \r\n• Porcentaje de errores de medicación\r\n• Índice de eventos adversos prevenibles asociados a la medicación\r\n• Índice Errores de Medicación: Errores de Formulación, Errores de Administración y Errores de Dispensación\r\n• Porcentaje de Adherencia al Proceso de Administración de Medicamentos', 'Solicite los indicadores institucionales.', 4),
	(6, 'Medición semestral de adherencia al proceso de dispensación de medicamentos en la Farmacia', '', 4),
	(7, 'Aplicación de listas de chequeo para asegurar la entrega correcta de los medicamentos del proveedor al lugar de almacenamiento de la institución.', '', 4),
	(8, 'Proceso para la administración segura de los medicamentos en los diferentes servicios, desarrollado o adoptado por la institución y actualizado con la periodicidad que defina la institución, pero dicha actualización no debe ser superior a los cinco años. Incluye la utilización de mínimo cinco correctos al momento de administrar un medicamento a un usuario y restringe el uso de órdenes verbales. incluye el manejo de derrames y rupturas de medicamentos, en un lugar de fácil acceso, visible y con \r\nAdecuada señalización.', '', 4),
	(9, 'Los registros de la historia clínica evidencian que se ha identificado el riesgo de alergias a medicamentos de los usuarios de los servicios de internación y urgencias', '', 4),
	(10, 'Se han definido instrumentos para evaluar la adherencia a la implementación de las acciones implementadas para la correcta identificación del paciente', 'Los instrumentos para la correcta identificación de los pacientes.', 5),
	(11, 'Se tienen definido y estandarizado los indicadores asociados con esta práctica dentro de los cuales se incluyen: \r\n• Proporción de paciente identificados correctamente.\r\n• Porcentaje de incidentes o eventos adversos asociados a fallas en la identificación del paciente.', 'Tablero de indicadores', 5),
	(12, 'Medición semestral de adherencia al protocolo de identificación correcta del usuario y \r\ndocumentación de acciones de mejora si aplica', '', 5),
	(13, 'Uso de manillas de marcación de los pacientes en servicios asistenciales priorizados. \r\nSiempre debe incluir el servicio de ginecobstetricia, pediatría y atención mental\r\n', '', 5),
	(14, 'Se han definido instrumentos para evaluar la adherencia a las guías de práctica clínica relacionadas con la gestación, parto y puerperio.', 'Verificar las herramientas de adherencia', 6),
	(15, 'Medición semestral de adherencia a la guía o protocolo para la atención prioritaria de las gestantes y documentación de acciones de mejora si aplica.', '', 6),
	(16, 'Medición semestral de adherencia a las guías clínicas para la atención de las \r\ngestantes, durante el periodo prenatal, parto y postparto y documentación de acciones \r\nde mejora si aplica\r\n', '', 6),
	(17, 'Medición mensual de la completitud del kit de emergencias obstétricas y de los demás insumos requeridos para la atención de la gestante adherencia a las guías clínicas para la atención de las gestantes, durante el periodo prenatal, parto y postparto y documentación de acciones de mejora si aplica', '', 6),
	(18, 'Implementación de la lista de Chequeo para garantizar una vigilancia estricta de la mujer en el postparto inmediato, para equipos médicos y de enfermería', '', 6),
	(19, 'Se cuentan con instrumentos para evaluar la adherencia del personal a los protocolos de cirugía segura.', 'Solicite Instrumentos de evaluación de la adherencia al protocolo de cirugía segura.', 7),
	(20, 'Se tienen definido y estandarizado los indicadores asociados con esta práctica dentro de los cuales se incluyen:\r\n• Proporción de pacientes con procedimiento equivocado o lugar, nivel o lateralidad equivocado\r\n.•Proporción de cirugías no pertinentes.\r\n.•Proporción de cirugías programadas canceladas\r\n.•Proporción de pacientes con fallas anestésicas\r\n•Proporción de pacientes con heridas contaminadas. \r\n', 'Tablero de mando', 7),
	(21, 'Se cuentan con instrumentos para evaluar la adherencia del personal a los protocolos de valoración del riesgo de ulcera por presión', 'Solicite Instrumentos de evaluación de la adherencia al protocolo de prevención de ulceras de presión.', 8),
	(22, 'Clasificar el riesgo de úlceras por presión a los usuarios que son internados en la institución y que contemple como mínimo la valoración de la movilidad, presencia de incontinencia, estado nutricional, alteración de la sensibilidad e integridad de la piel', '', 8),
	(23, 'Se cuentan con instrumentos para evaluar la adherencia del personal a los protocolos de valoración del riesgo', 'Solicite Instrumentos de evaluación de la adherencia al protocolo de prevención de caídas.', 9),
	(24, 'Se tienen definido y estandarizado los indicadores asociados con esta práctica dentro de los cuales se incluyen: \r\n• Proporción de pacientes a quienes se les identifica el riesgo de caídas.\r\n• Proporción de caídas de pacientes.\r\n• Proporción de adherencia al protocolo de prevención de caídas.', 'Solicite los indicadores institucionales.', 9);

-- Volcando estructura para tabla sehab.cuello_uterino
CREATE TABLE IF NOT EXISTS `cuello_uterino` (
  `cuel_ute_id` int NOT NULL AUTO_INCREMENT,
  `cuel_ute_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuel_ute_id`),
  UNIQUE KEY `IDX_bd1a34f89d83f35b103885e9f3` (`cuel_ute_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuello_uterino: ~0 rows (aproximadamente)
DELETE FROM `cuello_uterino`;

-- Volcando estructura para tabla sehab.cuid_bas_neonatal
CREATE TABLE IF NOT EXISTS `cuid_bas_neonatal` (
  `cuid_neona_id` int NOT NULL AUTO_INCREMENT,
  `cuid_neona_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuid_neona_id`),
  UNIQUE KEY `IDX_ef1dc127d262ee842007c4a3ba` (`cuid_neona_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuid_bas_neonatal: ~0 rows (aproximadamente)
DELETE FROM `cuid_bas_neonatal`;

-- Volcando estructura para tabla sehab.cuid_interm_adulto
CREATE TABLE IF NOT EXISTS `cuid_interm_adulto` (
  `cuid_inter_adult_id` int NOT NULL AUTO_INCREMENT,
  `cuid_inter_adult_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuid_inter_adult_id`),
  UNIQUE KEY `IDX_cf9905761cd467ec1ed1d1b8dd` (`cuid_inter_adult_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuid_interm_adulto: ~0 rows (aproximadamente)
DELETE FROM `cuid_interm_adulto`;

-- Volcando estructura para tabla sehab.cuid_interm_neonatal
CREATE TABLE IF NOT EXISTS `cuid_interm_neonatal` (
  `cuid_inter_adult_id` int NOT NULL AUTO_INCREMENT,
  `cuid_inter_adult_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuid_inter_adult_id`),
  UNIQUE KEY `IDX_8602611159747f1020e91415db` (`cuid_inter_adult_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuid_interm_neonatal: ~0 rows (aproximadamente)
DELETE FROM `cuid_interm_neonatal`;

-- Volcando estructura para tabla sehab.cuid_interm_pediatrico
CREATE TABLE IF NOT EXISTS `cuid_interm_pediatrico` (
  `cuid_inter_pedi_id` int NOT NULL AUTO_INCREMENT,
  `cuid_inter_pedi_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuid_inter_pedi_id`),
  UNIQUE KEY `IDX_1a5ed0f6fb9c49d4a7151c7763` (`cuid_inter_pedi_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuid_interm_pediatrico: ~0 rows (aproximadamente)
DELETE FROM `cuid_interm_pediatrico`;

-- Volcando estructura para tabla sehab.cuid_int_adulto
CREATE TABLE IF NOT EXISTS `cuid_int_adulto` (
  `cuid_int_adult_id` int NOT NULL AUTO_INCREMENT,
  `cuid_int_adult_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuid_int_adult_id`),
  UNIQUE KEY `IDX_4593fa7c7ce44eae276fd0b920` (`cuid_int_adult_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuid_int_adulto: ~0 rows (aproximadamente)
DELETE FROM `cuid_int_adulto`;

-- Volcando estructura para tabla sehab.cuid_int_neonatal
CREATE TABLE IF NOT EXISTS `cuid_int_neonatal` (
  `cuid_int_neona_id` int NOT NULL AUTO_INCREMENT,
  `cuid_int_neona_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuid_int_neona_id`),
  UNIQUE KEY `IDX_9b92440b07afb18180a351c972` (`cuid_int_neona_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuid_int_neonatal: ~0 rows (aproximadamente)
DELETE FROM `cuid_int_neonatal`;

-- Volcando estructura para tabla sehab.cuid_int_pediatrico
CREATE TABLE IF NOT EXISTS `cuid_int_pediatrico` (
  `cuid_int_pedi_id` int NOT NULL AUTO_INCREMENT,
  `cuid_int_pedi_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`cuid_int_pedi_id`),
  UNIQUE KEY `IDX_4f7d47a9920cb24b9e13e3d8b4` (`cuid_int_pedi_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cuid_int_pediatrico: ~0 rows (aproximadamente)
DELETE FROM `cuid_int_pediatrico`;

-- Volcando estructura para tabla sehab.cumplimientosic
CREATE TABLE IF NOT EXISTS `cumplimientosic` (
  `cumpl_id` int NOT NULL AUTO_INCREMENT,
  `cumpl_cumple` varchar(11) NOT NULL,
  `cumpl_observaciones` varchar(300) NOT NULL,
  `cumpl_asignado` varchar(11) NOT NULL,
  `criterioSicCriId` int DEFAULT NULL,
  `indicadorsicIndId` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`cumpl_id`),
  KEY `FK_9d0b65c4e7680f568629c2ad289` (`criterioSicCriId`),
  KEY `FK_aeaf4dcad4e122ed3226643230c` (`indicadorsicIndId`),
  CONSTRAINT `FK_9d0b65c4e7680f568629c2ad289` FOREIGN KEY (`criterioSicCriId`) REFERENCES `criteriosic` (`cri_id`),
  CONSTRAINT `FK_aeaf4dcad4e122ed3226643230c` FOREIGN KEY (`indicadorsicIndId`) REFERENCES `indicador` (`ind_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimientosic: ~0 rows (aproximadamente)
DELETE FROM `cumplimientosic`;

-- Volcando estructura para tabla sehab.cumplimiento_cirugia
CREATE TABLE IF NOT EXISTS `cumplimiento_cirugia` (
  `cump_ciru_id` int NOT NULL AUTO_INCREMENT,
  `cump_ciru_cumple` varchar(10) NOT NULL,
  `cump_ciru_hallazgo` varchar(60) NOT NULL,
  `cump_ciru_accion` varchar(60) NOT NULL,
  `cump_ciru_responsable` varchar(200) NOT NULL,
  `cump_ciru_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCirugiaCriCiruId` int DEFAULT NULL,
  PRIMARY KEY (`cump_ciru_id`),
  UNIQUE KEY `IDX_61ab0ab0267e0782ec4c1b5bc8` (`cump_ciru_cumple`),
  UNIQUE KEY `REL_7d37b2e6333b5cfaf8f062fe97` (`criterioCirugiaCriCiruId`),
  KEY `FK_8e35679c223420e7e6dc3ae1001` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_7d37b2e6333b5cfaf8f062fe976` FOREIGN KEY (`criterioCirugiaCriCiruId`) REFERENCES `criterio_cirugia` (`cri_ciru_id`),
  CONSTRAINT `FK_8e35679c223420e7e6dc3ae1001` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cirugia: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cirugia`;

-- Volcando estructura para tabla sehab.cumplimiento_cons_psicoactivas
CREATE TABLE IF NOT EXISTS `cumplimiento_cons_psicoactivas` (
  `cump_cons_psic_id` int NOT NULL AUTO_INCREMENT,
  `cump_cons_psic_cumple` varchar(10) NOT NULL,
  `cump_cons_psic_hallazgo` varchar(60) NOT NULL,
  `cump_cons_psic_accion` varchar(60) NOT NULL,
  `cump_cons_psic_responsable` varchar(200) NOT NULL,
  `cump_cons_psic_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioConsPsicoCriConsPsicId` int DEFAULT NULL,
  PRIMARY KEY (`cump_cons_psic_id`),
  UNIQUE KEY `IDX_df79265414aeb73a98f628089d` (`cump_cons_psic_cumple`),
  UNIQUE KEY `REL_38d0bbe23ecf1fd5688abaee9e` (`criterioConsPsicoCriConsPsicId`),
  KEY `FK_f81c1df5dcede70c5cc7b004da2` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_38d0bbe23ecf1fd5688abaee9eb` FOREIGN KEY (`criterioConsPsicoCriConsPsicId`) REFERENCES `criterio_cons_psicoactivas` (`cri_cons_psic_id`),
  CONSTRAINT `FK_f81c1df5dcede70c5cc7b004da2` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cons_psicoactivas: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cons_psicoactivas`;

-- Volcando estructura para tabla sehab.cumplimiento_cuello_uterino
CREATE TABLE IF NOT EXISTS `cumplimiento_cuello_uterino` (
  `cump_cue_uter_id` int NOT NULL AUTO_INCREMENT,
  `cump_cue_uter_cumple` varchar(10) NOT NULL,
  `cump_cue_uter_hallazgo` varchar(60) NOT NULL,
  `cump_cue_uter_accion` varchar(60) NOT NULL,
  `cump_cue_uter_responsable` varchar(200) NOT NULL,
  `cump_cue_uter_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuelloUterinoCriCuelUteId` int DEFAULT NULL,
  PRIMARY KEY (`cump_cue_uter_id`),
  UNIQUE KEY `IDX_ab6cee1d6f2324fdde45fb0d5e` (`cump_cue_uter_cumple`),
  UNIQUE KEY `REL_ad10adbbf4f7d623699caa0d29` (`criterioCuelloUterinoCriCuelUteId`),
  KEY `FK_b7d6e4e6ed37a023f425d690d0a` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_ad10adbbf4f7d623699caa0d297` FOREIGN KEY (`criterioCuelloUterinoCriCuelUteId`) REFERENCES `criterio_cuello_uterino` (`cri_cuel_ute_id`),
  CONSTRAINT `FK_b7d6e4e6ed37a023f425d690d0a` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cuello_uterino: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cuello_uterino`;

-- Volcando estructura para tabla sehab.cumplimiento_cui_bas_neonatal
CREATE TABLE IF NOT EXISTS `cumplimiento_cui_bas_neonatal` (
  `cump_cui_neona_id` int NOT NULL AUTO_INCREMENT,
  `cump_cui_neona_cumple` varchar(10) NOT NULL,
  `cump_cui_neona_hallazgo` varchar(60) NOT NULL,
  `cump_cui_neona_accion` varchar(60) NOT NULL,
  `cump_cui_neona_responsable` varchar(200) NOT NULL,
  `cump_cui_neona_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuidBasNeonatalCriNeonaId` int DEFAULT NULL,
  PRIMARY KEY (`cump_cui_neona_id`),
  UNIQUE KEY `IDX_8fdc7514c791cf114713a3c387` (`cump_cui_neona_cumple`),
  UNIQUE KEY `REL_61b23b7496bf4594f0748085b8` (`criterioCuidBasNeonatalCriNeonaId`),
  KEY `FK_aa0681937c13edd2ef963c30086` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_61b23b7496bf4594f0748085b8b` FOREIGN KEY (`criterioCuidBasNeonatalCriNeonaId`) REFERENCES `criterio_cuid_bas_neonatal` (`cri_neona_id`),
  CONSTRAINT `FK_aa0681937c13edd2ef963c30086` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cui_bas_neonatal: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cui_bas_neonatal`;

-- Volcando estructura para tabla sehab.cumplimiento_cui_inter_adulto
CREATE TABLE IF NOT EXISTS `cumplimiento_cui_inter_adulto` (
  `cump_inter_adulto_id` int NOT NULL AUTO_INCREMENT,
  `cump_inter_adulto_cumple` varchar(10) NOT NULL,
  `cump_inter_adulto_hallazgo` varchar(60) NOT NULL,
  `cump_inter_adulto_accion` varchar(60) NOT NULL,
  `cump_inter_adulto_responsable` varchar(200) NOT NULL,
  `cump_inter_adulto_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuidInterAdultCriInterAdultId` int DEFAULT NULL,
  PRIMARY KEY (`cump_inter_adulto_id`),
  UNIQUE KEY `IDX_f614f2cb396fff0983133bdc11` (`cump_inter_adulto_cumple`),
  UNIQUE KEY `REL_18d7ed94ae22e2c9979ad77ab0` (`criterioCuidInterAdultCriInterAdultId`),
  KEY `FK_2ead23f55a489a41421038be11b` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_18d7ed94ae22e2c9979ad77ab07` FOREIGN KEY (`criterioCuidInterAdultCriInterAdultId`) REFERENCES `criterio_cuid_interm_adulto` (`cri_inter_adult_id`),
  CONSTRAINT `FK_2ead23f55a489a41421038be11b` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cui_inter_adulto: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cui_inter_adulto`;

-- Volcando estructura para tabla sehab.cumplimiento_cui_inter_neonatal
CREATE TABLE IF NOT EXISTS `cumplimiento_cui_inter_neonatal` (
  `cump_inter_neona_id` int NOT NULL AUTO_INCREMENT,
  `cump_inter_neona_cumple` varchar(10) NOT NULL,
  `cump_inter_neona_hallazgo` varchar(60) NOT NULL,
  `cump_inter_neona_accion` varchar(60) NOT NULL,
  `cump_inter_neona_responsable` varchar(200) NOT NULL,
  `cump_inter_neona_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuidInterNeonaCriInterNeonId` int DEFAULT NULL,
  PRIMARY KEY (`cump_inter_neona_id`),
  UNIQUE KEY `IDX_3606917081db059775dbfb5d23` (`cump_inter_neona_cumple`),
  UNIQUE KEY `REL_467e9f75656dcb853285c906be` (`criterioCuidInterNeonaCriInterNeonId`),
  KEY `FK_95ebc6f939da1caf4c80d7b79bc` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_467e9f75656dcb853285c906bed` FOREIGN KEY (`criterioCuidInterNeonaCriInterNeonId`) REFERENCES `criterio_cuid_interm_neonatal` (`cri_inter_neon_id`),
  CONSTRAINT `FK_95ebc6f939da1caf4c80d7b79bc` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cui_inter_neonatal: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cui_inter_neonatal`;

-- Volcando estructura para tabla sehab.cumplimiento_cui_inter_pediatrico
CREATE TABLE IF NOT EXISTS `cumplimiento_cui_inter_pediatrico` (
  `cump_inter_pedi_id` int NOT NULL AUTO_INCREMENT,
  `cump_inter_pedi_cumple` varchar(10) NOT NULL,
  `cump_inter_pedi_hallazgo` varchar(60) NOT NULL,
  `cump_inter_pedi_accion` varchar(60) NOT NULL,
  `cump_inter_pedi_responsable` varchar(200) NOT NULL,
  `cump_inter_pedi_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuidInterPediaCriInterPediaId` int DEFAULT NULL,
  PRIMARY KEY (`cump_inter_pedi_id`),
  UNIQUE KEY `IDX_fbb1a9ff19d0fbe2cc41c9461c` (`cump_inter_pedi_cumple`),
  UNIQUE KEY `REL_9edc17c681bc16f7ed6ae94a19` (`criterioCuidInterPediaCriInterPediaId`),
  KEY `FK_e50f33e68cc08cd012f0767f67d` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_9edc17c681bc16f7ed6ae94a19c` FOREIGN KEY (`criterioCuidInterPediaCriInterPediaId`) REFERENCES `criterio_cuid_interm_pediatrico` (`cri_inter_pedia_id`),
  CONSTRAINT `FK_e50f33e68cc08cd012f0767f67d` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cui_inter_pediatrico: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cui_inter_pediatrico`;

-- Volcando estructura para tabla sehab.cumplimiento_cui_int_adulto
CREATE TABLE IF NOT EXISTS `cumplimiento_cui_int_adulto` (
  `cump_cui_int_adul_id` int NOT NULL AUTO_INCREMENT,
  `cump_cui_int_adul_cumple` varchar(10) NOT NULL,
  `cump_cui_int_adul_hallazgo` varchar(60) NOT NULL,
  `cump_cui_int_adul_accion` varchar(60) NOT NULL,
  `cump_cui_int_adul_responsable` varchar(200) NOT NULL,
  `cump_cui_int_adul_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuidIntAdultoCriIntAdultId` int DEFAULT NULL,
  PRIMARY KEY (`cump_cui_int_adul_id`),
  UNIQUE KEY `IDX_a57e08ccb6b5c6bed0dd063eb5` (`cump_cui_int_adul_cumple`),
  UNIQUE KEY `REL_f533574f082ade5b2c9a4e64e3` (`criterioCuidIntAdultoCriIntAdultId`),
  KEY `FK_228a03d21f78a8cba2d5843e49d` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_228a03d21f78a8cba2d5843e49d` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_f533574f082ade5b2c9a4e64e30` FOREIGN KEY (`criterioCuidIntAdultoCriIntAdultId`) REFERENCES `criterio_cuid_intens_adulto` (`cri_int_adult_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cui_int_adulto: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cui_int_adulto`;

-- Volcando estructura para tabla sehab.cumplimiento_cui_int_neonatal
CREATE TABLE IF NOT EXISTS `cumplimiento_cui_int_neonatal` (
  `cump_int_neon_id` int NOT NULL AUTO_INCREMENT,
  `cump_int_neon_cumple` varchar(10) NOT NULL,
  `cump_int_neon_hallazgo` varchar(60) NOT NULL,
  `cump_int_neon_accion` varchar(60) NOT NULL,
  `cump_int_neon_responsable` varchar(200) NOT NULL,
  `cump_int_neon_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuidIntNeonatalCriNeonaId` int DEFAULT NULL,
  PRIMARY KEY (`cump_int_neon_id`),
  UNIQUE KEY `IDX_1583cd554dba1bde7b024582c5` (`cump_int_neon_cumple`),
  UNIQUE KEY `REL_bbafc5d53ca3862e08ca8a805a` (`criterioCuidIntNeonatalCriNeonaId`),
  KEY `FK_0177fccb411a46072a09ba0d308` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_0177fccb411a46072a09ba0d308` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_bbafc5d53ca3862e08ca8a805a3` FOREIGN KEY (`criterioCuidIntNeonatalCriNeonaId`) REFERENCES `criterio_cuid_inte_neonatal` (`cri_neona_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cui_int_neonatal: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cui_int_neonatal`;

-- Volcando estructura para tabla sehab.cumplimiento_cui_int_pediatrico
CREATE TABLE IF NOT EXISTS `cumplimiento_cui_int_pediatrico` (
  `cump_int_ped_id` int NOT NULL AUTO_INCREMENT,
  `cump_int_ped_cumple` varchar(10) NOT NULL,
  `cump_int_ped_hallazgo` varchar(60) NOT NULL,
  `cump_int_ped_accion` varchar(60) NOT NULL,
  `cump_int_ped_responsable` varchar(200) NOT NULL,
  `cump_int_ped_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioCuidIntPediatricoCriIntPedId` int DEFAULT NULL,
  PRIMARY KEY (`cump_int_ped_id`),
  UNIQUE KEY `IDX_53c676ffffa391fa73d526ce83` (`cump_int_ped_cumple`),
  UNIQUE KEY `REL_7c3a0286684f9706e992e5d57b` (`criterioCuidIntPediatricoCriIntPedId`),
  KEY `FK_2c68c9a31950abd663f37be0818` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_2c68c9a31950abd663f37be0818` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_7c3a0286684f9706e992e5d57b5` FOREIGN KEY (`criterioCuidIntPediatricoCriIntPedId`) REFERENCES `criterio_cuid_inte_pediatrico` (`cri_int_ped_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_cui_int_pediatrico: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_cui_int_pediatrico`;

-- Volcando estructura para tabla sehab.cumplimiento_diagnostico_vascular
CREATE TABLE IF NOT EXISTS `cumplimiento_diagnostico_vascular` (
  `cump_diagv_id` int NOT NULL AUTO_INCREMENT,
  `cump_diagv_cumple` varchar(10) NOT NULL,
  `cump_diagv_hallazgo` varchar(60) NOT NULL,
  `cump_diagv_accion` varchar(60) NOT NULL,
  `cump_diagv_responsable` varchar(200) NOT NULL,
  `cump_diagv_fecha_limite` date NOT NULL,
  `criterioDiagVascularCrivacId` int DEFAULT NULL,
  PRIMARY KEY (`cump_diagv_id`),
  UNIQUE KEY `IDX_78edb3effbcd20948f7ada2fe1` (`cump_diagv_cumple`),
  UNIQUE KEY `REL_eb9bafd0e1fe8a9a711f285d1a` (`criterioDiagVascularCrivacId`),
  CONSTRAINT `FK_eb9bafd0e1fe8a9a711f285d1a5` FOREIGN KEY (`criterioDiagVascularCrivacId`) REFERENCES `criterio_diagnost_vascular` (`crivac_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_diagnostico_vascular: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_diagnostico_vascular`;

-- Volcando estructura para tabla sehab.cumplimiento_dialisis
CREATE TABLE IF NOT EXISTS `cumplimiento_dialisis` (
  `cump_dial_id` int NOT NULL AUTO_INCREMENT,
  `cump_dial_cumple` varchar(10) NOT NULL,
  `cump_dial_hallazgo` varchar(60) NOT NULL,
  `cump_dial_accion` varchar(60) NOT NULL,
  `cump_dial_responsable` varchar(200) NOT NULL,
  `cump_dial_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioDialisisCridialId` int DEFAULT NULL,
  PRIMARY KEY (`cump_dial_id`),
  UNIQUE KEY `IDX_90d916dcb9e9aaddabe04eacc6` (`cump_dial_cumple`),
  UNIQUE KEY `REL_4237122bffda28bd4272d91e93` (`criterioDialisisCridialId`),
  KEY `FK_fe5ee85aa6ed7902aa4ca870dbc` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_4237122bffda28bd4272d91e931` FOREIGN KEY (`criterioDialisisCridialId`) REFERENCES `criterio_dialisis` (`cridial_id`),
  CONSTRAINT `FK_fe5ee85aa6ed7902aa4ca870dbc` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_dialisis: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_dialisis`;

-- Volcando estructura para tabla sehab.cumplimiento_estandarsic
CREATE TABLE IF NOT EXISTS `cumplimiento_estandarsic` (
  `cumpl_id` int NOT NULL AUTO_INCREMENT,
  `cumpl_cumple` varchar(11) NOT NULL,
  `cumpl_observaciones` varchar(300) DEFAULT NULL,
  `cumpl_asignado` varchar(11) NOT NULL,
  `criterioestandarSicCrieId` int DEFAULT NULL,
  `cumplimientoEvaSicEvaId` int DEFAULT NULL,
  PRIMARY KEY (`cumpl_id`),
  KEY `FK_d75e6e2df126117e8f85911b4f4` (`criterioestandarSicCrieId`),
  KEY `FK_28fa72dd386409660edd6ef9bbd` (`cumplimientoEvaSicEvaId`),
  CONSTRAINT `FK_28fa72dd386409660edd6ef9bbd` FOREIGN KEY (`cumplimientoEvaSicEvaId`) REFERENCES `evaluacionsic` (`eva_id`),
  CONSTRAINT `FK_d75e6e2df126117e8f85911b4f4` FOREIGN KEY (`criterioestandarSicCrieId`) REFERENCES `criterio_estandarsic` (`crie_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_estandarsic: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_estandarsic`;

-- Volcando estructura para tabla sehab.cumplimiento_externa_especializada
CREATE TABLE IF NOT EXISTS `cumplimiento_externa_especializada` (
  `cump_exte_id` int NOT NULL AUTO_INCREMENT,
  `cump_exte_cumple` varchar(10) NOT NULL,
  `cump_exte_hallazgo` varchar(60) NOT NULL,
  `cump_exte_accion` varchar(60) NOT NULL,
  `cump_exte_responsable` varchar(200) NOT NULL,
  `cump_exte_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioExternaEspecializadaCriextgId` int DEFAULT NULL,
  PRIMARY KEY (`cump_exte_id`),
  UNIQUE KEY `IDX_0862ed1f3edf10f3beb180fd90` (`cump_exte_cumple`),
  UNIQUE KEY `REL_aaee5275bb80c1da81511d28f1` (`criterioExternaEspecializadaCriextgId`),
  KEY `FK_b40345dcd8449c82855ca01bb11` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_aaee5275bb80c1da81511d28f18` FOREIGN KEY (`criterioExternaEspecializadaCriextgId`) REFERENCES `criterio_externa_especializada` (`criextg_id`),
  CONSTRAINT `FK_b40345dcd8449c82855ca01bb11` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_externa_especializada: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_externa_especializada`;

-- Volcando estructura para tabla sehab.cumplimiento_externa_general
CREATE TABLE IF NOT EXISTS `cumplimiento_externa_general` (
  `cump_extg_id` int NOT NULL AUTO_INCREMENT,
  `cump_extg_cumple` varchar(10) NOT NULL,
  `cump_extg_hallazgo` varchar(60) NOT NULL,
  `cump_extg_accion` varchar(60) NOT NULL,
  `cump_extg_responsable` varchar(200) NOT NULL,
  `cump_extg_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioExternaGeneralCriextgId` int DEFAULT NULL,
  PRIMARY KEY (`cump_extg_id`),
  UNIQUE KEY `IDX_615b5a9705feab7141795a4a61` (`cump_extg_cumple`),
  UNIQUE KEY `REL_aa0225dd8f2f0e87fff78f0b38` (`criterioExternaGeneralCriextgId`),
  KEY `FK_b9c7e511e69e67bba60889875e4` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_aa0225dd8f2f0e87fff78f0b381` FOREIGN KEY (`criterioExternaGeneralCriextgId`) REFERENCES `criterio_externa_general` (`criextg_id`),
  CONSTRAINT `FK_b9c7e511e69e67bba60889875e4` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_externa_general: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_externa_general`;

-- Volcando estructura para tabla sehab.cumplimiento_gest_pretransfusional
CREATE TABLE IF NOT EXISTS `cumplimiento_gest_pretransfusional` (
  `cump_gestpre_id` int NOT NULL AUTO_INCREMENT,
  `cump_gestpre_cumple` varchar(10) NOT NULL,
  `cump_gestpre_hallazgo` varchar(60) NOT NULL,
  `cump_gestpre_accion` varchar(60) NOT NULL,
  `cump_gestpre_responsable` varchar(200) NOT NULL,
  `cump_gestpre_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioGestPretransfusionalCrigestpreId` int DEFAULT NULL,
  PRIMARY KEY (`cump_gestpre_id`),
  UNIQUE KEY `IDX_ecbb344ecbf1569c2e2412fb85` (`cump_gestpre_cumple`),
  UNIQUE KEY `REL_5b023b9878bef48ba59a2ba43c` (`criterioGestPretransfusionalCrigestpreId`),
  KEY `FK_75095e73cefe785b324cf2f879f` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_5b023b9878bef48ba59a2ba43c4` FOREIGN KEY (`criterioGestPretransfusionalCrigestpreId`) REFERENCES `criterio_gest_pretransfusional` (`crigestpre_id`),
  CONSTRAINT `FK_75095e73cefe785b324cf2f879f` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_gest_pretransfusional: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_gest_pretransfusional`;

-- Volcando estructura para tabla sehab.cumplimiento_habilitacion
CREATE TABLE IF NOT EXISTS `cumplimiento_habilitacion` (
  `cumpl_id` int NOT NULL AUTO_INCREMENT,
  `cumpl_estado` varchar(11) NOT NULL,
  `conceptosResConcId` int DEFAULT NULL,
  PRIMARY KEY (`cumpl_id`),
  KEY `FK_3fbd150b78246c427062d621c19` (`conceptosResConcId`),
  CONSTRAINT `FK_3fbd150b78246c427062d621c19` FOREIGN KEY (`conceptosResConcId`) REFERENCES `concepto_res` (`conc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_habilitacion: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_habilitacion`;

-- Volcando estructura para tabla sehab.cumplimiento_hermo_interven
CREATE TABLE IF NOT EXISTS `cumplimiento_hermo_interven` (
  `cump_herminter_id` int NOT NULL AUTO_INCREMENT,
  `cump_herminter_cumple` varchar(10) NOT NULL,
  `cump_herminter_hallazgo` varchar(60) NOT NULL,
  `cump_herminter_accion` varchar(60) NOT NULL,
  `cump_herminter_responsable` varchar(200) NOT NULL,
  `cump_herminter_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioHermoIntervenCriherminteId` int DEFAULT NULL,
  PRIMARY KEY (`cump_herminter_id`),
  UNIQUE KEY `IDX_bea205610cf012df85775757ae` (`cump_herminter_cumple`),
  UNIQUE KEY `REL_635cf345b491622f944df85811` (`criterioHermoIntervenCriherminteId`),
  KEY `FK_14bebbefff96e3661933fbdfc96` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_14bebbefff96e3661933fbdfc96` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_635cf345b491622f944df85811b` FOREIGN KEY (`criterioHermoIntervenCriherminteId`) REFERENCES `criterio_hermo_interven` (`criherminte_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_hermo_interven: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_hermo_interven`;

-- Volcando estructura para tabla sehab.cumplimiento_hospitalizacion
CREATE TABLE IF NOT EXISTS `cumplimiento_hospitalizacion` (
  `cump_hosp_id` int NOT NULL AUTO_INCREMENT,
  `cump_hosp_cumple` varchar(10) DEFAULT NULL,
  `cump_hosp_hallazgo` varchar(60) DEFAULT NULL,
  `cump_hosp_accion` varchar(60) DEFAULT NULL,
  `cump_hosp_responsable` varchar(200) DEFAULT NULL,
  `cump_hosp_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioHospitalizacionCrihospId` int DEFAULT NULL,
  PRIMARY KEY (`cump_hosp_id`),
  UNIQUE KEY `IDX_ab0cdb2ad963a553a7645a2077` (`cump_hosp_fecha_limite`),
  UNIQUE KEY `IDX_0261d188a986897b4ec78cf73f` (`cump_hosp_cumple`),
  UNIQUE KEY `REL_f860e59805c422e316ee8d30ea` (`criterioHospitalizacionCrihospId`),
  KEY `FK_fb7f77d6e95adf829beff9a66ff` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_f860e59805c422e316ee8d30ea8` FOREIGN KEY (`criterioHospitalizacionCrihospId`) REFERENCES `criterio_hospitalizacion` (`crihosp_id`),
  CONSTRAINT `FK_fb7f77d6e95adf829beff9a66ff` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_hospitalizacion: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_hospitalizacion`;

-- Volcando estructura para tabla sehab.cumplimiento_hospitalizacion_cronico
CREATE TABLE IF NOT EXISTS `cumplimiento_hospitalizacion_cronico` (
  `cump_hosp_cron_id` int NOT NULL AUTO_INCREMENT,
  `cump_hosp_cron_cumple` varchar(10) NOT NULL,
  `cump_hosp_cron_hallazgo` varchar(60) NOT NULL,
  `cump_hosp_cron_accion` varchar(60) NOT NULL,
  `cump_hosp_cron_responsable` varchar(200) NOT NULL,
  `cump_hosp_cron_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioHospitCronicoCrihospCronId` int DEFAULT NULL,
  PRIMARY KEY (`cump_hosp_cron_id`),
  UNIQUE KEY `IDX_d7246a87d09e3498abdb81cfb4` (`cump_hosp_cron_cumple`),
  UNIQUE KEY `REL_bc9e5bf49115bc6ccc9304930d` (`criterioHospitCronicoCrihospCronId`),
  KEY `FK_e13a5060f6f1b6b82339ee70603` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_bc9e5bf49115bc6ccc9304930d9` FOREIGN KEY (`criterioHospitCronicoCrihospCronId`) REFERENCES `criterio_hospitalizacion_cronico` (`crihosp_cron_id`),
  CONSTRAINT `FK_e13a5060f6f1b6b82339ee70603` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_hospitalizacion_cronico: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_hospitalizacion_cronico`;

-- Volcando estructura para tabla sehab.cumplimiento_hospitalizacion_mental
CREATE TABLE IF NOT EXISTS `cumplimiento_hospitalizacion_mental` (
  `cump_hosp_ment_id` int NOT NULL AUTO_INCREMENT,
  `cump_hosp_ment_cumple` varchar(10) NOT NULL,
  `cump_hosp_ment_hallazgo` varchar(60) NOT NULL,
  `cump_hosp_ment_accion` varchar(60) NOT NULL,
  `cump_hosp_ment_responsable` varchar(200) NOT NULL,
  `cump_hosp_ment_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioHospitalizacionMentalCrihospMentId` int DEFAULT NULL,
  PRIMARY KEY (`cump_hosp_ment_id`),
  UNIQUE KEY `IDX_31ab2e2bd1af9358adf45f6d2e` (`cump_hosp_ment_cumple`),
  UNIQUE KEY `REL_d608170f4f165fa894867014c3` (`criterioHospitalizacionMentalCrihospMentId`),
  KEY `FK_9f37adf5ef52c3b366985fc3b27` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_9f37adf5ef52c3b366985fc3b27` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_d608170f4f165fa894867014c38` FOREIGN KEY (`criterioHospitalizacionMentalCrihospMentId`) REFERENCES `criterio_hospitalizacion_mental` (`crihosp_ment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_hospitalizacion_mental: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_hospitalizacion_mental`;

-- Volcando estructura para tabla sehab.cumplimiento_hospitalizacion_parcial
CREATE TABLE IF NOT EXISTS `cumplimiento_hospitalizacion_parcial` (
  `cump_hosp_parc_id` int NOT NULL AUTO_INCREMENT,
  `cump_hosp_parc_cumple` varchar(10) NOT NULL,
  `cump_hosp_parc_hallazgo` varchar(60) NOT NULL,
  `cump_hosp_parc_accion` varchar(60) NOT NULL,
  `cump_hosp_parc_responsable` varchar(200) NOT NULL,
  `cump_hosp_parc_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioHospitalizacionParcialCrihospParcId` int DEFAULT NULL,
  PRIMARY KEY (`cump_hosp_parc_id`),
  UNIQUE KEY `IDX_5c3511cafa67464ffb9ce763ae` (`cump_hosp_parc_cumple`),
  UNIQUE KEY `REL_aaad9b94e6a7fc79bd607df6c0` (`criterioHospitalizacionParcialCrihospParcId`),
  KEY `FK_84be8577c9a0eebbe6fcb75eedb` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_84be8577c9a0eebbe6fcb75eedb` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_aaad9b94e6a7fc79bd607df6c0f` FOREIGN KEY (`criterioHospitalizacionParcialCrihospParcId`) REFERENCES `criterio_hospitalizacion_parcial` (`crihosp_parc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_hospitalizacion_parcial: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_hospitalizacion_parcial`;

-- Volcando estructura para tabla sehab.cumplimiento_img_ionizante
CREATE TABLE IF NOT EXISTS `cumplimiento_img_ionizante` (
  `cump_imgion_id` int NOT NULL AUTO_INCREMENT,
  `cump_imgion_cumple` varchar(10) NOT NULL,
  `cump_imgion_hallazgo` varchar(60) NOT NULL,
  `cump_imgion_accion` varchar(60) NOT NULL,
  `cump_imgion_responsable` varchar(200) NOT NULL,
  `cump_imgion_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioImgRadNoionCriImgioniId` int DEFAULT NULL,
  PRIMARY KEY (`cump_imgion_id`),
  UNIQUE KEY `IDX_dc82e787fe4eb0f99f16a56cf2` (`cump_imgion_cumple`),
  UNIQUE KEY `REL_04c48c42936213f2533d3d2830` (`criterioImgRadNoionCriImgioniId`),
  KEY `FK_54fc1cfc250458117497036a699` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_04c48c42936213f2533d3d28303` FOREIGN KEY (`criterioImgRadNoionCriImgioniId`) REFERENCES `criterio_img_ionizante` (`cri_imgioni_id`),
  CONSTRAINT `FK_54fc1cfc250458117497036a699` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_img_ionizante: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_img_ionizante`;

-- Volcando estructura para tabla sehab.cumplimiento_img_noionizante
CREATE TABLE IF NOT EXISTS `cumplimiento_img_noionizante` (
  `cump_img_noion_id` int NOT NULL AUTO_INCREMENT,
  `cump_img_noion_cumple` varchar(10) NOT NULL,
  `cump_img_noion_hallazgo` varchar(60) NOT NULL,
  `cump_img_noion_accion` varchar(60) NOT NULL,
  `cump_img_noion_responsable` varchar(200) NOT NULL,
  `cump_img_noion_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioImgRadNoionCriImgNoioniId` int DEFAULT NULL,
  PRIMARY KEY (`cump_img_noion_id`),
  UNIQUE KEY `IDX_97f4be029e86a70bebe6a52765` (`cump_img_noion_cumple`),
  UNIQUE KEY `REL_1f82a1ccda42084f52cd6ed1af` (`criterioImgRadNoionCriImgNoioniId`),
  KEY `FK_db358b9f092e990b954e5127204` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_1f82a1ccda42084f52cd6ed1af7` FOREIGN KEY (`criterioImgRadNoionCriImgNoioniId`) REFERENCES `criterio_img_noionizante` (`cri_img_noioni_id`),
  CONSTRAINT `FK_db358b9f092e990b954e5127204` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_img_noionizante: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_img_noionizante`;

-- Volcando estructura para tabla sehab.cumplimiento_lab_clinico
CREATE TABLE IF NOT EXISTS `cumplimiento_lab_clinico` (
  `cump_labclin_id` int NOT NULL AUTO_INCREMENT,
  `cump_labclin_cumple` varchar(10) NOT NULL,
  `cump_labclin_hallazgo` varchar(60) NOT NULL,
  `cump_labclin_accion` varchar(60) NOT NULL,
  `cump_labclin_responsable` varchar(200) NOT NULL,
  `cump_labclin_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioLabClinicoCriLabCliId` int DEFAULT NULL,
  PRIMARY KEY (`cump_labclin_id`),
  UNIQUE KEY `IDX_321e7ad5b2de1f6203214e4ecc` (`cump_labclin_cumple`),
  UNIQUE KEY `REL_80dcbbc41ebbc44705627cc4ea` (`criterioLabClinicoCriLabCliId`),
  KEY `FK_4923f4f81454c2489a6bd95629e` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_4923f4f81454c2489a6bd95629e` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_80dcbbc41ebbc44705627cc4ea3` FOREIGN KEY (`criterioLabClinicoCriLabCliId`) REFERENCES `criterio_lab_clinico` (`cri_lab_cli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_lab_clinico: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_lab_clinico`;

-- Volcando estructura para tabla sehab.cumplimiento_lab_histotecnologia
CREATE TABLE IF NOT EXISTS `cumplimiento_lab_histotecnologia` (
  `cump_labhistot_id` int NOT NULL AUTO_INCREMENT,
  `cump_labhistot_cumple` varchar(10) NOT NULL,
  `cump_labhistot_hallazgo` varchar(60) NOT NULL,
  `cump_labhistot_accion` varchar(60) NOT NULL,
  `cump_labhistot_responsable` varchar(200) NOT NULL,
  `cump_labhistot_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioLabHistotecnologiaCriLabHistoId` int DEFAULT NULL,
  PRIMARY KEY (`cump_labhistot_id`),
  UNIQUE KEY `IDX_d6342e026419a936494c8adb0f` (`cump_labhistot_cumple`),
  UNIQUE KEY `REL_79d755afe77544c6cd9fb4eab4` (`criterioLabHistotecnologiaCriLabHistoId`),
  KEY `FK_6bbc2fe27d4b1cf65d397d40019` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_6bbc2fe27d4b1cf65d397d40019` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_79d755afe77544c6cd9fb4eab41` FOREIGN KEY (`criterioLabHistotecnologiaCriLabHistoId`) REFERENCES `criterio_lab_histotecnologia` (`cri_lab_histo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_lab_histotecnologia: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_lab_histotecnologia`;

-- Volcando estructura para tabla sehab.cumplimiento_lab_uterina
CREATE TABLE IF NOT EXISTS `cumplimiento_lab_uterina` (
  `cump_labuter_id` int NOT NULL AUTO_INCREMENT,
  `cump_labuter_cumple` varchar(10) NOT NULL,
  `cump_labuter_hallazgo` varchar(60) NOT NULL,
  `cump_labuter_accion` varchar(60) NOT NULL,
  `cump_labuter_responsable` varchar(200) NOT NULL,
  `cump_labuter_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioLabUterinaCriLabUteId` int DEFAULT NULL,
  PRIMARY KEY (`cump_labuter_id`),
  UNIQUE KEY `IDX_ec4de19dcc39674caa41cb9f28` (`cump_labuter_cumple`),
  UNIQUE KEY `REL_5a291a15f59971231e02cf10c6` (`criterioLabUterinaCriLabUteId`),
  KEY `FK_bf30128a26ed708ce28e9d66ee9` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_5a291a15f59971231e02cf10c6f` FOREIGN KEY (`criterioLabUterinaCriLabUteId`) REFERENCES `criterio_lab_uterina` (`cri_lab_ute_id`),
  CONSTRAINT `FK_bf30128a26ed708ce28e9d66ee9` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_lab_uterina: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_lab_uterina`;

-- Volcando estructura para tabla sehab.cumplimiento_med_nuclear
CREATE TABLE IF NOT EXISTS `cumplimiento_med_nuclear` (
  `cump_med_nucl_id` int NOT NULL AUTO_INCREMENT,
  `cump_med_nucl_cumple` varchar(10) NOT NULL,
  `cump_med_nucl_hallazgo` varchar(60) NOT NULL,
  `cump_med_nucl_accion` varchar(60) NOT NULL,
  `cump_med_nucl_responsable` varchar(200) NOT NULL,
  `cump_med_nucl_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioMedNuclearCrimedNuclId` int DEFAULT NULL,
  PRIMARY KEY (`cump_med_nucl_id`),
  UNIQUE KEY `IDX_49cc19fb461037b4cba464a847` (`cump_med_nucl_cumple`),
  UNIQUE KEY `REL_88f8d888553fe0cf6abff918a3` (`criterioMedNuclearCrimedNuclId`),
  KEY `FK_95c59c6cc754e7df6482d041c82` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_88f8d888553fe0cf6abff918a30` FOREIGN KEY (`criterioMedNuclearCrimedNuclId`) REFERENCES `criterio_med_nuclear` (`crimed_nucl_id`),
  CONSTRAINT `FK_95c59c6cc754e7df6482d041c82` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_med_nuclear: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_med_nuclear`;

-- Volcando estructura para tabla sehab.cumplimiento_muestra_lab_clinico
CREATE TABLE IF NOT EXISTS `cumplimiento_muestra_lab_clinico` (
  `cump_mues_clin_id` int NOT NULL AUTO_INCREMENT,
  `cump_mues_clin_cumple` varchar(10) NOT NULL,
  `cump_mues_clin_hallazgo` varchar(60) NOT NULL,
  `cump_mues_clin_accion` varchar(60) NOT NULL,
  `cump_mues_clin_responsable` varchar(200) NOT NULL,
  `cump_mues_clin_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioMuestLabClinicoCriMuestCliId` int DEFAULT NULL,
  PRIMARY KEY (`cump_mues_clin_id`),
  UNIQUE KEY `IDX_4df20ad9afff6d9d9af0b6e09e` (`cump_mues_clin_cumple`),
  UNIQUE KEY `REL_3c1b610426b13842b5c15c3402` (`criterioMuestLabClinicoCriMuestCliId`),
  KEY `FK_21ce5fc8331f7e575837451cf54` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_21ce5fc8331f7e575837451cf54` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_3c1b610426b13842b5c15c3402f` FOREIGN KEY (`criterioMuestLabClinicoCriMuestCliId`) REFERENCES `criterio_muestra_lab_clinico` (`cri_muest_cli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_muestra_lab_clinico: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_muestra_lab_clinico`;

-- Volcando estructura para tabla sehab.cumplimiento_parto
CREATE TABLE IF NOT EXISTS `cumplimiento_parto` (
  `cump_parto_id` int NOT NULL AUTO_INCREMENT,
  `cump_parto_cumple` varchar(10) NOT NULL,
  `cump_parto_hallazgo` varchar(60) NOT NULL,
  `cump_parto_accion` varchar(60) NOT NULL,
  `cump_parto_responsable` varchar(200) NOT NULL,
  `cump_parto_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioPartoCripartoId` int DEFAULT NULL,
  PRIMARY KEY (`cump_parto_id`),
  UNIQUE KEY `IDX_ee69d0c68dd6f3018a3ec8145b` (`cump_parto_cumple`),
  UNIQUE KEY `REL_2548cfbb9b4a3a3f294912e815` (`criterioPartoCripartoId`),
  KEY `FK_e57bcd7d70d477d3f60cff63f39` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_2548cfbb9b4a3a3f294912e815c` FOREIGN KEY (`criterioPartoCripartoId`) REFERENCES `criterio_parto` (`criparto_id`),
  CONSTRAINT `FK_e57bcd7d70d477d3f60cff63f39` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_parto: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_parto`;

-- Volcando estructura para tabla sehab.cumplimiento_patologia
CREATE TABLE IF NOT EXISTS `cumplimiento_patologia` (
  `cump_pato_id` int NOT NULL AUTO_INCREMENT,
  `cump_pato_cumple` varchar(10) NOT NULL,
  `cump_pato_hallazgo` varchar(60) NOT NULL,
  `cump_pato_accion` varchar(60) NOT NULL,
  `cump_pato_responsable` varchar(200) NOT NULL,
  `cump_pato_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioPatologiaCripatId` int DEFAULT NULL,
  PRIMARY KEY (`cump_pato_id`),
  UNIQUE KEY `IDX_a3395fcf206be118bbcfdccc91` (`cump_pato_cumple`),
  UNIQUE KEY `REL_3aa6b21f98222cd95ff9a3c077` (`criterioPatologiaCripatId`),
  KEY `FK_f3b49c94045dfcea631d0abcc98` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_3aa6b21f98222cd95ff9a3c0774` FOREIGN KEY (`criterioPatologiaCripatId`) REFERENCES `criterio_patologia` (`cripat_id`),
  CONSTRAINT `FK_f3b49c94045dfcea631d0abcc98` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_patologia: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_patologia`;

-- Volcando estructura para tabla sehab.cumplimiento_prehospitalaria
CREATE TABLE IF NOT EXISTS `cumplimiento_prehospitalaria` (
  `cump_preh_id` int NOT NULL AUTO_INCREMENT,
  `cump_preh_cumple` varchar(10) NOT NULL,
  `cump_preh_hallazgo` varchar(60) NOT NULL,
  `cump_preh_accion` varchar(60) NOT NULL,
  `cump_preh_responsable` varchar(200) NOT NULL,
  `cump_preh_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioPrehospitalariaCriprehId` int DEFAULT NULL,
  PRIMARY KEY (`cump_preh_id`),
  UNIQUE KEY `IDX_4a8fd90970952e19383ba326d9` (`cump_preh_cumple`),
  UNIQUE KEY `REL_4797b8c338f8f981a91b599709` (`criterioPrehospitalariaCriprehId`),
  KEY `FK_c05b400d61422b92d27b7726525` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_4797b8c338f8f981a91b599709c` FOREIGN KEY (`criterioPrehospitalariaCriprehId`) REFERENCES `criterio_prehospitalaria` (`cripreh_id`),
  CONSTRAINT `FK_c05b400d61422b92d27b7726525` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_prehospitalaria: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_prehospitalaria`;

-- Volcando estructura para tabla sehab.cumplimiento_quimioterapia
CREATE TABLE IF NOT EXISTS `cumplimiento_quimioterapia` (
  `cump_quim_id` int NOT NULL AUTO_INCREMENT,
  `cump_quim_cumple` varchar(10) NOT NULL,
  `cump_quim_hallazgo` varchar(60) NOT NULL,
  `cump_quim_accion` varchar(60) NOT NULL,
  `cump_quim_responsable` varchar(200) NOT NULL,
  `cump_quim_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioQuimioterapiaCriquimId` int DEFAULT NULL,
  PRIMARY KEY (`cump_quim_id`),
  UNIQUE KEY `IDX_443ed0d4f9d62770a95f0be13d` (`cump_quim_cumple`),
  UNIQUE KEY `REL_e3ac1fc27d2a157156ae067f80` (`criterioQuimioterapiaCriquimId`),
  KEY `FK_fc2bef724aeee2203404c0e717c` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_e3ac1fc27d2a157156ae067f805` FOREIGN KEY (`criterioQuimioterapiaCriquimId`) REFERENCES `criterio_quimioterapia` (`criquim_id`),
  CONSTRAINT `FK_fc2bef724aeee2203404c0e717c` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_quimioterapia: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_quimioterapia`;

-- Volcando estructura para tabla sehab.cumplimiento_radioterapia
CREATE TABLE IF NOT EXISTS `cumplimiento_radioterapia` (
  `cump_rad_ter_id` int NOT NULL AUTO_INCREMENT,
  `cump_rad_ter_cumple` varchar(10) NOT NULL,
  `cump_rad_ter_hallazgo` varchar(60) NOT NULL,
  `cump_rad_ter_accion` varchar(60) NOT NULL,
  `cump_rad_ter_responsable` varchar(200) NOT NULL,
  `cump_rad_ter_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioRadioterapiaCriradTerId` int DEFAULT NULL,
  PRIMARY KEY (`cump_rad_ter_id`),
  UNIQUE KEY `IDX_9e4c70190d1b324f740f735cf2` (`cump_rad_ter_cumple`),
  UNIQUE KEY `REL_13b3f509acec3f0f69e526a580` (`criterioRadioterapiaCriradTerId`),
  KEY `FK_54422b4f228710ec1af2700ca56` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_13b3f509acec3f0f69e526a580f` FOREIGN KEY (`criterioRadioterapiaCriradTerId`) REFERENCES `criterio_radioterapia` (`crirad_ter_id`),
  CONSTRAINT `FK_54422b4f228710ec1af2700ca56` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_radioterapia: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_radioterapia`;

-- Volcando estructura para tabla sehab.cumplimiento_rad_odontologica
CREATE TABLE IF NOT EXISTS `cumplimiento_rad_odontologica` (
  `cump_rad_odont_id` int NOT NULL AUTO_INCREMENT,
  `cump_rad_odont_cumple` varchar(10) NOT NULL,
  `cump_rad_odont_hallazgo` varchar(60) NOT NULL,
  `cump_rad_odont_accion` varchar(60) NOT NULL,
  `cump_rad_odont_responsable` varchar(200) NOT NULL,
  `cump_rad_odont_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioRadOdontologicaCriradOdonId` int DEFAULT NULL,
  PRIMARY KEY (`cump_rad_odont_id`),
  UNIQUE KEY `IDX_aae4e258c8d873f4e0c6f6b8c5` (`cump_rad_odont_cumple`),
  UNIQUE KEY `REL_7b121f54b2b686570d4e63452e` (`criterioRadOdontologicaCriradOdonId`),
  KEY `FK_e1eae63ec7720d9550fa0a6bfda` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_7b121f54b2b686570d4e63452e4` FOREIGN KEY (`criterioRadOdontologicaCriradOdonId`) REFERENCES `criterio_rad_odontologica` (`crirad_odon_id`),
  CONSTRAINT `FK_e1eae63ec7720d9550fa0a6bfda` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_rad_odontologica: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_rad_odontologica`;

-- Volcando estructura para tabla sehab.cumplimiento_salud_trabajo
CREATE TABLE IF NOT EXISTS `cumplimiento_salud_trabajo` (
  `cump_saltra_id` int NOT NULL AUTO_INCREMENT,
  `cump_saltra_cumple` varchar(10) NOT NULL,
  `cump_saltra_hallazgo` varchar(60) NOT NULL,
  `cump_saltra_accion` varchar(60) NOT NULL,
  `cump_saltra_responsable` varchar(200) NOT NULL,
  `cump_saltra_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioSaludTrabajoCrisaltraId` int DEFAULT NULL,
  PRIMARY KEY (`cump_saltra_id`),
  UNIQUE KEY `IDX_92e6be3d9ea5f0cd15583574b6` (`cump_saltra_cumple`),
  UNIQUE KEY `REL_e2caab80b8c8683ac2da4859ba` (`criterioSaludTrabajoCrisaltraId`),
  KEY `FK_535c092db33cddce05d1fe4a2c1` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_535c092db33cddce05d1fe4a2c1` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_e2caab80b8c8683ac2da4859bad` FOREIGN KEY (`criterioSaludTrabajoCrisaltraId`) REFERENCES `criterio_salud_trabajo` (`crisaltra_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_salud_trabajo: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_salud_trabajo`;

-- Volcando estructura para tabla sehab.cumplimiento_servicios
CREATE TABLE IF NOT EXISTS `cumplimiento_servicios` (
  `cumps_id` int NOT NULL AUTO_INCREMENT,
  `cumps_cumple` varchar(10) NOT NULL,
  `cumps_hallazgo` varchar(60) NOT NULL,
  `cumps_accion` varchar(60) NOT NULL,
  `cumps_responsable` varchar(200) NOT NULL,
  `cumps_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioServiciosCrisId` int DEFAULT NULL,
  PRIMARY KEY (`cumps_id`),
  UNIQUE KEY `IDX_5ecf62bbad0a4d066b2fa7e6a2` (`cumps_cumple`),
  UNIQUE KEY `REL_4d8e6d1c708ee7c0d06cf98f56` (`criterioServiciosCrisId`),
  KEY `FK_2283661b16fe7b63d2bbb567e3b` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_2283661b16fe7b63d2bbb567e3b` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_4d8e6d1c708ee7c0d06cf98f56d` FOREIGN KEY (`criterioServiciosCrisId`) REFERENCES `criterio_servicios` (`cris_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_servicios: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_servicios`;

-- Volcando estructura para tabla sehab.cumplimiento_ser_farmaceutico
CREATE TABLE IF NOT EXISTS `cumplimiento_ser_farmaceutico` (
  `cump_ser_farm_id` int NOT NULL AUTO_INCREMENT,
  `cump_ser_farm_cumple` varchar(10) NOT NULL,
  `cump_ser_farm_hallazgo` varchar(60) NOT NULL,
  `cump_ser_farm_accion` varchar(60) NOT NULL,
  `cump_ser_farm_responsable` varchar(200) NOT NULL,
  `cump_ser_farm_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioSerFarmaceuticoCriserFarmId` int DEFAULT NULL,
  PRIMARY KEY (`cump_ser_farm_id`),
  UNIQUE KEY `IDX_1f90fc235eb56ea748e1d54a7c` (`cump_ser_farm_cumple`),
  UNIQUE KEY `REL_eccf9764e696292a30489af6b1` (`criterioSerFarmaceuticoCriserFarmId`),
  KEY `FK_c7760da9f846b37cfee2bc35df9` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_c7760da9f846b37cfee2bc35df9` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_eccf9764e696292a30489af6b16` FOREIGN KEY (`criterioSerFarmaceuticoCriserFarmId`) REFERENCES `criterio_ser_farmaceutico` (`criser_farm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_ser_farmaceutico: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_ser_farmaceutico`;

-- Volcando estructura para tabla sehab.cumplimiento_terapia
CREATE TABLE IF NOT EXISTS `cumplimiento_terapia` (
  `cump_ter_id` int NOT NULL AUTO_INCREMENT,
  `cump_ter_cumple` varchar(10) NOT NULL,
  `cump_ter_hallazgo` varchar(60) NOT NULL,
  `cump_ter_accion` varchar(60) NOT NULL,
  `cump_ter_responsable` varchar(200) NOT NULL,
  `cump_ter_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioTerapiaCriterId` int DEFAULT NULL,
  PRIMARY KEY (`cump_ter_id`),
  UNIQUE KEY `IDX_47737af1984dfa884ca0a28c79` (`cump_ter_cumple`),
  UNIQUE KEY `REL_78109a7553dc05b8c1104e6494` (`criterioTerapiaCriterId`),
  KEY `FK_6ab8afc5fe2aeadcd7db640dcc6` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_6ab8afc5fe2aeadcd7db640dcc6` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_78109a7553dc05b8c1104e64948` FOREIGN KEY (`criterioTerapiaCriterId`) REFERENCES `criterio_terapia` (`criter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_terapia: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_terapia`;

-- Volcando estructura para tabla sehab.cumplimiento_transp_asistencial
CREATE TABLE IF NOT EXISTS `cumplimiento_transp_asistencial` (
  `cump_trans_asis_id` int NOT NULL AUTO_INCREMENT,
  `cump_trans_asis_cumple` varchar(10) NOT NULL,
  `cump_trans_asis_hallazgo` varchar(60) NOT NULL,
  `cump_trans_asis_accion` varchar(60) NOT NULL,
  `cump_trans_asis_responsable` varchar(200) NOT NULL,
  `cump_trans_asis_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioTranspAsistencialCriTransAsisId` int DEFAULT NULL,
  PRIMARY KEY (`cump_trans_asis_id`),
  UNIQUE KEY `IDX_7f816ce8ba27d07cf2f21e53f9` (`cump_trans_asis_cumple`),
  UNIQUE KEY `REL_f544ff06bbc309ceb75234b6b3` (`criterioTranspAsistencialCriTransAsisId`),
  KEY `FK_b9afeb23a499564222b4eaf21bb` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_b9afeb23a499564222b4eaf21bb` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_f544ff06bbc309ceb75234b6b35` FOREIGN KEY (`criterioTranspAsistencialCriTransAsisId`) REFERENCES `criterio_trans_asistencial` (`cri_trans_asis_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_transp_asistencial: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_transp_asistencial`;

-- Volcando estructura para tabla sehab.cumplimiento_urgencias
CREATE TABLE IF NOT EXISTS `cumplimiento_urgencias` (
  `cump_urge_id` int NOT NULL AUTO_INCREMENT,
  `cump_urge_cumple` varchar(10) NOT NULL,
  `cump_urge_hallazgo` varchar(60) NOT NULL,
  `cump_urge_accion` varchar(60) NOT NULL,
  `cump_urge_responsable` varchar(200) NOT NULL,
  `cump_urge_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioUrgenciasCriurgeId` int DEFAULT NULL,
  PRIMARY KEY (`cump_urge_id`),
  UNIQUE KEY `IDX_f11bcca44fdd38168b76331df5` (`cump_urge_cumple`),
  UNIQUE KEY `REL_5dde337b06fd82d94ff3f20513` (`criterioUrgenciasCriurgeId`),
  KEY `FK_0557663fb7f3f6b3957e9cbb291` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_0557663fb7f3f6b3957e9cbb291` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_5dde337b06fd82d94ff3f205137` FOREIGN KEY (`criterioUrgenciasCriurgeId`) REFERENCES `criterio_urgencias` (`criurge_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_urgencias: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_urgencias`;

-- Volcando estructura para tabla sehab.cumplimiento_vacunacion
CREATE TABLE IF NOT EXISTS `cumplimiento_vacunacion` (
  `cump_vac_id` int NOT NULL AUTO_INCREMENT,
  `cump_vac_cumple` varchar(10) NOT NULL,
  `cump_vac_hallazgo` varchar(60) NOT NULL,
  `cump_vac_accion` varchar(60) NOT NULL,
  `cump_vac_responsable` varchar(200) NOT NULL,
  `cump_vac_fecha_limite` date NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `criterioVacunacionCrivacId` int DEFAULT NULL,
  PRIMARY KEY (`cump_vac_id`),
  UNIQUE KEY `IDX_5952f3dedf396b10c012577f01` (`cump_vac_cumple`),
  UNIQUE KEY `REL_2529f169188e15c5b0ab520f27` (`criterioVacunacionCrivacId`),
  KEY `FK_a455885d8333b793413d78b1cfc` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_2529f169188e15c5b0ab520f27e` FOREIGN KEY (`criterioVacunacionCrivacId`) REFERENCES `criterio_vacunacion` (`crivac_id`),
  CONSTRAINT `FK_a455885d8333b793413d78b1cfc` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cumplimiento_vacunacion: ~0 rows (aproximadamente)
DELETE FROM `cumplimiento_vacunacion`;

-- Volcando estructura para tabla sehab.cump_eva_sic
CREATE TABLE IF NOT EXISTS `cump_eva_sic` (
  `eva_cump_id` int NOT NULL,
  `cump_eva_id` int NOT NULL,
  PRIMARY KEY (`eva_cump_id`,`cump_eva_id`),
  KEY `IDX_81b35cb80deaa83e79fd629a78` (`eva_cump_id`),
  KEY `IDX_590349b8ff579f3fbaae078bfb` (`cump_eva_id`),
  CONSTRAINT `FK_590349b8ff579f3fbaae078bfb2` FOREIGN KEY (`cump_eva_id`) REFERENCES `cumplimientosic` (`cumpl_id`),
  CONSTRAINT `FK_81b35cb80deaa83e79fd629a78f` FOREIGN KEY (`eva_cump_id`) REFERENCES `evaluacionsic` (`eva_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.cump_eva_sic: ~0 rows (aproximadamente)
DELETE FROM `cump_eva_sic`;

-- Volcando estructura para tabla sehab.datos-verificados
CREATE TABLE IF NOT EXISTS `datos-verificados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `act_municipio` varchar(20) NOT NULL,
  `act_prestador` varchar(100) NOT NULL,
  `act_nit` varchar(11) NOT NULL,
  `act_sede` varchar(100) NOT NULL,
  `act_direccion` varchar(55) NOT NULL,
  `act_clasificacion` varchar(70) NOT NULL,
  `act_cod_habilitacion` varchar(12) NOT NULL,
  `act_cod_sede` varchar(12) NOT NULL,
  `act_telefono` varchar(85) NOT NULL,
  `act_representante` varchar(55) NOT NULL,
  `act_gerente` varchar(55) NOT NULL,
  `act_correo` varchar(50) NOT NULL,
  `actaVerificacionDatosEncontradosId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_ce592070efbb235df41ad08407` (`actaVerificacionDatosEncontradosId`),
  CONSTRAINT `FK_ce592070efbb235df41ad084070` FOREIGN KEY (`actaVerificacionDatosEncontradosId`) REFERENCES `acta-verificacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.datos-verificados: ~0 rows (aproximadamente)
DELETE FROM `datos-verificados`;

-- Volcando estructura para tabla sehab.diagnostico_vascular
CREATE TABLE IF NOT EXISTS `diagnostico_vascular` (
  `diag_vas_id` int NOT NULL AUTO_INCREMENT,
  `diag_vas_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`diag_vas_id`),
  UNIQUE KEY `IDX_93054f47c2f25367e0a5c8cf6f` (`diag_vas_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.diagnostico_vascular: ~0 rows (aproximadamente)
DELETE FROM `diagnostico_vascular`;

-- Volcando estructura para tabla sehab.dialisis
CREATE TABLE IF NOT EXISTS `dialisis` (
  `dial_id` int NOT NULL AUTO_INCREMENT,
  `dial_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`dial_id`),
  UNIQUE KEY `IDX_922ac410d934e1f122c5d54649` (`dial_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.dialisis: ~0 rows (aproximadamente)
DELETE FROM `dialisis`;

-- Volcando estructura para tabla sehab.dominio
CREATE TABLE IF NOT EXISTS `dominio` (
  `dom_id` int NOT NULL AUTO_INCREMENT,
  `dom_nombre` varchar(70) NOT NULL,
  PRIMARY KEY (`dom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.dominio: ~0 rows (aproximadamente)
DELETE FROM `dominio`;
INSERT INTO `dominio` (`dom_id`, `dom_nombre`) VALUES
	(1, 'Efectividad'),
	(2, 'Seguridad'),
	(3, 'Experiencia de la atención');

-- Volcando estructura para tabla sehab.etapaind
CREATE TABLE IF NOT EXISTS `etapaind` (
  `eta_id` int NOT NULL AUTO_INCREMENT,
  `eta_nombre` varchar(80) NOT NULL,
  PRIMARY KEY (`eta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.etapaind: ~0 rows (aproximadamente)
DELETE FROM `etapaind`;
INSERT INTO `etapaind` (`eta_id`, `eta_nombre`) VALUES
	(1, 'COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE'),
	(2, 'CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE'),
	(3, 'REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO'),
	(4, 'DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO');

-- Volcando estructura para tabla sehab.evaluacion-pamec
CREATE TABLE IF NOT EXISTS `evaluacion-pamec` (
  `eva_id` int NOT NULL AUTO_INCREMENT,
  `eva_creado` date NOT NULL,
  `evalPrestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `evalActaPamecId` int DEFAULT NULL,
  PRIMARY KEY (`eva_id`),
  UNIQUE KEY `REL_a51ee48031a0f1c1145b1d4021` (`evalActaPamecId`),
  KEY `FK_f022ee72a8602dfcf9d90a2d177` (`evalPrestadorPreCodHabilitacion`),
  CONSTRAINT `FK_a51ee48031a0f1c1145b1d40213` FOREIGN KEY (`evalActaPamecId`) REFERENCES `acta-pamec-pdf` (`id`),
  CONSTRAINT `FK_f022ee72a8602dfcf9d90a2d177` FOREIGN KEY (`evalPrestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.evaluacion-pamec: ~0 rows (aproximadamente)
DELETE FROM `evaluacion-pamec`;

-- Volcando estructura para tabla sehab.evaluacion-sp-independientes
CREATE TABLE IF NOT EXISTS `evaluacion-sp-independientes` (
  `eva_id` int NOT NULL AUTO_INCREMENT,
  `eva_creado` date NOT NULL,
  `evalPrestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `evalActaIndId` int DEFAULT NULL,
  PRIMARY KEY (`eva_id`),
  UNIQUE KEY `REL_339cf48132a2dd06a859949dd6` (`evalActaIndId`),
  KEY `FK_58c3c139664e7b95c8fd2b170e4` (`evalPrestadorPreCodHabilitacion`),
  CONSTRAINT `FK_339cf48132a2dd06a859949dd6e` FOREIGN KEY (`evalActaIndId`) REFERENCES `acta-sp-ind-pdf` (`id`),
  CONSTRAINT `FK_58c3c139664e7b95c8fd2b170e4` FOREIGN KEY (`evalPrestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.evaluacion-sp-independientes: ~0 rows (aproximadamente)
DELETE FROM `evaluacion-sp-independientes`;

-- Volcando estructura para tabla sehab.evaluacionips
CREATE TABLE IF NOT EXISTS `evaluacionips` (
  `evips_id` int NOT NULL AUTO_INCREMENT,
  `evips_nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.evaluacionips: ~0 rows (aproximadamente)
DELETE FROM `evaluacionips`;
INSERT INTO `evaluacionips` (`evips_id`, `evips_nombre`) VALUES
	(1, 'EVALUACION DE HERRAMIENTAS PARA LA IDENTIFICACIÓN Y GESTIÓN DE EVENTOS ADVERSO'),
	(2, 'MONITORIZACIÓN DE ASPECTOS RELACIONADOS CON LA SEGURIDAD DEL PACIENTE'),
	(3, 'DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO'),
	(4, 'USO SEGURO DE  MEDICAMENTOS'),
	(5, 'ASEGURAR LA CORRECTA IDENTIFICACIÓN DE PACIENTES'),
	(6, 'GARANTIZAR LA ATENCIÓN SEGURA DE LA MADRE Y EL RECIEN NACIDO'),
	(7, 'MEJORAR LA SEGURIDAD EN LOS PROCEDIMIENTOS QUIRURGICOS'),
	(8, 'PREVENCIÓN DE ULCERAS POR PRESIÓN'),
	(9, 'PROCESOS PARA LA PREVENCIÓN Y REDUCCIÓN DE LA FRECUENCIA DE CAÍDA');

-- Volcando estructura para tabla sehab.evaluacionips_creadas
CREATE TABLE IF NOT EXISTS `evaluacionips_creadas` (
  `evips_id` int NOT NULL AUTO_INCREMENT,
  `evips_creado` date DEFAULT NULL,
  `evalIpsPrestatorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `evalActaSpipsId` int DEFAULT NULL,
  PRIMARY KEY (`evips_id`),
  UNIQUE KEY `REL_9da670c525e6277f9468120ec3` (`evalActaSpipsId`),
  KEY `FK_930d5cf39de72cea7931c039d8e` (`evalIpsPrestatorPreCodHabilitacion`),
  CONSTRAINT `FK_930d5cf39de72cea7931c039d8e` FOREIGN KEY (`evalIpsPrestatorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_9da670c525e6277f9468120ec30` FOREIGN KEY (`evalActaSpipsId`) REFERENCES `acta-sp-ips-pdf` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.evaluacionips_creadas: ~0 rows (aproximadamente)
DELETE FROM `evaluacionips_creadas`;

-- Volcando estructura para tabla sehab.evaluacionsic
CREATE TABLE IF NOT EXISTS `evaluacionsic` (
  `eva_id` int NOT NULL AUTO_INCREMENT,
  `eva_creado` date NOT NULL,
  `evalSicPrestatorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `evalActaSicId` int DEFAULT NULL,
  PRIMARY KEY (`eva_id`),
  UNIQUE KEY `REL_e2508abcdc0782c89449d98d0d` (`evalActaSicId`),
  KEY `FK_1d85d0f6fa73fd06e35f1291aaa` (`evalSicPrestatorPreCodHabilitacion`),
  CONSTRAINT `FK_1d85d0f6fa73fd06e35f1291aaa` FOREIGN KEY (`evalSicPrestatorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`),
  CONSTRAINT `FK_e2508abcdc0782c89449d98d0d4` FOREIGN KEY (`evalActaSicId`) REFERENCES `acta-sic-pdf` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.evaluacionsic: ~0 rows (aproximadamente)
DELETE FROM `evaluacionsic`;

-- Volcando estructura para tabla sehab.externa_especializada
CREATE TABLE IF NOT EXISTS `externa_especializada` (
  `exte_id` int NOT NULL AUTO_INCREMENT,
  `exte_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`exte_id`),
  UNIQUE KEY `IDX_3b63721faf4c4b593e610ccf4e` (`exte_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.externa_especializada: ~0 rows (aproximadamente)
DELETE FROM `externa_especializada`;

-- Volcando estructura para tabla sehab.externa_general
CREATE TABLE IF NOT EXISTS `externa_general` (
  `extg_id` int NOT NULL AUTO_INCREMENT,
  `extg_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`extg_id`),
  UNIQUE KEY `IDX_72c873dee566b46f2811ed0b07` (`extg_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.externa_general: ~0 rows (aproximadamente)
DELETE FROM `externa_general`;

-- Volcando estructura para tabla sehab.gestion_pretransfusional
CREATE TABLE IF NOT EXISTS `gestion_pretransfusional` (
  `gestp_id` int NOT NULL AUTO_INCREMENT,
  `gestp_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`gestp_id`),
  UNIQUE KEY `IDX_d7733507b0ccc765b84a490a90` (`gestp_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.gestion_pretransfusional: ~0 rows (aproximadamente)
DELETE FROM `gestion_pretransfusional`;

-- Volcando estructura para tabla sehab.grupo-evaluacion
CREATE TABLE IF NOT EXISTS `grupo-evaluacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.grupo-evaluacion: ~0 rows (aproximadamente)
DELETE FROM `grupo-evaluacion`;

-- Volcando estructura para tabla sehab.hermod_interven
CREATE TABLE IF NOT EXISTS `hermod_interven` (
  `hermointer_id` int NOT NULL AUTO_INCREMENT,
  `hermointer_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`hermointer_id`),
  UNIQUE KEY `IDX_66b3a9d0034a3686f70bbd7824` (`hermointer_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.hermod_interven: ~0 rows (aproximadamente)
DELETE FROM `hermod_interven`;

-- Volcando estructura para tabla sehab.hospitalizacion
CREATE TABLE IF NOT EXISTS `hospitalizacion` (
  `hosp_id` int NOT NULL AUTO_INCREMENT,
  `hosp_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`hosp_id`),
  UNIQUE KEY `IDX_316f6ccbc118257075d77bca72` (`hosp_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.hospitalizacion: ~0 rows (aproximadamente)
DELETE FROM `hospitalizacion`;

-- Volcando estructura para tabla sehab.hospitalizacion_cronico
CREATE TABLE IF NOT EXISTS `hospitalizacion_cronico` (
  `hosp_cron_id` int NOT NULL AUTO_INCREMENT,
  `hosp_cron_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`hosp_cron_id`),
  UNIQUE KEY `IDX_2695d8d89e7d5f2ed81f63357d` (`hosp_cron_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.hospitalizacion_cronico: ~0 rows (aproximadamente)
DELETE FROM `hospitalizacion_cronico`;

-- Volcando estructura para tabla sehab.hospitalizacion_mental
CREATE TABLE IF NOT EXISTS `hospitalizacion_mental` (
  `hosp_mental_id` int NOT NULL AUTO_INCREMENT,
  `hosp_mental_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`hosp_mental_id`),
  UNIQUE KEY `IDX_a1cb3a4e295303265c5769fdc2` (`hosp_mental_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.hospitalizacion_mental: ~0 rows (aproximadamente)
DELETE FROM `hospitalizacion_mental`;

-- Volcando estructura para tabla sehab.hospitalizacion_parcial
CREATE TABLE IF NOT EXISTS `hospitalizacion_parcial` (
  `hosp_parc__id` int NOT NULL AUTO_INCREMENT,
  `hosp_parc_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`hosp_parc__id`),
  UNIQUE KEY `IDX_5324e789747ad6243585cabd10` (`hosp_parc_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.hospitalizacion_parcial: ~0 rows (aproximadamente)
DELETE FROM `hospitalizacion_parcial`;

-- Volcando estructura para tabla sehab.img_rad_ionizantes
CREATE TABLE IF NOT EXISTS `img_rad_ionizantes` (
  `imgradion_id` int NOT NULL AUTO_INCREMENT,
  `imgradion_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`imgradion_id`),
  UNIQUE KEY `IDX_d42244c15deff78c19612806a5` (`imgradion_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.img_rad_ionizantes: ~0 rows (aproximadamente)
DELETE FROM `img_rad_ionizantes`;

-- Volcando estructura para tabla sehab.img_rad_noionizantes
CREATE TABLE IF NOT EXISTS `img_rad_noionizantes` (
  `imgrad_noion_id` int NOT NULL AUTO_INCREMENT,
  `imgrad_noion_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`imgrad_noion_id`),
  UNIQUE KEY `IDX_11c5d42c05042d2658cd6f5381` (`imgrad_noion_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.img_rad_noionizantes: ~0 rows (aproximadamente)
DELETE FROM `img_rad_noionizantes`;

-- Volcando estructura para tabla sehab.indicador
CREATE TABLE IF NOT EXISTS `indicador` (
  `ind_id` varchar(7) NOT NULL,
  `ind_nombre` varchar(255) NOT NULL,
  `indDominioDomId` int DEFAULT NULL,
  PRIMARY KEY (`ind_id`),
  KEY `FK_59ace04d524d6eadda64abfd478` (`indDominioDomId`),
  CONSTRAINT `FK_59ace04d524d6eadda64abfd478` FOREIGN KEY (`indDominioDomId`) REFERENCES `dominio` (`dom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.indicador: ~0 rows (aproximadamente)
DELETE FROM `indicador`;
INSERT INTO `indicador` (`ind_id`, `ind_nombre`, `indDominioDomId`) VALUES
	('P.1.1', 'Proporción de gestantes con consulta de control prenatal de primera vez antes de las 12 semanas de gestación', 1),
	('P.1.10', 'Proporción de gestantes con asesoría pre-test para prueba de Virus de la inmunodeficiencia Humana (VIH)', 1),
	('P.1.11', 'Proporción de niños y niñas menores de 18 meses, hijos de madre viviendo con Virus de la inmunodeficiencia Humana (VIH), con diagnóstico de Virus de la inmunodeficiencia Humana (VIH)', 1),
	('P.1.12', 'Proporción de mujeres a las que se les realizó toma de serología en el momento del parto o aborto', 1),
	('P.1.13', 'Proporción de pacientes hospitalizados por Dengue Grave', 1),
	('P.1.14', 'Proporción de personas con Hipertensión Arterial a quienes se les realiza medición de LDL', 1),
	('P.1.15', 'Proporción de personas con Diabetes a quienes se les realizó toma de hemoglobina glicosilada en el último semestre', 1),
	('P.1.16', 'Proporción de personas con Diabetes Mellitus a quienes se les realiza medición de LDL', 1),
	('P.1.17', 'Proporción de personas con Hipertensión Arterial (HTA), estudiadas para Enfermedad Renal Crónica (ERC)', 1),
	('P.1.18', 'Proporción de personas con Diabetes Mellitus, estudiadas para Enfermedad Renal Crónica (ERC)', 1),
	('P.1.19', 'Proporción de personas en diálisis con hemoglobina mayor o igual a 10 g/dI', 1),
	('P.1.2', 'Proporción de gestantes con valoración por odontología', 1),
	('P.1.20', 'Proporción de pacientes prevalentes en hemodiálisis con catéter como acceso vascular', 1),
	('P.1.21', 'Proporción de mujeres entre los 50 y 69 años con toma de mamografia en los últimos 2 años', 1),
	('P.1.22', 'Tiempo promedio de espera para el inicio del tratamiento en cáncer de mama', 1),
	('P.1.23', 'Proporción de mujeres entre 25 y 69 años con toma de citología en el último año', 1),
	('P.1.24', 'Tiempo promedio de espera entre el diagnóstico probable y el diagnóstico definitivo Leucemia Aguda Pediátrica (LAP) en menores de 18 años', 1),
	('P.1.25', 'Proporción de menores deis años que cumplen el estándar de 5 días para el inicio de tratamiento de LAP', 1),
	('P.1.3', 'Proporción de partos por cesárea', 1),
	('P.1.4', 'Tasa de mortalidad perinatal', 1),
	('P.1.5', 'Relación Morbilidad Materna Extrema/ Muerte Materna temprana (MME/MM)', 1),
	('P.1.6', 'Proporción de recién nacidos con tarnizaje para Hipotiroidismo', 1),
	('P.1.7', 'Proporción de reingreso hospitalario por Infección Respiratoria Aguda (IRA) en menores de 5 años', 1),
	('P.1.8', 'Letalidad por Infección Respiratoria Aguda (IRA) en menores de 5 años', 1),
	('P.1.9', 'Letalidad en menores de 5 años por Enfermedad Diarreica Aguda (EDA)', 1),
	('P.2.1', 'Tasa de Incidencia de Neumonia Asociada a Ventilador Mecánico (NAV)', 2),
	('P.2.10', 'Proporción de eventos adversos relacionados con la administración de medicamentos en hospitalización', 2),
	('P.2.11', 'Proporción de eventos adversos relacionados con la administración de medicamentos en urgencias', 2),
	('P.2.12', 'Tasa de úlceras por presión.', 2),
	('P.2.13', 'Proporción de reingreso de pacientes al servicio de Urgencias en menos de 72 horas', 2),
	('P.2.14', 'Tasa de reingreso de pacientes hospitalizados en menos de 15 días', 2),
	('P.2.15', 'Proporción de cancelación de cirugía', 2),
	('P.2.2', 'Tasa de Incidencia de Infección del Tracto Urinario Asociada a Catéter (ISTU-AC)', 2),
	('P.2.3', 'Tasa de Incidencia de Infección del Torrente Sanguíneo Asociada a Catéter (ITS- AC)', 2),
	('P.2.4', 'Proporción de endometritlis post parto vaginal', 2),
	('P.2.5', 'Proporción de endometritis pos cesárea', 2),
	('P.2.6', 'Tasa de caída de pacientes en el servicio de hospitalización', 2),
	('P.2.7', 'Tasa de caída de pacientes en el servicio de urgencias', 2),
	('P.2.8', 'Tasa de ca ida de pacientes en el servicio de consulta externa', 2),
	('P.2.9', 'Tasa de caída de pacientes en el servicio de Apoyo diagnóstico y complementación terapéutica.', 2),
	('P.3.1', 'Tiempo promedio de espera para la asignación de cita de Medicina General', 3),
	('P.3.10', 'Tiempo promedio de espera para la atención del paciente clasificado como Triaqe II', 3),
	('P.3.11', 'Tiempo promedio de espera para la realización de Cirugía de Cataratas', 3),
	('P.3.12', 'Tiempo promedio de espera para la realización de Cirugía de Reemplazo de Cadera', 3),
	('P.3.13', 'Tiempo promedio de espera para la realización de Cirugía de revascularización miocárdica', 3),
	('P.3.14', 'Proporción de satisfacción global de usuarios de IPS', 3),
	('P.3.15', 'Proporción de usuarios que recomendaría su IPS a un familiar o amigo', 3),
	('P.3.2', 'Tiempo promedio de espera para la asignación de cita de Odontología General', 3),
	('P.3.3', 'Tiempo promedio de espera para la asignación de cita de Medicina interna', 3),
	('P.3.4', 'Tiempo promedio de espera para la asignación de cita de Pediatría', 3),
	('P.3.5', 'Tiempo promedio de espera para la asignación de cita de Gihedotogia', 3),
	('P.3.6', 'Tiempo promedio de espera para la asignación de cita de Obstetricia', 3),
	('P.3.7', 'Tiempo promedio de espera para la asignación de cita de Cirugía genera', 3),
	('P.3.8', 'Tiempo promedio de espera para la toma de Ecografía', 3),
	('P.3.9', 'Tiempo promedio de espera para la toma de Resonancia Magnética Nuclear', 3);

-- Volcando estructura para tabla sehab.item
CREATE TABLE IF NOT EXISTS `item` (
  `ite_id` int NOT NULL AUTO_INCREMENT,
  `ite_nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`ite_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.item: ~0 rows (aproximadamente)
DELETE FROM `item`;
INSERT INTO `item` (`ite_id`, `ite_nombre`) VALUES
	(1, 'PLANEACIÓN'),
	(2, 'IMPLEMENTACIÓN'),
	(3, 'VERIFICACIÓN'),
	(4, 'AJUSTE');

-- Volcando estructura para tabla sehab.ite_eva
CREATE TABLE IF NOT EXISTS `ite_eva` (
  `ite_eva_id` int NOT NULL,
  `eva_ite_id` int NOT NULL,
  PRIMARY KEY (`ite_eva_id`,`eva_ite_id`),
  KEY `IDX_cc548b0f7f49130fd2abb819f4` (`ite_eva_id`),
  KEY `IDX_df9a2558ac4ddf0d2630deabc8` (`eva_ite_id`),
  CONSTRAINT `FK_cc548b0f7f49130fd2abb819f4b` FOREIGN KEY (`ite_eva_id`) REFERENCES `evaluacionips` (`evips_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_df9a2558ac4ddf0d2630deabc82` FOREIGN KEY (`eva_ite_id`) REFERENCES `item` (`ite_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.ite_eva: ~0 rows (aproximadamente)
DELETE FROM `ite_eva`;

-- Volcando estructura para tabla sehab.lab_citologia_uterina
CREATE TABLE IF NOT EXISTS `lab_citologia_uterina` (
  `labcit_uter_id` int NOT NULL AUTO_INCREMENT,
  `labcit_uter_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`labcit_uter_id`),
  UNIQUE KEY `IDX_ad916a20edc92d7dff8da5bcd8` (`labcit_uter_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.lab_citologia_uterina: ~0 rows (aproximadamente)
DELETE FROM `lab_citologia_uterina`;

-- Volcando estructura para tabla sehab.lab_clinico
CREATE TABLE IF NOT EXISTS `lab_clinico` (
  `labclin_id` int NOT NULL AUTO_INCREMENT,
  `labclin_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`labclin_id`),
  UNIQUE KEY `IDX_719df91266bf99a02310eb1484` (`labclin_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.lab_clinico: ~0 rows (aproximadamente)
DELETE FROM `lab_clinico`;

-- Volcando estructura para tabla sehab.lab_histotecnologia
CREATE TABLE IF NOT EXISTS `lab_histotecnologia` (
  `labhisto_id` int NOT NULL AUTO_INCREMENT,
  `labhisto_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`labhisto_id`),
  UNIQUE KEY `IDX_16c905f0ed3dce96f45c7ef690` (`labhisto_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.lab_histotecnologia: ~0 rows (aproximadamente)
DELETE FROM `lab_histotecnologia`;

-- Volcando estructura para tabla sehab.med_nuclear
CREATE TABLE IF NOT EXISTS `med_nuclear` (
  `med_nucl_id` int NOT NULL AUTO_INCREMENT,
  `med_nucl_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`med_nucl_id`),
  UNIQUE KEY `IDX_9053412fe51030658b1586039e` (`med_nucl_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.med_nuclear: ~0 rows (aproximadamente)
DELETE FROM `med_nuclear`;

-- Volcando estructura para tabla sehab.muestras_lab_clinico
CREATE TABLE IF NOT EXISTS `muestras_lab_clinico` (
  `mue_lab_cli_id` int NOT NULL AUTO_INCREMENT,
  `mue_lab_cli_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`mue_lab_cli_id`),
  UNIQUE KEY `IDX_90dc34d018636b6ee89a1cdda6` (`mue_lab_cli_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.muestras_lab_clinico: ~0 rows (aproximadamente)
DELETE FROM `muestras_lab_clinico`;

-- Volcando estructura para tabla sehab.municipio
CREATE TABLE IF NOT EXISTS `municipio` (
  `mun_id` int NOT NULL AUTO_INCREMENT,
  `mun_nombre` varchar(70) NOT NULL,
  PRIMARY KEY (`mun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.municipio: ~0 rows (aproximadamente)
DELETE FROM `municipio`;
INSERT INTO `municipio` (`mun_id`, `mun_nombre`) VALUES
	(1, 'COLÓN'),
	(2, 'MOCOA'),
	(3, 'ORITO'),
	(4, 'PUERTO ASIS'),
	(5, 'PUERTO CAICEDO'),
	(6, 'PUERTO GUZMAN'),
	(7, 'PUERTO LEGUIZAMO'),
	(8, 'SAN FRANCISCO'),
	(9, 'SAN MIGUEL'),
	(10, 'SANTIAGO'),
	(11, 'SIBUNDOY'),
	(12, 'VALLE DEL GUAMUEZ'),
	(13, 'VILLA GARZON');

-- Volcando estructura para tabla sehab.parto
CREATE TABLE IF NOT EXISTS `parto` (
  `parto_id` int NOT NULL AUTO_INCREMENT,
  `parto_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`parto_id`),
  UNIQUE KEY `IDX_6ab0614378dfe76f051e5f40ce` (`parto_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.parto: ~0 rows (aproximadamente)
DELETE FROM `parto`;

-- Volcando estructura para tabla sehab.patologia
CREATE TABLE IF NOT EXISTS `patologia` (
  `pato_id` int NOT NULL AUTO_INCREMENT,
  `pato_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`pato_id`),
  UNIQUE KEY `IDX_41ed8b2f58a9dac570f4fa8b88` (`pato_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.patologia: ~0 rows (aproximadamente)
DELETE FROM `patologia`;

-- Volcando estructura para tabla sehab.prehospitalaria
CREATE TABLE IF NOT EXISTS `prehospitalaria` (
  `parto_id` int NOT NULL AUTO_INCREMENT,
  `parto_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`parto_id`),
  UNIQUE KEY `IDX_7166d8c5fd6c964f9a0562129c` (`parto_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.prehospitalaria: ~0 rows (aproximadamente)
DELETE FROM `prehospitalaria`;

-- Volcando estructura para tabla sehab.prestador
CREATE TABLE IF NOT EXISTS `prestador` (
  `pre_cod_habilitacion` varchar(15) NOT NULL,
  `pre_nombre` varchar(100) NOT NULL,
  `pre_nit` varchar(11) NOT NULL,
  `pre_direccion` varchar(90) NOT NULL,
  `pre_telefono` varchar(50) NOT NULL,
  `pre_email` varchar(120) NOT NULL,
  `pre_habilitado` varchar(3) NOT NULL,
  `pre_representante` varchar(60) DEFAULT NULL,
  `preClasificacionClaId` int DEFAULT NULL,
  `preClaseClasId` int DEFAULT NULL,
  `preTipoTipId` int DEFAULT NULL,
  `preMunicipioMunId` int DEFAULT NULL,
  PRIMARY KEY (`pre_cod_habilitacion`),
  KEY `FK_8a0a9179300d046b3789bc98a5b` (`preClasificacionClaId`),
  KEY `FK_7e3ca36d4331efce00398ca02a4` (`preClaseClasId`),
  KEY `FK_583435bcd33a092e089b16e5f80` (`preTipoTipId`),
  KEY `FK_da8444a667b2c1d1567304c07fc` (`preMunicipioMunId`),
  CONSTRAINT `FK_583435bcd33a092e089b16e5f80` FOREIGN KEY (`preTipoTipId`) REFERENCES `tipo` (`tip_id`),
  CONSTRAINT `FK_7e3ca36d4331efce00398ca02a4` FOREIGN KEY (`preClaseClasId`) REFERENCES `clase` (`clas_id`),
  CONSTRAINT `FK_8a0a9179300d046b3789bc98a5b` FOREIGN KEY (`preClasificacionClaId`) REFERENCES `clasificacion` (`cla_id`),
  CONSTRAINT `FK_da8444a667b2c1d1567304c07fc` FOREIGN KEY (`preMunicipioMunId`) REFERENCES `municipio` (`mun_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.prestador: ~0 rows (aproximadamente)
DELETE FROM `prestador`;
INSERT INTO `prestador` (`pre_cod_habilitacion`, `pre_nombre`, `pre_nit`, `pre_direccion`, `pre_telefono`, `pre_email`, `pre_habilitado`, `pre_representante`, `preClasificacionClaId`, `preClaseClasId`, `preTipoTipId`, `preMunicipioMunId`) VALUES
	('8600100008', 'José Javier Rodriguez Rodriguez', '76312363', 'Cra 9 Nro 24-7', '098 4200477', 'javierdermato@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100016', 'DIAGNOSTICOS E.U.', '846001425', 'CALLE 12 No 9 -103', '8-4296179', 'diagnosticoseu@hotmail.com', 'SI', 'DANIEL ANGEL ARIAS OLAVE', 1, 1, 2, 2),
	('8600100019', 'MARIA ELENA GUERRERO GOMEZ', '27353661', 'CALLE 7A No. 10-11EDIFICIO MARIA ELENA', '3118182728', 'mariaeguerrero53@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100031', 'IVAN RAMIRO CHICO VACA', '273010', 'Calle 12 No. 9-21', '4200625', 'odontocenter2@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100038', 'EMPRESA SOCIAL DEL ESTADO HOSPITAL JOSÉ MARÍA HERNÁNDEZ', '891200679', 'CL. 14 Nº 7 - 26 AV. 8', '(57)(8) 4296056 - 4296057', 'gerencia@esehospital2.gov.co', 'SI', 'MANUEL JAIR ZUÑIGA BRAVO', 1, 1, 1, 2),
	('8600100050', 'REHABILITAR DEL PUTUMAYO SAS', '846003158', 'CALLE 11 No. 8 -76 BARRIO KENEDY', '4206217', 'rehabilitardelputumayo@hotmail.com', 'SI', 'YUBI JIMENA CAÑAR ENRIQUEZ', 1, 1, 2, 2),
	('8600100105', 'CLINICA CREAR VISION S.A.S', '846003067', 'KR 8 No. 17-156', '4205336', 'gerencia@clinicacrearvision.com.co', 'SI', 'ANA CRISTINA NORIEGA ALMEIDA', 1, 1, 2, 2),
	('8600100154', 'LILIANA MARICEL RODRIGUEZ RENZA', '52158828', 'CARRERA 4 No 7 - 06', '4205356 - 3108814541', 'ipsexpovision@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100171', 'FRANCISCA LIDA TERAN ACOSTA', '51609530', 'CL 12 N 9-48', '3112575123', 'franclida01@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100172', 'UNIDAD MEDICO ASISTENCIAL DEL PUTUMAYO EMPRESA UNIPERSONAL - UNIMAP E.U.', '800188271', 'Avenida Colombia No 14 - 87', '4201616- 4295079 - 3142377958 - 3123779718', 'gerente@unimapeu.com', 'SI', 'ASTRITH YURANY CORAL BERNAL', 1, 1, 2, 2),
	('8600100177', 'ANA CAROLINA VIVAS CORDOBA', '52718865', 'CRA 4ta No 08 - 31', '4205923', 'cavic-2@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100184', 'OPTICA FAMILIAR E.U.', '846004074', 'CARRERA 14 No. 13-08', '4205260', 'optifami12@yahoo.es', 'SI', 'VICTOR HERNAN LOPEZ FAJARDO', 1, 1, 2, 2),
	('8600100197', 'CLINICA AYNAN LTDA', '900012404', 'KR 14 # 11-36', '098 4296350', 'luanjur@yahoo.es', 'SI', 'SANDRA MIREYA CHINGAL SOLARTE', 1, 1, 2, 2),
	('8600100204', 'LILIAN DEYANIRA ESTRADA SOLARTE', '52712979', 'CARRERA 4 No.7-06', '3204443425', 'deyaniraestradasolarte@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100215', 'CODENT ODONTOLOGIA ESPECIALIZADA IPS E.U.', '900045440', 'KR 8 15-92', '3103381168', 'codentipsodontologia@gmail.com', 'SI', 'CRUZ ROSMIRA GAVIRIA SERNA', 1, 1, 2, 2),
	('8600100217', 'CORPORACION MI IPS NARIÑO', '814006380', 'CALLE 15 N° 7A - 40 BARRIO JARDIN', '(8)4205150-3008960844- 3008960140', 'mequinterop@miips.com.co // nasalasr@miips.com.co', 'SI', 'MARTHA ELENA QUINTERO PEREZ', 1, 1, 2, 2),
	('8600100218', 'JAIME ALBERYAM DELGADO RENZA', '79658045', 'AVENIDA 8 CALLE 14 CON CARRERA 12 ESQUINA', '3103488895', 'alberyam@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100229', 'CENTRO DE IMÁGENES DIAGNOSTICAS TERCER MILENIO SAS', '900055393', 'CALLE 14 No 12 - 81', '420 45 06', 'asistente@cendidter.com', 'SI', 'ALEXANDRA GIRALDO AGUDELO', 1, 1, 2, 2),
	('8600100256', 'ZAYRA ROXANNE CHAMORRO VALENCIA', '69007549', 'CALLE 14 NUMERO 12-49', '4204101-3113047894', 'clinicabocasyboquitas@gmail.com', 'SI', 'ZAIRA ROXANNE CHAMORRO VALENCIA', 3, 2, 2, 2),
	('8600100259', 'CLÍNICA FLOREZ S.A.S.', '846003374', 'KR 8 Nº 15-50', '(57)(8)4200766', 'optilenteseu2@gmail.com', 'SI', 'CRUZ ELENA FLOREZ MURIEL', 1, 1, 2, 2),
	('8600100269', 'ERMINDA ANTONIA ROSERO LASSO', '69007128', 'carrera 9 # 10-02 Consultorio 02', '3133065153', 'roseroantonia@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100276', 'SALUD TERAPIA DEL PUTUMAYO E.U', '900130936', 'CARRERA 11A No 15-46', '3106953025', 'analis76@hotmail.com', 'SI', 'ANA LISBETH BENAVIDES BURBANO', 1, 1, 2, 2),
	('8600100299', 'OSCAR ORLANDO GUERRERO ENRIQUEZ', '98395598', 'Av 8 Calle 14 No. 12-81 OF 204', '3204366160', 'oralclinik23@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100308', 'DORIS GLADYS SALAS RODRIGUEZ', '27470448', 'AVENIDA 8 CALLE 14 # 10-15', '3147992120', 'Odosarod-11@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100365', 'ASISTENCIA MEDICA DEL SUR IPS LTDA', '900337015', 'CR 13 14 64 BRR OBRERO', '4204543', 'asistenciamedicadelsurltda@hotmail.com', 'SI', 'RUBICINTIA BUSUY GUALDRON', 1, 1, 2, 2),
	('8600100372', 'Edgar Mauricio Rojas Rojas', '17654831', 'Crra 9 N 12-44', '3107815972', 'edmaroro@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100373', 'GESTION INTEGRAL EN SALUD DEL PUTUMAYO GEINSALUD PUTUMAYO', '900354693', 'CARRERA 4 N° 9-28 BARRIO JOSE MARIA HERNANDEZ', '6084201003-3223240199-3202099280', 'geinsaludptyo@hotmail.com auditoriacalidad.2@ipsgeinsaludputumayo.com gerencia.2@ipsgeinsaludputumayo.com', 'SI', 'LIDA IMELDA CERON CHICUNQUE', 1, 1, 2, 2),
	('8600100575', 'IPS DISMECOL LTDA', '900395844', 'CALLE 14 No. 10-11 AV. 8', '4206381', 'dismecolips@hotmail.com', 'SI', 'AURORA ROCIO OJEDA BURBANO', 1, 1, 2, 2),
	('8600100613', 'MEGASALUD IPS SAS', '813008574', 'Av. 8 Calle 14 No. 7 - 26 Barrio Obrero Hospital Jose María Hernandez', '4200573', 'aomendezp@megasaludips.com', 'SI', 'ANDRES ORLANDO MENDEZ PAVA', 1, 1, 2, 2),
	('8600100623', 'NOVADEN Odontologia Especializada IPS SAS', '900500281', 'CRA. 7 NO. 11C-06', '4205271', 'gerencia@novaden.com.co', 'SI', 'ANDREA DEL PILAR CASTRILLON PINEDA', 1, 1, 2, 2),
	('8600100627', 'IPS SAMYSALUD SAS', '900506634', 'CR 7B 17B-40 BARRIO VILLA NATALIA', '4204779 - 3106776217', 'ipssamysalud@hotmail.com', 'SI', 'LUZ DARY ORTEGA JAMIOY', 1, 1, 2, 2),
	('8600100631', 'Jenny Cristina Maya Hernández', '30740556', 'Calle 10 A # 14 - 23', '3103249502', 'jennymaya2004@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100642', 'Keyla Daniela Lopez Acosta', '69008241', 'CALLE 11 No. 12-25 BARRIO OBRERO ETAPA 1', '3203558785', 'kinesis.2@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100643', 'LABORATORIO BUITRAGO S.A.S', '900591581', 'AV. 8 Cra 14 No 13-08', '4206350', 'laboratoriodianabuitrago@hotmail.com', 'SI', 'DIANA ZORAIDA BUITRAGO SALAZAR', 1, 1, 2, 2),
	('8600100660', 'SOLUCIONES INTEGRALES DE TRANSITO SAS', '900541238', 'CALLE 9 No. 18-18', '3212653672', 'crccertificamosas@gmail.com', 'SI', 'william amaully zambrano chavez', 2, 1, 2, 2),
	('8600100663', 'VICTOR HUGO RODRIGUEZ MUÑOZ', '76306801', 'CALLE 10 # 14-02', '3118286114', 'directorsalud@vhrcentropediatricoips.com', 'SI', '', 3, 2, 2, 2),
	('8600100671', 'IPS CONSULTORIO MATERNO INFALTIL - LOS ANGELES SAS', '900657044', 'CL 7 13 B MZ 16', '3218005735', 'ipslosangeles.2@gmail.com', 'SI', 'JAIRO FERNANDO GOMEZ GALINDEZ', 1, 1, 2, 2),
	('8600100691', 'SOLUCIONES INTEGRALES EN GESTION OCUPACIONAL S.A.S', '900774181', 'Av. 8 No. 15-07 B/ - Obrero', '4296281 - 3209506624', 'sigoips@gmail.com', 'SI', 'WENDY LISSETTE SANCHEZ TARAZONA', 1, 1, 2, 2),
	('8600100702', 'IPS REHABILITACION INTEGRAL SANAR S.A.S', '900840632', 'carrera16 N° 14-39 barrio obrero II etapa', '3108034229', 'ipssanarsass@gmail.com', 'SI', 'PAULA ANDREA SALCEDO BUSUY', 1, 1, 2, 2),
	('8600100712', 'WHERLEY DARIO QUIROGA PEREZ', '18124089', 'Calle 5 No. 9-305', '4296055-3183366540-3102768841', 'cmaternofetal2015@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100716', 'LÓPEZ PARRA JENNIFFER JANETH', '1124854416', 'CALLE 9 # 7-22', '3106197510-3212922098', 'optolopez90@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100721', 'EMPRESA DE REMISIONES Y TRASLADOS DIVINO NIÑO S.A.S', '900937861', 'BARRIO HUASIPANGA CLLE 15 No. 03', '3223164023', 'remisiones_sas@hotmail.com remisionessascalidad2022@gmail.com', 'SI', 'PAOLA ANDREA SOLARTE ROSERO', 4, 1, 2, 2),
	('8600100728', 'ATENCION INTEGRAL MEDICA AIMEDIC S.A.S', '900978986', 'Carrera 7 N. 15-07 Barrio el Jardin', '3132219870', 'ipsaimedic@gmail.com', 'SI', 'RUTH ROVIRA ROSERO MUÑOZ', 1, 1, 2, 2),
	('8600100733', 'OSCAR BERMEO NARVAEZ', '18125427', 'CALLE 16 # 11 A - 49', '3222823880', 'oscarcxplastica@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100737', 'KATERINE CUBIDES FLECHAS', '52199441', 'Cra 9 N° 12-44 CONSULTORIO 2', '3124475541', 'katerinecufle@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100740', 'MARIA ELENA PEREZ MELO', '27359472', 'CRA 4 No 7-06 B/ JOSE MARIA HERNANDEZ', '4205356 - 3212011259 - 3108814541', 'maria.elen@hotmail.es', 'SI', '', 3, 2, 2, 2),
	('8600100743', 'IVAN DARIO GONZALEZ ROA', '79903675', 'carrera 6 no 8-29 segundo piso', '3146782967 - 3112199890', 'id.gonzalez@unicieo.edu.co', 'SI', '', 3, 2, 2, 2),
	('8600100764', 'PROFESIONALES EN INSTRUMENTOS PARA LA SALUD Y MEDICINA HUMANA APLICADAS S.A.S PRISMHA S.A.S.', '901050652', 'CALLE 14 Nro. 10 - 11 B/ 8', '3134338046', 'prismha@hotmail.com', 'SI', 'SANDDY ALEJANDRA ROJAS CUESVAS', 1, 1, 2, 2),
	('8600100771', 'PAOLA NAYERINE CHAMORRO CHANCHI', '52828174', 'CARRERA 17.CALLE 9.', '3204736582', 'naye80811@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100783', 'ANTONIO GABRIEL MUSIRI PASTRANA', '72285166', 'calle 8 cra 4-28', '3113611620-3008875150-3016911680-', 'distriopticas@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100787', 'MARTHA CECILIA VARGAS CLEVES', '26638306', 'avenida 8 calle 12 # 12-30', '3143949838', 'chechivargas@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100801', 'LUZ EDILIA LOPEZ CORDOBA', '27354639', 'Carrera 13 N°14-00 Barrio Jardín Diagonal a la Notaria Única de 2', '3112235684', 'luzedilialopez@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100807', 'CRISTIAN DARWUIN TORRES ALEGRIA', '87064918', 'Centro Comercial Rio Plaza,Local 104', '3125784645- 3142026268-4204777', 'cristiantorres04@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100823', 'LIZBETH JOHANA BURBANO CRIOLLO', '1017125725', 'CALLE 15 NUMERO 7A', '3194107020', 'lj.burbano@unicieo.edu.co', 'SI', '', 3, 2, 2, 2),
	('8600100825', 'LUISA FERNANDA ARDILA ORDOÑEZ', '1143843565', 'CALLE 5 N° 11- 130', '3203133143', 'fao_abril@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100827', 'Ivan Dario Cuaran Jurado', '18131383', 'CRA 7 No. 9-17 clle del Tobogan - Barrio:CENTRO', '3142424525', 'cardiodiagnosticodelsur@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100828', 'FUNDACION PICACHOS', '828000312', 'Vereda Pueblo Viejo', '3176681977', 'fpicachos@fundacionpicachos.org', 'SI', 'Miguel Angel Claros Correa', 2, 1, 2, 2),
	('8600100832', 'cuerpo de bomberos voluntarios de 2', '891201393', 'CALLE 17 A N°8-34', '4295034', 'ambulancia2@hotmail.com', 'SI', 'johnny alcibiades mera marin', 4, 1, 2, 2),
	('8600100833', 'Yoldy Numar Hidalgo Velasco', '27356059', 'CALLE 14 NO. 8-16 JUNTO A LA OZIP', '3125852525', 'solosonrisas321@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100835', 'LYNDA MARILYN FAJARDO BARAHONA', '1085259943', 'Av Colombia Cra 9 # 17A 31', '3156219644 - 3142231318', 'fajardolyndaavanzada@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100840', 'AMBULANCIAS GLOBAL SALUD SAS ZOMAC', '901387401', 'CRA 9 N -2-37', '3132211739', 'ambulanciasglobalsalud@gmail.com', 'SI', 'LUIS MANUEL JURADO DELGADO', 4, 1, 2, 2),
	('8600100845', 'Fundacion San Damian - Escuela de Vida', '901174964', 'CL 14 9 23 AV 8', '3134904770 3173761143', 'sandamian.fundacion@gmail.com', 'SI', 'EFRAIN ALEXANDER CHASPUENGAL BETANCOURTH', 2, 1, 2, 2),
	('8600100848', 'CLINICA SMILE DENTIS SAS', '901374880', 'CL 14 11 39 AV 8 BRR 8', '3213332714 - 3103876930', 'clinicasmiledentis2020@gmail.com', 'SI', 'FENER IVAN ORDOÑEZ BOLAÑOS', 1, 1, 2, 2),
	('8600100850', 'CENTRO DE DIAGNOSTICO 2', '901101616', 'Carrera 8 8-32', '3006915097', 'rlginversionesmedicas@gmail.com', 'SI', 'Lilia Lizzeth Guerrero Romero', 1, 1, 2, 2),
	('8600100853', 'Marcela Viviana Andrade Vallejo', '69009782', 'Carrera 7 No. 8-22', '098 4296049', 'lab.hidalgo900@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100855', 'JUAN CARLOS LOPEZ PUJIMUY', '1053814737', 'CALLE 16 # 8-31- Frente al coliseo Jardín', '3164105096', 'integralaboratoriodc@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100858', 'ALVARO DAVID ANACONA CORDOBA', '1018442076', 'Carrera 8a No. 8-32 Clle Contraloria General', '3212049895', 'Adavic1223@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100864', 'Leonela Fernanda Alarcón Herrán', '1061730007', 'Carrera 8# 8-32 barrio Olímpico', '3148506536', 'leonela_112@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100867', 'ANDRES MAURICIO WINTACO MARTINEZ', '1032422145', 'CARRERA 9 N° 17-42 EDIFICIO JULIO MURIEL', '3153043160', 'andreswm2013@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100872', 'JUAN DIEGO LOPEZ GORDILLO', '1124864671', 'Carrera 8 # 1 - 27', '3204141895', 'juandlopez184@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100877', 'LEYDI CAROLINA CLEVES BELTRAN', '1019046645', 'URBANIZACION QUINTAS DE LA COLINA', '3118600351', 'carolinaTAFV@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100878', 'Katherine Gaviria Montezuma', '1124859857', 'carra 9a#17A-49', '3504345230', '2020vision2@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100879', 'YULIMAR MARGARITA CASTILLO GAVIDIA', '716998', 'CL 12 # 9 48', '3145188378', 'yulimargozzo@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100880', 'HOME HEALT PUTUMAYO S.A.S', '901510889', 'CASA 9 MZ A BARRIO QUINTA PAREDES', '3125734365', 'homehealthptyo@gmail.com', 'SI', 'JULIE CATHERINE SUAREZ BUCHELY', 1, 1, 2, 2),
	('8600100882', 'Gina Paola Canamejoy Arcos', '1152438506', 'carrera 15 #14-54', '3182160206', 'paolacaarcos@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100890', 'ANGIE JOHANA ZAPATA GARCES', '1122340569', 'barrio ciudadela', '3138472282', 'angie.zagar@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100891', 'JORGE ALBERTO MOLINA GIRALDO', '1006410459', 'barrio ciudadela', '3219711917', 'medicojorgemolina@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100893', 'CRISTIAN JULIAN BOTINA JOAQUI', '1026260945', 'CRA9 N°12-44 CONSULTORIO 1', '3164934678', 'drcbotinaj@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100896', 'Fundacion Munay', '900276174', 'Vereda Caliyaco vía al aguacate Munay San Gabriel', '3214395771', 'fundacionmunay@gmail.com', 'SI', 'Ramón Nonato Arroyave Giraldo', 2, 1, 2, 2),
	('8600100898', 'Giselle Catalina Alvarez Diaz', '52967986', 'Cll 9 # 12-44 CONSULTORIO 2', '3143186863', 'Kata_aldi1240@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100899', 'SALUD HOME CARE S.A.S BIC', '901583879', 'CR 7 17B28 BARRIO LOS ANGELES', '3102170824', 'saludhomecare22@gmail.com', 'SI', 'JENNIFER SOLARTE SOLARTE ALZATE', 1, 1, 2, 2),
	('8600100903', 'WILLIAM BRIAN RIASCOS PALACIOS', '18129118', 'Cra. 8 No. 17-50', '3112033322', 'williamriascosmd@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100906', 'sugey magueth Barrios Cardenas', '52411842', 'carrera 9 # 10-02 Consultorio 01', '4205329', 'sugey.barrios@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100908', 'POSMEDICA GROUP S.A.S.', '900949604', 'Carrera 8 # 15-30 Jardín Olimpico', '3138543593', 'posmedicaips@gmail.com', 'SI', 'Juan Pablo Chaves Castro', 1, 1, 2, 2),
	('8600100914', 'CLAUDIA PATRICIA ROSALES BASANTE', '1089846046', 'AV. COLOMBIA', '3124602578', 'crosales46@uan.edu.co', 'SI', '', 3, 2, 2, 2),
	('8600100920', 'JUAN CAMILO CADENA ESCOBAR', '1087048279', 'CALLE 14 #11 -39 AV 8', '3157944693', 'cadenajk@yahoo.es', 'SI', '', 3, 2, 2, 2),
	('8600100939', 'SERVICIO DE TRANSPORTE SALVA VIVIR S.A.C ZOMAC', '901357243', 'Carrera 12 No. 12B-24 Barrio Obrero', '3107744281', 'luzsalvavivir53@gmail.com', 'SI', 'LUZ MARIA JAMIOY', 4, 1, 2, 2),
	('8621900017', 'ESE HOSPITAL Pío XII', '891201845', 'Calle 4 No. 8-18', '3153665966', 'gerencia@esehospitalpioxiicolonputumayo.gov.co', 'SI', 'CAMILA MARIA CHAMORRO RAMIREZ', 1, 1, 1, 1),
	('8621900821', 'FRANCIS ELIZABETH ESPINOSA TORO', '1124314026', 'CRA 9 No 3-4', '3106170504', 'consultoriointegral1322@gmail.com', 'SI', '', 3, 2, 2, 1),
	('8632000024', 'E.S.E HOSPITAL 3', '846000474', 'CALLE 9 No 3-50', '4292283', 'gerencia@esehospital3.gov.co', 'SI', 'NELCY YANETH DULCE ORTEGA', 1, 1, 1, 3),
	('8632000121', 'Clara Pombo Rodríguez', '63274809', 'carrera 12 3 131', '3112569138 - 3134199893 - 3214754830', 'andeslaboratorios@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000180', 'CLAUDIA LUCIA LOPEZ BURGOS', '35506295', 'CALLE 4 No. 11-75', '3142481659', 'claudiaortodoncia@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000330', 'FONOCLINIC IPS S.A.S', '900220590', 'Calle 2a nº 2-07, Barrio 28 de Mayo', '42992269', 'fonoclinicc@gmail.com', 'SI', 'WILLINGTON CABRERA SALAZAR', 1, 1, 2, 3),
	('8632000357', 'GILMA ALEJANDRA DELGADO DIAZ', '52711055', 'CARRERA 7 # 8 - 27', '3208311294', 'alejandraopt@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000369', 'RAYOS X CATILP SAS', '900343172', 'BARRIO MARCO FIDEL SUAREZ LOCAL 3 151 C', '4290572 - 3115149701', 'catilpsas@gmail.com', 'SI', 'DARWIN OSWALDO RODRIGUEZ MORALES', 1, 1, 2, 3),
	('8632000584', 'IPS SERVICIO FARMACEUTICO SAN ANDRES S.A.S', '900410062', 'Barrio Vergel casa 8', '098-4290149- 3214925887', 'ipsanandres@yahoo.es', 'SI', 'Harold Wilson Castro Castro', 1, 1, 2, 3),
	('8632000587', 'acsalud ips sas', '900422854', 'Diagonal 8A N°5A-34-36 BARRIO VERGEL', '(098)4291143-3208598430', 'acsalud.sas@gmail.com', 'SI', 'ALEJANDRA CARDONA DIAZ', 1, 1, 2, 3),
	('8632000598', 'MEDIC-LASER SAS', '900454848', 'CARRERA 13 No. 8 - 267 BARRIO COLOMBIA', '3212115767', 'silviajtr91@gmail.com', 'SI', 'SILVIA JOHANA TRUJILLO RIVERA', 1, 1, 2, 3),
	('8632000599', 'Edith Adriana Delgado Diaz', '41107579', 'calle 8 N. 7a-69', '3137928736/3116476698', 'adrianaopt2@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000624', 'MEDERI CENTER IPS SAS', '900523355', 'DIAGONAL 8 N° 4-116 BARRIO EL VERGEL', '4290188 - 3124369971', 'DELGADOG28@GMAIL.COM', 'SI', 'GLORIA JUDITH DELGADO CANTINCUS', 1, 1, 2, 3),
	('8632000665', 'Vilma Cristina Gonzalez Vallejo', '29675407', 'CARRERA 12 N° 7-84', '3183876992', 'cristinag0816@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000697', 'EDWARD FERNANDO GOMEZ FERNANDEZ', '12749249', 'CRA 10 N°6- 29', '3212196335', 'clinicavidadredwardgomez@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000713', 'JOHN WILLIAM LOPEZ JUAGIBIOY', '71780562', 'CALLE 3 No. 7-11', '3112333343', 'johnwlopezj@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000732', 'LEYDI VIVIANA CHAVEZ FLOREZ', '67026293', 'DETRÁS DE COLEGIO SAN JOSÉ, CUARTA CASA', '4290771 / 3213930505', 'vivichavez08@yahoo.com', 'SI', '', 3, 2, 2, 3),
	('8632000755', 'ANALIZAR LABORATORIO CLINICO IPS SAS', '901090561', 'CRA. 10- No. 5-40 B. LA UNION', '3214929844', 'analizarlab3@hotmail.com', 'SI', 'ADRIANA PAULINA CABRERA MUJANAJINSOY', 1, 1, 2, 3),
	('8632000815', 'YENIA YADIRIS MOSQUERA LOZANO', '35852158', 'DIAGONAL 8 N 4 - 184', '3156042314', 'spadental2020@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000829', 'Nazly Paola España Burgos', '1120216029', 'calle 4A No. 7-43', '3208555811', 'n.paolaespana@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000836', 'Luis Alfredo Cerquera Guerrero', '87068975', 'Diagonal 8 Casa 52 via principal', '3134958989 317551089', 'cerguerrero84@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000837', 'helen yurani bisbicuth araujo', '37084774', 'diagonal 8 casa 52', '3174959326', 'helenbisbicuth@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000839', 'A + Ambulancias y Servicios S.A.S', '900530855', 'barrio las palmas', '3015345337', 'info@ambulanciasamas.com', 'SI', 'PAOLA ANDREA GUTIERREZ MORALES', 4, 1, 2, 3),
	('8632000852', 'TRANSPORTE ASISTENCIAL GUADALUPE S.A.S.', '901387693', 'LAS PALMAS', '3102504989', 'AMBGUADALUPE2020@GMAIL.COM', 'SI', 'NELSON NOEL GALINDEZ GALINDEZ', 4, 1, 2, 3),
	('8632000870', 'LUIS ANGEL BUELVAS DIAZ', '1032374900', 'CARRERA 8 # 4-16', '3132101871', 'luisangelbd@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000892', 'CRISTHIAN CAMILO RIVEROS CARVAJAL', '1123331440', 'CARRERA 9 # 7 - 10B CALLE LOS FAROLES', '3504944997', 'camilo_20riveros@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8656800007', 'EMPRESA SOCIAL DEL ESTADO HOSPITAL LOCAL', '846000253', 'KR 29 No 10-10', '3108760381', 'esehospitallocal@yahoo.es', 'SI', 'GLINYS EDITH DIAZ LLERENA', 1, 1, 1, 4),
	('8656800093', 'REGULO ERACLIO BARONA OSORIO', '6557989', 'CLL 12 # 17-19', '3102401532', 'regulobarona@hotmail.com', 'SI', 'REGULO ERACLIO BARONA OSORIO ERACLIO BARONA OSORIO', 3, 2, 2, 4),
	('8656800095', 'LUIS GONZALO MARIN MARIN', '10222318', 'KRA 26 N 10 30', '3106777538', 'lugoma_18@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800104', 'WILMER CORDOBA MARIN', '6458946', 'CL 10 NUMERO 27-40', '4227375', 'wcordobam@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800109', 'CLAUDIA PATRICIA PROAÑOS PANTOJA', '69015655', 'CALLE 10 No.20-30 Primer Piso Edificio Antares', '098-4227585 - 3113014923', 'labprosaludptyo@hotmail.com', 'SI', 'CLAUDIA PATRICIA PROAÑOS PANTOJA', 3, 2, 2, 4),
	('8656800111', 'HERMILA ROSA MACHADO CORDOBA', '43798938', 'Calle 10 No 27-02', 'O984220413', 'sanfranciscoasislb@hotmail.com', 'SI', 'HERMILA ROSA MACHADO CORDOBA', 3, 2, 2, 4),
	('8656800159', 'MARITZA BARRERA PALOMINO', '39718228', 'CL10 NUMERO 26-43', '3118692448/3112353782', 'maritzabarrera3066@hotmail.com', 'SI', 'MARITZA BARRERA PALOMINO', 3, 2, 2, 4),
	('8656800196', 'LUZ EMELY NARANJO OROZCO', '31991695', 'Cra. 30 no. 28-29', '311 80 82 000', 'luzemely67@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800202', 'CLINICA DE LA AMAZONIA IPS LTDA', '900021788', 'CALLE 10 No. 25-18 BR EL CARMEN', '4227906', 'ipsamazonia@gmail.com', 'SI', 'LUZ MYRIAM VASQUEZ BOHORQUEZ', 1, 1, 2, 4),
	('8656800211', 'GENNY ELISABETH DELGADO MORALES', '30333074', 'Calle 17A No 27 - 46 Barrio Las Ceibas', '', 'genny_lab@hotmail.com', 'SI', 'GENNY ELISABETH DELGADO MORALES', 3, 2, 2, 4),
	('8656800294', 'MARCO ANTONIO INFANTE VILLARRAGA', '17106069', 'CALLE 10 No. 25 - 18', '4227234 3112644276', 'clarence440@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800306', 'Lina Niño Coral', '35196698', 'Calle 10#26-43', '3202104844-3204337570', 'linita-2610@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800314', 'Rina Alejandra Chicue Ortiz', '36754737', 'calle 13 mz 2', '3112768162', 'rinachicue0615@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800327', 'MELVA LIDE VILLOTA ZAMBRANO', '30722318', 'KR 26 # 10-08', '3112335416', 'melviz1962@hotmail.com', 'SI', 'MELVA LIDE VILLOTA ZAMBRANO', 3, 2, 2, 4),
	('8656800334', 'CENTRO ESPECIALIZADO DE ALTA TECNOLOGIA EN IMÁGENES DIAGNOSTICAS SAS', '900263426', 'CALLE 11 No 25-16 EL CARMEN', '320 343 9774', 'ceatpuertoasis@gmail.com', 'SI', 'ALEXANDRA GIRALDO AGUDELO', 1, 1, 2, 4),
	('8656800352', 'CLINICA SALUD CENTER S.A.S', '900310876', 'CALLE 9 No 24-74 BARRIO EL PUERTO', '3115252537', 'calidad@clinicasaludcenter.com', 'SI', 'DAMIR ANTONIO CARDOZO BURBANO', 1, 1, 2, 4),
	('8656800635', 'Unimedical del Sur', '900556205', 'carrera 25 n 30b- 48 barrio el recreo', '4220642', 'unimedicaldelsur@hotmail.com', 'SI', 'leonela del rocio Peñaranda Sanchez', 1, 1, 2, 4),
	('8656800636', 'AMBULANCIAS DEL SUR OCCIDENTE DE PUERTO ASIS S.A.S', '900570647', 'CALLE 12 No. 34-54 B/LAS COLINAS', '3142191410', 'ambulanciasdelsuroccidente@gmail.com', 'SI', 'FREDY ENRIQUEZ URREA', 4, 1, 2, 4),
	('8656800641', 'CERTIFICAR SAS', '900575391', 'CALLE 9 No. 19-30', '4220387', 'crccertificarips@gmail.com', 'SI', 'WILLIAM AMAULLY ZAMBRANO CHAVEZ', 2, 1, 2, 4),
	('8656800653', 'MARIA FERNANDA HURTADO RAMIREZ', '37085042', 'CALLE 10 ENTRE CRA 27 Y 28', '3165360848', 'mafesita707@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800659', 'JENNY ALEJANDRA QUINTERO MAZO', '69023038', 'CARRERA 20 No 10-25', '4228196-3114416505', 'jennyaleja0321@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800672', 'IPS EMERGENCIAS MEDICAS PUERTO ASIS SAS', '900624003', 'CL 9 N 28 - 07 BARRIO MODELO', '3127077518', 'emergenciasmedicaspuertoasis@hotmail.com', 'SI', 'SANDRA PATRICIA SOLARTE TRUJILLO', 4, 1, 2, 4),
	('8656800674', 'ISABEL CRISTINA VELEZ OBANDO', '1053772396', 'CARRERA 10 No 27A - 10', '3144474768 - 3136240106', 'odontologaicvo@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800683', 'HERNAN DARIO JOJOA RANGEL', '1053806722', 'calle 17A 24-55', '3142421655 - 3102627887', 'hernan.dario.rangel@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800710', 'OPERACIONES INTEGRALES SAS', '900897873', 'cra 20 N 9 36 barrio centro', '4220445', 'crcconduasis@gmail.com', 'SI', 'VICTOR HUGO ENRIQUEZ ALVAREZ', 2, 1, 2, 4),
	('8656800758', 'CLINICA ORTIZ S.A.S.', '901109588', 'CALLE 11A No.36-35', '3214016961', 'clinorsas@gmail.com', 'SI', 'JESSICA PAOLA CASTRILLON GOMEZ', 1, 1, 2, 4),
	('8656800759', 'CENTRO ESPECIALIZADO DE UROLOGIA PUERTO ASIS', '900422064', 'CRA 48 No. 10- 29', '3153756040', 'gerenciageneral@centroespecializadodeurologia.com.co', 'SI', 'ELSA PATRICIA GARCIA LANDAZABAL', 1, 1, 2, 4),
	('8656800763', 'AMBVIDA S.A.S.', '901090955', 'Cra 24 N.15a-11 Barrio Obrero I', '3113952657', 'ambvidasas@gmail.com', 'SI', 'LORENZO FABIAN HERNANDEZ PAYOGUAJE', 4, 1, 2, 4),
	('8656800770', 'TOBAR ENCISO ALLAN FREDY', '98389962', 'CL 9 # 24-74 cs 202', '3125586008', 'ALLANTOBAR@GMAIL.COM', 'SI', '', 3, 2, 2, 4),
	('8656800788', 'AURELIO FERNANDO ACOSTA SOLARTE', '1123200514', 'CARRERA 29 No 13a - 20 BARRIO ALLENDE', '3132759997', 'acostaaure7@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800792', 'Ivon Lorena Ballesteros Rojas', '1047370546', 'Calle 10 # 22 - 49', '3114844736', 'ivonlo_99@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800797', 'sulay andrea diaz santander', '1130608651', 'cra 20 calle 12 # 009', '3124494902', 'sulay.diaz86@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800799', 'JESUS JOHN RONALD LASSO MOLINA', '12975221', 'CALLE 17 # 32-05', '3112823497', 'ralip-88@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800800', 'Cristian Andres Velasquez Carmona', '1017170664', 'cra 20 calle 12 # 009', '3223914918', 'cristian.velasquez48@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800813', 'Hospital de Alta Complejidad del Putumayo S.A.S ZOMAC', '901201887', 'CRA 48 No 10-29', '3158868640', 'gerencia@hacputumayo.com.co', 'SI', 'JOHN JAIRO BELTRAN SUAREZ', 1, 1, 2, 4),
	('8656800819', 'IPS DE LOS ESPECIALISTAS S.A.S.', '901251736', 'CARRERA 29 No. 9-44 BARRIO MODELO', '3007370822', 'calidad.ipsdelosespecialistas@gmail.com', 'SI', 'ALFREDO OROBIO TELLO', 1, 1, 2, 4),
	('8656800831', 'HORUS CLINIC SAS', '901048394', 'CALLE 10 N. 22-49', '3123714309 / 3155283580', 'horusclinic.so@gmail.com', 'SI', 'GENNY ELISABETH DELGADO MORALES', 1, 1, 2, 4),
	('8656800840', 'IPS 9 ARCANGEL PS SAS', '901378491', 'CR 37 N 9-62 BARRIO LOS CHIPAROS', '3144358909', 'ipssanmiguelarcangelps@gmail.com', 'SI', 'MONICA LUCIA URBANO SOLARTE', 1, 1, 2, 4),
	('8656800846', 'PRESERVAR DEL SUR S.A.S ZOMAC', '901348862', 'Barrio Jorge Eliecer Gaitan LT 4 MZ C.', '3146923751 - 3127077518', 'preservardelsur@gmail.com', 'SI', 'YDIER JAVIER IDROBO ARBOLEDA', 1, 1, 2, 4),
	('8656800857', 'MARIA DE LOS ANGELES PORTILLO BASTIDAS', '1087026785', 'Barrio Obrero', '3108315941', 'mariaportillobfisioterapia@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800861', 'NEFROUROS MOM SAS', '900123612', 'CARRERA 48 10 29 CIUDAD LEGUIZAMO', '3229068739', 'gerenciapuertoasis@nefrouros.net', 'SI', 'ANGELICA MARIA PERDOMO ALVAREZ', 1, 1, 2, 4),
	('8656800884', 'SHIRLEY ROCIO ROSAS SANTANDER', '69020276', 'CASA # 6 DETRAS DEL AEROPUERTO', '3222317933', 'shirlyrosassantander@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800910', 'JOHANA PAOLA GALLEGO BARRERA', '1018439390', 'calle10#24-23', '321433010', 'paola10-11-90@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800916', 'JHENNY MILENA DELGADO MORALES', '1085271876', 'CALLE 10 2928', '3155136403', 'miledelgado20199@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656900199', 'E.S.E. HOSPITAL ALCIDES JIMÉNEZ', '846001669', 'BARRIO LA ESPERANZA', '3214529693', 'esealcidesjimenez@yahoo.es', 'SI', 'MARIA PATRICIA RHENALS NUÑEZ', 1, 1, 1, 5),
	('8656900900', 'Harold Jonatan Acosta Obando', '75101675', 'carra 5', '312659702', 'hjonatan1984@gmail.com', 'SI', '', 3, 2, 2, 5),
	('8657100005', 'EMPRESA SOCIAL DEL ESTADO HOSPITAL JORGE JULIO GUZMAN', '846003357', 'Barrio Los Prados - Vía Puerto Rosario', '3142654488 3205030390', 'hospital@esejorgejulioguzman.gov.co', 'SI', 'DERLIS CAICEDO TRIANA', 1, 1, 1, 6),
	('8657100088', '"UNION DE PROMOTORES POR LA SALUD LTDA ""UPROSALUD LTDA"""', '846001582', 'PUERTO GUZMAN', '3124314215-3176572144', 'uprosalud@gmail.com', 'SI', 'RUBICINTIA BUSUY GUALDRON', 1, 1, 2, 6),
	('8657300185', 'ESE HOSPITAL MARIA ANGELINES DE II NIVEL DE ATENCION', '846000678', 'KILOMETRO 1 VIA AEROPUERTO', '3164603756', 'calidad.homa@gmail.com', 'SI', 'ESTEBAN LOPEZ BURBANO', 1, 1, 1, 7),
	('8657300615', 'RODRIGO ANIBAL RUIZ BARON', '19488845', 'carrera 2 entre calle 9 y 10', '3115110665', 'dentilife_2008@hotmail.com', 'SI', '', 3, 2, 2, 7),
	('8657300885', 'Marjorie Ramos Salcedo', '52693626', 'Base Naval Puerto 7 Edificio Cabrestante 401', '3103413778', 'marjorieramossalcedo@gmail.com', 'SI', '', 3, 2, 2, 7),
	('8657300907', 'BLEIDYS ELVIRA MENDOZA SOTOMONTE', '32935666', 'Carrera 1ra, entre calle 1ra y 2da', '3205214946', 'Bleidys_elvira@yahoo.com.ar', 'SI', '', 3, 2, 2, 7),
	('8674900062', 'ADRIANA LIZBETH CHAMORRO BUCHELI', '52265096', 'KR 14 No. 15-58', '3107855891', 'adrichamorro@hotmail.es', 'SI', 'ADRIANA LIZBETH CHAMORRO BUCHELI', 3, 2, 2, 11),
	('8674900063', 'SANDRA PATRICIA GONZALEZ VALLEJO', '41181661', 'Cl 16 N° 14-45', '4260138', 'laboratoriosagov@hotmail.com', 'SI', 'SANDRA PATRICIA GONZALES VALLEJO', 3, 2, 2, 11),
	('8674900065', 'GUILLERMO HERNAN PANTOJA CEBALLOS', '5350323', 'CR 14 No. 16 - 41', '3115325779', 'dr-hernanpantoja@hotmail.com', 'SI', 'GUILLERMO HERNÁN PANTOJA CEBALLOS', 3, 2, 2, 11),
	('8674900066', 'ASOCIACION IPS INDIGENA INGA KAMENTSA', '846001214', 'CALLE 15 Nº15-69 Barrio Recreo', '4260460', 'ipsingakamentsa@gmail.com', 'SI', 'DAYRA PATRICIA LASSO JACANAMEJOY', 1, 1, 2, 11),
	('8674900074', 'LUIS CARLOS BASTIDAS VEGA', '12978707', 'CL 17 N° 15 -52', '4260666', 'luiscbv5@hotmail.com', 'SI', 'LUIS CARLOS BASTIDAS VEGA', 3, 2, 2, 11),
	('8674900151', 'MARIA VICTORIA HERRERA SALAS', '52268451', 'Cra 14# 15-58', '3122620667', 'marvihesa@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900317', 'IPS PREVENIR 11 EU', '900219717', 'CALLE 17 # 14-57', '4260301', 'ips.prevenir.eu@hotmail.com', 'SI', 'CARLOS HERNAN BETANCOURT GUZMAN', 1, 1, 2, 11),
	('8674900390', 'YORMARY YANETSY LUNA BURBANO', '41182441', 'calle 16 N° 19 - 193 ESQUINA', '3113950391', 'c.odontoesteticalunab@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900611', 'JORGE LUIS MOLINA MEJIA', '77032509', 'CRA. 14 No. 15-58', '3006116234', 'chvallenato@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900645', 'REHABILITAR CIRP S.A.S', '900597873', 'crr 16N 15 60', '4260540', 'rehabilitarcirp@gmail.com', 'SI', 'KAREN YAMILETH PERAFAN GOMEZ', 1, 1, 2, 11),
	('8674900685', 'IPS ESPAÑA ORTIZ LIMITADA', '900360970', 'carrera18 con calle13 esquina', '3113036231', 'mediguay@hotmail.com', 'SI', 'Jose Diomedes España Ortiz', 1, 1, 2, 11),
	('8674900696', 'I.P.S. CENTRO DE REHABILITACION INTEGRAL SAOMY S.A.S', '900814635', 'CALLE 16 N° 22-34 B/ EL CEDRO', '3113158103', 'saomy2015@hotmail.com', 'SI', 'YONY FRANCISCO ERAZO GUERRERO', 1, 1, 2, 11),
	('8674900715', 'CLAUDIA ROCIO ROJAS BENAVIDES', '41181091', 'CLL15 19-25', '3137034026', 'co-rociorojas@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900735', 'UNIDAD DE SERVICIOS ESPECIALIZADOS SAS', '900951548', 'CARRERA 14 No. 16 - 30', '3142987199', 'usesalud@hotmail.com', 'SI', 'CARLO ANTONIO PISCIOTTI PUCCINI', 1, 1, 2, 11),
	('8674900753', 'Vanessa Reyes Muñoz', '63546538', 'calle 16 No. 16 -72', '3107877193', 'vareyesm1@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900757', 'MARIA CAMILA RUALES CEBALLOS', '1120217401', 'CALLE 16 #19-37', '3146496059', 'camiruales29@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900784', 'JOSÉ AZAEL ORTEGA MITICANOY', '97470641', 'VEREDA SAGRADO CORAZÓN', '3147917481', 'ortegamja@yahoo.es', 'SI', '', 3, 2, 2, 11),
	('8674900793', 'IPS MED&HOUSE', '901204210', 'CALLE 14 No. 15-16', '3144437836 - 3124975005', 'medhouse11@gmail.com', 'SI', 'GLORIA ELENA LOPEZ ESPAÑA', 1, 1, 2, 11),
	('8674900794', 'IPS ESPECIALIZADA DEL PUEBLO CAMENTSA BIYA S.A.S.', '901104262', 'CALLE 16 # 19-431 BARRIO EL CEDRO', '3235856039', 'ipscamentsabiya@gmail.com', 'SI', 'JUAN BAUTISTA AGREDA CHINDOY', 1, 1, 2, 11),
	('8674900814', 'SANDRA MARCELA DELGADO RENZA', '53122748', 'Calle 17 N. 14-51', '3113825844', 'delrenza24@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900841', 'Richard Fernando Narvaez Chaves', '1085277561', 'CALLE 16 #19-37', '3146496059', 'richardnarvaez345@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900843', 'MERY HELEN DEL CASTILLO PAZOS', '36754313', 'CARRERA 17 No 15 - 62', '3122249893', 'meryhelendelcastillo@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900844', 'Graciela Enriqueta Bravo Urbano', '27535329', 'CALLE 15 19-25', '3188702095', 'gracielabravou@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900856', 'Erika Natalia Tobar Zambrano', '1122785324', 'CALLE 13 16-44', '3122192604', 'erikanatalia115@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900883', 'ALIRIO FLORIBERTO SOLARTE ESPAÑA', '16076965', 'Calle 15 carrera 16-17', '3127575067', 'alirio8308@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900886', 'Elkin Salvador Rosero Quintero', '18124439', 'carrera 17 No 16 - 80', '3155474148', 'elroqui15@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900918', 'MARIA FERNANDA ERAZO CHAMORRO', '1122786786', 'Calle 16 #19-37', '3219710762', 'fernanda.erazo@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8675500824', 'Fany Estela Ortiz Chamorro', '69055497', 'Crra 8 No. 6-30 - Calle Principal - Barrio:Los Pinos', '3176348744', 'orchafa@hotmail.com', 'SI', '', 3, 2, 2, 8),
	('8675700021', 'ESE HOSPITAL FRONTERIZO LA DORADA', '846002309', 'CRA 7 N° 1 - 36', '3134821413 3174276879', 'gerencia@esehospitalfronterizoladorada.com.co', 'SI', 'JINA ANDREA BELALCAZAR FLOREZ', 1, 1, 1, 9),
	('8675700616', 'OLGA LUCIA CUASQUER POSOS', '1085245231', 'CALLE 6 # 5-28', '3103498710', 'olga-lu-13@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700834', 'Sandra Elizabeth Chamorro Arcos', '1085917801', 'Via principal calle 5 diagonal a stihl', '3102623174', 'sandry_cham@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700838', 'CLINICA LA DORADA IPS S.A.S ZOMAC', '901372032', 'BARRIO LOS PRADOS', '3102714354', 'ipsladoradasas@gmail.com', 'SI', 'FERNEY OSWALDO CANTICUS ORTIZ', 1, 1, 2, 9),
	('8675700888', 'angela maria villota yama', '1087674521', 'CLL 4 CRR 4 DIAGONAL A LA IGLESIA CATOLICA - Barrio:SAN FELIPE', '3115815262', 'angelamyama@gmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700895', 'GLORIA STEPHANNY ORTEGA PANTOJA', '1085274937', 'CRA 6 NUMERO 5-12', '3183397693', 'stepphyortega@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700909', 'KATHERINE JHULIETH MONTENEGRO ERAZO', '1087208262', 'calle 5 Diagonal a la Iglesia', '3203034392', 'katherin.j@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700917', 'alejandra esthefania santacruz martinez', '1004193331', 'la dorada,9', '3184251156', 'odontologiadorada20@gmail.com', 'SI', '', 3, 2, 2, 9),
	('8686500010', 'ESE HOSPITAL SAGRADO CORAZON DE JESUS', '846000471', 'BARRIO LA PARKE VIA EL ROSAL', '4287089', 'gerencia@hospitalhormiga.gov.co', 'SI', 'MAYELY MARTOS NARVAEZ', 1, 1, 1, 12),
	('8686500260', 'CLINICA SAN JORGE LA HORMIGA S.A.S', '900115211', 'KR 6 9-38', '984287127', 'clinicasanjorge_93@yahoo.com', 'SI', 'HAROLD LUIS PANTOJA ZAMBRANO', 1, 1, 2, 12),
	('8686500359', 'HUGO JOSE TORRES HURTADO', '12977827', 'CR 6 Nº 7-06', '3112192944', 'LESOR74@HOTMAIL.COM', 'SI', '', 3, 2, 2, 12),
	('8686500603', 'CENTRO MEDICO CRECER IPS S.A.S.', '900460676', 'CARRERA 4 N 6-18 BARRIO LA AMISTAD', '4287067', 'creceripsputumayo@outlook.com', 'SI', 'LUIS CARLOS ORTEGA TORRES', 1, 1, 2, 12),
	('8686500605', 'Diana Maria España Calderon', '25278586', 'Calle 10 No 5_12', '3203040607', 'diana_espaqa@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500618', 'INSTITUCIÓN PRESTADORA DE SERVICIOS CENTRO INTEGRAL DE REHABILITACIÓN DEL PUTUMAYO LTDA.', '900501715', 'Calle 8 N° 2A-04', '3212468575-3115414313', 'cirepips@hotmail.com', 'SI', 'DANIELA ISABEL JARAMILLO CHAMORRO', 1, 1, 2, 12),
	('8686500619', 'EDY ELIZABETH MORA ROSERO', '27474807', 'cra 4- calle 8 esquina Barrio las Americas 2 piso', '3113549534', 'elizabethmorarosero@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500722', 'Maria Patricia Benavides Ortega', '52621725', 'Cra 8 5-71', '3104810766', 'mapato33@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500777', 'Jimmy Alexander Burbano Álvarez', '18156020', 'carrera 8# 07-79', '3214915203', 'jimbo_1480@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500826', 'FUNDACION PARA LA ESTIMULACION EN EL DESARROLLO Y LAS ARTES', '891502238', 'Urbanización Ardila Ortiz Manzana 40', '3155766420 - 3043371339', 'fedarhormiga@fedar.org', 'SI', 'RICARDO COBO DIAZ', 2, 1, 2, 12),
	('8686500842', 'EILEN PAOLA ELJAIK MANJARRES', '55304325', 'Carrera 5 N°9-07', '3147406618-3138873670', 'labhormiga@yahoo.com', 'SI', '', 3, 2, 2, 12),
	('8686500849', 'JENNY OLIVA ORTEGA SOLARTE', '1126444005', 'CL 5 #6-43', '3185800099', 'drajennyortega@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500854', 'ELISABETH NOGUERA ARBOLEDA', '1126454658', 'CRA 6 No. 2 - 80', '3147536290', 'elinoguerarboleda@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500859', 'Miguel Angel Padilla Muriel', '1085333484', 'Av principal', '3176762935', 'mapm1996@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500860', 'BRAHAYAN STEVVEN QUINTERO NARVAEZ', '1032481934', 'calle 8 # 7-15', '3219766232', 'brsquinterona@unal.edu.co', 'SI', '', 3, 2, 2, 12),
	('8686500862', 'andres felipe chamorro navarro', '1087422613', 'cra 6 5A 13 BARRIO LA AMISTAD', '3174263845', 'chamorrosfn@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500863', 'DANILO BOLAÑOS GRIJALBA', '16459365', 'Carrera 7', '3118487261', 'dabogri@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500869', 'VIVIANA ENELIA DOMINGUEZ BAEZ', '1144027749', 'Cra 7 # 5-56', '3503757015', 'odontovidaclinicadental@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500871', 'CLARIZA ELENA MERIÑO VEGA', '32795302', 'Carrera 5 N°9-07', '3147406618', 'labhormiga@yahoo.com', 'SI', '', 3, 2, 2, 12),
	('8686500876', 'Leidy Paulette Rodriguez Marin', '1053819778', 'Calle 10 · 5-12', '3218422320', 'Leidy.rodriguezm@autonoma.edu.co', 'SI', '', 3, 2, 2, 12),
	('8686500887', 'Cristhian Camilo Montealegre Oliva', '1075284483', 'CALLE NOVENA NRO 3-26 RESPALDO HOSPITAL', '3214677828', 'soyadrianacoral@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500889', 'CRC DOBLE VIA SAS', '901076505', 'LOTE 99 MAZ 13 BR EL PROGRESO', '3112327600', 'CRCDOBLEVIA@GMAIL.COM', 'SI', 'ANDRES FERNANDO CRUZ SANCHEZ', 2, 1, 2, 12),
	('8686500902', 'FUNDACION CLINICA VALLE DEL SINAI', '901537533', 'BARRIO CIUDADELA UNIVERSITARIA', '3123754728', 'fcvallesinai@gmail.com', 'SI', 'ORLANDO FAVIO AREVALO GUERRA', 1, 1, 2, 12),
	('8686500905', 'STEVAN DAVID MORENO OSORIO', '1144053761', 'CARRERA 6 # 5 - 25', '3153531071', 'stevid23@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500911', 'MARCO ISAAC GALINDEZ LEITON', '1126447671', 'Lote Mz L Diagonal a la cancha CONSULTORIO 102', '3165251695', 'mgalindez07@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500912', 'ADRIANA VICTORIA PALACIOS ZAMBRANO', '1126456101', 'Lote Mz L Diagonal a la cancha CONSULTORIO 101', '3232033129', 'adrianapalaciosvk@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500915', 'ENYI ZORAYA MAGIN GUERRERO', '1125412285', 'CRA 6#5-06 VIA PRINCIPAL', '3222690401', 'ENYIMAGIG@GMAIL.COM', 'SI', '', 3, 2, 2, 12),
	('8686500919', 'Carlos Andres Roncancio Lenis', '1113516130', 'Cra 6 #6-31', '3164215850', 'roncanciolenis12@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8688500078', 'ZENAIDA MARGARITA ABASOLO GUERRERO', '27167208', 'BARRIO FATIMA Cra. 5 No. 5-18 FRENTE AL Juzgado', '3115956792', 'villadenconsultorio@gmail.com', 'SI', 'ZENAIDA MARGARITA ABASOLO GUERRERO', 3, 2, 2, 13),
	('8688500160', 'ROSA ELENA CHAMORRO VELASCO', '41170423', 'CALLE 6 Nro. 2A-21', '3102857927', 'rosachamorrodra@yahoo.es', 'SI', '', 3, 2, 2, 13),
	('8688500198', 'E.S.E HOSPITAL SAN GABRIEL ARCANGEL', '846001620', 'BARRIO JUAN PABLO II', '4284585', 'esehvilla2004@yahoo.es', 'SI', 'CRISTINA DEL CARMEN ROSERO BERMEO', 1, 1, 1, 13),
	('8688500228', 'IPS PROSVISALUD EU', '900071373', 'Calle 3 No. 7-47 barrio progreso', '3144367679 - 3108517631 3186156525', 'ipspvseu@gmail.com', 'SI', 'CONSTANZA VIVIANA TORRES CANO', 1, 1, 2, 13),
	('8688500344', 'GRAN TIERRA ENERGY COLOMBIA LTD', '860516431', 'VEREDA CAFELINA -Campamento Costayaco', '+ 57(1) 6585757 - 3204903050', 'germanmontana@grantierra.com', 'SI', 'MANUEL ANTONIO BUITRAGO VIVES', 2, 1, 2, 13),
	('8688500586', 'San Jose Ips Putumayo SAS', '900423816', 'CRA3 # 7-48 Barrio Obrero', '3229469787', 'ips.sanjosevilla@gmail.com', 'SI', 'PABLO FAVIAN GOMEZ BENITEZ', 1, 1, 2, 13),
	('8688500633', 'EIBAR CAMILO CHAMORRO VELASCO', '1127071246', 'BARRIO OBRERO calle 6 numero 2A-21', '3133967272', 'kamili_861127@hotmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500694', 'Yudy Liset Chamorro', '41171161', 'BARRIO OBRERO CALLE 6 NUMERO 2A-21', '319-3922702- 320-3712101', 'dchamorro40@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500700', 'Joana Margareth Baleta Ovalle', '53016271', 'Calle 1ra Barrio el Progreso', '3112648813', 'joitain@hotmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500791', 'LISETH SORANY MELO ROSERO', '1085273580', 'Cra. 5 6-18', '3105940836', 'odontologia.soranymr@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500810', 'Terminal de Transportes Villagarzon S.A.', '900431071', 'Predio la gaitana vereda el porvenir', '3118508561', 'terminalvillagarzon@hotmail.com', 'SI', 'Mayerling Chala Trujillo', 2, 1, 2, 13),
	('8688500851', 'yisel yurani benavides bacca', '1127074783', 'calle 1 #5-1B', '3124470664', 'odontologiamident@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500868', 'Bibiana Albarracin Rodriguez', '52767979', 'Barrio Centro Calle 6 Cra 7a Esquina', '3153043160', 'andreswm2013@hotmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500875', 'ANDREA NATALIA CARDONA CERON', '1125180254', 'KR 3A # 13A 58 BRR VILLA DEL SOL', '3143887700', 'imagenesdiagnosticas.sur@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500897', 'JEINNY MARCELA QUINTERO ANGARITA', '1098688737', 'CARRERA 6 N°2A-21', '3046419662', 'Dramarcelaquintero@gmail.com', 'SI', '', 3, 2, 2, 13);

-- Volcando estructura para tabla sehab.profesional-apoyo
CREATE TABLE IF NOT EXISTS `profesional-apoyo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prof_nombre` varchar(20) NOT NULL,
  `prof_apellido` varchar(20) NOT NULL,
  `prof_cargo` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.profesional-apoyo: ~0 rows (aproximadamente)
DELETE FROM `profesional-apoyo`;

-- Volcando estructura para tabla sehab.profe_veri
CREATE TABLE IF NOT EXISTS `profe_veri` (
  `prof_veri_id` int NOT NULL,
  `veri_profe_id` int NOT NULL,
  PRIMARY KEY (`prof_veri_id`,`veri_profe_id`),
  KEY `IDX_31044cdb7e86ccc5d3575b7c79` (`prof_veri_id`),
  KEY `IDX_bd16de5e695f3b206e62b393c5` (`veri_profe_id`),
  CONSTRAINT `FK_31044cdb7e86ccc5d3575b7c79b` FOREIGN KEY (`prof_veri_id`) REFERENCES `profesional-apoyo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_bd16de5e695f3b206e62b393c58` FOREIGN KEY (`veri_profe_id`) REFERENCES `acta-verificacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.profe_veri: ~0 rows (aproximadamente)
DELETE FROM `profe_veri`;

-- Volcando estructura para tabla sehab.quimioterapia
CREATE TABLE IF NOT EXISTS `quimioterapia` (
  `quim_id` int NOT NULL AUTO_INCREMENT,
  `quim_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`quim_id`),
  UNIQUE KEY `IDX_cb59fafb92cd578a0057739ce2` (`quim_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.quimioterapia: ~0 rows (aproximadamente)
DELETE FROM `quimioterapia`;

-- Volcando estructura para tabla sehab.radiologia_odonto
CREATE TABLE IF NOT EXISTS `radiologia_odonto` (
  `rad_odont_id` int NOT NULL AUTO_INCREMENT,
  `rad_odont_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`rad_odont_id`),
  UNIQUE KEY `IDX_f850c7b04beb2c6129609d42e6` (`rad_odont_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.radiologia_odonto: ~0 rows (aproximadamente)
DELETE FROM `radiologia_odonto`;

-- Volcando estructura para tabla sehab.radioterapia
CREATE TABLE IF NOT EXISTS `radioterapia` (
  `radi_id` int NOT NULL AUTO_INCREMENT,
  `radi_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`radi_id`),
  UNIQUE KEY `IDX_7db04caf272eafa52f6e4d4dbc` (`radi_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.radioterapia: ~0 rows (aproximadamente)
DELETE FROM `radioterapia`;

-- Volcando estructura para tabla sehab.requisito_res
CREATE TABLE IF NOT EXISTS `requisito_res` (
  `req_id` int NOT NULL AUTO_INCREMENT,
  `req_nombre` varchar(100) NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`req_id`),
  UNIQUE KEY `REL_c67489a5f81069d4e7b12a1836` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_c67489a5f81069d4e7b12a1836e` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.requisito_res: ~0 rows (aproximadamente)
DELETE FROM `requisito_res`;

-- Volcando estructura para tabla sehab.rol
CREATE TABLE IF NOT EXISTS `rol` (
  `rol_id` int NOT NULL AUTO_INCREMENT,
  `rol_nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.rol: ~0 rows (aproximadamente)
DELETE FROM `rol`;
INSERT INTO `rol` (`rol_id`, `rol_nombre`) VALUES
	(1, 'admin'),
	(2, 'sic'),
	(3, 'sp'),
	(4, 'pamec'),
	(5, 'res'),
	(6, 'contador'),
	(7, 'coordinador');

-- Volcando estructura para tabla sehab.salud_trabajo
CREATE TABLE IF NOT EXISTS `salud_trabajo` (
  `saltra_id` int NOT NULL AUTO_INCREMENT,
  `saltra_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`saltra_id`),
  UNIQUE KEY `IDX_0552d32c1f8f4e584140f6036c` (`saltra_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.salud_trabajo: ~0 rows (aproximadamente)
DELETE FROM `salud_trabajo`;

-- Volcando estructura para tabla sehab.sede
CREATE TABLE IF NOT EXISTS `sede` (
  `sede_id` int NOT NULL AUTO_INCREMENT,
  `sede_numero` varchar(3) NOT NULL,
  `sede_nombre` varchar(100) NOT NULL,
  `sede_gerente` varchar(70) DEFAULT NULL,
  `sede_principal` varchar(3) NOT NULL,
  `sede_numero_principal` varchar(2) NOT NULL,
  `sede_direccion` varchar(90) DEFAULT NULL,
  `sede_barrio` varchar(90) DEFAULT NULL,
  `sede_telefono` varchar(100) NOT NULL,
  `sede_email` varchar(120) NOT NULL,
  `sedePrestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  `sedeMunicipioSedeMunId` int DEFAULT NULL,
  PRIMARY KEY (`sede_id`),
  KEY `FK_98cce4113183119777e4b3dc7f1` (`sedePrestadorPreCodHabilitacion`),
  KEY `FK_07801517230b1ab0ddec295d48b` (`sedeMunicipioSedeMunId`),
  CONSTRAINT `FK_07801517230b1ab0ddec295d48b` FOREIGN KEY (`sedeMunicipioSedeMunId`) REFERENCES `sede_municipio` (`sede_mun_id`),
  CONSTRAINT `FK_98cce4113183119777e4b3dc7f1` FOREIGN KEY (`sedePrestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB AUTO_INCREMENT=263 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.sede: ~0 rows (aproximadamente)
DELETE FROM `sede`;
INSERT INTO `sede` (`sede_id`, `sede_numero`, `sede_nombre`, `sede_gerente`, `sede_principal`, `sede_numero_principal`, `sede_direccion`, `sede_barrio`, `sede_telefono`, `sede_email`, `sedePrestadorPreCodHabilitacion`, `sedeMunicipioSedeMunId`) VALUES
	(1, '1', 'ESE HOSPITAL Pío XII', 'CAMILA MARIA CHAMORRO RAMIREZ', 'SI', '1', 'Calle 4 No. 8-18', 'Colon Centro', '3153665966', 'gerencia@esehospitalpioxiicolonputumayo.gov.co', '8621900017', 1),
	(2, '9', 'UNIDAD DE SALUD MENTAL', 'CAMILA MARIA CHAMORRO RAMIREZ', 'NO', '1', 'VEREDA MICHOACAN', 'VEREDA MICHOACAN', '3153665966-3153688605', 'unidadmentalpio12@hotmail.com', '8621900017', 1),
	(3, '1', 'ESE HOSPITAL MARIA ANGELINES', 'ESTEBAN LOPEZ BURBANO', 'SI', '1', 'KILOMETRO 1 VIA AEROPUERTO', '', '5634144', 'ipsmangelines@esehoma.gov.co', '8657300185', 7),
	(4, '3', 'PUESTO DE SALUD PUERTO OSPINA', 'ESTEBAN LOPEZ BURBANO', 'NO', '1', 'PUERTO OSPINA', 'PUERTO OSPINA', '5634342', 'ipsmangelines@esehoma.gov.co', '8657300185', 7),
	(5, '5', 'PUESTO DE SALUD PIÑUÑA NEGRO', 'ESTEBAN LOPEZ BURBANO', 'NO', '1', 'PIÑUÑA NEGRO', 'PIÑUÑA NEGRO', '5634342', 'ipsmangelines@esehoma.gov.co', '8657300185', 7),
	(6, '4', 'RODRIGO ANIBAL RUIZ BARON', '', 'SI', '4', 'carrera 2 entre calle 9 y 10', 'la magdalena', '3115110665', 'dentilife_2008@hotmail.com', '8657300615', 7),
	(7, '1', 'Marjorie Ramos Salcedo', '', 'SI', '1', 'Base Naval Puerto 7 Edificio Cabrestante 401', 'Barrio Naval', '3103413778', 'marjorieramossalcedo@gmail.com', '8657300885', 7),
	(8, '1', 'BLEIDYS ELVIRA MENDOZA SOTOMONTE', '', 'SI', '1', 'Carrera 1ra, entre calle 1ra y 2da', 'Maracaná', '3205214946', 'Bleidys_elvira@yahoo.com.ar', '8657300907', 7),
	(9, '1', 'CONSULTORIO DERMATOLOGICO JOSE JAVIER RODRIGUEZ', '', 'SI', '1', 'Cra 9 Nro 24-7', 'Jorge Eliécer Gaitán', '098 4200477', 'javierdermato@hotmail.com', '8600100008', 2),
	(10, '1', 'DIAGNOSTICOS E.U.', 'DANIEL ANGEL ARIAS OLAVE', 'SI', '1', 'CALLE 12 No 9 -103', 'VILLACOLOMBIA', '8-4296179', 'diagnosticoseu@hotmail.com', '8600100016', 2),
	(11, '1', 'MARIA ELENA GUERRERO GOMEZ', '', 'SI', '1', 'CALLE 7A No. 10-11EDIFICIO MARIA ELENA', 'MODELO', '3118182728', 'mariaeguerrero53@hotmail.com', '8600100019', 2),
	(12, '1', 'IVAN RAMIRO CHICO VACA', '', 'SI', '1', 'Calle 12 No. 9-21', 'Villa Colombia', '4200625', 'odontocenter2@hotmail.com', '8600100031', 2),
	(13, '1', 'EMPRESA SOCIAL DEL ESTADO HOSPITAL JOSÉ MARÍA HERNÁNDEZ', 'MANUEL JAIR ZUÑIGA BRAVO', 'SI', '1', 'CL. 14 Nº 7 - 26 AV. 8', 'OBRERO', '(57)(8) 4296056 - 4296057', 'gerencia@esehospital2.gov.co', '8600100038', 2),
	(14, '23', 'E.S.E. HOSPITAL JOSE MARÍA HERNANDEZ PROMOCIÓN Y MANTENIMIENTO DE LA SALUD', 'MANUEL JAIR ZUÑIGA BRAVO', 'NO', '1', 'CALLE 13A N° 12 - 94', 'OBRERO', '316 7804748', 'gerencia@esehospital2.gov.co', '8600100038', 2),
	(15, '1', 'IPS REHABILITAR DEL PUTUMAYO LTDA', 'YUBI JIMENA CAÑAR ENRIQUEZ', 'SI', '1', 'CARRERA 9 N° 6 - 73', 'KENNEDY', '4206217', 'rehabilitardelputumayo@hotmail.com', '8600100050', 2),
	(16, '1', 'CLINICA CREAR VISION', 'ANA CRISTINA NORIEGA ALMEIDA', 'SI', '1', 'KR 8 No. 17-156', 'VILLA NATALIA', '4205336', 'gerencia@clinicacrearvision.com.co', '8600100105', 2),
	(17, '2', 'CLINICA CREAR VISION S.A.S. - SEDE 2', 'ANA CRISTINA NORIEGA ALMEIDA', 'NO', '1', 'CR 8 #17 - 88', 'VILLA NATALIA', '4205336', 'gerencia@clinicacrearvision.com.co', '8600100105', 2),
	(18, '1', 'LILIANA MARICEL RODRIGUEZ RENZA', '', 'SI', '1', 'CARRERA 4 No 7 - 06', 'BARRIO JOSE MARIA HERNANDEZ', '4205356 - 3108814541', 'ipsexpovision@gmail.com', '8600100154', 2),
	(19, '1', 'FRANCISCA LIDA TERAN ACOSTA', '', 'SI', '1', 'CL 12 N 9-48', 'VILLA COLOMBIA', '4206207', 'franclida01@hotmail.com', '8600100171', 2),
	(20, '1', 'UNIDAD MEDICO ASISTENCIAL DEL PUTUMAYO EMPRESA UNIPERSONAL - UNIMAP E.U.', 'ASTRITH YURANY CORAL BERNAL', 'SI', '1', '14 - 87', 'AV. COLOMBIA', '4201616 - 4205840 - 4296345 -3123779718 - 3142377958', 'gerente@unimapeu.com', '8600100172', 2),
	(21, '1', 'ANA CAROLINA VIVAS CORDOBA', '', 'SI', '1', 'CRA 4ta No 08 - 31', 'JOSE MARIA HERNANDEZ', '4205923', 'cavic-2@hotmail.com', '8600100177', 2),
	(22, '2', 'ANA CAROLINA VIVAS CORDOBA', '', 'NO', '1', 'CALLE 13 N° 8-44', 'OLIMPICO', '3213798812', 'cavic-2@hotmail.com', '8600100177', 2),
	(23, '1', 'OPTICA FAMILIAR E.U.', 'VICTOR HERNAN LOPEZ FAJARDO', 'SI', '1', 'CARRERA 14 No. 13-08', 'AV. 8', '4205260', 'optifami12@yahoo.es', '8600100184', 2),
	(24, '1', 'CLINICA AYNAN LTDA', 'SANDRA MIREYA CHINGAL SOLARTE', 'SI', '1', 'KR 14 # 11-36', 'AV 8', '4296350 - 4204479 - 3124488051 - 3223652562', 'luanjur@yahoo.es', '8600100197', 2),
	(25, '1', 'LILIAN DEYANIRA ESTRADA SOLARTE', '', 'SI', '1', 'CARRERA 4 No.7-06', 'JOSE MARIA HERNANDEZ', '3204443425', 'lideesso@hotmail.com', '8600100204', 2),
	(26, '1', 'CODENT ODONTOLOGIA ESPECIALIZADA IPS E.U.', 'CRUZ ROSMIRA GAVIRIA SERNA', 'SI', '1', 'KR 8 15-92', 'CIUDAD JARDIN', '3103381168', 'codentipsodontologia@gmail.com', '8600100215', 2),
	(27, '1', 'IPS 2', 'MARTHA ELENA QUINTERO PEREZ', 'SI', '1', 'CALLE 15 N° 7 A 40 BARRIO JARDIN', 'JARDIN', '(098)4204096 - 4206150-3008960844-3005561799-3008960140', 'mprhenalsn@miips.com.co', '8600100217', 2),
	(28, '1', 'JAIME ALBERYAM DELGADO RENZA', '', 'SI', '1', 'AVENIDA 8 CALLE 14 CON CARRERA 12 ESQUINA', 'OBERO', '3103488895', 'alberyam@hotmail.com', '8600100218', 2),
	(29, '1', 'CENDIDTER SAS SEDE 1', 'ALEXANDRA GIRALDO AGUDELO', 'SI', '1', 'CALLE 14 No 12 - 81', 'OBRERO', '420 45 06', 'asistente@cendidter.com', '8600100229', 2),
	(30, '3', 'CENDIDTER SAS SEDE 2', 'ALEXANDRA GIRALDO AGUDELO', 'NO', '1', 'CALLE 14 N 12-59', '8', '4204338-4204506', 'asistente@cendidter.com', '8600100229', 2),
	(31, '5', 'CENDIDTER SAS SEDE 3', 'ALEXANDRA GIRALDO AGUDELO', 'NO', '1', 'AVENIDA COLOMBIA', 'AVENIDA COLOMBIA', '4204506 - 4204338', 'asistente@cendidter.com', '8600100229', 2),
	(32, '1', 'ZAYRA ROXANNE CHAMORRO VALENCIA', '', 'SI', '1', 'CALLE 14 NUMERO 12-49', 'AVENIDA 8', '4204101-3113047894', 'clinicabocasyboquitas@gmail.com', '8600100256', 2),
	(33, '1', 'CLÍNICA FLOREZ S.A.S.', 'CRUZ ELENA FLOREZ MURIEL', 'SI', '1', 'KR 8 Nº 15-50', 'CIUDAD JARDIN', '(57)(8)4296061', 'calidadclinicaflorez@gmail.com', '8600100259', 2),
	(34, '1', 'ERMINDA ANTONIA ROSERO LASSO', '', 'SI', '1', 'carrera 9 # 10-02 Segundo piso', 'Modelo', '3133065153', 'roseroantonia@gmail.com', '8600100269', 2),
	(35, '1', 'SALUD TERAPIA DEL PUTUMAYO E.U', 'ANA LISBETH BENAVIDES BURBANO', 'SI', '1', 'CARRERA 11A No. 15 - 46', '8', '3106953025', 'analis76@hotmail.com', '8600100276', 2),
	(36, '1', 'OSCAR ORLANDO GUERRERO ENRIQUEZ', '', 'SI', '1', 'Av 8 Calle 14 No. 12-81 OF 204', '', '3204366160', 'oralclinik23@gmail.com', '8600100299', 2),
	(37, '2', 'OSCAR ORLANDO GUERRERO ENRIQUEZ', '', 'NO', '1', 'Kra 8#15-04', 'Ciudad jardín', '4201050 - 3185593001', '3dent2@gmail.com', '8600100299', 2),
	(38, '1', 'DORIS GLADYS SALAS RODRIGUEZ', '', 'SI', '1', 'AVENIDA 8 CALLE 14 # 10-15', 'AVENIDA 8', '3147992120', 'Odosarod-11@hotmail.com', '8600100308', 2),
	(39, '1', 'ASISTENCIA MEDICA DEL SUR IPS LTDA', 'RUBICINTIA BUSUY GUALDRON', 'SI', '1', 'CR 13 14 64 BRR OBRERO', 'BRR OBRERO', '4204543', 'asistenciamedicadelsurltda@hotmail.com', '8600100365', 2),
	(40, '1', 'Edgar Mauricio Rojas Rojas', '', 'SI', '1', 'Crra 9 N 12-44', 'Avenida Colombia', '3107815972', 'edmaroro@hotmail.com', '8600100372', 2),
	(41, '1', 'GEINSALUD PUTUMAYO', 'LIDA IMELDA CERON CHICUNQUE', 'SI', '1', 'CRA 4 No 9-28', 'BARRIO JOSE MARIA HERNANDEZ', '984205255', 'geinsaludptyo@hotmail.com', '8600100373', 2),
	(42, '1', 'IPS DISMECOL LTDA', 'AURORA ROCIO OJEDA BURBANO', 'SI', '1', 'CALLE 14 No. 10-11 AV. 8', 'OBRERO', '4206381', 'dismecolips@hotmail.com', '8600100575', 2),
	(43, '1', 'MEGASALUD IPS LTDA UCI NEONATAL 2', 'ANDRES ORLANDO MENDEZ PAVA', 'SI', '1', 'AV. 8 CLLE 14 #7-26 HOSPITAL JOSE MA HERNANDEZ', 'OBRERO', '4295971', 'gerente@megasaludips.com', '8600100613', 2),
	(44, '1', 'Odontologia Especializada Dra. Andrea Castrillon IPS SAS', 'Andrea Castrillon', 'SI', '1', 'CRA. 7B No. 11C-06 PISO 1', 'RUMIPAMBA', '4205271', 'novaden-ips@hotmail.com', '8600100623', 2),
	(45, '1', 'IPS SAMYSALUD SAS', 'LUZ DARY ORTEGA JAMIOY', 'SI', '1', 'CR 7B 17B-40', 'VILLA NATALIA', '4204779 - 3106776217', 'ipssamysalud@hotmail.com', '8600100627', 2),
	(46, '1', 'Jenny Cristina Maya Hernández', '', 'SI', '1', 'Calle 10 A # 14 - 23', 'Huasipanga', '3103249502', 'jennymaya2004@gmail.com', '8600100631', 2),
	(47, '1', 'Keyla Daniela Lopez Acosta', '', 'SI', '1', 'CALLE 11 No. 12-25 BARRIO OBRERO ETAPA 1', '', '4205063 3203558785', 'kinesis.2@hotmail.com', '8600100642', 2),
	(48, '1', 'LABORATORIO BUITRAGO S.A.S', 'DIANA ZORAIDA BUITRAGO SALAZAR', 'SI', '1', 'AV. 8 Cra 14 No 13-08', 'OBRERO', '4206350', 'laboratoriodianabuitrago14@hotmail.com', '8600100643', 2),
	(49, '1', 'CERTIFICAMOS CENTRO DE RECONOCIMIENTO DE CONDUCTORES', 'WILLIAM AMAULLY ZAMBRANO CHAVEZ', 'SI', '1', 'CALLE 14 N 12-81 SOTANO', 'OBRERO', '3144697722', 'idf_victorh@hotmail.com', '8600100660', 2),
	(50, '1', 'VICTOR HUGO RODRIGUEZ MUÑOZ', '', 'SI', '1', 'CALLE 10 # 14-02', 'HUASIPANGA', '3118286114 - 4200855', 'calidad@vhrcentropediatricoips.com', '8600100663', 2),
	(51, '1', 'IPS LOS ANGELES SAS', 'JAIRO FERNANDO GOMEZ GALINDEZ', 'SI', '1', 'CL 7 13B MZ 16', 'JOSE MARIA HERNANDEZ', '3218005735', 'jairo8014@hotmail.com', '8600100671', 2),
	(52, '1', 'SOLUCIONES INTEGRALES EN GESTIÓN OCUPACIONAL SIGO SAS', 'WENDY LISSETTE SANCHEZ TARAZONA', 'SI', '1', 'Carrera 15 #14 -60', 'Obrero 2', '4296281 - 3209506624', 'sigoips@gmail.com', '8600100691', 2),
	(53, '1', 'IPS REHABILITACION INTEGRAL SANAR S.A.S', 'PAULA ANDREA SALCEDO BUSUY', 'SI', '1', 'Cra 16 N 14-39 II etapa', 'Obrero', 'cel 3108034229- fijo 4204934', 'ipssanarsass@gmail.com', '8600100702', 2),
	(54, '1', 'WHERLEY DARIO QUIROGA PEREZ', '', 'SI', '1', 'Calle 5 No. 9-305', 'Avenida 17 de julio', '4296055-3183366540-3102768841', 'cmaternofetal2015@hotmail.com', '8600100712', 2),
	(55, '1', 'LÓPEZ PARRA JENNIFFER JANETH', '', 'SI', '1', 'CALLE 9 # 7-22', 'CENTRO', '3106197510-3212922098', 'optolopez90@hotmail.com', '8600100716', 2),
	(56, '1', 'REMISIONES Y TRASLADOS DIVINO NIÑO S.A.S', 'PAOLA ANDREA SOLARTE ROSERO', 'SI', '1', 'CLLE 15 No. 03', 'HUASIPANGA', '3223164023', 'remisiones_sas@hotmail.com', '8600100721', 2),
	(57, '1', 'AIMEDIC S.A.S.', 'RUTH ROVIRA ROSERO MUÑOZ', 'SI', '1', 'Carrera 7 N. 15-07', 'El Jardin', '3128252849', 'ipsaimedic@gmail.com', '8600100728', 2),
	(58, '1', 'OSCAR BERMEO NARVAEZ', '', 'SI', '1', 'CALLE 16 # 11 A - 49', 'BARRIO 8', '3222823880', 'oscarcxplastica@gmail.com', '8600100733', 2),
	(59, '1', 'KATERINE CUBIDES FLECHAS', '', 'SI', '1', 'Cra 9 N° 12-44 CONSULTORIO 2', 'AV COLOMBIA', '3124475541', 'katerinecufle@hotmail.com', '8600100737', 2),
	(60, '1', 'MARIA ELENA PEREZ MELO', '', 'SI', '1', 'CRA 4 No 7-06 B/ JOSE MARIA HERNANDEZ', 'B/ JOSE MARIA HERNANDEZ', '4205356 - 3212011259 - 3108814541', 'maria.elen@hotmail.es', '8600100740', 2),
	(61, '1', 'IVAN DARIO GONZALEZ ROA', '', 'SI', '1', 'carrera 6 no 8-29 segundo piso', 'Centro', '4295925 -3146782967', 'id.gonzalez@unicieo.edu.co', '8600100743', 2),
	(62, '1', 'PROFESIONALES EN INSTRUMENTOS PARA LA SALUD Y MEDICINA HUMANA APLICADAS S.A.S PRISMHA S.A.S', 'SANDY ALEJANDRA ROJAS', 'SI', '1', 'CALLE 14 N° 10 - 11', 'BARRIO 8', '3175098470', 'prismha@hotmail.com', '8600100764', 2),
	(63, '1', 'PAOLA NAYERINE CHAMORRO CHANCHI', '', 'SI', '1', 'CARRERA 17.CALLE 9.', 'BARRIO AVENIDA COLOMBIA', '3204736582', 'naye80811@hotmail.com', '8600100771', 2),
	(64, '2', 'ANTONIO GABRIEL MUSIRI PASTRANA', '', 'SI', '2', 'calle 8 cra 4-28', 'jose maría hernandez', '3113611620-3008875150-3016911680-', 'distriopticas@gmail.com', '8600100783', 2),
	(65, '1', 'LUZ EDILIA LOPEZ CORDOBA', '', 'SI', '1', 'Carrera 13 N°14-00 Barrio Jardín Diagonal a la Notaria Única de 2', 'JARDIN', '3112235684', 'luzedilialopez@hotmail.com', '8600100801', 2),
	(66, '1', 'CRISTIAN DARWUIN TORRES ALEGRIA', '', 'SI', '1', 'Centro Comercial Rio Plaza,Local 104', 'CENTRO', '3125784645- 3142026268-4204777', 'cristiantorres04@hotmail.com', '8600100807', 2),
	(67, '1', 'LIZBETH JOHANA BURBANO CRIOLLO', '', 'SI', '1', 'CALLE 15 NUMERO 7A', 'OLIMPICO', '3194107020', 'lj.burbano@unicieo.edu.co', '8600100823', 2),
	(68, '1', 'LUISA FERNANDA ARDILA ORDOÑEZ', '', 'SI', '1', 'CALLE 5 N° 11- 130', 'MIRAFLORES', '3203133143', 'fao_abril@hotmail.com', '8600100825', 2),
	(69, '3', 'Ivan Dario Cuaran Jurado', '', 'SI', '3', 'CRA 7 No. 9-17 clle del Tobogan', 'CENTRO', '3142424525', 'cardiodiagnosticodelsur@gmail.com', '8600100827', 2),
	(70, '1', 'PICACHOS 2', 'Miguel Angel Claros Correa', 'SI', '1', 'VEREDA PUEBLO VIEJO', 'VEREDA PUEBLO VIEJO', '3176681977', 'fpicachos@fundacionpicachos.org', '8600100828', 2),
	(71, '1', 'Cuerpo de Bomberos Voluntarios de 2', 'JOHNNY ALCIBIADES MERA MARIN', 'SI', '1', 'CALLE 17 A N° 8-34', 'JARDIN', '4295030', 'bomberos2dcs@gmail.com', '8600100832', 2),
	(72, '1', 'Yoldy Numar Hidalgo Velasco', '', 'SI', '1', 'CALLE 14 NO. 8-16 JUNTO A LA OZIP', 'OLIMPICO', '3125852525', 'solosonrisas321@gmail.com', '8600100833', 2),
	(73, '1', 'LYNDA MARILYN FAJARDO BARAHONA', '', 'SI', '1', 'Av Colombia Cra 9 # 17A 31', '', '3156219644 - 3142231318', 'fajardolyndaavanzada@gmail.com', '8600100835', 2),
	(74, '1', 'AMBULANCIAS GLOBAL SALUD SAS ZOMAC', 'LUIS MANUEL JURADO DELGADO', 'SI', '1', 'cra 9 Nº 2-37', 'pablo sexto alto', '3132211739', 'ambulanciasglobalsalud@gmail.com', '8600100840', 2),
	(75, '1', 'FUNDACION SAN DAMIAN - ESCUELA DE VIDA', 'EFRAIN ALEXANDER CHASPUENGAL', 'SI', '1', 'CL 14 9 23 AN 8', 'AVENIDA 8', '3134904770 - 3173761143', 'sandamian.fundacion@gmail.com', '8600100845', 2),
	(76, '1', 'CLINICA SMILE DENTIS SAS', 'FENER IVAN ORDOÑEZ BOLAÑOS', 'SI', '1', 'CL 14 11 39 AV 8', 'BRR 8', '3213332714 - 3103876930', 'clinicasmiledentis2020@gmail.com', '8600100848', 2),
	(77, '1', 'CENTRO DE DIAGNOSTICO 2', 'Lida Lizzeth Gerrero Romero', 'SI', '1', 'Carrera 8 8-32', 'CENTRO', '3006915097', 'rlginversionesmedicas@gmail.com', '8600100850', 2),
	(78, '1', 'Marcela Viviana Andrade Vallejo', '', 'SI', '1', 'Carrera 7 No. 8-22', 'Centro', '098 4296049', 'lab.hidalgo900@hotmail.com', '8600100853', 2),
	(79, '1', 'JUAN CARLOS LOPEZ PUJIMUY', '', 'SI', '1', 'CALLE 16 # 8-31- Frente al coliseo Jardín', 'JARDIN', '3164105096', 'integralaboratoriodc@gmail.com', '8600100855', 2),
	(80, '1', 'ALVARO DAVID ANACONA CORDOBA', '', 'SI', '1', 'Carrera 8a No. 8-32 Clle Contraloria General', 'OLIMPICO', '3212049895', 'Adavic1223@gmail.com', '8600100858', 2),
	(81, '1', 'Leonela Fernanda Alarcón Herrán', '', 'SI', '1', 'Carrera 8# 8-32 barrio Olímpico', 'Olímpico', '3148506536', 'leonela_112@hotmail.com', '8600100864', 2),
	(82, '1', 'ANDRES MAURICIO WINTACO MARTINEZ', '', 'SI', '1', 'CARRERA 9 N° 17-42 EDIFICIO JULIO MURIEL', 'AVENIDA COLOMBIA', '3153043160', 'andreswm2013@hotmail.com', '8600100867', 2),
	(83, '1', 'JUAN DIEGO LOPEZ GORDILLO', '', 'SI', '1', 'Carrera 8 # 1 - 27', 'Pablo VI', '3204141895', 'juandlopez184@hotmail.com', '8600100872', 2),
	(84, '1', 'LEYDI CAROLINA CLEVES BELTRAN', '', 'SI', '1', 'URBANIZACION QUINTAS DE LA COLINA', 'QUINTAS DE LA COLINA', '3118600351', 'carolinaTAFV@gmail.com', '8600100877', 2),
	(85, '1', 'Katherine Gaviria Montezuma', '', 'SI', '1', 'carra 9a#17A-49', 'avenida colombia', '3504345230', '2020vision2@gmail.com', '8600100878', 2),
	(86, '1', 'YULIMAR MARGARITA CASTILLO GAVIDIA', '', 'SI', '1', 'CL 12 # 9 48', 'VILLA COLOMBIA', '3145188378', 'yulimargozzo@gmail.com', '8600100879', 2),
	(87, '1', 'HOME HEALTH PUTUMAYO S.A.S', 'JULIE CATHERINE SUAREZ BUCHELY', 'SI', '1', 'CASA 9 MZ A', 'BARRIO QUINTA PAREDES', '3125734365', 'homehealthptyo@gmail.com', '8600100880', 2),
	(88, '1', 'Gina Paola Canamejoy Arcos', '', 'SI', '1', 'carrera 15 #14-54', 'Obrero segunda etapa', '3182160206', 'paolacaarcos@gmail.com', '8600100882', 2),
	(89, '2', 'ANGIE JOHANA ZAPATA GARCES', '', 'SI', '2', 'barrio ciudadela', 'ciudadela', '3138472282', 'angie.zagar@gmail.com', '8600100890', 2),
	(90, '1', 'JORGE ALBERTO MOLINA GIRALDO', '', 'SI', '1', 'barrio ciudadela', 'ciudadela', '3219711917', 'medicojorgemolina@gmail.com', '8600100891', 2),
	(91, '1', 'CRISTIAN JULIAN BOTINA JOAQUI', '', 'SI', '1', 'CRA9 N°12-44 CONSULTORIO 1', 'AV COLOMBIA', '3164934678', 'drcbotinaj@hotmail.com', '8600100893', 2),
	(92, '1', 'Munay San Gabriel', 'José Miguel Méndez Tavera', 'SI', '1', 'Vereda Caliyaco vía al aguacate, Munay san Gabriel', 'Vereda Caliyaco', '3214395771', 'fundacionmunay@gmail.com', '8600100896', 2),
	(93, '1', 'Giselle Catalina Alvarez Diaz', '', 'SI', '1', 'Cll 9 # 12-44 CONSULTORIO 2', 'Av. Colombia', '3143186863', 'Kata_aldi1240@hotmail.com', '8600100898', 2),
	(94, '1', 'SALUD HOME CARE S.A.S BIC', 'JENNIFER ALEXANDRA SOLARTE ALZATE', 'SI', '1', 'CR 7 # 17B28', 'LOS ANGELES', '3107651509', 'saludhomecare22@gmail.com', '8600100899', 2),
	(95, '1', 'WILLIAM BRIAN RIASCOS PALACIOS', '', 'SI', '1', 'Cra. 8 No. 17-50', 'Barrio Villa Natalia', '3112033322', 'williamriascosmd@hotmail.com', '8600100903', 2),
	(96, '1', 'sugey magueth Barrios Cardenas', '', 'SI', '1', 'carrera 9 # 10-02 Consultorio 01', 'modelo', '4205329', 'sugey.barrios@gmail.com', '8600100906', 2),
	(97, '1', 'UNIDAD ONCOLOGICA DEL PUTUMAYO', 'JUAN PABLO CHAVES CASTRO', 'SI', '1', 'CARRERA 8 # 15-30', 'JARDÍN OLIMPICO', '3138543593', 'info@unop1.com', '8600100908', 2),
	(98, '1', 'CLAUDIA PATRICIA ROSALES BASANTE', '', 'SI', '1', 'AV. COLOMBIA', 'AV. COLOMBIA', '3124602578', 'crosales46@uan.edu.co', '8600100914', 2),
	(99, '1', 'JUAN CAMILO CADENA ESCOBAR', '', 'SI', '1', 'CALLE 14 #11 -39 AV 8', '8', '3157944693', 'cadenajk@yahoo.es', '8600100920', 2),
	(100, '1', 'SALVA VIVIR S.A.S', 'LUZ MARIA JAMIOY', 'SI', '1', 'Carrera 12 No. 12B - 24 Entrada AK MOTOS', 'OBRERO', '3107744281', 'LUZsalvavivir53@gmail.com', '8600100939', 2),
	(101, '1', 'E.S.E HOSPITAL 3', 'NELCY JANETH DULCE ORTEGA', 'SI', '1', 'CALLE 9 No 3-50', 'LAS PALMAS', '4292283', 'gerencia@esehospital3.gov.co', '8632000024', 3),
	(102, '2', 'PUESTO DE SALUD DE SIBERIA', 'NELCY JANETH DULCE ORTEGA', 'NO', '1', 'VEREDA SIBERIA NARANJITO', 'NARANJITO', '4290761', 'gerencia@esehospital3.gov.co', '8632000024', 3),
	(103, '1', 'Laboratorio Clinico Clara Pombo Rodríguez', '', 'SI', '1', 'carrera 12 3 131', '', '3112569138 - 3134199893 - 3214754830', 'andeslaboratorios@gmail.com', '8632000121', 3),
	(104, '1', 'CLAUDIA LUCIA LOPEZ BURGOS', '', 'SI', '1', 'CALLE 4 No. 11-75', 'LA UNIÓN', '3142481659', 'claudiaortodoncia@gmail.com', '8632000180', 3),
	(105, '1', 'FONOCLINIC IPS S.A.S', 'Luz Stella Diaz Llerena.', 'SI', '1', 'Calle 2a nº 2-07', '28 de Mayo', '42992269', 'fonoclinicc@gmail.com', '8632000330', 3),
	(106, '1', 'GILMA ALEJANDRA DELGADO DIAZ', '', 'SI', '1', 'CARRERA 7 # 8 - 27', 'AL LADO DE LA NOTARIA', '3208311294', 'alejandraopt@hotmail.com', '8632000357', 3),
	(107, '1', 'RAYOS X CATILP SAS', 'DARWIN OSWALDO RODRIGUEZ MORALES', 'SI', '1', 'BARRIO MARCO FIDEL SAUREZ LO 3 151 C', 'MARCO FIDEL SUAREZ', '4290572', 'catilpsas@gmail.com', '8632000369', 3),
	(108, '1', 'IPS SERVICIO FARMACEUTICO SAN ANDRES S.A.S', 'HAROLD WILSON CASTRO', 'SI', '1', 'BARRIO VERGEL CASA 8', 'VERGEL CASA 8', '984290149', 'ipsanandres@yahoo.es', '8632000584', 3),
	(109, '1', 'ACSALUD IPS SAS', 'ALEJANDRA CARDONA DIAZ', 'SI', '1', 'DIAGONAL 8 # 5 A 36', 'BARRIO UNION', '3112310701-3208598430', 'acsalud.sas@gmail.com', '8632000587', 3),
	(110, '2', 'ACSALUD IPS SAS SEDE 1', 'ALEJANDRA CARDONA DIAZ', 'NO', '1', 'DIAGONAL 8 # 5 A 71', '', '3143871206', 'acsalud.sas@gmail.com', '8632000587', 3),
	(111, '1', 'MEDIC-LASER IPS', 'SILVIA JOHANA TRUJILLO RIVERA', 'SI', '1', 'CARRERA 13 No. 8 - 267', 'COLOMBIA', '3212115767', 'silviajtr91@gmail.com', '8632000598', 3),
	(112, '6', 'Delgado', '', 'SI', '6', 'calle 8 N. 7a-69', '', '3137928736/3116476698', 'adrianaopt2@gmail.com', '8632000599', 3),
	(113, '1', 'MEDERI CENTER', 'GLORIA JUDITH DELGADO CANTINCUS', 'SI', '1', 'DIAGONAL 8 N° 4-116', 'VERGEL', '4290188 - 3124369971', 'DELGADOG28@GMAIL.COM', '8632000624', 3),
	(114, '1', 'Vilma Cristina Gonzalez Vallejo', '', 'SI', '1', 'CARRERA 12 N° 7-84', 'MARCO FIDEL SUAREZ', '3108320753', 'vilma_gonzalez@hotmail.es', '8632000665', 3),
	(115, '1', 'JOHN WILLIAM LOPEZ JUAGIBIOY', '', 'SI', '1', 'CALLE 3 No. 7-11', 'SIMON BOLIVAR', '3112333343', 'johnwlopezj@hotmail.com', '8632000713', 3),
	(116, '1', 'CHAVEZ FLOREZ LEYDI VIVIANA', '', 'SI', '1', 'DETRÁS DE COLEGIO SAN JOSÉ, CUARTA CASA', 'COMUNEROS', '4290771 / 3213930505', 'vivichavez71@hotmail.com', '8632000732', 3),
	(117, '1', 'ANALIZAR LABORATORIO CLÍNICO IPS SAS', 'Adriana Paulina Cabrera Mujanajinsoy', 'SI', '1', 'CRA. 10 No. 5 - 40', 'LA UNION', '3214929844', 'analizarlabhormiga@gmail.com', '8632000755', 3),
	(118, '1', 'YENIA YADIRIS MOSQUERA LOZANO', '', 'SI', '1', 'DIAGONAL 8 N 4 - 184', 'EL VERGEL', '3156042314', 'spadental2020@gmail.com', '8632000815', 3),
	(119, '1', 'Nazly Paola España Burgos', '', 'SI', '1', 'calle 4A No. 7-43', 'la Unión', '3208555811', 'n.paolaespana@gmail.com', '8632000829', 3),
	(120, '1', 'Luis Alfredo Cerquera Guerrero', '', 'SI', '1', 'Diagonal 8 Casa 52 via principal', 'Vergel', '3134958989 317551089', 'cerguerrero84@hotmail.com', '8632000836', 3),
	(121, '1', 'helen yurani bisbicuth araujo', '', 'SI', '1', 'diagonal 8 casa 52', 'vergel via principal', '3174959326', 'helenbisbicuth@hotmail.com', '8632000837', 3),
	(122, '1', 'A+ mas ambulancias y servicios s.a.s', 'Germain Rodriguez', 'SI', '1', 'zonal rural', 'zona rural', '3015345337', 'info@ambulanciasamas.com', '8632000839', 3),
	(123, '1', 'TRANSPORTE ASISTENCIAL GUADALUPE S.A.S.', 'NELSON NOEL GALINDEZ GALINDEZ', 'SI', '1', 'LAS PALMAS', '', '3102504989', 'AMBGUADALUPE@GMAIL.COM', '8632000852', 3),
	(124, '1', 'LUIS ANGEL BUELVAS DIAZ', '', 'SI', '1', 'CARRERA 8 # 4-16', 'LA UNIÓN', '3132101871', 'luisangelbd@gmail.com', '8632000870', 3),
	(125, '1', 'CRISTHIAN CAMILO RIVEROS CARVAJAL', '', 'SI', '1', 'CARRERA 9 # 7 - 10B CALLE LOS FAROLES', 'MARCO FIDEL SUAREZ', '3504944997', 'camilo_20riveros@hotmail.com', '8632000892', 3),
	(126, '1', 'ESE HOSPITAL LOCAL', 'GLINYS EDITH DIAZ LLERENA', 'SI', '1', 'KR 29 No 10-10', 'CAMILO TORRES', '3108760381', 'esehospitallocal@yahoo.es', '8656800007', 4),
	(127, '2', 'PUESTO DE SALUD 20 DE JULIO', 'GLINYS EDITH DIAZ LLERENA', 'NO', '1', 'CARRERA 23 CON CALLE 25', '', '3108760381', 'esehospitallocal@yahoo.es', '8656800007', 4),
	(128, '3', 'PUESTO DE SALUD EL JARDIN', 'GLINYS EDITH DIAZ LLERENA', 'NO', '1', 'CALLE 20 CON CARRERA 24B Y C', '', '3108760381', 'esehospitallocal@yahoo.es', '8656800007', 4),
	(129, '16', 'PUESTO DE SALUD VEREDA SANTANA', 'GLINYS EDITH DIAZ LLERENA', 'NO', '1', 'VEREDA SANTANA', '', '3108760381', 'esehospitallocal@yahoo.es', '8656800007', 4),
	(130, '22', 'CENTRO DE SALUD LA CARMELITA', 'GLINYS EDITH DIAZ LLERENA', 'NO', '1', 'VEREDA LA CARMELITA', 'camilo torres', '3108760381', 'esehospitallocal@yahoo.es', '8656800007', 4),
	(131, '1', 'REGULO ERACLIO BARONA OSORIO', 'REGULO ERACLIO BARONA OSORIO', 'SI', '1', 'CLL 12 # 17-19', 'LAS AMERICAS', '3102401532', 'regulobarona@hotmail.com', '8656800093', 4),
	(132, '1', 'LUIS GONZALO MARIN MARIN', '', 'SI', '1', 'KRA 26 N 10 30', '', '3106777538', 'lugoma_18@hotmail.com', '8656800095', 4),
	(133, '1', 'WILMER CORDOBA MARIN', '', 'SI', '1', 'CL 10 NUMERO 27-40', 'CARMEN', '4227375', 'wcordobam@gmail.com', '8656800104', 4),
	(134, '1', 'CLAUDIA PATRICIA PROAÑOS PANTOJA', '', 'SI', '1', 'CALLE 10 No.20-30 Primer Piso Edificio Antares', '', '098-4227585 - 3113014923', 'labprosaludptyo@hotmail.com', '8656800109', 4),
	(135, '1', 'Laboratorio clinico 8 de Asis', '', 'SI', '1', 'Calle 10 No 27-02', 'EL CARMEN', 'O984220413', 'sanfranciscoasislb@hotmail.com', '8656800111', 4),
	(136, '1', 'MARITZA BARRERA PALOMINO', '', 'SI', '1', 'CL10 NUMERO 26-13', '', '3112353782 / 3118692448', 'maritzabarrera3066@hotmail.com', '8656800159', 4),
	(137, '1', 'LUZ EMELY NARANJO OROZCO', '', 'SI', '1', 'Cra. 30 no. 28-29', '', '311 80 82 000', 'luzemely67@hotmail.com', '8656800196', 4),
	(138, '1', 'CLINICA DE LA AMAZONIA IPS LTDA', 'LUZ MYRIAM VASQUEZ BOHORQUEZ', 'SI', '1', 'CL 10 No.25 18 BR EL CARMEN', 'EL CARMEN', '4228686 4227906', 'ipsamazonia@gmail.com', '8656800202', 4),
	(139, '9', 'CLINICA DE LA AMAZONIA IPS LTDA AGENCIA PUERTO ASIS', 'LUZ MYRIAM VASQUEZ BOHORQUEZ', 'NO', '1', 'CALLE 12 No 27 03', 'EL CARMEN', '4227906 3138251619 3123862251', 'ipsamazonia@gmail.com', '8656800202', 4),
	(140, '1', 'GENNY ELISABETH DELGADO MORALES', 'GENNY ELISABETH DELGADO MORALES', 'SI', '1', 'Calle 17A No 27 - 46 Barrio Las Ceibas', 'LAS CEIBAS', '3107860728-3155283580', 'genny_lab@hotmail.com', '8656800211', 4),
	(141, '1', 'Marco Antonio Infante Villarraga', '', 'SI', '1', 'CALLE 10 No. 25 - 18', 'EL CARMEN', '4227234 3112644276', 'clarence440@hotmail.com', '8656800294', 4),
	(142, '1', 'Lina Niño Coral', '', 'SI', '1', 'Calle 10#26-43', 'El Carmen', '3202104844-3204337570', 'linita-2610@hotmail.com', '8656800306', 4),
	(143, '1', 'Rina Alejandra Chicue Ortiz', '', 'SI', '1', 'calle 13 mz 2', 'camilo torres', '3112768162', 'rinachicue0615@gmail.com', '8656800314', 4),
	(144, '1', 'MELVA LIDE VILLOTA ZAMBRANO', '', 'SI', '1', 'KR 26 # 10-08', 'EL CARMEN', '3112335416', 'melviz1962@hotmail.com', '8656800327', 4),
	(145, '1', 'CENTRO ESPECIALIZADO DE ALTA TECNOLOGIA EN IMÁGENES DIAGNOSTICAS SAS', 'ALEXANDRA GIRALDO AGUDELO', 'SI', '1', 'CALLE 11 N. 25-16', 'EL CARMEN', '320 3439774', 'calidad@cead.net.co', '8656800334', 4),
	(146, '1', 'CLINICA SALUD CENTER S.A.S', 'DAMIR ANTONIO CARDOZO BURBANO', 'SI', '1', 'CALLE 9 No 24 - 74', 'EL PUERTO', '3115252537', 'calidad@clinicasaludcenter.com', '8656800352', 4),
	(147, '1', 'Unimedical del Sur', 'LEONELA DEL ROCIO PEÑAARANDA SANCHEZ', 'SI', '1', 'CARRERA 25 30B - 51', 'EEL RECREO', '4220843', 'unimedicaldelsur@hotmail.com', '8656800635', 4),
	(148, '4', 'UNIMEDICAL DEL SUR S.A.S', 'LEONELA DEL ROCIO PEÑARANDA SANCHEZ', 'NO', '1', 'CARRERA 25 N 30B -48', 'BARRIO EL RECREO', '3134127481-3138931521-4220843', 'unimedicaldelsur@hotmail.com', '8656800635', 4),
	(149, '1', 'CERTIFICAR', 'DAIRO ALEXANDER ORDOÑEZ CAICEDO', 'SI', '1', 'CALLLE 9 No. 19-30 PISO 2', 'CENTRO', '4220387', 'certificarips@outlook.com', '8656800641', 4),
	(150, '1', 'MARIA FERNANDA HURTADO RAMIREZ', '', 'SI', '1', 'CALLE 10 ENTRE CRA 27 Y 28', 'BARRIO EL CARMEN', '3165360848', 'mafesita707@hotmail.com', '8656800653', 4),
	(151, '1', 'EMERGENCIAS MEDICAS PUERTO ASIS IPS SAS', 'SANDRA PATRICIA SOLARTE TRUJILLO', 'SI', '1', 'Carrera 29 No-9-70 Barrio Modelo', 'MODELO', '3127077518', 'emergenciasmedicaspuertoasis@hotmail.com', '8656800672', 4),
	(152, '1', 'ISABEL CRISTINA VELEZ OBANDO', '', 'SI', '1', 'CARRERA 10 No 27A - 10', 'EL CARMEN', '3144474768 - 3136240106', 'odontologaicvo@hotmail.com', '8656800674', 4),
	(153, '1', 'CONDUASIS CRC', 'VICTOR HUGO ENRIQUEZ ALVAREZ', 'SI', '1', 'Carrera 20 N 9-36 Segundo Piso', 'CENTRO', '4220445', 'crcconduasis@gmail.com', '8656800710', 4),
	(154, '1', 'CLÍNICA ORTIZ S.A.S.', 'FREDY DARIO ORTIZ ORTIZ', 'SI', '1', 'CALLE 11A No. 36-35', 'LAS COLINAS', '3214016961', 'clinorsas@gmail.com', '8656800758', 4),
	(155, '1', 'CENTRO ESPECIALIZADO DE UROLOGIA PUERTO ASIS', 'ELSA PATRICIA GARCIA LANDAZABAL', 'SI', '1', 'CRA 48 N 10-29', 'CIUDAD LEGUIZAMO', '3153756040', 'gerenciageneral@centroespecializadodeurologia.com.co', '8656800759', 4),
	(156, '1', 'AMBVIDA S.A.S.', 'LORENZO FABIAN HERNANDEZ PAYOGUAJE', 'SI', '1', 'Cra 24 # 15a-11', 'OBRERO I', '3113952657', 'ambvidasas@gmail.com', '8656800763', 4),
	(157, '1', 'TOBAR ENCISO ALLAN FREDY', '', 'SI', '1', 'CL 9 # 24-74 cs 202', 'El Puerto', '3125586008', 'ALLANTOBAR@GMAIL.COM', '8656800770', 4),
	(158, '1', 'AURELIO FERNANDO ACOSTA SOLARTE', '', 'SI', '1', 'CALLE 10 No.27-40', 'EL CARMEN', '3132759997', 'derlycubillos0@gmail.com', '8656800788', 4),
	(159, '1', 'Ivon Lorena Ballesteros Rojas', '', 'SI', '1', 'Calle 10 # 22 - 49', 'El Carmen', '3114844736', 'oscardavid-2015@hotmail.com', '8656800792', 4),
	(160, '1', 'sulay andrea diaz santander', '', 'SI', '1', 'cra 20 calle 12 # 009', 'las americas', '3124494902', 'sulay.diaz86@hotmail.com', '8656800797', 4),
	(161, '1', 'JESUS JOHN RONALD LASSO MOLINA', '', 'SI', '1', 'CALLE 17 # 32-05', 'BARRIO LOS CRISTALES', '3112823497', 'ralip-88@hotmail.com', '8656800799', 4),
	(162, '1', 'Cristian Andres Velasquez Carmona', '', 'SI', '1', 'cra 20 calle 12 # 009', 'las americas', '3223914918', 'cristian.velasquez48@gmail.com', '8656800800', 4),
	(163, '1', 'HOSPITAL DE ALTA COMPLEJIDAD DEL PUTUMAYO S.A.S ZOMAC', 'JOHN JAIRO BELTRAN SUAREZ', 'SI', '1', 'CARRERA 48 No 10-29', 'LEGIZAMO', '3134146544', 'vicepresidencia@clinicaputumayo.com.co', '8656800813', 4),
	(164, '1', 'IPS DE LOS ESPECIALISTAS', 'ALFREDO OROBIO TELLO', 'SI', '1', 'CARRERA 29 9-44', 'MODELO', '3007370822', 'calidad.ipsdelosespecialistas@gmail.com', '8656800819', 4),
	(165, '1', 'HORUS CLINIC SAS', 'GENNY ELISABETH DELGADO MORALES', 'SI', '1', 'CALLE 10 N. 22-49', 'BARRIO EL CARMEN', '3123714309 / 3155283580', 'horusclinic.so@gmail.com', '8656800831', 4),
	(166, '1', 'IPS 9 ARCANGEL PS SAS', 'MONICA LUCIA URBANO SOLARTE', 'SI', '1', 'CRA 37 N° 9-62', 'BARRIO LOS CHIPAROS', '3144358909', 'ipssanmiguelarcangelps@gmail.com', '8656800840', 4),
	(167, '1', 'PRESERVAR DEL SUR', 'YDIER JAVIER IDROBO ARBOLEDA', 'SI', '1', 'LT 4 MZ C. Entrada a Puerto Asis', 'JORGE ELIECER GAITAN', '3146923751', 'preservardelsur@gmail.com', '8656800846', 4),
	(168, '1', 'MARIA DE LOS ANGELES PORTILLO BASTIDAS', '', 'SI', '1', 'Barrio Obrero', 'Obrero', '3108315941', 'mariaportillobfisioterapia@gmail.com', '8656800857', 4),
	(169, '1', 'NEFROUROS MOM SAS SEDE PUERTO ASIS', 'ANGELICA MARIA PERDOMO ALVAREZ', 'SI', '1', 'CARRERA 48 10 29', 'CIUDAD LEGUIZAMO', '3229068739', 'gerenciapuertoasis@nefrouros.net', '8656800861', 4),
	(170, '1', 'SHIRLEY ROCIO ROSAS SANTANDER', '', 'SI', '1', 'CASA # 6 DETRAS DEL AEROPUERTO', 'CIUDADELA COMFAMILIAR', '3222317933', 'shirlyrosassantander@gmail.com', '8656800884', 4),
	(171, '1', 'JOHANA PAOLA GALLEGO BARRERA', '', 'SI', '1', 'calle10#24-23', 'el carmen', '321433010', 'paola10-11-90@hotmail.com', '8656800910', 4),
	(172, '1', 'JHENNY MILENA DELGADO MORALES', '', 'SI', '1', 'CALLE 10 2928', 'CAMILO TORRES', '3155136403', 'miledelgado20199@gmail.com', '8656800916', 4),
	(173, '1', 'ESE HOSPITAL ALCIDES JIMENEZ', 'MARIA PATRICIA RHENALS NUÑEZ', 'SI', '1', '0', 'ESPERANZA', '3214529693', 'info@esehospitalalcidesjimenez.gov.co', '8656900199', 5),
	(174, '7', 'CENTRO DE SALUD ARIZONA', 'MARIA PATRICIA RHENALS NUÑEZ', 'NO', '1', 'INSPECCION DE ARIZONA', 'INSPECCION DE ARIZONA', '3214529693', 'esealcidesjimenez@yahoo.es', '8656900199', 5),
	(175, '1', 'Harold Jonatan Acosta Obando', '', 'SI', '1', 'carra 5', 'el jardin', '312659702', 'hjonatan1984@gmail.com', '8656900900', 5),
	(176, '1', 'ESE HOSPITAL JORGE JULIO GUZMAN', 'DERLIS CAICEDO TRIANA', 'SI', '1', 'Via Puerto Rosario', 'Los Prados', '098-4295075', 'eseguzman@hotmail.com', '8657100005', 6),
	(177, '1', '"UNION DE PROMOTORES POR LA SALUD LTDA ""UPROSALUD LTDA"""', 'RUBICINTIA BUSUY GUALDRON', 'SI', '1', 'PUERTO GUZMAN', 'LOS PRADOS', '3124314215-3176572144', 'uprosalud@gmail.com', '8657100088', 6),
	(178, '2', 'Fany Estela Ortiz Chamorro', '', 'SI', '2', 'Crra 8 No. 6-30 - Calle Principal', 'Los Pinos', '3176348744', 'orchafa@hotmail.com', '8675500824', 8),
	(179, '1', 'ESE HOSPITAL FRONTERIZO LA DORADA', 'JINA ANDREA BELALCAZAR FLOREZ', 'SI', '1', 'CRA 7 N° 1 - 36', 'EL PARAISO', '3134821413 3174276879', 'hfronterizop@yahoo.es', '8675700021', 9),
	(180, '2', 'PUESTO DE SALUD PUERTO COLON', 'JINA ANDREA BELALCAZAR FLOREZ', 'NO', '1', 'VIA PRINCIPAL PUERTO COLON', 'EL PARAISO', '4210533', 'hfronterizop@yahoo.es', '8675700021', 9),
	(181, '1', 'OLGA LUCIA CUASQUER POSOS', '', 'SI', '1', 'CALLE 6 # 5-28', 'CENTRAL', '3103498710', 'olga-lu-13@hotmail.com', '8675700616', 9),
	(182, '1', 'Sandra Elizabeth Chamorro Arcos', '', 'SI', '1', 'Via principal calle 5 diagonal a stihl', 'Barrio metropolitano', '3128237897', 'sandry_cham@hotmail.com', '8675700834', 9),
	(183, '1', 'IPS LA DORADA S.A.S ZOMAC', 'FERNEY OSWALDO CANTICUS ORTIZ', 'SI', '1', 'BARRIO LOS PRADOS', 'BARRIO LOS PRADOS', '3102714354', 'ipsladoradasas@gmail.com', '8675700838', 9),
	(184, '2', 'angela maria villota yama', '', 'SI', '2', 'CLL 4 CRR 4 DIAGONAL A LA IGLESIA CATOLICA', 'SAN FELIPE', '3115815262', 'angelamyama@gmail.com', '8675700888', 9),
	(185, '1', 'GLORIA STEPHANNY ORTEGA PANTOJA', '', 'SI', '1', 'CRA 6 NUMERO 5-12', 'B/ SAN FELIPE', '3183397693', 'stepphyortega@hotmail.com', '8675700895', 9),
	(186, '1', 'KATHERINE JHULIETH MONTENEGRO ERAZO', '', 'SI', '1', 'calle 5 Diagonal a la Iglesia', '', '3203034392', 'katherin.j@hotmail.com', '8675700909', 9),
	(187, '1', 'alejandra esthefania santacruz martinez', '', 'SI', '1', 'la dorada,9', 'metropolitano', '3184251156', 'odontologiadorada20@gmail.com', '8675700917', 9),
	(188, '1', 'ADRIANA LIZBETH CHAMORRO BUCHELI', 'ADRIANA LIZBETH CHAMORRO BUCHELI', 'SI', '1', 'KR 14 No. 15-58', 'ORIENTAL', '3107855891', 'adrichamorro@hotmail.es', '8674900062', 11),
	(189, '1', 'SANDRA PATRICIA GONZALEZ VALLEJO', 'SANDRA PATRICIA GONZALEZ VALLEJO', 'SI', '1', 'Cl 16 N° 14-45', 'LIBERTAD', '4261207 - 3104380847', 'laboratorio11@gmail.com', '8674900063', 11),
	(190, '1', 'GUILLERMO HERNAN PANTOJA CEBALLOS', '', 'SI', '1', 'CR 14 No. 16 - 41', 'LIBERTAD', '3115325779', 'dr-hernanpantoja@hotmail.com', '8674900065', 11),
	(191, '1', 'ASOCIACION IPS INDIGENA INGA KAMENTSA', 'DAYRA PATRICIA LASSO JACANAMEJOY', 'SI', '1', 'CALLE 15 Nº 15-69', 'EL RECREO', '3132863398', 'ipsingakamentsa@gmail.com', '8674900066', 11),
	(192, '1', 'LUIS CARLOS BASTIDAS VEGA', '', 'SI', '1', 'CL 17 N° 15 -52', 'CENTRO', '4260666', 'luiscbv5@hotmail.com', '8674900074', 11),
	(193, '1', 'MARIA VICTORIA HERRERA SALAS', '', 'SI', '1', 'Cra 14# 15-58', 'Oriental', '3122620667', 'marvihesa@hotmail.com', '8674900151', 11),
	(194, '1', 'ips prevenir 11 eu sede 11', 'CARLOS HERNAN BETANCOURT GUZMAN', 'SI', '1', 'calle 17# 14-57', 'libertad', '4260301', 'ips.prevenir.eu@hotmail.com', '8674900317', 11),
	(195, '1', 'YORMARY YANETSY LUNA BURBANO', '', 'SI', '1', 'calle 16 N° 19 - 193 ESQUINA', 'El Cedro', '3189619344', 'c.odontoesteticalunab@gmail.com', '8674900390', 11),
	(196, '1', 'JORGE LUIS MOLINA MEJIA', '', 'SI', '1', 'CRA. 14 No. 15-58', 'ORIENTAL', '3006116234', 'chvallenato@hotmail.com', '8674900611', 11),
	(197, '1', 'REHABILITAR CIRP S.A.S', 'Karen Yamileth Perafan Gomez', 'SI', '1', 'Crr 16 15 60', 'Comercial', '3105968906', 'rehabilitarcirp@gmail.com', '8674900645', 11),
	(198, '1', 'IPS ESPAÑA ORTIZ LIMITADA', 'Jose Diomedes España Ortiz', 'SI', '1', 'CARRERA 18 CALLE 13 ESQUINA', 'BETANIA', '3113036231', 'mediguay@hotmail.com', '8674900685', 11),
	(199, '1', 'I.P.S. CENTRO DE REHABILITACION INTEGRAL SAOMY S.A.S.', 'YONY FRANCISCO ERAZO GUERRERO', 'SI', '1', 'CALLE 16 N° 22-34', 'EL CEDRO', '3113158103', 'saomy2015@hotmail.com', '8674900696', 11),
	(200, '1', 'CLAUDIA ROCIO ROJAS BENAVIDES', '', 'SI', '1', 'CLL15 19-25', 'CASTELVI', '3137034026', 'rociorojas-1923@hotmail.com', '8674900715', 11),
	(201, '1', 'UNIDAD DE SERVICIOS ESPECIALIZADOS SAS', 'CARLO ANTONIO PISCIOTTI PUCCINI', 'SI', '1', 'CARRERA 14 No. 16 - 30', 'CEN', '3142987199', 'usesalud@hotmail.com', '8674900735', 11),
	(202, '1', 'Vanessa Reyes Muñoz', '', 'SI', '1', 'calle 16 No. 16 -72', 'Comercial', '3107877193', 'vareyesm1@hotmail.com', '8674900753', 11),
	(203, '1', 'MARIA CAMILA RUALES CEBALLOS', '', 'SI', '1', 'CALLE 16 #19-37', 'AVENIDA CASTELVI', '3146496059', 'camiruales29@gmail.com', '8674900757', 11),
	(204, '1', 'JOSÉ AZAEL ORTEGA MITICANOY', '', 'SI', '1', 'VEREDA SAGRADO CORAZÓN', 'VEREDA SAGRADO CORAZÓN', '3147917481', 'ortegamja@yahoo.es', '8674900784', 11),
	(205, '1', 'MED&HOUSE SAS', 'GLORIA ELENA LOPEZ ESPAÑA', 'SI', '1', 'CLLE 14 No 15-16', 'EL RECREO', '3144437836 - 3124975005', 'medhouse11@gmail.com', '8674900793', 11),
	(206, '1', 'IPS ESPECIALIZADA DEL PUEBLO CAMENTSA BIYA S.A.S', 'JUAN BAUTISTA AGREDA CHINDOY', 'SI', '1', 'CALLE 16 No.19-431 BARRIO EL CEDRO', 'BARRIO EL CEDRO', '3235856039', 'ipscamentsabiya@gmail.com', '8674900794', 11),
	(207, '1', 'SANDRA MARCELA DELGADO RENZA', '', 'SI', '1', 'Calle 17 N. 14-51', 'BARRIO LIBERTAD', '3113825844', 'delrenza24@hotmail.com', '8674900814', 11),
	(208, '1', 'Richard Fernando Narvaez Chaves', '', 'SI', '1', 'CALLE 16 #19-37', 'AVENIDA CASTELVI', '3146496059', 'richardnarvaez345@hotmail.com', '8674900841', 11),
	(209, '1', 'MERY HELEN DEL CASTILLO PAZOS', '', 'SI', '1', 'CARRERA 17 No 15 - 62', 'CENTRAL', '3122249893', 'meryhelendelcastillo@gmail.com', '8674900843', 11),
	(210, '1', 'Graciela Enriqueta Bravo Urbano', '', 'SI', '1', 'CALLE 15 19-25', 'CASTELVI', '3188702095', 'gracielabravou@hotmail.com', '8674900844', 11),
	(211, '1', 'Erika Natalia Tobar Zambrano', '', 'SI', '1', 'CALLE 13 16-44', 'PABLO SEXTO', '3122192604', 'erikanatalia115@gmail.com', '8674900856', 11),
	(212, '1', 'SOLARTE ESPAÑA ALIRIO FLORIBERTO', '', 'SI', '1', 'Calle 15 carrera 16-17', 'Barrio Comercial', '3127575067', 'alirio8308@gmail.com', '8674900883', 11),
	(213, '1', 'Elkin Salvador Rosero Quintero', '', 'SI', '1', 'carrera 17 No 16 - 80', 'Occidente', '3155474148', 'elroqui15@gmail.com', '8674900886', 11),
	(214, '1', 'MARIA FERNANDA ERAZO CHAMORRO', '', 'SI', '1', 'Calle 16 #19-37', 'Av. Castelví', '3219710762', 'fernanda.erazo@hotmail.com', '8674900918', 11),
	(215, '1', 'ESE HOSPITAL SAGRADO CORAZON DE JESUS', 'MAYELY MARTOS NARVAEZ', 'SI', '1', 'VIA ROSAL', 'PARKE', '4287089', 'gerencia@hospitalhormiga.gov.co', '8686500010', 12),
	(216, '6', 'PUESTO DE SALUD EL PLACER', 'MAYELY MARTOS NARVAEZ', 'NO', '1', 'CENTRO', 'CENTRO', '4287089', 'gerencia@hospitalhormiga.gov.co', '8686500010', 12),
	(217, '7', 'puesto de salud el tigre', 'MAYELY MARTOS NARVAEZ', 'NO', '1', 'centro', '', '4287089', 'gerencia@hospitalhormiga.gov.co', '8686500010', 12),
	(218, '13', 'ESE HOSPITAL SAGRADO CORAZON DE JESUS SEDE PROMOCION Y MANTENIMIENTO', 'MAYELY MARTOS NARVAEZ', 'NO', '1', 'calle 8 kra.3-68', 'Las americas', '4283754', 'gerencia@hospitalhormiga.gov.co', '8686500010', 12),
	(219, '1', 'CLINICA SAN JORGE LA HORMIGA S.A.S', 'HAROLD LUIS PANTOJA ZAMBRANO', 'SI', '1', 'CRA 6 No. 9-38', 'LAS ACACIAS', '4287127', 'clinicasanjorge_94@yahoo.com', '8686500260', 12),
	(220, '1', 'HUGO JOSE TORRES HURTADO', '', 'SI', '1', 'CR 6 Nº 7-06', '', '3112192944', 'LESOR74@HOTMAIL.COM', '8686500359', 12),
	(221, '1', 'CENTRO MEDICO CRECER IPS S.A.S.', 'LUIS CARLOS ORTEGA TORRES', 'SI', '1', 'CARRERA 4 N 6-18', 'LA AMISTAD', '4287067', 'surticrecer@hotmail.com', '8686500603', 12),
	(222, '2', 'Diana Maria España Calderon', '', 'SI', '2', 'Calle 10 No 5_12', 'Las acacias', '3203040607', 'diana_espaqa@hotmail.com', '8686500605', 12),
	(223, '1', 'INSTITUCIÓN PRESTADORA DE SERVICIOS CENTRO INTEGRAL DE REHABILITACIÓN DEL PUTUMAYO LTDA.', 'DANIELA ISABEL JARAMILLO CHAMORRO', 'SI', '1', 'Calle 8 N° 2A -04', '8', '3212468575-3115414313', 'cirepips@hotmail.com', '8686500618', 12),
	(224, '1', 'EDY ELIZABETH MORA ROSERO', '', 'SI', '1', 'cra 4- calle 8 esquina Barrio las Americas 2 piso', '', '3113549534', 'elizabethmorarosero@hotmail.com', '8686500619', 12),
	(225, '1', 'Maria Patricia Benavides Ortega', '', 'SI', '1', 'Cra 8 5-71', 'El EDEN', '3104810766', 'mapato33@hotmail.com', '8686500722', 12),
	(226, '1', 'Jimmy Alexander Burbano Álvarez', '', 'SI', '1', 'carrera 8# 07-79', 'barrio los Pinos', '3214915203', 'jimbo_1480@hotmail.com', '8686500777', 12),
	(227, '2', 'FUNDACION FEDAR - La Hormiga', 'RICARDO COBO DIAZ', 'SI', '2', 'Urbanizacion Ardila Ortiz Mz 40', 'centro', '3155766420 - 3043371339', 'fedarhormiga@fedar.org', '8686500826', 12),
	(228, '1', 'EILEN PAOLA ELJAIK MANJARRES', '', 'SI', '1', 'Carrera 5 N°9-07', 'Las Acacias', '3147406618-3138873670', 'labhormiga@yahoo.com', '8686500842', 12),
	(229, '1', 'JENNY OLIVA ORTEGA SOLARTE', '', 'SI', '1', 'CL 5 #6-43', 'EL RECREO', '3185800099', 'drajennyortega@hotmail.com', '8686500849', 12),
	(230, '1', 'ELISABETH NOGUERA ARBOLEDA', '', 'SI', '1', 'CRA 6 No. 2 - 80', 'CIUDADELA UNIVERSITARIA', '3147536290', 'elinoguerarboleda@hotmail.com', '8686500854', 12),
	(231, '1', 'Miguel Angel Padilla Muriel', '', 'SI', '1', 'Av principal', 'BARRIO LA AMISTAD', '3176762935', 'mapm1996@gmail.com', '8686500859', 12),
	(232, '1', 'BRAHAYAN STEVVEN QUINTERO NARVAEZ', '', 'SI', '1', 'calle 8 # 7-15', 'Los Pinos', '3219766232', 'brsquinterona@unal.edu.co', '8686500860', 12),
	(233, '1', 'andres felipe chamorro navarro', '', 'SI', '1', 'cra 6 5A 13 BARRIO LA AMISTAD', 'LA AMISTAD', '3174263845', 'chamorrosfn@hotmail.com', '8686500862', 12),
	(234, '1', 'DANILO BOLAÑOS GRIJALBA', '', 'SI', '1', 'Carrera 7', 'La Amistad', '3118487261', 'dabogri@hotmail.com', '8686500863', 12),
	(235, '1', 'VIVIANA ENELIA DOMINGUEZ BAEZ', '', 'SI', '1', 'Cra 7 # 5-56', 'La Amistad', '3503757015', 'odontovidaclinicadental@gmail.com', '8686500869', 12),
	(236, '1', 'CLARIZA ELENA MERIÑO VEGA', '', 'SI', '1', 'Carrera 5 N°9-07', 'Las Acacias', '3147406618', 'labhormiga@yahoo.com', '8686500871', 12),
	(237, '1', 'Leidy Paulette Rodriguez Marin', '', 'SI', '1', 'Calle 10 · 5-12', 'Las Acacias', '3218422320', 'Leidy.rodriguezm@autonoma.edu.co', '8686500876', 12),
	(238, '1', 'Cristhian Camilo Montealegre Oliva', '', 'SI', '1', 'CALLE NOVENA NRO 3-26 RESPALDO HOSPITAL', 'BARRIO CENTRAL', '3214677828', 'soyadrianacoral@gmail.com', '8686500887', 12),
	(239, '1', 'CRC DOBLE VIA 12', 'ANDRES FERNANDO CRUZ SANCHEZ', 'SI', '1', 'LOTE 99 MAZ 13', 'EL PROGRESO', '3112327600', 'CRCDOBLEVIA@GMAIL.COM', '8686500889', 12),
	(240, '1', 'FUNDACION CLINICA VALLE DEL SINAI', 'ORLANDO FAVIO AREVALO GUERRA', 'SI', '1', 'BARRIO CIUDADELA UNIVERSITARIA', 'BARRIO CIUDADELA UNIVERSITARIA', '3123754728', 'fcvallesinai@gmail.com', '8686500902', 12),
	(241, '1', 'STEVAN DAVID MORENO OSORIO', '', 'SI', '1', 'CARRERA 6 # 5 - 25', 'LA AMISTAD', '3153531071', 'stevid23@gmail.com', '8686500905', 12),
	(242, '1', 'MARCO ISAAC GALINDEZ LEITON', '', 'SI', '1', 'Lote Mz L Diagonal a la cancha CONSULTORIO 102', 'Divino Niño', '3165251695', 'mgalindez07@gmail.com', '8686500911', 12),
	(243, '1', 'ADRIANA VICTORIA PALACIOS ZAMBRANO', '', 'SI', '1', 'Lote Mz L Diagonal a la cancha CONSULTORIO 101', 'Divino Niño', '3232033129', 'adrianapalaciosvk@gmail.com', '8686500912', 12),
	(244, '1', 'ENYI ZORAYA MAGIN GUERRERO', '', 'SI', '1', 'CRA 6#5-06 VIA PRINCIPAL', 'LA AMISTAD', '3222690401', 'ENYIMAGIG@GMAIL.COM', '8686500915', 12),
	(245, '1', 'Carlos Andres Roncancio Lenis', '', 'SI', '1', 'Cra 6 #6-31', '', '3164215850', 'roncanciolenis12@gmail.com', '8686500919', 12),
	(246, '1', 'ZENAIDA MARGARITA ABASOLO GUERRERO', '', 'SI', '1', 'BARRIO FATIMA Cra. 5 No. 5-18 FRENTE AL Juzgado', 'FATIMA', '3115956792', 'villadenconsultorio@gmail.com', '8688500078', 13),
	(247, '1', 'ROSA ELENA CHAMORRO VELASCO', '', 'SI', '1', 'CALLE 6 Nro. 2A-21', 'OBRERO', '3102857927', 'rosachamorrodra@yahoo.es', '8688500160', 13),
	(248, '1', 'ESE HOSPITAL SAN GABRIEL ARCANGEL', 'CRISTINA DEL CARMEN ROSERO BERMEO', 'SI', '1', 'CRA 4 13 5B', 'JUAN PABLO II', '4284503', 'esehvilla2004@yahoo.es', '8688500198', 13),
	(249, '3', 'PUESTO DE SALUD PUERTO UMBRIA', 'CRISTINA DEL CARMEN ROSERO BERMEO', 'NO', '1', 'INSPECCION PUERTO UMBRIA', '', '4284585', 'esehvilla2004@yahoo.es', '8688500198', 13),
	(250, '5', 'UNIDAD DE TERAPIAS', 'CRISTINA DEL CARMEN ROSERO BERMEO', 'NO', '1', 'Frente al Colegio Luis Carlos Galán', 'Obrero', '3102151051', 'esehvilla2004@yahoo.es', '8688500198', 13),
	(251, '1', 'IPS PROSVISALUD EU', 'TORRES CANO CONSTANZA VIVIANA', 'SI', '1', 'CALLE 3 # 7-47 BARRIO PROGRESO', 'CENTRO', '098-4284247', 'ipspvseu@gmail.com', '8688500228', 13),
	(252, '1', 'GRAN TIERRA ENERGY COLOMBIA LTD', 'CORAL PANTOJA ADRIAN 10', 'SI', '1', 'CAMPAMENTO COSTAYACO', 'VEREDA CAFELINA', '+ 57 (1) 6585757 - 3204903050', 'lilianamejia-ays@grantierra.com', '8688500344', 13),
	(253, '1', 'San Jose Ips Putumayo SAS', 'PABLO FAVIAN GOMEZ BENITEZ', 'SI', '1', 'Barrio Obrero', 'Barrio Obrero', '4206167', 'ips.sanjosevilla@gmail.com', '8688500586', 13),
	(254, '1', 'EIBAR CAMILO CHAMORRO VELASCO', '', 'SI', '1', 'BARRIO OBRERO calle 6 numero 2A-21', 'Juan Pablo II', '3133967272', 'kamili_861127@hotmail.com', '8688500633', 13),
	(255, '1', 'Yudy Liset Chamorro', '', 'SI', '1', 'BARRIO OBRERO CALLE 6 NUMERO 2A-21', 'OBRERO', '319-3922702- 320-3712101', 'dchamorro40@gmail.com', '8688500694', 13),
	(256, '1', 'Joana Margareth Baleta Ovalle', '', 'SI', '1', 'Calle 1ra Barrio el Progreso', 'Progreso', '3112648813', 'joitain@hotmail.com', '8688500700', 13),
	(257, '1', 'LISETH SORANY MELO ROSERO', '', 'SI', '1', 'Cra. 5 6-18', 'BARRIO INDUSTRIAL', '3105940836', 'odontologia.soranymr@gmail.com', '8688500791', 13),
	(258, '1', 'Terminal de Villagarzon SA', 'Mayerlig Chala Trujillo', 'SI', '1', 'Predio la Gaitana vereda el Porvenir', 'Vereda el Porvenir', '3118508561', 'terminalvillagarzon@hotmail.com', '8688500810', 13),
	(259, '1', 'yisel yurani benavides bacca', '', 'SI', '1', 'calle 1 #5-1B', 'JUAN PABLO', '3124470664', 'odontologiamident@gmail.com', '8688500851', 13),
	(260, '1', 'Bibiana Albarracin Rodriguez', '', 'SI', '1', 'Barrio Centro Calle 6 Cra 7a Esquina', 'Barrio Centro', '3153043160', 'andreswm2013@hotmail.com', '8688500868', 13),
	(261, '1', 'ANDREA NATALIA CARDONA CERON', '', 'SI', '1', 'KR 3A # 13A 58 BRR VILLA DEL SOL', '29 DE MAYO', '3143887700', 'imagenesdiagnosticas.sur@gmail.com', '8688500875', 13),
	(262, '1', 'JEINNY MARCELA QUINTERO ANGARITA', '', 'SI', '1', 'CARRERA 6 N°2A-21', 'OBRERO', '3046419662', 'Dramarcelaquintero@gmail.com', '8688500897', 13);

-- Volcando estructura para tabla sehab.sede_municipio
CREATE TABLE IF NOT EXISTS `sede_municipio` (
  `sede_mun_id` int NOT NULL AUTO_INCREMENT,
  `sede_mun_nombre` varchar(70) NOT NULL,
  PRIMARY KEY (`sede_mun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.sede_municipio: ~0 rows (aproximadamente)
DELETE FROM `sede_municipio`;
INSERT INTO `sede_municipio` (`sede_mun_id`, `sede_mun_nombre`) VALUES
	(1, 'COLÓN'),
	(2, 'MOCOA'),
	(3, 'ORITO'),
	(4, 'PUERTO ASIS'),
	(5, 'PUERTO CAICEDO'),
	(6, 'PUERTO GUZMAN'),
	(7, 'PUERTO LEGUIZAMO'),
	(8, 'SAN FRANCISCO'),
	(9, 'SAN MIGUEL'),
	(10, 'SANTIAGO'),
	(11, 'SIBUNDOY'),
	(12, 'VALLE DEL GUAMUEZ'),
	(13, 'VILLA GARZON');

-- Volcando estructura para tabla sehab.servicio
CREATE TABLE IF NOT EXISTS `servicio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(105) NOT NULL,
  `evaluacionServiciosId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_904a1a307fd157fb0cd562a7a0c` (`evaluacionServiciosId`),
  CONSTRAINT `FK_904a1a307fd157fb0cd562a7a0c` FOREIGN KEY (`evaluacionServiciosId`) REFERENCES `grupo-evaluacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.servicio: ~0 rows (aproximadamente)
DELETE FROM `servicio`;

-- Volcando estructura para tabla sehab.servicios_verificados
CREATE TABLE IF NOT EXISTS `servicios_verificados` (
  `ser_id` int NOT NULL AUTO_INCREMENT,
  `ser_codigo` varchar(5) NOT NULL,
  `ser_grupo` varchar(40) NOT NULL,
  `ser_nombre_servicio` varchar(40) NOT NULL,
  `ser_modalidad` varchar(40) NOT NULL,
  `ser_complejidad` varchar(8) NOT NULL,
  `ser_num_distintivo` varchar(30) NOT NULL,
  `prestadoresPreCodHabilitacion` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ser_id`),
  KEY `FK_763d59c1f229d60ecce87426798` (`prestadoresPreCodHabilitacion`),
  CONSTRAINT `FK_763d59c1f229d60ecce87426798` FOREIGN KEY (`prestadoresPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.servicios_verificados: ~0 rows (aproximadamente)
DELETE FROM `servicios_verificados`;

-- Volcando estructura para tabla sehab.servicio_farmaceutico
CREATE TABLE IF NOT EXISTS `servicio_farmaceutico` (
  `ser_farma_id` int NOT NULL AUTO_INCREMENT,
  `ser_farma_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`ser_farma_id`),
  UNIQUE KEY `IDX_413624a18f9479ee9c55d559ec` (`ser_farma_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.servicio_farmaceutico: ~0 rows (aproximadamente)
DELETE FROM `servicio_farmaceutico`;

-- Volcando estructura para tabla sehab.tecnico_administrativas
CREATE TABLE IF NOT EXISTS `tecnico_administrativas` (
  `tec_id` int NOT NULL AUTO_INCREMENT,
  `tec_nombre` varchar(55) NOT NULL,
  `tec_cumple` varchar(11) NOT NULL,
  `prestadorPreCodHabilitacion` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`tec_id`),
  UNIQUE KEY `REL_5fea6b00f1e66b6eeaa638e25c` (`prestadorPreCodHabilitacion`),
  CONSTRAINT `FK_5fea6b00f1e66b6eeaa638e25c2` FOREIGN KEY (`prestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.tecnico_administrativas: ~0 rows (aproximadamente)
DELETE FROM `tecnico_administrativas`;

-- Volcando estructura para tabla sehab.terapias
CREATE TABLE IF NOT EXISTS `terapias` (
  `ter_id` int NOT NULL AUTO_INCREMENT,
  `ter_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`ter_id`),
  UNIQUE KEY `IDX_549b9617e48b1429945aa0a9a1` (`ter_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.terapias: ~0 rows (aproximadamente)
DELETE FROM `terapias`;

-- Volcando estructura para tabla sehab.tipo
CREATE TABLE IF NOT EXISTS `tipo` (
  `tip_id` int NOT NULL AUTO_INCREMENT,
  `tip_nombre` varchar(10) NOT NULL,
  PRIMARY KEY (`tip_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.tipo: ~0 rows (aproximadamente)
DELETE FROM `tipo`;
INSERT INTO `tipo` (`tip_id`, `tip_nombre`) VALUES
	(1, 'Pública'),
	(2, 'Privada');

-- Volcando estructura para tabla sehab.todos_servicios
CREATE TABLE IF NOT EXISTS `todos_servicios` (
  `tod_id` int NOT NULL AUTO_INCREMENT,
  `tod_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`tod_id`),
  UNIQUE KEY `IDX_10fc3373ac1af719d77d388268` (`tod_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.todos_servicios: ~0 rows (aproximadamente)
DELETE FROM `todos_servicios`;

-- Volcando estructura para tabla sehab.transporte_asistencial
CREATE TABLE IF NOT EXISTS `transporte_asistencial` (
  `trans_asis_id` int NOT NULL AUTO_INCREMENT,
  `trans_asis_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`trans_asis_id`),
  UNIQUE KEY `IDX_e9d48ae39f23d3ef69816f26a4` (`trans_asis_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.transporte_asistencial: ~0 rows (aproximadamente)
DELETE FROM `transporte_asistencial`;

-- Volcando estructura para tabla sehab.urgencias
CREATE TABLE IF NOT EXISTS `urgencias` (
  `urg_id` int NOT NULL AUTO_INCREMENT,
  `urg_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`urg_id`),
  UNIQUE KEY `IDX_66aa18d9b03e45604ee001b3ec` (`urg_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.urgencias: ~0 rows (aproximadamente)
DELETE FROM `urgencias`;

-- Volcando estructura para tabla sehab.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `usu_id` int NOT NULL AUTO_INCREMENT,
  `usu_cedula` varchar(15) NOT NULL,
  `usu_nombre` varchar(20) DEFAULT NULL,
  `usu_apellido` varchar(20) DEFAULT NULL,
  `usu_email` varchar(30) NOT NULL,
  `usu_nombreUsuario` varchar(10) NOT NULL,
  `usu_password` varchar(255) NOT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  `usu_estado` varchar(10) NOT NULL,
  `usu_cargo` varchar(70) NOT NULL,
  `usu_area_profesional` varchar(70) NOT NULL,
  `usu_creado` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `usu_firma` text,
  PRIMARY KEY (`usu_id`),
  UNIQUE KEY `IDX_89070d206475b704c200c3de27` (`reset_password_token`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.usuario: ~0 rows (aproximadamente)
DELETE FROM `usuario`;
INSERT INTO `usuario` (`usu_id`, `usu_cedula`, `usu_nombre`, `usu_apellido`, `usu_email`, `usu_nombreUsuario`, `usu_password`, `reset_password_token`, `usu_estado`, `usu_cargo`, `usu_area_profesional`, `usu_creado`, `usu_firma`) VALUES
	(51, '', 'JUAN ALEJANDRO', 'ROSERO SALAZAR', 'alejo@gmail.com', 'alejo', '$2b$10$ifTqHLgEwWQSADxFgshKAO2w4YUnumqY2BAkslH4zXpBOZMgmO1t.', NULL, 'true', '', '', '2023-01-20 18:07:01.797527', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAAAXNSR0IArs4c6QAAHdNJREFUeF7tnV3IdllZxy/Bg4mMFII0HKbIg4IChQ6UlCkIHeikQCmhmCKhzmYGkuYkKgpiMBg9qgOlPAgNhKmDMCmowYE6EBQimIOiIsEhBIeUMoyKv7Ovuma9+773+tp77XXfvw0Pz/u89/r8Xete/32tz9cYDwQgAAEIQKCCwGsq4hAFAhCAAAQgYAgIjQACEIAABKoIICBV2IgEAQhAAAIICG0AAhCAAASqCCAgVdiIBAEIQAACCAhtAAIQgAAEqgggIFXYiAQBCEAAAggIbQACEIAABKoIICBV2IgEAQhAAAIICG0AAhCAAASqCCAgVdiIBAEIQAACCAhtAAIQgAAEqgggIFXYiAQBCEAAAggIbQACEIAABKoIICBV2IgEAQhAAAIICG0AAhCAAASqCCAgVdiIBAEIQAACCAhtAAIQgAAEqgggIFXYiAQBCEAAAggIbQACEIAABKoIICBV2IgEAQhAAAIICG0AAhCAAASqCCAgVdiIBAEIQAACCAhtAAIQgAAEqgggIFXYiiN9t5k9bmb6rR89f2Vmzy+/ixMkAgQgAIHRBBCQ/Swgofg1M/sZM3vtlWy+aGafMbMP7FcUUoYABCDQnwAC0p+pUpR4/GXwNnJy+Scz08/HzewPciIQBgIQgMBIAghIf/ryOn79QrL6fw1bSWAeNbOfuxBOXslHzew3+hePFCEAAQj0IYCA9OHoXsfvm9mPJElKDP7CzH5+JSsJyS+Z2XcuopLG1TzJr5rZC/2KSUoQgAAE+hBAQPpwlBCsiYcE4EcLsvDJ9tSDUTryRvSbBwIQgMApCCAgfcyg+Y7Ue5AI1A5BISR97EIqEIDAjgQQkHa48jzSuQx5HT28BYmSlv/qty//VYmVtobENOnOAwEIQGAIAQSkDbs6dnkf8eklHjFNXxIcheQlM3t/J6Fqo0BsCEDgLgkgIG1mT4eu9hCPVEjS5cHyRFj222ZHYkMAAhUEEJAKaEuU1PsonTCvz/mVDYpxol3/1v4RhrRaqBIXAhAoIoCAFOF6VeDU+/iegztwiYjmXnxuRF6IJu0RkXqbEhMCECgggIAUwApBU+9DnffaPo+61PNjqRyaxI/nazG5ns+PkBCAQAMBBKQO3ufN7K0h6tHex7V5ka+b2ffjidQZllgQgEA+AQQkn5WH1Nv+P4ZoHzazp8qT6R7j02b22JKqhrE0oc9wVnfMJAgBCDgBBKS8LcQJ7JfN7A3lSewSQ8L2hJk9GUREnhEPBCAAgV0IICDlWP8nRGnZbV6e83aM9EiVUXMz2yUlBAQgMD0BBKTMhOny2ZFzH5dKnh4lfzaRKyNOaAhA4LQEEJAy08Slu5pfOOsQURQR5kPKbExoCEAgkwACkglqWSobJ8/PvgNce0S0xFcPQ1n5diYkBCCQSQAByQS1XE/ru7/P7H3EGrnHNEt5861BSAhAYDgBBCTfBGeePL9Ui7jh8eweU74lCAkBCJyCAAKSZ4Z078cZJ8/XahLnQo48qyuPKqEgAIGpCSAgeeaLq69mGw7yss9W7jzLEAoCEBhGAAHJQz/j8JXXjGGsPBsTCgIQKCSAgGwDm3X4KtbMBfDF5Zys7VoTAgIQgMAGAQRku4nEN/hZh4G0/FhCqFsM37RdZUJAAAIQ2CaAgGwzivMfs05Ex3vbe9pcoiSBfSQcKe9Hy0tsdclVj7vht61ECAhA4HACPTuTwwt/UIZRQGY9FiRuKuy5guxLZvbGK3aQiPhFVweZi2wgAIGjCCAg26SjgMy6lyIOw/W6tz2KUqQo0XAvxP9/1qG/7dZBCAjcMQEEZNv4cfinV+e7nWv/ED4P0kME03mh9O4RCcjjyb3tEhFduSuPhAcCELgBAgjIthGjgPQc/tnOuW8IF5DWYbhUPCRIl+Y50tOLVaNnzOzpvlUjNQhAYAQBBGSbeuwEZ+bl52K1CEhc0iyP4pp4ONk1EWkpw7bFCAEBCBxCYOYO8RBAy4m2Gu+ffRy/h4DU7mqX16Irdx8KRpvZmzuq7ZEPBE5NAAHZNo8PYf2Nmb1jO/hpQ/hmwpY5kBYRSj0R7ik5bVOhYBDII4CAbHP6azN7+zLOr8niGZ849NSyEMBFqLbdICIzth7KDIELBGo7gnsC6gIy87i9L7ltGYZzEWpJQ+0m3uqov2fmek/fA+oKgQcIICDbjaLH0M92LvuGeNbMnjSzL5rZw5VZuQi13m6Y3tmu4rQMq1VW55BomvuR4OqHBwI3RwABuW7SXkM/oxuOv/W/YGbvqiyMzwV9yszeV5mGR1sTkVubVHdeHzazpxp5ER0CpySAgFw3S9zzMDMrn3to8R4+b2Zv7biPI50P0V4SeSK38rb+H8uqM05APmXXR6F6EJi5U+xR/600eswdbOVxxOfeWdfON/Sa/0jrmopIbfmOYFiSR/RcW0S7JE/CQuBwAgjIdeS1+x4ON+RGhj6cUttB9/BgLhXRd8jr8zMt7ZUIxDO9Sk4VjnWa9QTns7VhynNCAgjIdaN4xzv7W2SrgLTs/9hq9homVPm8sz56Ql35K+8nloK+fuUwSBc3/f7jJdzLS7jnF+FzgXHv4wvLkB8CstUC+HxaAgjIfQhIiwB4h9iygmvrC3L0nSsamnzUzH7MzN68VbjMz+U9SSy+y8zevSxPlseHgGQCJNh8BBCQ+xAQX4pcs4mwdf4k51uRrsraY0WW8lBdJB7XHp/ET08NVvytuJ7ufy1eyVsQkBzzE2ZWAghInoDM/BbZOgHu4/l7dOqRfjz1uHau5pI11w509LASCg1D/b2ZaZlzzeM3M/64mb13JQHlwe2MNWSJc2oCCMh188RLk2Zl1eJBtIpPSeOPS6ZdsFV2/b8639p7RKIweXkkUEqz95Jhby86sv6HzeydCQDVy4Wkd94lrAkLgS4EZu0Uu1Q+I5HYqe39Bp5RnKogPv9RMzndEremsHH1UoyvCes3VCSYHpuy92IIFzwNFca2o4M4dfVvvC+ey7UqDEqUcxFAQLbt0fMmv+3c+oZo8SCOmDyPtVV+zy0rl1IKXzezbylEk4pHzfxPYZamtuIbIteuEZaHIpFxIdnLEyotN+EhUEUAAdnG5kMgM86DtAxftcTdpvr/IdSZirE63PT5mpm9bvnPkraa7i3JufiqpMxrYTVc9Vkzc081biZMvT+fzFcYRKSVPPGHESj5Ug4r5OCMZx7G8rfw0rfvFs+lxFzXJrd1BIguoFJZSk4A9iNXVI4jNybq1OYfMLNvWwBcExAFiftfei8aKLEBYSFQTQAByUM34zBWiwgc4X2sTW7Ly9MGPJ0cHJ9cAYyCpHTelmfe5lD+khHnWOKLx6X5p1jeWefYmuGRwLwEEJA82824I71l97nvG9mjU1sbspKnECeV4xBU7tt5fOMv8VjyWsD1UO7pRV45AqJUEZEeFiCNIQQQkDzss53KGzvTUhFo8Vy2aEaOHladfTpH4SfZ/ruZfetWosvnUXRyPZbMpK8GW/M+fIhKwqJnawWcl/3IIbcedSeNOyeAgOQ3AP+SH9k55Zfu1SFbji7xN+KtTq+0bJ82s8eSSGsLE+LQ1j+YmXZzbz1xxVWux7KVZu7nXt5UqOMeohyW3r6OLn9uPQkHgQcIICD5jcInZ3tcqJSfa3lIfyOuGcbZy/tIl9SqVmt7MtbuTFfHfO1Z24BYTq0uhvNaq0sUkJyXjnicC5dQ1dmDWAcTQEDygceO+cybwFreZFvmTS6RXBOPtTfyKAQSa58A3xqC8/ka5Z/TUedbfDvkJe9DMaMY5pbrk2b2U8tCgqMWAGzXkhAQuEAAASlrGvF+EHUKZzuOovX+kn9ZTqfd6rRzqF3a37HWmUbx8FN/c87gip30iKEfidel3e21k+M59c7hTxgI7E4AASlDHDvFs20sjBPnuW+8sfY9b1/MnSxX/rHc+vv9ZqY38Zyl03HyeWuoq8zS26Hd+7jEOs7llAiyzxWNEMTtWhMCAoEAAlLeHLY2iJWn2CdG696NnA47p6SXxGPNY0u9lNgZby2djnYY0dnK+7j2EhGH7koExPmd7QUlx/aEuTMCCEidwc82lBU70xqbtky8R4JrO8svdYSpeKTzIu4RXYof86qpc53lX4nlZbvm6UUBKS0fw1gt1iHuYQRKG/ZhBTt5Rmcbymqd/G5Z9uumWpssvyYe6iT92ZpUX3uD9/xqVpu1Ni+V3fdsXErrS8sJvPq89HvWas/W+hEfAlkESht2VqJ3Eii+9Y9c2tu69LaH95G7TFdNIx3iurZH4treG199dfTwlXsfW3s7vHw1JwnPfP7anXz9qWbNmxHUXk1g9CoglaZl2a7it3gfl1ZaXerU0yGurcn+S/eRtC4YaGnHznvr5SsuL94Ku1YeXxG3JVQtdSEuBJoI1DTspgxvMHLsFI8+isLzrp1wbfE+4sa3aNY1UVDYeB/52vEla03jUv1G3RSZ632oLlFASibRnYPXfe9LsG7wK0mVjiKAgPQhnYqIvvTabLjn02PZba33UrJMVwziEeslYnfpDDLn7XtG9uQc09aR7W/PnNNo9UBaxP0oHuRz5wQQkH4NIH0j11v2XkLSYwintoNaE4/c5aw1R3SsnQzsQ1u6cMrv3+hnyfWUvN65cy6tAhK9mBoPZm8epA+B4tUhILtOQB3748syT/1bj4TErzntwS8KVcvwRo33USoecTOd7gV/RwWAtf0pIybQS7yPHkNYSqPnyQAV6IkCgesE8ED2aSEuJHpb9Se986I2Z3/7LhkKSvOqOfJkTTxy90G0lDXdUNhyVH0t80tHtl9Lr4cHwn6QWosR7xACCMi+mNPJY/dIau/o7rH3oWYHd3rcyLVJ8HRlVot4iJfP9bgHUyN+rVZeuzBqK80eAuIeyNZqta2y8DkEdiGAgOyC9YFE1zwSdayaaNfvnMffxFs3zpV2wKl4+HDc2kGSqZfSKh7ikk6ke2feMnyXw9vD1HgfittDQDwNBKTEYoQ9jAACchjqb2a0JiTqCD++ISTPmdlPhN3PtacAl06+r4mHOrP0WdsP0rOD9470XWb22SXz3MnsVgvXeB+9BYRJ9FYrEn8XAgjILlg3E700tKU39ucXMXGRiG/grW+iJZsGc4ai1oQjd4/HJqQQwOcCdFLvJ5b/b2WRk3+t99FbQPie5liLMIcToGEejvxVGa4JiQdwAfkOM3udmf2emf1RuIOk1AspHbqKx5Ok3sQlAdxr2bKX5Rkz+5UF0BFv5bXeRw8BaT2iZmzLJve7IICAnMPM6iz0tvvoMmmcUyoXEP3WjzwXPf53FJg4FKW9GH+yDKepw197onj4MexK441m9p6kjHvud/GyjRAQZ1Y7FNc6B8Kx7jnfAsIMJYCADMV/MXN1Xs8u8x7aLKcd1/JE9NP70bCZC5B+6w3/sSWTL5jZWy9keIRweNa+gCB6IHsPYbV4Hz08kK3j7Hu3A9KDQDEBBKQY2SERrs17+AZF/dbPI8tv92KOKOBRE9heFx9+0/Jn/Vt13fOQwZa5Dy9z622JeoF40sxGnvR8RFsij4kJICDnM14cbqrtJKPIaNJZQ08auvpIco97HDr7aTN7aMHxkpm9uEzm/3PYTT+K1pqA1A4t5dSh1ftQHq0CEr2up3MKTRgIHE0AATma+HZ+PXaaey6fMbN3LwJw7c7wuEGxdpPjds3qQ8RTcOM80R7tt3Xuo5cHUrJirp4sMSHQQGCPL2BDce4+aq/NggIpj8KXvGr56ycv0D27eKjYLiAaOtNiAZVZzx4rsUrPvLrUaFs9kJqzyu7+CwSAYwkgIMfyvpZbz/0eyifHk4lh5HmULg0+il56D4d3rh80s9/pWIjSE3evZd0iID2GMTtiISkIrBNAQM7RMqJ41M57xJr4W7T+79IFT/J2lG/r0ShHEIweiI5/+YqZvX5ZnfZwxwLk3jaYk2XLuWUISA5hwgwngIAMN8E3C+AdV++zo9YmmtU5qXPT7x75HUEw9UD2uEo4FanWeuV4gJfy6P1C0VoX4kNglQACMr5htHQ0aemjOOiz1L6xY5pFPFQPn8/RPhBfkeSiq897zIX0Pjo9PYa+pKVFgezhkZbkTVgIZBNAQLJR7RIwHi/SY/VT3EGedjyziofAr91FHsWy9S56t0PP/S0uIDVCHQVk7w2TuzRsEr0PAgjIODv3njT/ZTP70FKdtNOKee25f2Ivmpc29vUayurtfYhDiwcSb3JEQPZqVaTbTAABaUZYlUDpsepbmaTHrsdOx9/elcaswyHX9ma0DmWVHjK5ZQv/vMWrSc8iy70zJrdshINAFwIISBeMRYnEoZde3kDscKL3cStj6S4ga8d6pPM+pW/sfuhhj3mU2BBa5rZaD2IsapAnCSw7nnUZ+UkQna8YCMjxNmnpWNZKG0VCn3tHeGvDIOpU/VrblIMYyNPyI1w0l6FLurY6pL28D5Wv1gNJvclb/Y76lQCykZZm80xI4FYb51lN0Vs84m7zOEQ1w+7yUhtpqMoFci2uBMQPWtTn3jH5acNpnL33WriAlw4bxvmqGfbolNpR3B83M4m8nl5eeGk5CN+BAALSAWJmEh81s18IneDW2/FWsumbqg9d3aJ4iEXOJj8x8Q2Skd/HzOy3Eo9kT+9DebsdSgUkepQ1K7i22s2oz1Ph0BUF+k7gfYyySId8EZAOEDOSiG+V186lykjq/4J8PrmrQ0NX3nneUsfjFS45IVe81RHrtz9+f4kPbfk8Q8+lu9F+Xt7SOZk4n7VX2UraWWvYVDiU3i3Uq5XLTcRHQPY3Y/QUen1xYiejGkiUfnHpMG9RPFRHHxIqmeyWgPyumX1fIiQvL+K75xCRe0ylAhIn0Hu1l/1b+YM5IBwjqB+cJwKyP/De8x5xv4dKr3s+dGugOstbFY9aAXHr+oSt5kniI157HSJZs7orHZYsEcv9W/J2DmuiceTNldslJERXAghIV5wPJBZXQvXoDOJQmDLTqiRdFqUv7sxvqzlWiJdKXbrLfSsdcXouGfpLh7a20sj9vEZA4vzHnt5Rbh1ywq2JhuJJnDVcWGurnLwJM5gAArKfAeIGvtJhjLVSpfsddGugxEPPrYuH6rh2nEmN9XxoKb3vXR22d3o9Nu7VCMgs8x/XREPsmBivaZkTxkFA9jHaHkeHpPMeXvIe4rQPhb6p9rirI9rFb2j0PSSxtC4muryq9g26VECunSbQl2Rdai4acb+Ne2+69riWU11piHUKAghIfzPEjqDXnES838NLrC9vjwMY+xPYJ8VL52GV5Hbp2HzZ7Akze6+ZvXklQReUvyu4wKpUQM40fCUe4v3I8juuZhMeiUWLuJbYjLAnJoCA9DVOug+hx7xHutP8v83sX5eVVz2GWvoS2C+1a+dh5eSau3HQ37TVaaYdp/KRmOhH4/uXNikqXOkqrOhhHrm5TvXVj+6av1Rn7dn42nItMsNTOa3tTsIgIH0N3fsQvHTSXKXdc+VQXxr9U7t2nMlWbjX3zcfO9WfN7HuveCd6I3dPpVRA0uGrPea0vC76fcmz8Or5Jj/9jWBstaw7/hwB6Wf8a3dx1OSyJh5HvpnWlHnvOFvHmVzKv9deHO+EdRSH7KO/08dPGNCVu/p5wcw+Z2b/aWZ/FgJH7zF3+Mrzi/nGf0sY/PGy6u81TyqWm7mMvVvujaaPgPQxbFyu26OTRzzW7VIrIHsdW+JzBS4oNa1JnbdW0z20RNbquhcTIdCfa2JVm58Pvclruqdh0BpexLlCAAFpbx5RPHpMmqfDGSphj3Tbazo+hZzzsNJS9vI+tmrvHby/7f/2IgwSg7gTfiud3M81J/HlZdhMefvcjMd3T0grpPyz1vPXcstGuDshgIC0Gbr3wXdr4lF6GF9bjc4d24cJS9pttFFJvFYS/mIR5zPiEJT/O3ov3zCzP1wyjp29i4C/TLSWjfgQ6ELgyC9UlwKfKJG4UbCHh7AmHveyxyPXrN4pl7TbvQ9NvFT2NQFZCxsFTsfSPJULg3AQGE2g5Is4uqxnyr/3nQ3p8l/VFfF40OKlByrGzrnHkuqSNpgrIPHwRLzNEsKEHU4AASk3QSoe6uhbx5bTXeaIx7pdXBBy+VzaOFhu9fIYXtZriyqi1znL2VflJIhxswQQkDLTpsNMuR3ZtVziW7KOGf9JVsZcxFUiIOmxJa0iX9ZS8q60jbbfY+9HaZkJD4EiAghIPq50mKmHeMQrabWq5gc7eDP5NZovZImAuPcx6s0+5xj/3nuH5rMoJZ6aAAKSZz6Jx5+b2VuW4D3E40kze3ZJ79/M7NvzinLXoXzhwhb/3GNL9oTpZb3kWTB8tSd90j6EAAKyjVlfdL0p+rLLHlfSxvvRdaz427aLQQgz88u0PrhxqGHNsSW9AW8JSFzFx/BVb/qkdwgBBOQ65nRHeI/lunHc+xkze/oQS99GJjl3ghy1cXCLqJf1UpuJG1C3PKqtvPgcAkMIICCXse8hHspNHdyfmtlvLqebDjH8pJm6Ta4td/WOWQcCPjywni5kawLC8NVAw5B1PwIIyDrLvcRDuWni/JP9THhXKeUIiO+r+JiZfWAgHReJtUl8Vl8NNAxZ9yOAgDzIMr1/o8ewVT+L3XdKW7cSxjf7MwwLrV0q1XsT6n23CGo/lAAC8mr8cVxan4xaAjq0UZw4cxeIS5vzRp17dQmZLyX2XfB77CM6sbko2q0TQEBesfDaUSKIx/lav7+9f8rM3rdSPH/jP4vtXEAkeLqYSS8oflpvj2P/z2chSnRXBBCQV77Q+mLH+xbO0gHdVWPMqOy1iek4NHSWZbHpac0uHgyLZhibIOcncO8CEtfiu7X4cp+73crLWLPRWZfFpnNqvJycu31RugIC9yoga0NWwoZ4FDSeQUElIGknfOZlsSrb35rZ6xZeZ5jcH2Q6sr01AvcoIOnOcrcpR2nP0brTiWmV+uzLYnOPdp/DApQSAguBexOQeISINwK9zUo8uBt6jq+FH0A428omv3Z2DsqUEgIZBO5FQBiyymgMkwRxAfGhoOh9ML8wiREp5m0QuAcBSfd2uOUYi56zDbs9/SIvDWn5c5bVV3OSpdQQKCRwqwKi1VWPmpl+p8+Xl0ubXihkRfBzEHAB0bDjI2Ym0fDnVtvzOchTCggkBG7pC6f7Nd5jZo9tWBnPY+6vgQuIjnT/EN7H3Mak9HMTmEVA3rmcXqtTbD8Xbu17fNnZ6xu0tqyBeGwROv/nPgei+Y64+dMn1c9fA0oIgRshMIuAfMPMXtvAXCusNORx9L3YDUUm6gUCvvlT98e/fgnD5DnNBQIDCMwiIF8JnUUJJp039HGW6JYgO33YtdMDmDw/vdko4C0SmEVANIT1Q8u94Rq28B/ZRG+fDy2fy0vRFbEfWUQDj+P2Wi1Hg9yeTanRpARmEZBJ8VLsHQikHgjexw6QSRICOQQQkBxKhDkTAd3o+IlQII6gOZN1KMtdEUBA7srcN1PZry6HE75kZm+6mVpREQhMRgABmcxgFPebBLRsWxtFtUCCeS4aBQQGEUBABoEnWwhAAAKzE0BAZrcg5YcABCAwiAACMgg82UIAAhCYnQACMrsFKT8EIACBQQQQkEHgyRYCEIDA7AQQkNktSPkhAAEIDCKAgAwCT7YQgAAEZieAgMxuQcoPAQhAYBABBGQQeLKFAAQgMDsBBGR2C1J+CEAAAoMIICCDwJMtBCAAgdkJICCzW5DyQwACEBhEAAEZBJ5sIQABCMxOAAGZ3YKUHwIQgMAgAgjIIPBkCwEIQGB2AgjI7Bak/BCAAAQGEUBABoEnWwhAAAKzE0BAZrcg5YcABCAwiAACMgg82UIAAhCYnQACMrsFKT8EIACBQQQQkEHgyRYCEIDA7AQQkNktSPkhAAEIDCKAgAwCT7YQgAAEZieAgMxuQcoPAQhAYBABBGQQeLKFAAQgMDsBBGR2C1J+CEAAAoMIICCDwJMtBCAAgdkJICCzW5DyQwACEBhEAAEZBJ5sIQABCMxOAAGZ3YKUHwIQgMAgAgjIIPBkCwEIQGB2AgjI7Bak/BCAAAQGEUBABoEnWwhAAAKzE0BAZrcg5YcABCAwiAACMgg82UIAAhCYnQACMrsFKT8EIACBQQQQkEHgyRYCEIDA7AQQkNktSPkhAAEIDCKAgAwCT7YQgAAEZieAgMxuQcoPAQhAYBABBGQQeLKFAAQgMDuB/wV41lkjjKco3wAAAABJRU5ErkJggg=='),
	(62, '', 'AIDA LUCIA', 'SALAZAR SALAZAR', 'aida@hotmail.com', 'aida11', '$2b$10$Rjhgm09I1Vo1fnSPtBRpVu5hJBGPiuWQD1/lyc7awsouDANxPNy4W', NULL, 'true', '', '', '2023-08-24 11:50:37.422331', 'data:image/png;base64,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'),
	(64, '1124865039', 'CARLOS MAURICIO', 'MORALES APRAEZ', 'carlos_apraez1@hotmail.com', 'carlos11', '$2b$10$82Zss.DjIYFwZy009dFnUu4k.g8tSTGWgi5KS0K6e9qZqcqiQtxSa', NULL, 'true', 'P.A ASEGURAMIENTO Y PRESTACION DE SERVICIOS - SOGCS', 'Ingeniero Ambiental', '2023-08-27 19:25:18.699346', 'data:image/png;base64,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'),
	(65, '1124865039', 'CAMILA ANDREA', 'RODRIGUEZ BRAVO', 'camila@hotmail.com', 'camila11', '$2b$10$2N6X0roEah2Ts.zgwiCmpuguhWbPKurkbgZHjoGRVRmHEDQlDRf2W', NULL, 'true', 'P.A ASEGURAMIENTO Y PRESTACION DE SERVICIOS - SOGCS', 'Ingeniera Ambiental', '2023-09-07 15:53:05.051003', 'data:image/png;base64,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'),
	(70, '1231', 'EDWARD SAMIR', 'ALEGRIA SALAZAR', 'edwar.alegria@hotmail.com', 'samirjr', '$2b$10$99W2GN.qXxfWzZVGfBAv7OTzh6AsYrX.qDheM4pOaz4vnDw4jzBDe', NULL, 'true', 'APOYO', 'Ingeniero de Sistemas', '2023-09-08 00:11:02.524964', ''),
	(71, '1231231', 'ASDJHJH', 'JKJKJKJKKJ', 'hhhh@hotmail.com', 'uytrfgh', '$2b$10$bA2plENtOwTSG0Nk4B/SvOkBDed55GhpUBPbh9e8yquNWveyUITM.', NULL, 'true', 'P.A ASEGURAMIENTO Y PRESTACION DE SERVICIOS - SOGCS', 'fgffffgg', '2023-09-08 22:50:22.892613', 'data:image/png;base64,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'),
	(72, '5445', 'DAVID ALEJANDRO', 'PEREZ APRAEZ', 'gh@hot.com', 'hgh', '$2b$10$BJPDpoNNK1rO4VmfF/A.T.3mo65UhpdrQOuQx1dC4XQaqW6q1jU9.', NULL, 'true', 'P.A ASEGURAMIENTO Y PRESTACION DE SERVICIOS - SOGCS', 'uiuuiuyik', '2023-09-08 23:15:36.253515', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAAAXNSR0IArs4c6QAAF5lJREFUeF7tnTHILUcVx49gkcJCwUACBg1E0E4h4CsiaqeVFglEJCTBCBaCiUQs9XWCgoKNhZKIRQKxsFNQMPICCgraCCkCUROIhWCQB1ooT/5mTzJv3967s3t3ds/M/BYe773vm5058zuz93/PnJnZtxkXBCAAAQhAYAWBt624h1sgAAEIQAAChoAwCCAAAQhAYBUBBGQVNm6CAAQgAAEEhDHQG4H3DR3+c28dp78Q2JoAArI1UeqLTOA+M7tmZq+a2V2RDcU2CNRAAAGpwUvYuBWBl81MEcjzZvaJrSqlHgj0SgAB6dXz/fX7QTN7xsz+a2Zv76/79BgC2xNAQLZnSo0xCfzLzG4zsyfM7LsxTcQqCNRFAAGpy19Yu47Ar8zs4+Q+1sHjLgicIoCAMDZaJ+CJc/XzbjNj9VXrHqd/uxFAQHZDTUMHEfCpq7+Z2Z0H2UCzEGiSAALSpFvp1EDgKTN7ZPi3Vl1p9RUXBCCwEQEEZCOQVBOOgK+6kmEs2w3nHgxqgQAC0oIX6cMUgRvJD8l9MEYgUIAAAlIAKlUeTkC7zZU81/UNM7t6uEUYAIEGCSAgDTq18y6lU1dacaXogwsCEChAAAEpAJUqDyWQTl0RfRzqChpvnQAC0rqH++pfOnVF9NGX7+ntAQQQkAOg02QRAumGQTXAst0imKkUAm8RQEAYDa0QSKeuXjCzj7bSMfoBgagEEJConsGuJQR+Z2b3JjewbHcJPcpCYCUBBGQlOG4LQ0A7zbXj3C8S52FcgyGtE0BAWvdw2/3TCbs6adcvEudt+5veBSOAgARzCOZkE9CbBfWGwetm9o7hLqKPbHwUhMDlBBCQyxlSwzEEFHlIRPRHF9HHMX6g1Y4JICAdO7/irks8PmBmdyR9YNluxQ7F9DoJICB1+q1nqz3v8XRyVDvRR88jgr4fRgABOQw9Da8g4HkPvdP88eR+lu2ugMktELiUAAJyKUHu35PAb8zs30O+w18UReJ8Tw/QFgQSAggIw6EWAhKPK8Ppulp95RdjuBYPYmdzBHj4mnNpkx3yzYJKlGvToK+8Ivpo0t10qhYCCEgtnurXTk+aPzog8F3nJM77HRP0PAgBBCSIIzDjJAFNV0ksFH3o30QfDBYIBCGAgARxBGZMEvDNglpl9fXh9bQqSPTBgIFAAAIISAAnYMIkARcMRR4SjDRxzqZBBg0EAhBAQAI4ARNuIeDvNXehSKOP54fpLLBBAAIHE0BADnYAzd9CwJPmvsLKNw96QTYNMmggEIQAAhLEEZjxJgHfLKjoQ1cafbBsl4ECgUAEEJBAzsAUk3jogERFGbrG0QfjlUECgUAEeCADOaNzU9KkufIcRB+dDwi6H58AAhLfRz1YOE6aj6MPlu32MAroY3UEEJDqXNacweOkuXeQ3EdzrqZDrRFAQFrzaF398RzHeGlumvsg+qjLp1jbEQEEpCNnB+zqeMXVVPTBpsGAjsMkCIgAAsI4OIpAekxJakMafbBp8Cjv0C4EMgggIBmQKLI5gakVV1PRB5sGN0dPhRDYjgACsh1LasojMLXiyu9Mow82DebxpBQEDiOAgByGvsuGT624GkcfJM67HB50ujYCCEhtHqvb3hvDkexXT3RDv9dF9FG3n7G+EwIISCeODtBNJc11+RlXY5M8L0L0EcBZmACBHAIISA4lylxK4JqZvSc542qqPn/bINHHpbS5HwI7EUBAdgLdcTN6h/kjg3goupi6iD46HiB0vV4CCEi9vqvBck+az20G9OhjrlwNfcZGCHRDAAHpxtW7d3RuxZUblFtu9w7QIAQgcJ4AAsIIKUFA+zmUNNeU1amkubf7ypAfYSyW8AR1QqAgAR7agnA7rvrUMSVjJEQfHQ8Sul4/AQSkfh9G64HEQ8KQk894bTD+zmidwB4IQGCeAAIyz4gS+QSeNLNvZYqHH1vCst18vpSEQCgCCEgod1RtzNLpKK280uXvP6+68xgPgR4JICA9en37Prt45B6/vlRstreYGiEAgYsJICAXI6SCYcWVpqRyo4ncJDtwIQCBwAQQkMDOqcS0JUlzdYncRyWOxUwIzBFAQOYI8ftzBJ4zs/szk+Zej15je8eCaAUPQAACQQkgIEEdU4FZfn7VklVURB8VOBYTIZBLAAHJJUW5lMDSpHkafehU3rvACQEI1E8AAanfh3v3YK14sPJqb0/RHgQKE0BACgNurHqfglrz0iflPog+GhsQdKdvAghI3/5f2vulK668fnIfS0lTHgIVEEBAKnBSEBPXiofMZ9d5ECdiBgS2JICAbEmz3bo0/XRl4XJdp0Huo91xQc86J4CAdD4AMrrvkcfTZvZoRvlxEXIfK6BxCwRqIICA1OCl42z0vR65Z1yNLSX6OM53tAyB4gQQkOKIq23gETN7yszWioc6TvRRrfsxHALzBBCQeUY9lli71yNlRfTR48ihz10RQEC6cndWZ/2Df81ej7QBVl5l4aYQBOolgIDU67sSlqfioVfSSkTWXEQfa6hxDwQqI4CAVOawguZqs5+/pyPnfebnTCH3UdBRVA2BKAQQkCieON6OSzYKkvs43n9YAIHdCSAguyMP2eAlGwXHHeJ9HyFdjFEQ2J4AArI909pq9MhDmwS1WfCSi9zHJfS4FwKVEUBAKnPYxuZqn4f2e6zdZT4VfXDi7sZOojoIRCWAgET1THm7Lt1lPraQE3fL+4wWIBCKAAISyh27GbPFRkGij93cRUMQiEkAAYnpl5JWbbVRMLWR6KOkx6gbAkEJICBBHVPIrBLiIVOVS1Hddxeym2ohAIGABBCQgE4pZFL6OtpLdpmT+yjkIKqFQG0EEJDaPLbOXonHL8zsnpUvhTrXKtHHOp9wFwSqJ4CAVO/C2Q5IPK6ZmZbXftbMnp29I78AuY98VpSEQHMEEJDmXHpThzznoR9eer7VFCktBdY+EnIf58eRhPZhM9PfunRI5WfM7CUze6DtIUjvWiaAgLTr3VQ8vmFmVzfuKtHHPFAx8im+U6W32sQ5bw0lILAxAQRkY6BBqvO3CcqcS94oeK47RB/nnZ0K+LmSikZ0jIz8xAWBqgggIFW5K8vYVDwufSnUqQaJPs674mdm9smkiEeAPoWlvz9tZo8nU1pbrozLGigUgsClBBCQSwnGut/PtpJVpcRDdSv6eMzM7orV/UOtUcQhLvo7vU7lnsbTW/IXInKoC2l8KQEEZCmxuOX9VF0Xj5LTIjfMrEReJS7d05adEo6/m9ntMx3ySM6LlRT9Gtlic3ACCEhwB2Wal4qHbimx4spNIffxllPG3PUbJcW1YCH3dcBjESnpu8zhRDEI5BFAQPI4RS41/hDb4r0e5/r7cvIhGZlLSdumVlddwj2deiy16KEkD+rulAACUq/jpz7ESk8reYK+53EzXl21xQd+WifTWPU+k91Z3vMHQc3OnhKPLT7I5pj0Hn2MxWMrwWYaa27k8fuQBBCQkG45a9SUeOzxrdU/PHsdM/4CLnfOlrmKsYBsJUz1jW4sropArx8GVTkpMfYo8ZAJmqeXUG29o70GX3xntGejxAq3f5jZOwcYfzSzD9cABhv7JoCA1OP/8bfUEt+ET9HwtnXmVe7qonrInrc0jTx0dtX7C3UsFZAXzeyDhdqhWghsRgAB2Qxl0YpOHYux5TTKuQ48Z2bXhyM3inY0WOV7ro4S4/uT/vco1sHcjzlzBBCQOULH//5o8eg1+tjjPLF0dKXt6efkQY5/9rBghgACEnuInJq2umTPwdIea/5fItbTnHwq2nusbnOfaJVbeuQ7x+QvHa2U35UAArIr7kWNnYo89vxm6gK211TZIkCFCqeivad4qDvplJn+zzRWISdT7TYEEJBtOG5dyynx2PvdET0eW+I7+/dYGj0eN6X2mWw9PqkPAv8ngIDEGwhRxENkXjOz73e0dLf0GxxzRls6jbV3BJRjH2Ug8CYBBCTWYDglHkd8kPQcfewd6aWjcDyNxTMa6xnFmoQAgzPOcIgkHqLS27ElKf8jcw/j1VhH2hLn6cCSkAQQkBhuGX9ouFVHRB5qWx+m+ibc0yogz30cGX2IPedixXgmsSKDAAKSAalwkWji0Xv0EWHFWZoH2XPJduGhTvWtEUBAjvXoeL7brTnyW7B/A+5pbESJPtz/6fEpCMixzyitnyHQ04dEtIEQUTzEqLdDE9MpowjRh49TRaa69GWCCwIhCSAgx7hl6lWosmTPTYJTPe/x2BL/tv+6mb3rmOFAqxCokwACsr/fooqHSOjYEh0prmmTXi7PNxwt3r3wpp8NEUBA9nXmKfGIMM/dY/SRTl+xXHbfZ4HWGiCAgOznRO3qvmOiuSjz7j1uHPTpqyOOLdlv5NESBAoRQEAKgR1V+xszuxJYPHo/NJHpq32eA1ppjAACUt6hp6atokQeIqBv4o+Z2V3lcYRpIV0qy3MQxi0YUhMBHpyy3poSD73Z7wtm9mzZprNr9+gjQh4m2+gNCnrynOmrDWBSRZ8EEJByfp/a53HU0STnetlj7iNNnjN9Ve4ZoObGCSAgZRxci3j0Gn0wfVVm3FNrZwQQkO0dnn44ee1Rv+XK1i+a2Z3bYwhd45EvjQoNBuMgsIQAArKE1nzZqYMRo+YWeo0+mL6aH8eUgEAWAQQkC1NWobF4KDkr8VDeI+LV48or+SEVkKjiHnG8YBMEbiGAgGwzKGoTD/X6RoCzt7ahv6yWdIqR3efL2FEaAjcRQEAuHxBT4hH9RUy9Rh/yNgn0y8c8NUDg/wQQkMsGQo3i0XP0ob6TQL9szHM3BN4kgICsHwzj1VYR93hM9a7n6CMVkCNf2rV+1HEnBAIRQEDWOWO8z6MW8eg9+vD+628EZN3Y5y4IEIFcMAbGx5PU9EHUe/SRCkjUvTkXDE1uhcC+BIhAlvEei0dtH0K9rrxyL0d9fe2yUUhpCAQhgIDkO2L8Po/a9hAo+viSmd2e3+XmSt5nZteGXkU6Dbk50HSoDwIISJ6ff2Bmn0+K1iYeMv0VM1M/ruZ1uclS6cIHBKRJF9OpPQkgIHm09c1V01e6Hgp0FHue9W/sfdCS4+j7U3L7s7Yce0DWkuM+CEwQQEDyh4VE5IX84qFK6t0XSvb3HH3IIewBCTUsMaZ2AghI7R6ct//jZvZMhyfuTpHRIgJdNS27nvcwJSBwEAEE5CDwOzZL9PEG7HQFVk1Lr3ccKjQFgWUEEJBlvGorrQ9NTdv0nvsYC0hty69rG3fY2wkBBKRtR0s8NF3Te+5DXtZUni+EQEDaHvf0bicCCMhOoA9oxqds8PEb8BGQAwYhTbZNgA+Xdv2r87r0UiuiDwSk3VFOzw4lgIAcir9Y4x598MKktxCnEQhJ9GJDj4p7IoCAtOnt75jZO4dX6rbZw+W9YhXWcmbcAYGzBBCQ9gYI0cdpn2pJs/iwD6S9cU+PDiCAgBwAvXCTij40XfPhwu3UWD070Wv0GjaHJYCAhHXNKsM8+uCgwGl86YvAyA+tGmLcBIG3CCAgbY0GHRao6EMCwnUrAU7jZVRAYEMCCMiGMA+uitzHvAN0IrGiEF0/NLPH5m+hBAQgcIoAAtLO2FDu40NEH2cdylLedsY7PQlAAAEJ4IQNTCD3kQ/RV2LpDvIg+dwoCYFbCCAgbQwKch/5fkzfa89ig3xulIQAAtLgGCD3scypaSKdQxWXsaM0BG4iQARS/4BQUlgiwsqrPF+meRA2FOYxoxQEJgnsJSB6aJ8zs3eY2W3DIX85LtFhgLr0t/78ZfR//31OXS2WIfpY51XyIOu4cRcEDolA0g1cJVyQComLjbfz66TBVJBcmErYs1edms9Xnx7dq8FG2kkFROx0uCIXBCCwkMCeEYi/zGehicWLz4nPOAoqblBmAz4Vw0qiTGBJsTQPIv9q+q/3aHY5Re7onsBeAiLQ95nZFTP73LBfIYX/VzP7npn9Pfnhe4d/a5pGl/5O/32U88aC4lNr7zaz3w826mey1cu63R71pL9LI6ElH2I3zIwk8PpRkEYhcFzPkTs7JrCngKSY9QGqb9D6Jugfrj4Vo8Tm3JV+IKseXVOC4/Wk4jNXd4TfvzoY8Z9EhFJx0VHtHzOzr5z45uzTeGOhitC3KDYQhUTxBHZUS+AoAUmBKbmuyOQ9ww/1bfBHBacUUvE59e+xQyVOSuC7SHky3/+v8toF/seknJefKjsWU4+wcn6eO9iuD4sWXHjebmYSphcTtrIt6hRdbj/XlpPvNa3qY4AoZC1J7uuWQAQBEXxFEb4cVf9XFKLk5pIpnZadmArdM4PYPjR0eDxV5tNn/x5WvKmYopWpqcApZhKZl4ZfqC4tQvCIpjV/pFGIuvxRM3uh5YFE3yCwJYEoAuLfwL9lZveOvhWWjEa2ZLlHXX4Y4BY7qKcERRGVT/edmvaTiEjgPffj/96j/yXaSHMhysE9MPSvRFvUCYGmCEQSEBcRfXARjdw6zHzPhz64tfJqj2ssMh7JeN7JbfDIRGKiiEXRz28riSCfNDN9cUn7wqqsPUYXbVRPIJqApEDH0wu9L1d1HlE4pJHKOWHxRRE+FZazSGLvB2s81tihvrcHaK9KApEFREDHuZGvmtm3qyR9mdEefURP9HrEogUR95jZw0O3xxGL8iy/HCIUCcvRojJOqMtsNhheNma5uwMC0QXEp7XS1TI9JthfMTOtorqz0jG5JFo5KlJJXzYlzHtOFVbqVszunUANAuI+ujZsRvSHW8dPXO3Agb7jPHr0sdQVHq2of1NTYB6l7Cko6VHv6k9rzJf6iPIQOEugJgGZikaWbD6sdSholZCuvRLnR3LySEWCImFJp7589defhh3/Jaa9pqIQTWWVaOtIzrQNgU0I1CYgLiKaW9e3Q79a/aboH2it9m9uEPuJBXMRylaHIU7lQpjKmvMSv++WQI0C4s4aJ9j1oLc2rdVT9JHzEOoD/otm9pGJ6MQjlEuT8uMoRHb9ZNgfkmMjZSDQDYGaBeRcNNLC5kNfWtpr9DH3EJaMTqZePxBl+fQcF34Pgd0I1C4gDkrfGscHM9YcjRyxaXC3QVeooVRQNB78SpPxuVNdqusPZqZDK1ufJi3kDqrtgUArAnIqGnERqe0MJ18NtMWRJT2M43EfT4mJxoEOk1SE+uwMmAfNTOeO+cXmwh5HEn0+S6AlAfGOjncV15YbYepq24fWxUQLL9JVXRIEP3rFD4sct8xpCNv6gtoaI9CigJyKRmpY8ut7Plj5U+ZBk5j8eDjNOD3hWK29bmZPjF5v6/5wa8iDlPELtVZKoFUBcXdMrdT66fBBEc1lad6DvQdlvSPWikiUKxkLia/m8sjFLUHUy/qE2isk0LqAnIpGfm5mnwrkLxcPmcQZTPs65ptm9rWMJpVPk2+4IACBgUAPAuLOHq+sifSN0pPmfEgd82ieypOk1iDsx/iGVgMT6ElAPBpJD2aMkBfxPQeRBC3wkC1umouJXq6lTYl6VbGmPWtbyVccFA1AoDcBOSUiR+0ZSadPSNDyPEIAAlUR6FFAXER0uq/eW+HX3tFImvdgv0dVjw3GQgACItCrgLiIaJ1/umtZP99DSNLloZyzxLMIAQhUSaBnAXGHjTeLpRGJ3jeSe/xF7gBIIw92N+dSoxwEIBCOAALyhkt8X0B6RHyJqa30pFfEI9zjgEEQgMASAgjIzbQkJFPTWiq19lTcqU1riMeSUUpZCEAgJAEEZNotp4Tk+vBuCB3Gd+4tdbr/y0N+JT3R9RIhCjmAMAoCEOiXAAJy3vdTb6hLp7b8MD79TPsGVH6clPfyimBaeE9Jv08LPYcABG4igIDMD4hz+ZG5u/85RCJbJ+Ln2uX3EIAABIoTQEDyEd9nZvcMkYaW4aZHg6dRiR/GpxVcXBCAAASaJYCArHetn+LqQqLpLI67WM+TOyEAgcoIICCVOQxzIQABCEQhgIBE8QR2QAACEKiMAAJSmcMwFwIQgEAUAghIFE9gBwQgAIHKCCAglTkMcyEAAQhEIYCARPEEdkAAAhCojAACUpnDMBcCEIBAFAIISBRPYAcEIACBygggIJU5DHMhAAEIRCHwP/+Z2/bEI9T4AAAAAElFTkSuQmCC'),
	(73, '12312', 'SQWEQWEQ', 'QWEQWEQW', 'edwar@hotmail.com', 'qweq', '$2b$10$X.8mtBHfjNasCw6uCbxmDukCcLOl3Kj9VENEpNxbbfFIsNaxkAYui', '0189b939-5c5c-4fdf-9e61-604b7fe8ab48', 'true', 'P.A ASEGURAMIENTO Y PRESTACION DE SERVICIOS - SOGCS', 'asdasda', '2023-09-08 23:47:28.238744', 'data:image/png;base64,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'),
	(74, '5454545', 'ASDASDAS', 'FDGDFGDF', 'ssdsd@h.com', 'dddff', '$2b$10$zivU4jU3pnuo/LVF.2ISROHNqAGDgkyuHcKCG9ct9LL/UUhZnLoma', NULL, 'true', 'P.A ASEGURAMIENTO Y PRESTACION DE SERVICIOS - SOGCS', 'asdasd', '2023-09-09 00:04:22.359232', 'data:image/png;base64,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mT3UiEm6uUk0fNJ7S9PuNLMXXYNHWaHEno8texFtVSWAgFTFu7hy3TR1g7l2ccn1BSQY+k+jgkuJhvfCvzPkKE/qvON8fT+lhoYIICANBWMwRSLy0ol9FclinS+lI8710bSQ/6RpLE05JWFI36dpMf//9iiY+eW7R8kT+AMiSZy32OuwaREBBGQRLi7eiIDPfyhf856N2q3ZjPfpKJsga/Ki7h0QQEB2EKQOTdRek6uD30cZfcidtJBAuSU+ENg9AQRk9yE8nAP56qujJM8PFygcggACQh9ojYB/1wdTPa1FB3sg4AggIHSHlgiwQ7ulaGALBM4QQEDoIi0RYPqqpWhgCwQQEPrAjghwwOCOgoWpEGAEQh9oiYAXEI43byky2AKBEQIICN2iJQJeQPSWw3tbMg5bIACBtxJAQOgRrRHQUS469PG21gzDHghAAAGhD0AAAhCAQAABRiABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8EEJAeo47PEIAABAIIICABEKkCAhCAQI8E/gsg1UL2fFq/VwAAAABJRU5ErkJggg==');

-- Volcando estructura para tabla sehab.usuario_rol
CREATE TABLE IF NOT EXISTS `usuario_rol` (
  `usuario_id` int NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`,`rol_id`),
  KEY `IDX_29e9a9079c7ba01c1b301cf555` (`usuario_id`),
  KEY `IDX_ac8911cd54a61461c992654140` (`rol_id`),
  CONSTRAINT `FK_29e9a9079c7ba01c1b301cf5555` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ac8911cd54a61461c9926541401` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.usuario_rol: ~0 rows (aproximadamente)
DELETE FROM `usuario_rol`;
INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`) VALUES
	(51, 3),
	(62, 4),
	(64, 5),
	(64, 7),
	(65, 2),
	(70, 1),
	(71, 6),
	(72, 4),
	(73, 2),
	(74, 5),
	(74, 7);

-- Volcando estructura para tabla sehab.vacunacion
CREATE TABLE IF NOT EXISTS `vacunacion` (
  `vac_id` int NOT NULL AUTO_INCREMENT,
  `vac_nombre_estandar` varchar(60) NOT NULL,
  PRIMARY KEY (`vac_id`),
  UNIQUE KEY `IDX_b463309b436534822c07eb6679` (`vac_nombre_estandar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.vacunacion: ~0 rows (aproximadamente)
DELETE FROM `vacunacion`;

-- Volcando estructura para tabla sehab.verif_usuario
CREATE TABLE IF NOT EXISTS `verif_usuario` (
  `verif_usu_id` int NOT NULL,
  `usu_verif_id` int NOT NULL,
  PRIMARY KEY (`verif_usu_id`,`usu_verif_id`),
  KEY `IDX_55d1ac15128d83ba4066f05e99` (`verif_usu_id`),
  KEY `IDX_5a52d89eb51edb88d7bcf39735` (`usu_verif_id`),
  CONSTRAINT `FK_55d1ac15128d83ba4066f05e995` FOREIGN KEY (`verif_usu_id`) REFERENCES `acta-verificacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_5a52d89eb51edb88d7bcf39735c` FOREIGN KEY (`usu_verif_id`) REFERENCES `usuario` (`usu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla sehab.verif_usuario: ~0 rows (aproximadamente)
DELETE FROM `verif_usuario`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
