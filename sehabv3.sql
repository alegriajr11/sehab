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
CREATE DATABASE IF NOT EXISTS `sehab` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sehab`;

-- Volcando estructura para tabla sehab.actividad
CREATE TABLE IF NOT EXISTS `actividad` (
  `act_id` int NOT NULL AUTO_INCREMENT,
  `act_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `actPrestadorPreCodHabilitacion` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`act_id`),
  KEY `FK_7b841a0cf65bdb473e5c242a0ed` (`actPrestadorPreCodHabilitacion`),
  CONSTRAINT `FK_7b841a0cf65bdb473e5c242a0ed` FOREIGN KEY (`actPrestadorPreCodHabilitacion`) REFERENCES `prestador` (`pre_cod_habilitacion`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.clase
CREATE TABLE IF NOT EXISTS `clase` (
  `clas_id` int NOT NULL AUTO_INCREMENT,
  `clas_nombre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`clas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.clasificacion
CREATE TABLE IF NOT EXISTS `clasificacion` (
  `cla_id` int NOT NULL AUTO_INCREMENT,
  `cla_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`cla_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.criterioind
CREATE TABLE IF NOT EXISTS `criterioind` (
  `cri_id` int NOT NULL AUTO_INCREMENT,
  `cri_nombre` varchar(350) COLLATE utf8mb4_unicode_ci NOT NULL,
  `etaItemEtaId` int DEFAULT NULL,
  `cri_verificacion` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`cri_id`),
  KEY `FK_17d0f1724aa96af7118a4f4d44b` (`etaItemEtaId`),
  CONSTRAINT `FK_17d0f1724aa96af7118a4f4d44b` FOREIGN KEY (`etaItemEtaId`) REFERENCES `etapaind` (`eta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.criteriopam
CREATE TABLE IF NOT EXISTS `criteriopam` (
  `crip_id` int NOT NULL AUTO_INCREMENT,
  `cripActividadActId` int DEFAULT NULL,
  `crip_nombre` varchar(700) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`crip_id`),
  KEY `FK_6199af2fce493ec55dde52bdd4e` (`cripActividadActId`),
  CONSTRAINT `FK_6199af2fce493ec55dde52bdd4e` FOREIGN KEY (`cripActividadActId`) REFERENCES `actividad` (`act_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.criteriosic
CREATE TABLE IF NOT EXISTS `criteriosic` (
  `cri_id` int NOT NULL AUTO_INCREMENT,
  `cri_nombre` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`cri_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.criterio_ajuste
CREATE TABLE IF NOT EXISTS `criterio_ajuste` (
  `cri_aju_id` int NOT NULL AUTO_INCREMENT,
  `cri_aju_nombre` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cri_aju_verificacion` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `criAjuEvaEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`cri_aju_id`),
  KEY `FK_25d3098bc5505821cc783211277` (`criAjuEvaEvipsId`),
  CONSTRAINT `FK_25d3098bc5505821cc783211277` FOREIGN KEY (`criAjuEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.criterio_implementacion
CREATE TABLE IF NOT EXISTS `criterio_implementacion` (
  `cri_imp_id` int NOT NULL AUTO_INCREMENT,
  `cri_imp_nombre` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cri_imp_verificacion` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `criImpEvaEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`cri_imp_id`),
  KEY `FK_a226df9f79a2839ea92a58c627c` (`criImpEvaEvipsId`),
  CONSTRAINT `FK_a226df9f79a2839ea92a58c627c` FOREIGN KEY (`criImpEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.criterio_planeacion
CREATE TABLE IF NOT EXISTS `criterio_planeacion` (
  `cri_pla_id` int NOT NULL AUTO_INCREMENT,
  `cri_pla_nombre` varchar(620) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `criPlaEvaEvipsId` int DEFAULT NULL,
  `cri_pla_verificacion` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`cri_pla_id`),
  KEY `FK_8d6604e124f7b9d2256c0796a26` (`criPlaEvaEvipsId`),
  CONSTRAINT `FK_8d6604e124f7b9d2256c0796a26` FOREIGN KEY (`criPlaEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.criterio_verificacion
CREATE TABLE IF NOT EXISTS `criterio_verificacion` (
  `cri_ver_id` int NOT NULL AUTO_INCREMENT,
  `cri_ver_nombre` varchar(530) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cri_ver_verificacion` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `criVerEvaEvipsId` int DEFAULT NULL,
  PRIMARY KEY (`cri_ver_id`),
  KEY `FK_807e47344a9c743d41ef75af1e2` (`criVerEvaEvipsId`),
  CONSTRAINT `FK_807e47344a9c743d41ef75af1e2` FOREIGN KEY (`criVerEvaEvipsId`) REFERENCES `evaluacionips` (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.dominio
CREATE TABLE IF NOT EXISTS `dominio` (
  `dom_id` int NOT NULL AUTO_INCREMENT,
  `dom_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`dom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.dom_pre
CREATE TABLE IF NOT EXISTS `dom_pre` (
  `dom_pre_id` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_dom_id` int NOT NULL,
  PRIMARY KEY (`dom_pre_id`,`pre_dom_id`),
  KEY `IDX_d2bf7bc36ff3682ff8fc8f2581` (`dom_pre_id`),
  KEY `IDX_771ec445aaee4df9ad404892a2` (`pre_dom_id`),
  CONSTRAINT `FK_771ec445aaee4df9ad404892a26` FOREIGN KEY (`pre_dom_id`) REFERENCES `dominio` (`dom_id`),
  CONSTRAINT `FK_d2bf7bc36ff3682ff8fc8f2581c` FOREIGN KEY (`dom_pre_id`) REFERENCES `prestador` (`pre_cod_habilitacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.etapaind
CREATE TABLE IF NOT EXISTS `etapaind` (
  `eta_id` int NOT NULL AUTO_INCREMENT,
  `eta_nombre` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`eta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.evaips_pre
CREATE TABLE IF NOT EXISTS `evaips_pre` (
  `pre_eva_id` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `eva_pre_id` int NOT NULL,
  PRIMARY KEY (`pre_eva_id`,`eva_pre_id`),
  KEY `IDX_1a8f10d4f5c8ec13a992fc95f9` (`pre_eva_id`),
  KEY `IDX_1320d9fec484253d46111c4066` (`eva_pre_id`),
  CONSTRAINT `FK_1320d9fec484253d46111c40666` FOREIGN KEY (`eva_pre_id`) REFERENCES `evaluacionips` (`evips_id`),
  CONSTRAINT `FK_1a8f10d4f5c8ec13a992fc95f94` FOREIGN KEY (`pre_eva_id`) REFERENCES `prestador` (`pre_cod_habilitacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.evaluacionips
CREATE TABLE IF NOT EXISTS `evaluacionips` (
  `evips_id` int NOT NULL AUTO_INCREMENT,
  `evips_nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`evips_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.indicador
CREATE TABLE IF NOT EXISTS `indicador` (
  `ind_id` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ind_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `indDominioDomId` int DEFAULT NULL,
  PRIMARY KEY (`ind_id`),
  KEY `FK_59ace04d524d6eadda64abfd478` (`indDominioDomId`),
  CONSTRAINT `FK_59ace04d524d6eadda64abfd478` FOREIGN KEY (`indDominioDomId`) REFERENCES `dominio` (`dom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.ind_cri
CREATE TABLE IF NOT EXISTS `ind_cri` (
  `ind_cri_id` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cri_ind_id` int NOT NULL,
  PRIMARY KEY (`ind_cri_id`,`cri_ind_id`),
  KEY `IDX_fa3e5d3a736461d7c253729511` (`ind_cri_id`),
  KEY `IDX_ea4d4a50609cd4c7bb28e31523` (`cri_ind_id`),
  CONSTRAINT `FK_ea4d4a50609cd4c7bb28e315234` FOREIGN KEY (`cri_ind_id`) REFERENCES `criteriosic` (`cri_id`),
  CONSTRAINT `FK_fa3e5d3a736461d7c253729511c` FOREIGN KEY (`ind_cri_id`) REFERENCES `indicador` (`ind_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.item
CREATE TABLE IF NOT EXISTS `item` (
  `ite_id` int NOT NULL AUTO_INCREMENT,
  `ite_nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`ite_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.ite_eva
CREATE TABLE IF NOT EXISTS `ite_eva` (
  `ite_eva_id` int NOT NULL,
  `eva_ite_id` int NOT NULL,
  PRIMARY KEY (`ite_eva_id`,`eva_ite_id`),
  KEY `IDX_cc548b0f7f49130fd2abb819f4` (`ite_eva_id`),
  KEY `IDX_df9a2558ac4ddf0d2630deabc8` (`eva_ite_id`),
  CONSTRAINT `FK_cc548b0f7f49130fd2abb819f4b` FOREIGN KEY (`ite_eva_id`) REFERENCES `evaluacionips` (`evips_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_df9a2558ac4ddf0d2630deabc82` FOREIGN KEY (`eva_ite_id`) REFERENCES `item` (`ite_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.municipio
CREATE TABLE IF NOT EXISTS `municipio` (
  `mun_id` int NOT NULL AUTO_INCREMENT,
  `mun_nombre` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`mun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.prestador
CREATE TABLE IF NOT EXISTS `prestador` (
  `pre_cod_habilitacion` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_nit` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_direccion` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_telefono` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_habilitado` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pre_representante` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.rol
CREATE TABLE IF NOT EXISTS `rol` (
  `rol_id` int NOT NULL AUTO_INCREMENT,
  `rol_nombre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.tipo
CREATE TABLE IF NOT EXISTS `tipo` (
  `tip_id` int NOT NULL AUTO_INCREMENT,
  `tip_nombre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`tip_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `usu_id` int NOT NULL AUTO_INCREMENT,
  `usu_nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `usu_apellido` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `usu_email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `usu_nombreUsuario` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `usu_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `usu_creado` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `usu_estado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`usu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sehab.usuario_rol
CREATE TABLE IF NOT EXISTS `usuario_rol` (
  `usuario_id` int NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`,`rol_id`),
  KEY `IDX_29e9a9079c7ba01c1b301cf555` (`usuario_id`),
  KEY `IDX_ac8911cd54a61461c992654140` (`rol_id`),
  CONSTRAINT `FK_29e9a9079c7ba01c1b301cf5555` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ac8911cd54a61461c9926541401` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
