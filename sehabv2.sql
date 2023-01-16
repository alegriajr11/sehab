-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.29 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
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
DROP DATABASE IF EXISTS `sehab`;
CREATE DATABASE IF NOT EXISTS `sehab` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sehab`;

-- Volcando estructura para tabla sehab.actividad
DROP TABLE IF EXISTS `actividad`;
CREATE TABLE IF NOT EXISTS `actividad` (
  `act_id` int NOT NULL AUTO_INCREMENT,
  `act_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `actPrestadorPreCodHabilitacion` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`act_id`),
  UNIQUE KEY `IDX_72948f5228f809f69347c1bacf` (`act_nombre`),
  KEY `FK_7b841a0cf65bdb473e5c242a0ed` (`actPrestadorPreCodHabilitacion`),
  CONSTRAINT `FK_7b841a0cf65bdb473e5c242a0ed` FOREIGN KEY (`actPrestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.actividad: ~10 rows (aproximadamente)
INSERT INTO `actividad` (`act_id`, `act_nombre`, `actPrestadorPreCodHabilitacion`) VALUES
	(1, 'ACTIVIDADES PREVIAS', NULL),
	(2, 'AUTOEVALUACIÓN', NULL),
	(3, 'SELECCIÓN DE LOS PROCESOS A MEJORAR', NULL),
	(4, 'PRIORIZACION', NULL),
	(5, 'DEFINICIÓN DE LA CALIDAD ESPERADA', NULL),
	(6, 'DEFINICIÓN DE LA CALIDAD OBSERVADA', NULL),
	(7, 'PLAN DE MEJORAMIENTO PARA EL CIERRE DE BRECHAS', NULL),
	(8, 'EJECUCION Y SEGUIMIENTO AL PLAN DE MEJORAMIENTO', NULL),
	(9, 'EVALUACION PLAN DE MEJORAMIENTO', NULL),
	(10, 'APRENDIZAJE ORGANIZACIONAL', NULL);

-- Volcando estructura para tabla sehab.calificacion
DROP TABLE IF EXISTS `calificacion`;
CREATE TABLE IF NOT EXISTS `calificacion` (
  `calf_id` int NOT NULL AUTO_INCREMENT,
  `calf_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `calf_observaciones` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`calf_id`),
  UNIQUE KEY `IDX_8070fbcddf8acc7388abd74e42` (`calf_nombre`),
  UNIQUE KEY `IDX_0dda8eba057e7535d9dde2e53b` (`calf_observaciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.calificacion: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.calificacionips
DROP TABLE IF EXISTS `calificacionips`;
CREATE TABLE IF NOT EXISTS `calificacionips` (
  `caips_id` int NOT NULL AUTO_INCREMENT,
  `caips_nota` int NOT NULL,
  `caips_observaciones` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`caips_id`),
  UNIQUE KEY `IDX_994d62557824653b0c6fdf2fc8` (`caips_nota`),
  UNIQUE KEY `IDX_e2b67b6121078b89e6a5a4d74d` (`caips_observaciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.calificacionips: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.calificacionpam
DROP TABLE IF EXISTS `calificacionpam`;
CREATE TABLE IF NOT EXISTS `calificacionpam` (
  `calf_id` int NOT NULL AUTO_INCREMENT,
  `calf_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `calf_observaciones` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`calf_id`),
  UNIQUE KEY `IDX_aaac712710e255d5edacacc524` (`calf_nombre`),
  UNIQUE KEY `IDX_2154ae38d11d08289ef33be15b` (`calf_observaciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.calificacionpam: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.clase
DROP TABLE IF EXISTS `clase`;
CREATE TABLE IF NOT EXISTS `clase` (
  `clas_id` int NOT NULL AUTO_INCREMENT,
  `clas_nombre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`clas_id`),
  UNIQUE KEY `IDX_32032a015c686a2f87f968dae6` (`clas_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.clase: ~2 rows (aproximadamente)
INSERT INTO `clase` (`clas_id`, `clas_nombre`) VALUES
	(1, 'JURIDICO'),
	(2, 'NATURAL');

-- Volcando estructura para tabla sehab.clasificacion
DROP TABLE IF EXISTS `clasificacion`;
CREATE TABLE IF NOT EXISTS `clasificacion` (
  `cla_id` int NOT NULL AUTO_INCREMENT,
  `cla_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`cla_id`),
  UNIQUE KEY `IDX_badbb19c60db4db39e48af22bc` (`cla_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.clasificacion: ~4 rows (aproximadamente)
INSERT INTO `clasificacion` (`cla_id`, `cla_nombre`) VALUES
	(1, 'Instituciones - IPS'),
	(2, 'Objeto Social Diferente a la Prestación de Servicios de Salud'),
	(3, 'Profesional Independiente'),
	(4, 'Transporte Especial de Pacientes');

-- Volcando estructura para tabla sehab.criteriopam
DROP TABLE IF EXISTS `criteriopam`;
CREATE TABLE IF NOT EXISTS `criteriopam` (
  `crip_id` int NOT NULL AUTO_INCREMENT,
  `cripActividadActId` int DEFAULT NULL,
  `cripCalificacionCalfId` int DEFAULT NULL,
  `crip_nombre` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`crip_id`),
  UNIQUE KEY `IDX_94da727f0dd0ee1b8b59783b3d` (`crip_nombre`),
  KEY `FK_6199af2fce493ec55dde52bdd4e` (`cripActividadActId`),
  KEY `FK_a7caa528a0f8478fba438aaf24b` (`cripCalificacionCalfId`),
  CONSTRAINT `FK_6199af2fce493ec55dde52bdd4e` FOREIGN KEY (`cripActividadActId`) REFERENCES `actividad` (`act_id`),
  CONSTRAINT `FK_a7caa528a0f8478fba438aaf24b` FOREIGN KEY (`cripCalificacionCalfId`) REFERENCES `calificacionpam` (`calf_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.criteriopam: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.criteriosic
DROP TABLE IF EXISTS `criteriosic`;
CREATE TABLE IF NOT EXISTS `criteriosic` (
  `cri_id` int NOT NULL AUTO_INCREMENT,
  `cri_nombre` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`cri_id`),
  UNIQUE KEY `IDX_4c41a1b21c750acdbb4c970062` (`cri_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.criteriosic: ~8 rows (aproximadamente)
INSERT INTO `criteriosic` (`cri_id`, `cri_nombre`) VALUES
	(6, 'La IPS reporta el indicador con la periodicidad establecida en la norma.'),
	(3, 'Los procedimientos son conocidos por el personal responsable del registro en la fuente primaria de información.'),
	(5, 'Se ha definido la meta del indicador en la ficha.'),
	(4, 'Se ha definido la periodicidad de la generación de la información en la ficha del indicador.'),
	(1, 'Se ha definido y documentado el procedimiento  para la implementación del indicador.'),
	(2, 'Se han diseñado y adoptado herramientas para la captura de la información.'),
	(7, 'Se realiza análisis de los indicadores.'),
	(8, 'Se realiza planes de mejoramiento con el resultado del análisis de indicadores.');

-- Volcando estructura para tabla sehab.criteriosips
DROP TABLE IF EXISTS `criteriosips`;
CREATE TABLE IF NOT EXISTS `criteriosips` (
  `crips_id` int NOT NULL AUTO_INCREMENT,
  `crips_nombre` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cripsItemIteId` int DEFAULT NULL,
  `cripsCalificacionipsCaipsId` int DEFAULT NULL,
  `cripsGuiipsGuipsId` int DEFAULT NULL,
  PRIMARY KEY (`crips_id`),
  UNIQUE KEY `IDX_d3efca47f8ea6bdba53831c53e` (`crips_nombre`),
  KEY `FK_c6e2a7d350cf4523469def01494` (`cripsItemIteId`),
  KEY `FK_553b22b05474d7e6bc2781f3539` (`cripsCalificacionipsCaipsId`),
  KEY `FK_db4806d8342001ad9ec277f39d2` (`cripsGuiipsGuipsId`),
  CONSTRAINT `FK_553b22b05474d7e6bc2781f3539` FOREIGN KEY (`cripsCalificacionipsCaipsId`) REFERENCES `calificacionips` (`caips_id`),
  CONSTRAINT `FK_c6e2a7d350cf4523469def01494` FOREIGN KEY (`cripsItemIteId`) REFERENCES `item` (`ite_id`),
  CONSTRAINT `FK_db4806d8342001ad9ec277f39d2` FOREIGN KEY (`cripsGuiipsGuipsId`) REFERENCES `guievaluacionips` (`guips_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.criteriosips: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.dominio
DROP TABLE IF EXISTS `dominio`;
CREATE TABLE IF NOT EXISTS `dominio` (
  `dom_id` int NOT NULL AUTO_INCREMENT,
  `dom_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`dom_id`),
  UNIQUE KEY `IDX_ca3c00d0538b652baac9a564a8` (`dom_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.dominio: ~3 rows (aproximadamente)
INSERT INTO `dominio` (`dom_id`, `dom_nombre`) VALUES
	(1, 'Efecividad'),
	(3, 'Experiencia de la atención'),
	(2, 'Seguridad');

-- Volcando estructura para tabla sehab.dom_pre
DROP TABLE IF EXISTS `dom_pre`;
CREATE TABLE IF NOT EXISTS `dom_pre` (
  `dom_pre_id` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_dom_id` int NOT NULL,
  PRIMARY KEY (`dom_pre_id`,`pre_dom_id`),
  KEY `IDX_d2bf7bc36ff3682ff8fc8f2581` (`dom_pre_id`),
  KEY `IDX_771ec445aaee4df9ad404892a2` (`pre_dom_id`),
  CONSTRAINT `FK_771ec445aaee4df9ad404892a26` FOREIGN KEY (`pre_dom_id`) REFERENCES `dominio` (`dom_id`),
  CONSTRAINT `FK_d2bf7bc36ff3682ff8fc8f2581c` FOREIGN KEY (`dom_pre_id`) REFERENCES `prestador` (`pre_cod_habilitacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.dom_pre: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.etapaips
DROP TABLE IF EXISTS `etapaips`;
CREATE TABLE IF NOT EXISTS `etapaips` (
  `eta_id` int NOT NULL AUTO_INCREMENT,
  `eta_nombre` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`eta_id`),
  UNIQUE KEY `IDX_f06cd82a7ce7dfb08d019a3d64` (`eta_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.etapaips: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.etapas
DROP TABLE IF EXISTS `etapas`;
CREATE TABLE IF NOT EXISTS `etapas` (
  `etp_id` int NOT NULL AUTO_INCREMENT,
  `etp_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `etpCriteriopamCripId` int DEFAULT NULL,
  PRIMARY KEY (`etp_id`),
  UNIQUE KEY `IDX_2a8888229d1f67eb1b3187aa71` (`etp_nombre`),
  KEY `FK_07d1e0633c4aaa61cd22d025241` (`etpCriteriopamCripId`),
  CONSTRAINT `FK_07d1e0633c4aaa61cd22d025241` FOREIGN KEY (`etpCriteriopamCripId`) REFERENCES `criteriopam` (`crip_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.etapas: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.evaips_pre
DROP TABLE IF EXISTS `evaips_pre`;
CREATE TABLE IF NOT EXISTS `evaips_pre` (
  `pre_eva_id` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `eva_pre_id` int NOT NULL,
  PRIMARY KEY (`pre_eva_id`,`eva_pre_id`),
  KEY `IDX_1a8f10d4f5c8ec13a992fc95f9` (`pre_eva_id`),
  KEY `IDX_1320d9fec484253d46111c4066` (`eva_pre_id`),
  CONSTRAINT `FK_1320d9fec484253d46111c40666` FOREIGN KEY (`eva_pre_id`) REFERENCES `evaluacionips` (`evips_id`),
  CONSTRAINT `FK_1a8f10d4f5c8ec13a992fc95f94` FOREIGN KEY (`pre_eva_id`) REFERENCES `prestador` (`pre_cod_habilitacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.evaips_pre: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.evaluacionips
DROP TABLE IF EXISTS `evaluacionips`;
CREATE TABLE IF NOT EXISTS `evaluacionips` (
  `evips_id` int NOT NULL AUTO_INCREMENT,
  `evips_nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`evips_id`),
  UNIQUE KEY `IDX_6add7eaa9891c8bbaff7de04d0` (`evips_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.evaluacionips: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.guievaluacionips
DROP TABLE IF EXISTS `guievaluacionips`;
CREATE TABLE IF NOT EXISTS `guievaluacionips` (
  `guips_id` int NOT NULL AUTO_INCREMENT,
  `guips_nombre` varchar(350) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`guips_id`),
  UNIQUE KEY `IDX_3dcb07874ed9a8c99005432f39` (`guips_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.guievaluacionips: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.indicador
DROP TABLE IF EXISTS `indicador`;
CREATE TABLE IF NOT EXISTS `indicador` (
  `ind_id` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ind_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `indDominioDomId` int DEFAULT NULL,
  PRIMARY KEY (`ind_id`),
  UNIQUE KEY `IDX_9352fde9ddf61435939445dc43` (`ind_nombre`),
  KEY `FK_59ace04d524d6eadda64abfd478` (`indDominioDomId`),
  CONSTRAINT `FK_59ace04d524d6eadda64abfd478` FOREIGN KEY (`indDominioDomId`) REFERENCES `dominio` (`dom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.indicador: ~55 rows (aproximadamente)
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

-- Volcando estructura para tabla sehab.ind_cri
DROP TABLE IF EXISTS `ind_cri`;
CREATE TABLE IF NOT EXISTS `ind_cri` (
  `ind_cri_id` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cri_ind_id` int NOT NULL,
  PRIMARY KEY (`ind_cri_id`,`cri_ind_id`),
  KEY `IDX_fa3e5d3a736461d7c253729511` (`ind_cri_id`),
  KEY `IDX_ea4d4a50609cd4c7bb28e31523` (`cri_ind_id`),
  CONSTRAINT `FK_ea4d4a50609cd4c7bb28e315234` FOREIGN KEY (`cri_ind_id`) REFERENCES `criteriosic` (`cri_id`),
  CONSTRAINT `FK_fa3e5d3a736461d7c253729511c` FOREIGN KEY (`ind_cri_id`) REFERENCES `indicador` (`ind_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.ind_cri: ~440 rows (aproximadamente)
INSERT INTO `ind_cri` (`ind_cri_id`, `cri_ind_id`) VALUES
	('P.1.1', 1),
	('P.1.10', 1),
	('P.1.11', 1),
	('P.1.12', 1),
	('P.1.13', 1),
	('P.1.14', 1),
	('P.1.15', 1),
	('P.1.16', 1),
	('P.1.17', 1),
	('P.1.18', 1),
	('P.1.19', 1),
	('P.1.2', 1),
	('P.1.20', 1),
	('P.1.21', 1),
	('P.1.22', 1),
	('P.1.23', 1),
	('P.1.24', 1),
	('P.1.25', 1),
	('P.1.3', 1),
	('P.1.4', 1),
	('P.1.5', 1),
	('P.1.6', 1),
	('P.1.7', 1),
	('P.1.8', 1),
	('P.1.9', 1),
	('P.2.1', 1),
	('P.2.10', 1),
	('P.2.11', 1),
	('P.2.12', 1),
	('P.2.13', 1),
	('P.2.14', 1),
	('P.2.15', 1),
	('P.2.2', 1),
	('P.2.3', 1),
	('P.2.4', 1),
	('P.2.5', 1),
	('P.2.6', 1),
	('P.2.7', 1),
	('P.2.8', 1),
	('P.2.9', 1),
	('P.3.1', 1),
	('P.3.10', 1),
	('P.3.11', 1),
	('P.3.12', 1),
	('P.3.13', 1),
	('P.3.14', 1),
	('P.3.15', 1),
	('P.3.2', 1),
	('P.3.3', 1),
	('P.3.4', 1),
	('P.3.5', 1),
	('P.3.6', 1),
	('P.3.7', 1),
	('P.3.8', 1),
	('P.3.9', 1),
	('P.1.1', 2),
	('P.1.10', 2),
	('P.1.11', 2),
	('P.1.12', 2),
	('P.1.13', 2),
	('P.1.14', 2),
	('P.1.15', 2),
	('P.1.16', 2),
	('P.1.17', 2),
	('P.1.18', 2),
	('P.1.19', 2),
	('P.1.2', 2),
	('P.1.20', 2),
	('P.1.21', 2),
	('P.1.22', 2),
	('P.1.23', 2),
	('P.1.24', 2),
	('P.1.25', 2),
	('P.1.3', 2),
	('P.1.4', 2),
	('P.1.5', 2),
	('P.1.6', 2),
	('P.1.7', 2),
	('P.1.8', 2),
	('P.1.9', 2),
	('P.2.1', 2),
	('P.2.10', 2),
	('P.2.11', 2),
	('P.2.12', 2),
	('P.2.13', 2),
	('P.2.14', 2),
	('P.2.15', 2),
	('P.2.2', 2),
	('P.2.3', 2),
	('P.2.4', 2),
	('P.2.5', 2),
	('P.2.6', 2),
	('P.2.7', 2),
	('P.2.8', 2),
	('P.2.9', 2),
	('P.3.1', 2),
	('P.3.10', 2),
	('P.3.11', 2),
	('P.3.12', 2),
	('P.3.13', 2),
	('P.3.14', 2),
	('P.3.15', 2),
	('P.3.2', 2),
	('P.3.3', 2),
	('P.3.4', 2),
	('P.3.5', 2),
	('P.3.6', 2),
	('P.3.7', 2),
	('P.3.8', 2),
	('P.3.9', 2),
	('P.1.1', 3),
	('P.1.10', 3),
	('P.1.11', 3),
	('P.1.12', 3),
	('P.1.13', 3),
	('P.1.14', 3),
	('P.1.15', 3),
	('P.1.16', 3),
	('P.1.17', 3),
	('P.1.18', 3),
	('P.1.19', 3),
	('P.1.2', 3),
	('P.1.20', 3),
	('P.1.21', 3),
	('P.1.22', 3),
	('P.1.23', 3),
	('P.1.24', 3),
	('P.1.25', 3),
	('P.1.3', 3),
	('P.1.4', 3),
	('P.1.5', 3),
	('P.1.6', 3),
	('P.1.7', 3),
	('P.1.8', 3),
	('P.1.9', 3),
	('P.2.1', 3),
	('P.2.10', 3),
	('P.2.11', 3),
	('P.2.12', 3),
	('P.2.13', 3),
	('P.2.14', 3),
	('P.2.15', 3),
	('P.2.2', 3),
	('P.2.3', 3),
	('P.2.4', 3),
	('P.2.5', 3),
	('P.2.6', 3),
	('P.2.7', 3),
	('P.2.8', 3),
	('P.2.9', 3),
	('P.3.1', 3),
	('P.3.10', 3),
	('P.3.11', 3),
	('P.3.12', 3),
	('P.3.13', 3),
	('P.3.14', 3),
	('P.3.15', 3),
	('P.3.2', 3),
	('P.3.3', 3),
	('P.3.4', 3),
	('P.3.5', 3),
	('P.3.6', 3),
	('P.3.7', 3),
	('P.3.8', 3),
	('P.3.9', 3),
	('P.1.1', 4),
	('P.1.10', 4),
	('P.1.11', 4),
	('P.1.12', 4),
	('P.1.13', 4),
	('P.1.14', 4),
	('P.1.15', 4),
	('P.1.16', 4),
	('P.1.17', 4),
	('P.1.18', 4),
	('P.1.19', 4),
	('P.1.2', 4),
	('P.1.20', 4),
	('P.1.21', 4),
	('P.1.22', 4),
	('P.1.23', 4),
	('P.1.24', 4),
	('P.1.25', 4),
	('P.1.3', 4),
	('P.1.4', 4),
	('P.1.5', 4),
	('P.1.6', 4),
	('P.1.7', 4),
	('P.1.8', 4),
	('P.1.9', 4),
	('P.2.1', 4),
	('P.2.10', 4),
	('P.2.11', 4),
	('P.2.12', 4),
	('P.2.13', 4),
	('P.2.14', 4),
	('P.2.15', 4),
	('P.2.2', 4),
	('P.2.3', 4),
	('P.2.4', 4),
	('P.2.5', 4),
	('P.2.6', 4),
	('P.2.7', 4),
	('P.2.8', 4),
	('P.2.9', 4),
	('P.3.1', 4),
	('P.3.10', 4),
	('P.3.11', 4),
	('P.3.12', 4),
	('P.3.13', 4),
	('P.3.14', 4),
	('P.3.15', 4),
	('P.3.2', 4),
	('P.3.3', 4),
	('P.3.4', 4),
	('P.3.5', 4),
	('P.3.6', 4),
	('P.3.7', 4),
	('P.3.8', 4),
	('P.3.9', 4),
	('P.1.1', 5),
	('P.1.10', 5),
	('P.1.11', 5),
	('P.1.12', 5),
	('P.1.13', 5),
	('P.1.14', 5),
	('P.1.15', 5),
	('P.1.16', 5),
	('P.1.17', 5),
	('P.1.18', 5),
	('P.1.19', 5),
	('P.1.2', 5),
	('P.1.20', 5),
	('P.1.21', 5),
	('P.1.22', 5),
	('P.1.23', 5),
	('P.1.24', 5),
	('P.1.25', 5),
	('P.1.3', 5),
	('P.1.4', 5),
	('P.1.5', 5),
	('P.1.6', 5),
	('P.1.7', 5),
	('P.1.8', 5),
	('P.1.9', 5),
	('P.2.1', 5),
	('P.2.10', 5),
	('P.2.11', 5),
	('P.2.12', 5),
	('P.2.13', 5),
	('P.2.14', 5),
	('P.2.15', 5),
	('P.2.2', 5),
	('P.2.3', 5),
	('P.2.4', 5),
	('P.2.5', 5),
	('P.2.6', 5),
	('P.2.7', 5),
	('P.2.8', 5),
	('P.2.9', 5),
	('P.3.1', 5),
	('P.3.10', 5),
	('P.3.11', 5),
	('P.3.12', 5),
	('P.3.13', 5),
	('P.3.14', 5),
	('P.3.15', 5),
	('P.3.2', 5),
	('P.3.3', 5),
	('P.3.4', 5),
	('P.3.5', 5),
	('P.3.6', 5),
	('P.3.7', 5),
	('P.3.8', 5),
	('P.3.9', 5),
	('P.1.1', 6),
	('P.1.10', 6),
	('P.1.11', 6),
	('P.1.12', 6),
	('P.1.13', 6),
	('P.1.14', 6),
	('P.1.15', 6),
	('P.1.16', 6),
	('P.1.17', 6),
	('P.1.18', 6),
	('P.1.19', 6),
	('P.1.2', 6),
	('P.1.20', 6),
	('P.1.21', 6),
	('P.1.22', 6),
	('P.1.23', 6),
	('P.1.24', 6),
	('P.1.25', 6),
	('P.1.3', 6),
	('P.1.4', 6),
	('P.1.5', 6),
	('P.1.6', 6),
	('P.1.7', 6),
	('P.1.8', 6),
	('P.1.9', 6),
	('P.2.1', 6),
	('P.2.10', 6),
	('P.2.11', 6),
	('P.2.12', 6),
	('P.2.13', 6),
	('P.2.14', 6),
	('P.2.15', 6),
	('P.2.2', 6),
	('P.2.3', 6),
	('P.2.4', 6),
	('P.2.5', 6),
	('P.2.6', 6),
	('P.2.7', 6),
	('P.2.8', 6),
	('P.2.9', 6),
	('P.3.1', 6),
	('P.3.10', 6),
	('P.3.11', 6),
	('P.3.12', 6),
	('P.3.13', 6),
	('P.3.14', 6),
	('P.3.15', 6),
	('P.3.2', 6),
	('P.3.3', 6),
	('P.3.4', 6),
	('P.3.5', 6),
	('P.3.6', 6),
	('P.3.7', 6),
	('P.3.8', 6),
	('P.3.9', 6),
	('P.1.1', 7),
	('P.1.10', 7),
	('P.1.11', 7),
	('P.1.12', 7),
	('P.1.13', 7),
	('P.1.14', 7),
	('P.1.15', 7),
	('P.1.16', 7),
	('P.1.17', 7),
	('P.1.18', 7),
	('P.1.19', 7),
	('P.1.2', 7),
	('P.1.20', 7),
	('P.1.21', 7),
	('P.1.22', 7),
	('P.1.23', 7),
	('P.1.24', 7),
	('P.1.25', 7),
	('P.1.3', 7),
	('P.1.4', 7),
	('P.1.5', 7),
	('P.1.6', 7),
	('P.1.7', 7),
	('P.1.8', 7),
	('P.1.9', 7),
	('P.2.1', 7),
	('P.2.10', 7),
	('P.2.11', 7),
	('P.2.12', 7),
	('P.2.13', 7),
	('P.2.14', 7),
	('P.2.15', 7),
	('P.2.2', 7),
	('P.2.3', 7),
	('P.2.4', 7),
	('P.2.5', 7),
	('P.2.6', 7),
	('P.2.7', 7),
	('P.2.8', 7),
	('P.2.9', 7),
	('P.3.1', 7),
	('P.3.10', 7),
	('P.3.11', 7),
	('P.3.12', 7),
	('P.3.13', 7),
	('P.3.14', 7),
	('P.3.15', 7),
	('P.3.2', 7),
	('P.3.3', 7),
	('P.3.4', 7),
	('P.3.5', 7),
	('P.3.6', 7),
	('P.3.7', 7),
	('P.3.8', 7),
	('P.3.9', 7),
	('P.1.1', 8),
	('P.1.10', 8),
	('P.1.11', 8),
	('P.1.12', 8),
	('P.1.13', 8),
	('P.1.14', 8),
	('P.1.15', 8),
	('P.1.16', 8),
	('P.1.17', 8),
	('P.1.18', 8),
	('P.1.19', 8),
	('P.1.2', 8),
	('P.1.20', 8),
	('P.1.21', 8),
	('P.1.22', 8),
	('P.1.23', 8),
	('P.1.24', 8),
	('P.1.25', 8),
	('P.1.3', 8),
	('P.1.4', 8),
	('P.1.5', 8),
	('P.1.6', 8),
	('P.1.7', 8),
	('P.1.8', 8),
	('P.1.9', 8),
	('P.2.1', 8),
	('P.2.10', 8),
	('P.2.11', 8),
	('P.2.12', 8),
	('P.2.13', 8),
	('P.2.14', 8),
	('P.2.15', 8),
	('P.2.2', 8),
	('P.2.3', 8),
	('P.2.4', 8),
	('P.2.5', 8),
	('P.2.6', 8),
	('P.2.7', 8),
	('P.2.8', 8),
	('P.2.9', 8),
	('P.3.1', 8),
	('P.3.10', 8),
	('P.3.11', 8),
	('P.3.12', 8),
	('P.3.13', 8),
	('P.3.14', 8),
	('P.3.15', 8),
	('P.3.2', 8),
	('P.3.3', 8),
	('P.3.4', 8),
	('P.3.5', 8),
	('P.3.6', 8),
	('P.3.7', 8),
	('P.3.8', 8),
	('P.3.9', 8);

-- Volcando estructura para tabla sehab.item
DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `ite_id` int NOT NULL AUTO_INCREMENT,
  `ite_nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `iteEvaluacionipsEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`ite_id`),
  UNIQUE KEY `IDX_8060c5ca9393b7fc942feb45fd` (`ite_nombre`),
  KEY `FK_94d2bb218c8779c9fde5e2a493a` (`iteEvaluacionipsEvipsId`),
  CONSTRAINT `FK_94d2bb218c8779c9fde5e2a493a` FOREIGN KEY (`iteEvaluacionipsEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.item: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.municipio
DROP TABLE IF EXISTS `municipio`;
CREATE TABLE IF NOT EXISTS `municipio` (
  `mun_id` int NOT NULL AUTO_INCREMENT,
  `mun_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`mun_id`),
  UNIQUE KEY `IDX_2b95b2494249fb3cd427b29a25` (`mun_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.municipio: ~13 rows (aproximadamente)
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

-- Volcando estructura para tabla sehab.prestador
DROP TABLE IF EXISTS `prestador`;
CREATE TABLE IF NOT EXISTS `prestador` (
  `pre_cod_habilitacion` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_nit` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_direccion` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_telefono` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_habilitado` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_representante` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.prestador: ~266 rows (aproximadamente)
INSERT INTO `prestador` (`pre_cod_habilitacion`, `pre_nombre`, `pre_nit`, `pre_direccion`, `pre_telefono`, `pre_email`, `pre_habilitado`, `pre_representante`, `preClasificacionClaId`, `preClaseClasId`, `preTipoTipId`, `preMunicipioMunId`) VALUES
	('8600100008', 'José Javier Rodriguez Rodriguez', '76312363', 'Cra 9 Nro 24-7', '098 4200477', 'javierdermato@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100016', 'DIAGNOSTICOS E.U.', '846001425', 'CALLE 12 No 9 -103', '8-4296179', 'diagnosticoseu@hotmail.com', 'SI', 'DANIEL ANGEL ARIAS OLAVE', 1, 1, 2, 2),
	('8600100019', 'MARIA ELENA GUERRERO GOMEZ', '27353661', 'CALLE 7A No. 10-11EDIFICIO MARIA ELENA', '3118182728', 'mariaeguerrero53@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100031', 'IVAN RAMIRO CHICO VACA', '273010', 'Calle 12 No. 9-21', '4200625', 'odontocentermocoa@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100038', 'EMPRESA SOCIAL DEL ESTADO HOSPITAL JOSÉ MARÍA HERNÁNDEZ', '891200679', 'CL. 14 Nº 7 - 26 AV. SAN FRANCISCO', '(57)(8) 4296056 - 4296057', 'gerencia@esehospitalmocoa.gov.co', 'SI', 'MANUEL JAIR ZUÑIGA BRAVO', 1, 1, 1, 2),
	('8600100050', 'REHABILITAR DEL PUTUMAYO SAS', '846003158', 'CALLE 11 No. 8 -76 BARRIO KENEDY', '4206217', 'rehabilitardelputumayo@hotmail.com', 'SI', 'YULI JACKELINE TANDIOY LOPEZ', 1, 1, 2, 2),
	('8600100055', 'ANA LUCIA LEITON REVELO', '69005673', 'CALLE 7 No. 4 - 22', '4200997', 'anagordisley@yahoo.es', 'SI', '', 3, 2, 2, 2),
	('8600100057', 'LEONARDO MARIN CARO', '73574337', 'Carrera 9ª No. 17 - 42 Edificio Julio Muriel, Mocoa', '3108020709', 'leomarin1209@hotmail.com', 'SI', 'LEONARDO MARIN CARO', 3, 2, 2, 2),
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
	('8600100218', 'JAIME ALBERYAM DELGADO RENZA', '79658045', 'AVENIDA SAN FRANCISCO CALLE 14 CON CARRERA 12 ESQUINA', '3103488895', 'alberyam@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100229', 'CENTRO DE IMÁGENES DIAGNOSTICAS TERCER MILENIO SAS', '900055393', 'CALLE 14 No 12 - 81', '420 45 06', 'asistente@cendidter.com', 'SI', 'ALEXANDRA GIRALDO AGUDELO', 1, 1, 2, 2),
	('8600100256', 'ZAYRA ROXANNE CHAMORRO VALENCIA', '69007549', 'CALLE 14 NUMERO 12-49', '4204101-3113047894', 'clinicabocasyboquitas@gmail.com', 'SI', 'ZAIRA ROXANNE CHAMORRO VALENCIA', 3, 2, 2, 2),
	('8600100259', 'CLÍNICA FLOREZ S.A.S.', '846003374', 'KR 8 Nº 15-50', '(57)(8)4200766', 'optilenteseumocoa@gmail.com', 'SI', 'CRUZ ELENA FLOREZ MURIEL', 1, 1, 2, 2),
	('8600100276', 'SALUD TERAPIA DEL PUTUMAYO E.U', '900130936', 'CARRERA 11A No 15-46', '3106953025', 'analis76@hotmail.com', 'SI', 'ANA LISBETH BENAVIDES BURBANO', 1, 1, 2, 2),
	('8600100299', 'OSCAR ORLANDO GUERRERO ENRIQUEZ', '98395598', 'Av San Francisco Calle 14 No. 12-81 OF 204', '4204773', 'oral.clinik@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100308', 'DORIS GLADYS SALAS RODRIGUEZ', '27470448', 'AVENIDA SAN FRANCISCO CALLE 14 # 10-15', '3147992120', 'Odosarod-11@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100365', 'ASISTENCIA MEDICA DEL SUR IPS LTDA', '900337015', 'CR 13 14 64 BRR OBRERO', '4204543', 'asistenciamedicadelsurltda@hotmail.com', 'SI', 'RUBICINTIA BUSUY GUALDRON', 1, 1, 2, 2),
	('8600100372', 'Edgar Mauricio Rojas Rojas', '17654831', 'Crra 9 N 12-44', '3107815972', 'edmaroro@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100373', 'GESTION INTEGRAL EN SALUD DEL PUTUMAYO GEINSALUD PUTUMAYO', '900354693', 'CARRERA 4 N° 9-28 BARRIO JOSE MARIA HERNANDEZ', '6084201003-3223240199-3202099280', 'geinsaludptyo@hotmail.com auditoriacalidad.mocoa@ipsgeinsaludputumayo.com gerencia.mocoa@ipsgeinsaludputumayo.com', 'SI', 'LIDA IMELDA CERON CHICUNQUE', 1, 1, 2, 2),
	('8600100575', 'IPS DISMECOL LTDA', '900395844', 'CALLE 14 No. 10-11 AV. SAN FRANCISCO', '4206381', 'dismecolips@hotmail.com', 'SI', 'JIMMY ALEXANDER LUNA ROJAS', 1, 1, 2, 2),
	('8600100613', 'MEGASALUD IPS SAS', '813008574', 'Av. San Francisco Calle 14 No. 7 - 26 Barrio Obrero Hospital Jose María Hernandez', '4200573', 'aomendezp@megasaludips.com', 'SI', 'ANDRES ORLANDO MENDEZ PAVA', 1, 1, 2, 2),
	('8600100623', 'NOVADEN Odontologia Especializada IPS SAS', '900500281', 'CRA. 7 NO. 11C-06', '4205271', 'gerencia@novaden.com.co', 'SI', 'ANDREA DEL PILAR CASTRILLON PINEDA', 1, 1, 2, 2),
	('8600100627', 'IPS SAMYSALUD SAS', '900506634', 'CR 7B 17B-40 BARRIO VILLA NATALIA', '4204779 - 3106776217', 'ipssamysalud@hotmail.com', 'SI', 'LUZ DARY ORTEGA JAMIOY', 1, 1, 2, 2),
	('8600100631', 'Jenny Cristina Maya Hernández', '30740556', 'Calle 10 A # 14 - 23', '3103249502', 'jennymaya2004@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100642', 'Keyla Daniela Lopez Acosta', '69008241', 'CALLE 11 No. 12-25 BARRIO OBRERO ETAPA 1', '3203558785', 'kinesis.mocoa@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100643', 'LABORATORIO BUITRAGO S.A.S', '900591581', 'AV. San Francisco Cra 14 No 13-08', '4206350', 'laboratoriodianabuitrago@hotmail.com', 'SI', 'DIANA ZORAIDA BUITRAGO SALAZAR', 1, 1, 2, 2),
	('8600100654', 'FUNDACION MAS INNOVACION MAS SOCIAL', '814006325', 'MZ 9 CASA 1', '3175464695', 'hsadmonfundaemssanar@gmail.com', 'SI', 'MARIA CELIA DEL SOCORRO MONTENEGRO TULCANAZA', 2, 1, 2, 2),
	('8600100660', 'SOLUCIONES INTEGRALES DE TRANSITO SAS', '900541238', 'CALLE 9 No. 18-18', '3212653672', 'crccertificamosas@gmail.com', 'SI', 'william amaully zambrano chavez', 2, 1, 2, 2),
	('8600100663', 'VICTOR HUGO RODRIGUEZ MUÑOZ', '76306801', 'CALLE 10 # 14-02', '3118286114', 'directorsalud@vhrcentropediatricoips.com', 'SI', '', 3, 2, 2, 2),
	('8600100671', 'IPS CONSULTORIO MATERNO INFALTIL - LOS ANGELES SAS', '900657044', 'CL 7 13 B MZ 16', '3218005735', 'ipslosangeles.mocoa@gmail.com', 'SI', 'JAIRO FERNANDO GOMEZ GALINDEZ', 1, 1, 2, 2),
	('8600100688', 'TEOFILO HERNANDO QUIÑONES JIMENEZ', '18128129', 'CRA 9 FRENTE A SAN MIGUEL PLAZA', '3204582564 -4206321', 'TEOHER2012@HOTMAIL.COM', 'SI', '', 3, 2, 2, 2),
	('8600100691', 'SOLUCIONES INTEGRALES EN GESTION OCUPACIONAL S.A.S', '900774181', 'Av. San Francisco No. 15-07 B/ - Obrero', '4296281 - 3209506624', 'sigoips@gmail.com', 'SI', 'WENDY LISSETTE SANCHEZ TARAZONA', 1, 1, 2, 2),
	('8600100702', 'IPS REHABILITACION INTEGRAL SANAR S.A.S', '900840632', 'carrera16 N° 14-39 barrio obrero II etapa', '3136819882', 'ipssanarsas@gmail.com', 'SI', 'GRACE ANYOLINA NARVAEZ ACOSTA', 1, 1, 2, 2),
	('8600100712', 'WHERLEY DARIO QUIROGA PEREZ', '18124089', 'Calle 5 No. 9-305', '4296055-3183366540-3102768841', 'cmaternofetal2015@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100716', 'LÓPEZ PARRA JENNIFFER JANETH', '1124854416', 'CALLE 9 # 7-22', '3106197510-3212922098', 'optolopez90@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100721', 'EMPRESA DE REMISIONES Y TRASLADOS DIVINO NIÑO S.A.S', '900937861', 'BARRIO HUASIPANGA CLLE 15 No. 03', '3223164023', 'remisiones_sas@hotmail.com remisionessascalidad2022@gmail.com', 'SI', 'PAOLA ANDREA SOLARTE ROSERO', 4, 1, 2, 2),
	('8600100728', 'ATENCION INTEGRAL MEDICA AIMEDIC S.A.S', '900978986', 'Carrera 7 N. 15-07 Barrio el Jardin', '3132219870', 'ipsaimedic@gmail.com', 'SI', 'RUTH ROVIRA ROSERO MUÑOZ', 1, 1, 2, 2),
	('8600100733', 'OSCAR BERMEO NARVAEZ', '18125427', 'CALLE 16 # 11 A - 49', '3222823880', 'oscarcxplastica@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100737', 'KATERINE CUBIDES FLECHAS', '52199441', 'Cra 9 N° 12-44 CONSULTORIO 2', '3124475541', 'katerinecufle@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100740', 'MARIA ELENA PEREZ MELO', '27359472', 'CRA 4 No 7-06 B/ JOSE MARIA HERNANDEZ', '4205356 - 3212011259 - 3108814541', 'maria.elen@hotmail.es', 'SI', '', 3, 2, 2, 2),
	('8600100743', 'IVAN DARIO GONZALEZ ROA', '79903675', 'carrera 6 no 8-29 segundo piso', '3146782967 - 3112199890', 'id.gonzalez@unicieo.edu.co', 'SI', '', 3, 2, 2, 2),
	('8600100747', 'FUNDACION MARCA PUTUMAYO', '900888951', 'Cra 7 N 14 - 25', '3102675277', 'fmarcaputumayo@gmail.com', 'SI', 'Edgar Avellaneda Gonzalez', 2, 1, 2, 2),
	('8600100760', 'Katia Mile Castro Arias', '1042419781', 'calle 12 Nº 9- 48', '3218005241 3176985378', 'kmca29@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100764', 'PROFESIONALES EN INSTRUMENTOS PARA LA SALUD Y MEDICINA HUMANA APLICADAS S.A.S PRISMHA S.A.S.', '901050652', 'CALLE 14 Nro. 10 - 11 B/ SAN FRANCISCO', '3134338046', 'prismha@hotmail.com', 'SI', 'SANDDY ALEJANDRA ROJAS CUESVAS', 1, 1, 2, 2),
	('8600100771', 'PAOLA NAYERINE CHAMORRO CHANCHI', '52828174', 'CARRERA 17.CALLE 9.', '3204736582', 'naye80811@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100782', 'DEICY LORENA BAHOS ORDOÑEZ', '69007843', 'CLLE 24 No. 7A - 19 Torre Miguel Angel Local 1', '3202366994 - 4204477', 'lorenabahos@yahoo.com', 'SI', '', 3, 2, 2, 2),
	('8600100783', 'ANTONIO GABRIEL MUSIRI PASTRANA', '72285166', 'calle 8 cra 4-28', '3113611620-3008875150-3016911680', 'distriopticas@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100786', 'MAYRA ALEJANDRA ORTEGA NARVAEZ', '1124315888', 'CLL 24#7A-19 TORRE MIGUEL ÁNGEL LOCAL 1', '322678076', 'mayranar29@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100787', 'MARTHA CECILIA VARGAS CLEVES', '26638306', 'avenida san francisco calle 12 # 12-30', '3143949838', 'chechivargas@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100796', 'WILLIAM DAVID PORTILLA CORDOBA', '12754980', 'AV COLOMBIA', '3202316200', 'wdjpc838@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100801', 'luz edilia lopez cordoba', '27354639', 'carrera 13 #14-00 barrio jardín diagonal Notaria Única de Mocoa', '3112235684', 'luzedilialopez@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100807', 'CRISTIAN DARWUIN TORRES ALEGRIA', '87064918', 'Centro Comercial Rio Plaza,Local 104', '3125784645- 3142026268-4204777', 'cristiantorres04@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100809', 'SANDRA MILENA MARIN BARON', '52821338', 'CL 12 # 9-48 CS 101', '3212375561', 'sandra-marin@juanncorpas.edu.co', 'SI', '', 3, 2, 2, 2),
	('8600100816', 'Diego Alexander Martinez Porras', '80224883', 'Calle 14 #18 - 275', '3143306419', '', 'SI', '', 3, 2, 2, 2),
	('8600100817', 'Kryztel Vanessa Ortiz Espinoza', '1047361570', 'Calle 14 # 18 -275', '3143306419', '', 'SI', '', 3, 2, 2, 2),
	('8600100823', 'LIZBETH JOHANA BURBANO CRIOLLO', '1017125725', 'CALLE 15 NUMERO 7A', '3194107020', 'lj.burbano@unicieo.edu.co', 'SI', '', 3, 2, 2, 2),
	('8600100825', 'LUISA FERNANDA ARDILA ORDOÑEZ', '1143843565', 'CALLE 5 N° 11- 130', '3203133143', 'fao_abril@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100827', 'Ivan Dario Cuaran Jurado', '18131383', 'CRA 7 No. 9-17 clle del Tobogan - Barrio:CENTRO', '3142424525', 'cardiodiagnosticodelsur@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100828', 'FUNDACION PICACHOS', '828000312', 'Vereda Pueblo Viejo', '3176681977', 'fpicachos@fundacionpicachos.org', 'SI', 'Miguel Angel Claros Correa', 2, 1, 2, 2),
	('8600100832', 'cuerpo de bomberos voluntarios de mocoa', '891201393', 'CALLE 17 A N°8-34', '4295034', 'ambulanciamocoa@hotmail.com', 'SI', 'jose alfonso cruz martinez', 4, 1, 2, 2),
	('8600100833', 'Yoldy Numar Hidalgo Velasco', '27356059', 'CALLE 14 NO. 8-16 JUNTO A LA OZIP', '3125852525', 'solosonrisas321@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100835', 'LYNDA MARILYN FAJARDO BARAHONA', '1085259943', 'Av Colombia Cra 9 # 17A 31', '3156219644 - 3142231318', 'fajardolyndaavanzada@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100840', 'AMBULANCIAS GLOBAL SALUD SAS ZOMAC', '901387401', 'CRA 9 N -2-37', '3132211739', 'ambulanciasglobalsalud@gmail.com', 'SI', 'LUIS MANUEL JURADO DELGADO', 4, 1, 2, 2),
	('8600100845', 'Fundacion San Damian - Escuela de Vida', '901174964', 'CL 14 9 23 AV San Francisco', '3134904770 3173761143', 'sandamian.fundacion@gmail.com', 'SI', 'EFRAIN ALEXANDER CHASPUENGAL BETANCOURTH', 2, 1, 2, 2),
	('8600100847', 'ASOCIACIÓN PROFAMILIA', '860013779', 'Cra 9 N. 2 ? 37 Barrio Pablo Sexto', '3174997729', 'mroyo@profamilia.org.co', 'SI', 'MARTA ELENA ROYO RUIZ', 1, 1, 2, 2),
	('8600100848', 'CLINICA SMILE DENTIS SAS', '901374880', 'CL 14 11 39 AV SAN FRANCISCO BRR SAN FRANCISCO', '3213332714 - 3103876930', 'clinicasmiledentis2020@gmail.com', 'SI', 'FENER IVAN ORDOÑEZ BOLAÑOS', 1, 1, 2, 2),
	('8600100850', 'CENTRO DE DIAGNOSTICO MOCOA', '901101616', 'Carrera 8 8-32', '3006915097', 'rlginversionesmedicas@gmail.com', 'SI', 'Lilia Lizzeth Guerrero Romero', 1, 1, 2, 2),
	('8600100853', 'Marcela Viviana Andrade Vallejo', '69009782', 'Carrera 7 No. 8-22', '098 4296049', 'lab.hidalgo900@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100855', 'JUAN CARLOS LOPEZ PUJIMUY', '1053814737', 'CALLE 16 # 8-31- Frente al coliseo Jardín', '3164105096', 'integralaboratoriodc@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100858', 'ALVARO DAVID ANACONA CORDOBA', '1018442076', 'Carrera 8a No. 8-32 Clle Contraloria General', '3212049895', 'Adavic1223@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100864', 'Leonela Fernanda Alarcón Herrán', '1061730007', 'Carrera 8# 8-32 barrio Olímpico', '3148506536', 'leonela_112@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100867', 'ANDRES MAURICIO WINTACO MARTINEZ', '1032422145', 'CARRERA 9 N° 17-42 EDIFICIO JULIO MURIEL', '3153043160', 'andreswm2013@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100872', 'JUAN DIEGO LOPEZ GORDILLO', '1124864671', 'Carrera 8 # 1 - 27', '3204141895', 'juandlopez184@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100877', 'LEYDI CAROLINA CLEVES BELTRAN', '1019046645', 'URBANIZACION QUINTAS DE LA COLINA', '3118600351', 'carolinaTAFV@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100878', 'Katherine Gaviria Montezuma', '1124859857', 'carra 9a#17A-49', '3504345230', '2020visionmocoa@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100879', 'YULIMAR MARGARITA CASTILLO GAVIDIA', '716998', 'CL 12 # 9 48', '3145188378', 'yulimargozzo@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100880', 'HOME HEALT PUTUMAYO S.A.S', '901510889', 'CASA 9 MZ A BARRIO QUINTA PAREDES', '3125734365', 'homehealthptyo@gmail.com', 'SI', 'JULIE CATHERINE SUAREZ BUCHELY', 1, 1, 2, 2),
	('8600100882', 'Gina Paola Canamejoy Arcos', '1152438506', 'carrera 15 #14-54', '3182160206', 'paolacaarcos@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100890', 'ANGIE JOHANA ZAPATA GARCES', '1122340569', 'barrio ciudadela', '3138472282', 'angie.zagar@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100891', 'JORGE ALBERTO MOLINA GIRALDO', '1006410459', 'barrio ciudadela', '3219711917', 'medicojorgemolina@gmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100893', 'CRISTIAN JULIAN BOTINA JOAQUI', '1026260945', 'CRA9 N°12-44 CONSULTORIO 1', '3164934678', 'drcbotinaj@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100896', 'Fundacion Munay', '900276174', 'Vereda Caliyaco vía al aguacate Munay San Gabriel', '3214395771', 'fundacionmunay@gmail.com', 'SI', 'Ramón Nonato Arroyave Giraldo', 2, 1, 2, 2),
	('8600100898', 'Giselle Catalina Alvarez Diaz', '52967986', 'Cll 9 # 12-44 CONSULTORIO 2', '3143186863', 'Kata_aldi1240@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100903', 'WILLIAM BRIAN RIASCOS PALACIOS', '18129118', 'Cra. 8 No. 17-50', '3112033322', 'williamriascosmd@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100904', 'MICHAEL DAVIS ROSAS MOLINA', '18112918', 'Calle 7 Nº 13B Mza-16', '3103458363', 'hover444@hotmail.com', 'SI', '', 3, 2, 2, 2),
	('8600100939', 'SERVICIO DE TRANSPORTE SALVA VIVIR S.A.C ZOMAC', '901357243', 'Carrera 12 No. 12B-24 Barrio Obrero', '3107744281', 'luzsalvavivir53@gmail.com', 'SI', 'YULY YOHANA BENAVIDES VALLEJO', 4, 1, 2, 2),
	('8621900017', 'ESE HOSPITAL Pio XII', '891201845', 'Calle 4 No. 8-18', '3153665966', 'esehcolon2004@yahoo.es', 'SI', 'CAMILA MARIA CHAMORRO RAMIREZ', 1, 1, 1, 1),
	('8621900821', 'FRANCIS ELIZABETH ESPINOSA TORO', '1124314026', 'CRA 9 No 3-4', '3106170504', 'consultoriointegral1322@gmail.com', 'SI', '', 3, 2, 2, 1),
	('8632000024', 'E.S.E HOSPITAL ORITO', '846000474', 'CALLE 9 No 3-50', '4292283', 'calidadesehospitalorito@gmail.com', 'SI', 'SIRLEY FRANCO VILLADA', 1, 1, 1, 3),
	('8632000121', 'Clara Pombo Rodríguez', '63274809', 'carrera 12 3 131', '4292227', 'lab_clini_biolab@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000123', 'WILLIAM EDWART MONSALVE PAZ', '18108288', 'CALLE 8 Nº 12A - 37', '4292092', 'wimonpaz@yahoo.com', 'SI', '', 3, 2, 2, 3),
	('8632000180', 'CLAUDIA LUCIA LOPEZ BURGOS', '35506295', 'CALLE 4 No. 11-75', '3142481659', 'claudiaortodoncia@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000330', 'FONOCLINIC IPS S.A.S', '900220590', 'Calle 2a nº 2-07, Barrio 28 de Mayo', '42992269', 'fonoclinicc@gmail.com', 'SI', 'WILLINGTON CABRERA SALAZAR', 1, 1, 2, 3),
	('8632000357', 'GILMA ALEJANDRA DELGADO DIAZ', '52711055', 'DG 8 N° 6 - 201 B/ CHAPINERO', '3208311294', 'alejandraopt@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000369', 'RAYOS X CATILP SAS', '900343172', 'BARRIO MARCO FIDEL SUAREZ LOCAL 3 151 C', '4290572 - 3115149701', 'catilpsas@gmail.com', 'SI', 'DARWIN OSWALDO RODRIGUEZ MORALES', 1, 1, 2, 3),
	('8632000584', 'IPS SERVICIO FARMACEUTICO SAN ANDRES S.A.S', '900410062', 'Barrio Vergel casa 8', '098-4290149- 3214925887', 'ipsanandres@yahoo.es', 'SI', 'Harold Wilson Castro Castro', 1, 1, 2, 3),
	('8632000587', 'acsalud ips sas', '900422854', 'Diagonal 8A N°5A-34-36 BARRIO VERGEL', '(098)4291143-3208598430', 'acsalud.sas@gmail.com', 'SI', 'ALEJANDRA CARDONA DIAZ', 1, 1, 2, 3),
	('8632000598', 'MEDIC-LASER SAS', '900454848', 'CARRERA 13 No. 8 - 267 BARRIO COLOMBIA', '3212115767', 'silviajtr91@gmail.com', 'SI', 'SILVIA JOHANA TRUJILLO RIVERA', 1, 1, 2, 3),
	('8632000599', 'Edith Adriana Delgado Diaz', '41107579', 'calle 8 N. 7a-69', '3137928736/3116476698', 'adrianaopt2@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000624', 'MEDERI CENTER IPS SAS', '900523355', 'DIAGONAL 8 N° 4-116 BARRIO EL VERGEL', '4290188 - 3124369971', 'DELGADOG28@GMAIL.COM', 'SI', 'GLORIA JUDITH DELGADO CANTINCUS', 1, 1, 2, 3),
	('8632000665', 'Vilma Cristina Gonzalez Vallejo', '29675407', 'CARRERA 12 N° 7-84', '3183876992', 'vilma_gonzalez@hotmail.es', 'SI', '', 3, 2, 2, 3),
	('8632000667', 'María Eugenia Chavez Melo', '36757669', 'Cra 10 No. 6 - 29', '313 749 90 40', 'mariaeugeniachavez@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000697', 'EDWARD FERNANDO GOMEZ FERNANDEZ', '12749249', 'CRA 10 N°6- 29', '3212196335', 'clinicavidadredwardgomez@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000713', 'JOHN WILLIAM LOPEZ JUAGIBIOY', '71780562', 'CALLE 3 No. 7-11', '3112333343', 'johnwlopezj@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000732', 'LEYDI VIVIANA CHAVEZ FLOREZ', '67026293', 'DETRÁS DE COLEGIO SAN JOSÉ, CUARTA CASA', '4290771 / 3213930505', 'vivichavez08@yahoo.com', 'SI', '', 3, 2, 2, 3),
	('8632000755', 'ANALIZAR LABORATORIO CLINICO IPS SAS', '901090561', 'CRA. 10- No. 5-40 B. LA UNION', '3214929844', 'analizarlaborito@hotmail.com', 'SI', 'ADRIANA PAULINA CABRERA MUJANAJINSOY', 1, 1, 2, 3),
	('8632000815', 'YENIA YADIRIS MOSQUERA LOZANO', '35852158', 'DIAGONAL 8 N 4 - 184', '3156042314', 'spadental2020@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000829', 'Nazly Paola España Burgos', '1120216029', 'calle 4A No. 7-43', '3208555811', 'n.paolaespana@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000836', 'Luis Alfredo Cerquera Guerrero', '87068975', 'Diagonal 8 Casa 52 via principal', '3134958989 317551089', 'cerguerrero84@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000837', 'helen yurani bisbicuth araujo', '37084774', 'diagonal 8 casa 52', '3174959326', 'helenbisbicuth@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000839', 'A + Ambulancias y Servicios S.A.S', '900530855', 'barrio las palmas', '3015345337', 'info@ambulanciasamas.com', 'SI', 'PAOLA ANDREA GUTIERREZ MORALES', 4, 1, 2, 3),
	('8632000852', 'TRANSPORTE ASISTENCIAL GUADALUPE S.A.S.', '901387693', 'LAS PALMAS', '3102504989', 'AMBGUADALUPE2020@GMAIL.COM', 'SI', 'NELSON NOEL GALINDEZ GALINDEZ', 4, 1, 2, 3),
	('8632000870', 'LUIS ANGEL BUELVAS DIAZ', '1032374900', 'CARRERA 8 # 4-16', '3132101871', 'luisangelbd@gmail.com', 'SI', '', 3, 2, 2, 3),
	('8632000892', 'CRISTHIAN CAMILO RIVEROS CARVAJAL', '1123331440', 'CARRERA 9 # 7 - 10B CALLE LOS FAROLES', '3504944997', 'camilo_20riveros@hotmail.com', 'SI', '', 3, 2, 2, 3),
	('8656800007', 'EMPRESA SOCIAL DEL ESTADO HOSPITAL LOCAL', '846000253', 'KR 29 No 10-10', '4228303', 'esehospitallocal@yahoo.es', 'SI', 'GLINYS EDITH DIAZ LLERENA', 1, 1, 1, 4),
	('8656800093', 'REGULO ERACLIO BARONA OSORIO', '6557989', 'CLL 12 # 17-19', '3102401532', 'regulobarona@hotmail.com', 'SI', 'REGULO ERACLIO BARONA OSORIO ERACLIO BARONA OSORIO', 3, 2, 2, 4),
	('8656800095', 'LUIS GONZALO MARIN MARIN', '10222318', 'KRA 26 N 10 30', '3106777538', 'lugoma_18@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800104', 'WILMER CORDOBA MARIN', '6458946', 'CL 10 NUMERO 27-40', '4227375', 'wcordobam@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800109', 'CLAUDIA PATRICIA PROAÑOS PANTOJA', '69015655', 'CALLE 10 No.20-30 Primer Piso Edificio Antares', '098-4227585 - 3113014923', 'labprosaludptyo@hotmail.com', 'SI', 'CLAUDIA PATRICIA PROAÑOS PANTOJA', 3, 2, 2, 4),
	('8656800111', 'HERMILA ROSA MACHADO CORDOBA', '43798938', 'Calle 10 No 27-02', 'O984220413', 'sanfranciscoasislb@hotmail.com', 'SI', 'HERMILA ROSA MACHADO CORDOBA', 3, 2, 2, 4),
	('8656800159', 'MARITZA BARRERA PALOMINO', '39718228', 'CL10 NUMERO 26-43', '4228610', 'maritzabarrera3066@hotmail.com', 'SI', 'MARITZA BARRERA PALOMINO', 3, 2, 2, 4),
	('8656800196', 'LUZ EMELY NARANJO OROZCO', '31991695', 'Cra. 30 no. 28-29', '311 80 82 000', 'luzemely67@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800202', 'CLINICA DE LA AMAZONIA IPS LTDA', '900021788', 'CALLE 10 No. 25-18 BR EL CARMEN', '4227906', 'ipsamazonia@gmail.com', 'SI', 'LUZ MYRIAM VASQUEZ BOHORQUEZ', 1, 1, 2, 4),
	('8656800211', 'GENNY ELISABETH DELGADO MORALES', '30333074', 'NRC 20674', '984227185', 'genny_lab@hotmail.com', 'SI', 'GENNY ELISABETH DELGADO MORALES', 3, 2, 2, 4),
	('8656800294', 'MARCO ANTONIO INFANTE VILLARRAGA', '17106069', 'CALLE 10 No. 25 - 18', '4227234 3112644276', 'clarence440@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800306', 'Lina Niño Coral', '35196698', 'Calle 10#26-43', '3202104844-3204337570', 'linita-2610@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800314', 'Rina Alejandra Chicue Ortiz', '36754737', 'calle 13 mz 2', '3112768162', 'rinachicue0615@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800327', 'MELVA LIDE VILLOTA ZAMBRANO', '30722318', 'KR 26 # 10-08', '4227633', 'melviz1962@hotmail.com', 'SI', 'MELVA LIDE VILLOTA ZAMBRANO', 3, 2, 2, 4),
	('8656800334', 'CENTRO ESPECIALIZADO DE ALTA TECNOLOGIA EN IMÁGENES DIAGNOSTICAS SAS', '900263426', 'CALLE 11 No 25-16 EL CARMEN', '320 343 9774', 'ceatpuertoasis@gmail.com', 'SI', 'ALEXANDRA GIRALDO AGUDELO', 1, 1, 2, 4),
	('8656800352', 'CLINICA SALUD CENTER S.A.S', '900310876', 'CALLE 9#24-74 BARRIO EL PUERTO', '4227185', 'clinicasaludcenter@hotmail.com', 'SI', 'DAMIR ANTONIO CARDOZO BURBANO', 1, 1, 2, 4),
	('8656800635', 'Unimedical del Sur', '900556205', 'carrera 25 n 30b- 48 barrio el recreo', '4220642', 'unimedicaldelsur@hotmail.com', 'SI', 'leonela del rocio Peñaranda Sanchez', 1, 1, 2, 4),
	('8656800636', 'AMBULANCIAS DEL SUR OCCIDENTE DE PUERTO ASIS S.A.S', '900570647', 'CALLE 12 No. 34-54 B/LAS COLINAS', '3142191410', 'ambulanciasdelsuroccidente@gmail.com', 'SI', 'FREDY ENRIQUEZ URREA', 4, 1, 2, 4),
	('8656800641', 'CERTIFICAR SAS', '900575391', 'CALLE 9 No. 19-30', '4220387', 'crccertificarips@gmail.com', 'SI', 'WILLIAM AMAULLY ZAMBRANO CHAVEZ', 2, 1, 2, 4),
	('8656800653', 'MARIA FERNANDA HURTADO RAMIREZ', '37085042', 'CALLE 10 ENTRE CRA 27 Y 28', '3165360848', 'mafesita707@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800659', 'JENNY ALEJANDRA QUINTERO MAZO', '69023038', 'CARRERA 20 No 10-25', '4228196-3114416505', 'jennyaleja0321@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800672', 'IPS EMERGENCIAS MEDICAS PUERTO ASIS SAS', '900624003', 'CL 9 N 28 - 07 BARRIO MODELO', '3127077518', 'emergenciasmedicaspuertoasis@hotmail.com', 'SI', 'SANDRA PATRICIA SOLARTE TRUJILLO', 4, 1, 2, 4),
	('8656800673', 'CLÍNICA ESPECIALIZADA DEL SUR SAS', '900719292', 'Carrera 25 Nº 30B-48 B/El Recreo junto a la cancha', '3166976942', 'ipsangelfelipe@gmail.com', 'SI', 'SERGIO LUIS LOPEZ ZEQUEIRA', 1, 1, 2, 4),
	('8656800674', 'ISABEL CRISTINA VELEZ OBANDO', '1053772396', 'CARRERA 10 No 27A - 10', '3144474768 - 3136240106', 'odontologaicvo@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800675', 'HERNAN OMAR LINARES GUERRERO', '79455615', 'CALLE 11 No. 16-81', '4227883', 'hernanolg@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800683', 'HERNAN DARIO JOJOA RANGEL', '1053806722', 'calle 17A 24-55', '3142421655 - 3102627887', 'hernan.dario.rangel@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800705', 'karen paola narvaez quiñonez', '1130682162', 'Calle 11 No 23 - 69', '3112264011', 'karen0428_8@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800710', 'OPERACIONES INTEGRALES SAS', '900897873', 'cra 20 N 9 36 barrio centro', '4220445', 'crcconduasis@gmail.com', 'SI', 'VICTOR HUGO ENRIQUEZ ALVAREZ', 2, 1, 2, 4),
	('8656800711', 'Mayra Alexandra Vargas Escobar', '1123203010', 'Carrera 25 Manzana B casa No. 6', '3143229073', 'mayra.vargas1187@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800748', 'CORPORACION INFANCIA Y DESARROLLO-LA CID-', '830082544', 'FINCA LA LUPITA', '5202213', 'CIDJURIDICA@CID.ORG.CO', 'SI', 'JULIA ELSA SOLANO GUTIERREZ', 2, 1, 2, 4),
	('8656800754', 'FRAIDY MARCELA ANDRADE CHAPAL', '1053776866', 'CALLE 11 N°16-81 Diagonal COMFAMILIAR PTYO', '4227883-3116295589', 'maran_245@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800758', 'CLINICA ORTIZ S.A.S.', '901109588', 'CALLE 11A No.36-35', '3214016961', 'clinorsas@gmail.com', 'SI', 'JESSICA PAOLA CASTRILLON GOMEZ', 1, 1, 2, 4),
	('8656800759', 'CENTRO ESPECIALIZADO DE UROLOGIA PUERTO ASIS', '900422064', 'CRA 48 No. 10- 29', '3143560396', 'gerenciageneralceu@gmail.com', 'SI', 'GLORIA ESPERANZA SANCHEZ CASTRO', 1, 1, 2, 4),
	('8656800763', 'AMBVIDA S.A.S.', '901090955', 'Cra 24 N.15a-11 Barrio Obrero I', '3113952657', 'ambvidasas@gmail.com', 'SI', 'LORENZO FABIAN HERNANDEZ PAYOGUAJE', 4, 1, 2, 4),
	('8656800770', 'TOBAR ENCISO ALLAN FREDY', '98389962', 'CL 9 # 24-74 cs 202', '3125586008', 'ALLANTOBAR@GMAIL.COM', 'SI', '', 3, 2, 2, 4),
	('8656800772', 'SERIS IPS SAS', '901101268', 'CALLE 10 CRA 37 No. 10 - 25', '3174366977', 'gerencia1@seris.com.co', 'SI', 'DIEGO ANTONIO GARCIA CORTEZ', 1, 1, 2, 4),
	('8656800774', 'jhonatan andres ortega cabrera', '1123202887', 'calle 10 N 22-39', '3187645753', 'jhonatan_ocab@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800775', 'alexander wilmer ortega cabrera', '1123208263', 'CALLE 10 # 22-39', '3229469657', 'alex208263@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800788', 'AURELIO FERNANDO ACOSTA SOLARTE', '1123200514', 'CALLE 10 No.27-40', '3132759997', 'acostaaure7@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800789', 'Mary Luz Sevillano Figueroa', '69020777', 'Calle 10 Nº 22 - 49', '3224428390', 'odontomary06@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800792', 'Ivon Lorena Ballesteros Rojas', '1047370546', 'Calle 10 # 22 - 49', '3114844736', 'ivonlo_99@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800797', 'sulay andrea diaz santander', '1130608651', 'cra 20 calle 12 # 009', '3124494902', 'sulay.diaz86@hotmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800799', 'JESUS JOHN RONALD LASSO MOLINA', '12975221', 'CALLE 17 # 32-05', '3112823497', 'lassoronald12@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800800', 'Cristian Andres Velasquez Carmona', '1017170664', 'cra 20 calle 12 # 009', '3223914918', 'cristian.velasquez48@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800803', 'JESÚS SEBASTIÁN JURADO SOLARTE', '1013643873', 'CALLE 10 #22 49', '3015957331', 'gerencia.opticajs@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800813', 'Hospital de Alta Complejidad del Putumayo S.A.S ZOMAC', '901201887', 'CRA 48 No 10-29', '3158868640', 'gerencia@hacputumayo.com.co', 'SI', 'JHON JAIRO BELTRAN SUAREZ', 1, 1, 2, 4),
	('8656800819', 'IPS DE LOS ESPECIALISTAS S.A.S.', '901251736', 'CARRERA 29 No. 9-44 BARRIO MODELO', '3007370822', 'calidad.ipsdelosespecialistas@gmail.com', 'SI', 'ALFREDO OROBIO TELLO', 1, 1, 2, 4),
	('8656800831', 'HORUS CLINIC SAS', '901048394', 'CALLE 10 N. 22-49', '3123714309 / 3155283580', 'horusclinic.so@gmail.com', 'SI', 'GENNY ELISABETH DELGADO MORALES', 1, 1, 2, 4),
	('8656800840', 'IPS SAN MIGUEL ARCANGEL PS SAS', '901378491', 'CR 37 N 9-62 BARRIO LOS CHIPAROS', '3144358909', 'ipssanmiguelarcangelps@gmail.com', 'SI', 'CARLOS EDUAR PARRA QUIBANO', 1, 1, 2, 4),
	('8656800846', 'PRESERVAR DEL SUR S.A.S ZOMAC', '901348862', 'Barrio Jorge Eliecer Gaitan LT 4 MZ C.', '3223914918', 'preservardelsur@gmail.com', 'SI', 'JHENNY MAGALY BETANCOURTH VALLEJO', 1, 1, 2, 4),
	('8656800857', 'MARIA DE LOS ANGELES PORTILLO BASTIDAS', '1087026785', 'Barrio Obrero', '3108315941', 'mariaportillobfisioterapia@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656800861', 'NEFROUROS MOM SAS', '900123612', 'CARRERA 48 10 29 CIUDAD LEGUIZAMO', '3229068739', 'gerenciapuertoasis@nefrouros.net', 'SI', 'ANGELICA MARIA PERDOMO ALVAREZ', 1, 1, 2, 4),
	('8656800884', 'SHIRLEY ROCIO ROSAS SANTANDER', '69020276', 'CASA # 6 DETRAS DEL AEROPUERTO', '3222317933', 'shirlyrosassantander@gmail.com', 'SI', '', 3, 2, 2, 4),
	('8656900199', 'E.S.E. HOSPITAL ALCIDES JIMÉNEZ', '846001669', 'BARRIO LA ESPERANZA', '3214529693', 'esealcidesjimenez@yahoo.es', 'SI', 'ANA MILENA MORA MORENO', 1, 1, 1, 5),
	('8656900900', 'Harold Jonatan Acosta Obando', '75101675', 'carra 5', '312659702', 'hjonatan1984@gmail.com', 'SI', '', 3, 2, 2, 5),
	('8657100005', 'EMPRESA SOCIAL DEL ESTADO HOSPITAL JORGE JULIO GUZMAN', '846003357', 'Barrio Los Prados - Vía Puerto Rosario', '3142654488 3205030390', 'hospital@esejorgejulioguzman.gov.co', 'SI', 'DERLIS CAICEDO TRIANA', 1, 1, 1, 6),
	('8657100088', 'UNION DE PROMOTORES POR LA SALUD LTDA "UPROSALUD LTDA"', '846001582', 'PUERTO GUZMAN', '3124314215-3176572144', 'uprosalud@gmail.com', 'SI', 'RUBICINTIA BUSUY GUALDRON', 1, 1, 2, 6),
	('8657300185', 'ESE HOSPITAL MARIA ANGELINES DE II NIVEL DE ATENCION', '846000678', 'KILOMETRO 1 VIA AEROPUERTO', '5634144', 'ipsmangelines@yahoo.es', 'SI', 'ANA MARILYN MACIAS CHECA', 1, 1, 1, 7),
	('8657300615', 'RODRIGO ANIBAL RUIZ BARON', '19488845', 'carrera 2 entre calle 9 y 10', '3115110665', 'dentilife_2008@hotmail.com', 'SI', '', 3, 2, 2, 7),
	('8657300885', 'Marjorie Ramos Salcedo', '52693626', 'Base Naval Puerto Leguízamo Edificio Cabrestante 401', '3103413778', 'marjorieramossalcedo@gmail.com', 'SI', '', 3, 2, 2, 7),
	('8674900062', 'ADRIANA LIZBETH CHAMORRO BUCHELI', '52265096', 'KR 14 No. 15-54', '098 4260606', 'adrichamorro@hotmail.es', 'SI', 'ADRIANA LIZBETH CHAMORRO BUCHELI', 3, 2, 2, 11),
	('8674900063', 'SANDRA PATRICIA GONZALEZ VALLEJO', '41181661', 'Cl 16 N° 14-45', '4260138', 'laboratoriosagov@hotmail.com', 'SI', 'SANDRA PATRICIA GONZALES VALLEJO', 3, 2, 2, 11),
	('8674900065', 'GUILLERMO HERNAN PANTOJA CEBALLOS', '5350323', 'CR 14 No. 16 - 41', '3115325779', 'dr-hernanpantoja@hotmail.com', 'SI', 'GUILLERMO HERNÁN PANTOJA CEBALLOS', 3, 2, 2, 11),
	('8674900066', 'ASOCIACION IPS INDIGENA INGA KAMENTSA', '846001214', 'CALLE 15 Nº15-69 Barrio Recreo', '4260460', 'ipsingakamentsa@gmail.com', 'SI', 'DAYRA PATRICIA LASSO JACANAMEJOY', 1, 1, 2, 11),
	('8674900074', 'LUIS CARLOS BASTIDAS VEGA', '12978707', 'CL 17 N° 15 -52', '4260666', 'luiscbv5@hotmail.com', 'SI', 'LUIS CARLOS BASTIDAS VEGA', 3, 2, 2, 11),
	('8674900317', 'IPS PREVENIR SIBUNDOY EU', '900219717', 'CALLE 17 # 14-57', '4260301', 'ips.prevenir.eu@hotmail.com', 'SI', 'CARLOS HERNAN BETANCOURT GUZMAN', 1, 1, 2, 11),
	('8674900390', 'YORMARY YANETSY LUNA BURBANO', '41182441', 'calle 16 N° 19 - 193 ESQUINA', '3113950391', 'c.odontoesteticalunab@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900611', 'JORGE LUIS MOLINA MEJIA', '77032509', 'CRA. 14 No. 15-58', '3006116234', 'chvallenato@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900645', 'REHABILITAR CIRP S.A.S', '900597873', 'crr 16N 15 60', '4260540', 'rehabilitarcirp@gmail.com', 'SI', 'KAREN YAMILETH PERAFAN GOMEZ', 1, 1, 2, 11),
	('8674900685', 'IPS ESPAÑA ORTIZ LIMITADA', '900360970', 'carrera18 con calle13 esquina', '3113036231', 'mediguay@hotmail.com', 'SI', 'Jose Diomedes España Ortiz', 1, 1, 2, 11),
	('8674900696', 'I.P.S. CENTRO DE REHABILITACION INTEGRAL SAOMY S.A.S', '900814635', 'CALLE 16 N° 22-34 B/ EL CEDRO', '3113158103', 'saomy2015@hotmail.com', 'SI', 'YONY FRANCISCO ERAZO GUERRERO', 1, 1, 2, 11),
	('8674900715', 'CLAUDIA ROCIO ROJAS BENAVIDES', '41181091', 'CLL15 19-25', '3137034026', 'co-rociorojas@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900735', 'UNIDAD DE SERVICIOS ESPECIALIZADOS SAS', '900951548', 'CARRERA 14 No. 16 - 30', '3142987199', 'usesalud@hotmail.com', 'SI', 'CARLO ANTONIO PISCIOTTI PUCCINI', 1, 1, 2, 11),
	('8674900753', 'Vanessa Reyes Muñoz', '63546538', 'calle 16 No. 16 -72', '3107877193', 'vareyesm1@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900757', 'MARIA CAMILA RUALES CEBALLOS', '1120217401', 'CALLE 16 #19-37', '3146496059', 'camiruales29@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900766', 'BENAVIDES REYNA IVAN DARIO', '97473002', 'CALLE 17 No. 14-57', '4260301 - 3105542169', 'medicoputumayo@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900784', 'JOSÉ AZAEL ORTEGA MITICANOY', '97470641', 'VEREDA SAGRADO CORAZÓN', '3147917481', 'ortegamja@yahoo.es', 'SI', '', 3, 2, 2, 11),
	('8674900785', 'Juan Carlos Alvarez lopez', '12138320', 'Calle 16 N° 19 -431 el cedro', '3182219189', 'radioterapiajc@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900793', 'IPS MED&HOUSE', '901204210', 'CALLE 14 No. 15-16', '3144437836 - 3124975005', 'medhousesibundoy@gmail.com', 'SI', 'GLORIA ELENA LOPEZ ESPAÑA', 1, 1, 2, 11),
	('8674900794', 'IPS ESPECIALIZADA DEL PUEBLO CAMENTSA BIYA S.A.S.', '901104262', 'CALLE 16 # 19-431 BARRIO EL CEDRO', '3235856039', 'ipscamentsabiya@gmail.com', 'SI', 'SEGUNDO SILVESTRE CHINDOY JUAGIBIOY', 1, 1, 2, 11),
	('8674900814', 'SANDRA MARCELA DELGADO RENZA', '53122748', 'Calle 17 N. 14-51', '3113825844', 'delrenza24@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900841', 'Richard Fernando Narvaez Chaves', '1085277561', 'CALLE 16 #19-37', '3146496059', 'richardnarvaez345@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900843', 'MERY HELEN DEL CASTILLO PAZOS', '36754313', 'CARRERA 17 No 15 - 62', '3122249893', 'meryhelendelcastillo@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900844', 'Graciela Enriqueta Bravo Urbano', '27535329', 'CALLE 15 19-25', '3188702095', 'gracielabravou@hotmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900856', 'Erika Natalia Tobar Zambrano', '1122785324', 'CALLE 13 16-44', '3122192604', 'erikanatalia115@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900883', 'ALIRIO FLORIBERTO SOLARTE ESPAÑA', '16076965', 'Calle 15 carrera 16-17', '3127575067', 'alirio8308@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8674900886', 'Elkin Salvador Rosero Quintero', '18124439', 'carrera 17 No 16 - 80', '3155474148', 'elroqui15@gmail.com', 'SI', '', 3, 2, 2, 11),
	('8675500824', 'Fany Estela Ortiz Chamorro', '69055497', 'Crra 8 No. 6-30 - Calle Principal - Barrio:Los Pinos', '3176348744', 'orchafa@hotmail.com', 'SI', '', 3, 2, 2, 8),
	('8675700021', 'ESE HOSPITAL FRONTERIZO LA DORADA', '846002309', 'CRA 7 N° 1 - 36', '3134821413 - 3174276879', 'hfronterizop@yahoo.es', 'SI', 'JINA ANDREA BELALCAZAR FLOREZ', 1, 1, 1, 9),
	('8675700616', 'OLGA LUCIA CUASQUER POSOS', '1085245231', 'CALLE 6 # 5-28', '3103498710', 'olga-lu-13@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700765', 'douglas alberto agredo urrea', '1130626498', 'cra 5 4-25', '3216739024', 'odontologialadorada@gmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700781', 'RUBEN DARIO CABARCAS GONZALEZ', '1047381634', 'carrera 5 calle 6 barrio centro', '3123138620', 'claudia040488@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700811', 'JOSE EDUARDO DE AVILA TORRES', '1082247440', 'Calle 5 No. 4-23', '3004107954', 'josedavilatorres@gmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700834', 'Sandra Elizabeth Chamorro Arcos', '1085917801', 'Via principal calle 5 diagonal a stihl', '3102623174', 'sandry_cham@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8675700838', 'IPS LA DORADA S.A.S ZOMAC', '901372032', 'BARRIO LOS PRADOS', '3102714354', 'ipsladoradasas@gmail.com', 'SI', 'FERNEY OSWALDO CANTICUS ORTIZ', 1, 1, 2, 9),
	('8675700895', 'GLORIA STEPHANNY ORTEGA PANTOJA', '1085274937', 'CRA 6 NUMERO 5-12', '3183397693', 'stepphyortega@hotmail.com', 'SI', '', 3, 2, 2, 9),
	('8676000804', 'ANDREA ELIZABETH ENRIQUEZ AROS', '1121507841', 'CALLE 6 N° 4-23', '3104918753', 'andreaenriquez.0915@gmail.com', 'SI', '', 3, 2, 2, 10),
	('8686500010', 'ESE HOSPITAL SAGRADO CORAZON DE JESUS', '846000471', 'BARRIO LA PARKE VIA EL ROSAL', '4287089', 'gerencia@correo.hospitalhormiga.gov.co', 'SI', 'ESTEBAN LOPEZ BURBANO', 1, 1, 1, 12),
	('8686500142', 'MAGDIEL AMADO MARTINEZ', '79313725', 'CRA 6 No. 3-11 b- el recreo', '3133487510', 'magdielamado@outlook.com', 'SI', '', 3, 2, 2, 12),
	('8686500260', 'CLINICA SAN JORGE LA HORMIGA S.A.S', '900115211', 'KR 6 9-38', '984287127', 'clinicasanjorge_93@yahoo.com', 'SI', 'HAROLD LUIS PANTOJA ZAMBRANO', 1, 1, 2, 12),
	('8686500359', 'HUGO JOSE TORRES HURTADO', '12977827', 'CR 6 Nº 7-06', '3112192944', 'LESOR74@HOTMAIL.COM', 'SI', '', 3, 2, 2, 12),
	('8686500603', 'CENTRO MEDICO CRECER IPS S.A.S.', '900460676', 'CARRERA 4 N 6-18 BARRIO LA AMISTAD', '4287067', 'creceripsputumayo@outlook.com', 'SI', 'LUIS CARLOS ORTEGA TORRES', 1, 1, 2, 12),
	('8686500605', 'Diana Maria España Calderon', '25278586', 'Calle 10 No 5_12', '3203040607', 'diana_espaqa@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500618', 'INSTITUCIÓN PRESTADORA DE SERVICIOS CENTRO INTEGRAL DE REHABILITACIÓN DEL PUTUMAYO LTDA.', '900501715', 'Calle 8 N° 2A-04', '3212468575-3115414313', 'cirepips@hotmail.com', 'SI', 'DANIELA ISABEL JARAMILLO CHAMORRO', 1, 1, 2, 12),
	('8686500619', 'EDY ELIZABETH MORA ROSERO', '27474807', 'cra 4- calle 8 esquina Barrio las Americas 2 piso', '3113549534', 'elizabethmorarosero@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500722', 'Maria Patricia Benavides Ortega', '52621725', 'Cra 8 5-71', '3104810766', 'mapato33@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500725', 'Oscar Arlex Cortes Bermudez', '1130944862', 'Carrera 8 5-71', '3104810766', 'oscarcortes123@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500768', 'diego fernando medina morales', '1118283386', 'carrera 6 # 6 - 31', '3124809068', 'diego_fernando_medina@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500777', 'Jimmy Alexander Burbano Álvarez', '18156020', 'carrera 8# 07-79', '3214915203', 'jimbo_1480@hotmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500812', 'JUAN JESUS ZUÑIGA QUINTERO', '1102852787', 'Calle Principal Frente a Secretaria de Transito', '3046206585', 'Drjuanzq@gmail.com', 'SI', '', 3, 2, 2, 12),
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
	('8686500888', 'angela maria villota yama', '1087674521', 'cra 6 no. 5-06', '3102623174', 'odontologiadorada20@gmail.com', 'SI', '', 3, 2, 2, 12),
	('8686500889', 'CRC DOBLE VIA SAS', '901076505', 'LOTE 99 MAZ 13 BR EL PROGRESO', '3112327600', 'CRCDOBLEVIA@GMAIL.COM', 'SI', 'JOSE GUILLERMO GUERRERO VELANDIA', 2, 1, 2, 12),
	('8688500078', 'ZENAIDA MARGARITA ABASOLO GUERRERO', '27167208', 'BARRIO FATIMA Cra. 5 No. 5-18 FRENTE AL Juzgado', '3115956792', 'villadenconsultorio@gmail.com', 'SI', 'ZENAIDA MARGARITA ABASOLO GUERRERO', 3, 2, 2, 13),
	('8688500160', 'ROSA ELENA CHAMORRO VELASCO', '41170423', 'CALLE 6 Nro. 2A-21', '3102857927', 'rosachamorrodra@yahoo.es', 'SI', '', 3, 2, 2, 13),
	('8688500198', 'E.S.E HOSPITAL SAN GABRIEL ARCANGEL', '846001620', 'BARRIO JUAN PABLO II', '4284585', 'esehvilla2004@yahoo.es', 'SI', 'CRISTINA DEL CARMEN ROSERO BERMEO', 1, 1, 1, 13),
	('8688500228', 'IPS PROSVISALUD EU', '900071373', 'Calle 3 No. 7-47 barrio progreso', '3186156524-3144367679-3186156525', 'ipspvseu@gmail.com', 'SI', 'CONSTANZA VIVIANA TORRES CANO', 1, 1, 2, 13),
	('8688500344', 'GRAN TIERRA ENERGY COLOMBIA LTD', '860516431', 'VEREDA CAFELINA -Campamento Costayaco', '+ 57(1) 6585757 - 3204903050', 'germanmontana@grantierra.com', 'SI', 'MANUEL ANTONIO BUITRAGO VIVES', 2, 1, 2, 13),
	('8688500586', 'San Jose Ips Putumayo SAS', '900423816', 'CRA3 # 7-48 Barrio Obrero', '3229469787', 'ips.sanjosevilla@gmail.com', 'SI', 'PABLO FAVIAN GOMEZ BENITEZ', 1, 1, 2, 13),
	('8688500633', 'EIBAR CAMILO CHAMORRO VELASCO', '1127071246', 'BARRIO OBRERO calle 6 numero 2A-21', '3133967272', 'kamili_861127@hotmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500694', 'Yudy Liset Chamorro', '41171161', 'BARRIO OBRERO CALLE 6 NUMERO 2A-21', '319-3922702- 320-3712101', 'dchamorro40@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500700', 'Joana Margareth Baleta Ovalle', '53016271', 'Calle 1ra Barrio el Progreso', '3112648813', 'joitain@hotmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500719', 'Beatriz Eugenia Giraldo Rodriguez', '38889722', 'carrera 2 N°5-07', '3142780488-3104682556', 'odontologiaeoraldent@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500751', 'Luz Angela Rojas Pipicano', '1124851648', 'Cra 2 n° 5 - 07', '3146606176', 'luza_2017@hotmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500762', 'MOHAMED ENRIQUE RODRIGUEZ SALCEDO', '1082869639', 'KRA 2 NUMERO 5-07', '3004470478 3218087215', 'MOHAMEDRODRIGUEZ@GMAIL.COM', 'SI', '', 3, 2, 2, 13),
	('8688500791', 'LISETH SORANY MELO ROSERO', '1085273580', 'Cra. 5 6-18', '3105940836', 'odontologia.soranymr@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500802', 'VIVIANA ANDREA BENAVIDES CASTRILLON', '1127073068', 'CALLE 1-FRENTE PLAZA DE MERCADO', '3212492844', 'vivianaodonto1156@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500810', 'Terminal de Transportes Villagarzon S.A.', '900431071', 'Predio la gaitana vereda el porvenir', '3118508561', 'terminalvillagarzon@hotmail.com', 'SI', 'Mayerling Chala Trujillo', 2, 1, 2, 13),
	('8688500851', 'yisel yurani benavides bacca', '1127074783', 'calle 1 #5-1B', '3124470664', 'odontologiamident@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500868', 'Bibiana Albarracin Rodriguez', '52767979', 'Barrio Centro Calle 6 Cra 7a Esquina', '3153043160', 'andreswm2013@hotmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500875', 'ANDREA NATALIA CARDONA CERON', '1125180254', 'KR 9 # 68', '3143887700', 'imagenesdiagnosticas.sur@gmail.com', 'SI', '', 3, 2, 2, 13),
	('8688500897', 'JEINNY MARCELA QUINTERO ANGARITA', '1098688737', 'CARRERA 6 N°2A-21', '3046419662', 'Dramarcelaquintero@gmail.com', 'SI', '', 3, 2, 2, 13);

-- Volcando estructura para tabla sehab.representante
DROP TABLE IF EXISTS `representante`;
CREATE TABLE IF NOT EXISTS `representante` (
  `rep_id` int NOT NULL AUTO_INCREMENT,
  `rep_nombre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`rep_id`),
  UNIQUE KEY `IDX_aed5784245053b2130faa347ea` (`rep_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.representante: ~0 rows (aproximadamente)

-- Volcando estructura para tabla sehab.rol
DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `rol_id` int NOT NULL AUTO_INCREMENT,
  `rol_nombre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`rol_id`),
  UNIQUE KEY `IDX_fb0a33a88601d41f85c16347d8` (`rol_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.rol: ~5 rows (aproximadamente)
INSERT INTO `rol` (`rol_id`, `rol_nombre`) VALUES
	(1, 'admin'),
	(4, 'pamec'),
	(5, 'res'),
	(2, 'sic'),
	(3, 'sp');

-- Volcando estructura para tabla sehab.tipo
DROP TABLE IF EXISTS `tipo`;
CREATE TABLE IF NOT EXISTS `tipo` (
  `tip_id` int NOT NULL AUTO_INCREMENT,
  `tip_nombre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`tip_id`),
  UNIQUE KEY `IDX_23cf3478ab6bf36a591a23128c` (`tip_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.tipo: ~2 rows (aproximadamente)
INSERT INTO `tipo` (`tip_id`, `tip_nombre`) VALUES
	(2, 'Privada'),
	(1, 'Pública');

-- Volcando estructura para tabla sehab.usuario
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `usu_id` int NOT NULL AUTO_INCREMENT,
  `usu_nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `usu_apellido` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `usu_email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `usu_nombreUsuario` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `usu_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `usu_creado` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `usu_estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`usu_id`),
  UNIQUE KEY `IDX_0f4c528e376c08416b3e945b77` (`usu_email`),
  UNIQUE KEY `IDX_45addd18b207ecaf925e668088` (`usu_nombreUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.usuario: ~5 rows (aproximadamente)
INSERT INTO `usuario` (`usu_id`, `usu_nombre`, `usu_apellido`, `usu_email`, `usu_nombreUsuario`, `usu_password`, `usu_creado`, `usu_estado`) VALUES
	(1, 'Edward Samir', 'Alegria Salazar', 'alegria.samir@yahoo.com', 'samirjr', '$2b$10$o15DGLMckezm4kc7zkPpxuY9M1CoRd3EkdCCZK0viuVjGUjs3CUL.', '2022-10-18 23:29:29.627863', 'true'),
	(4, 'Mario Andres', 'Salazar Salazar', 'andres123@hotmail.com', 'andres', '$2b$10$mqc2M7iEE1OSdja6oGNLP.ArJW4muvu5pLHYz8Z5F24Y5bj0DoLX.', '2022-10-24 16:09:50.778499', 'true'),
	(15, 'Rocio', 'Salazar', 'rocio@hotmail.com', 'rocio', '$2b$10$8NI19CjlEBqZxZRo4MH.Y.VazKkYpehiALqIvDqTRDxrShJM/riwK', '2022-11-09 14:01:13.345543', 'true'),
	(17, 'Aida Luciaaa', 'Salazar Salazar', 'aida@hotmail.com', 'aida', '$2b$10$Gw5/x1ovno5wkSsGg0BHD.J.g8vi4E8JMOjKBgDKuHlMdpj6Lp4Z2', '2022-11-09 20:40:10.755234', 'true'),
	(40, 'Tatiana', 'Delgado', 'tatiana@gmail.com', 'tatiana', '$2b$10$PS2HZsQZRxwdn36rwKqlg.BRjlxasasgc2dQ/WmMHi5GTbonX5GGa', '2022-11-23 14:55:02.422098', 'true');

-- Volcando estructura para tabla sehab.usuario_rol
DROP TABLE IF EXISTS `usuario_rol`;
CREATE TABLE IF NOT EXISTS `usuario_rol` (
  `usuario_id` int NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`,`rol_id`),
  KEY `IDX_29e9a9079c7ba01c1b301cf555` (`usuario_id`),
  KEY `IDX_ac8911cd54a61461c992654140` (`rol_id`),
  CONSTRAINT `FK_29e9a9079c7ba01c1b301cf5555` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ac8911cd54a61461c9926541401` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla sehab.usuario_rol: ~9 rows (aproximadamente)
INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`) VALUES
	(1, 1),
	(1, 2),
	(1, 3),
	(1, 4),
	(1, 5),
	(4, 3),
	(15, 2),
	(17, 4),
	(40, 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
prestadorusuario