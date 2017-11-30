/*
SQLyog Community v12.3.3 (64 bit)
MySQL - 5.7.14-log : Database - gdes_pipeline
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`gdes_pipeline` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `gdes_pipeline`;

/*Table structure for table `areas` */

DROP TABLE IF EXISTS `areas`;

CREATE TABLE `areas` (
  `areaId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único de área',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del área',
  PRIMARY KEY (`areaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Áreas a las que pertenecerá la oferta';

/*Table structure for table `centros` */

DROP TABLE IF EXISTS `centros`;

CREATE TABLE `centros` (
  `centroId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del centro',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del centro',
  PRIMARY KEY (`centroId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Centros establecidos';

/*Table structure for table `empresas` */

DROP TABLE IF EXISTS `empresas`;

CREATE TABLE `empresas` (
  `empresaId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único de la empresa',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre de la empresa',
  PRIMARY KEY (`empresaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Empresas del grupo';

/*Table structure for table `estados` */

DROP TABLE IF EXISTS `estados`;

CREATE TABLE `estados` (
  `estadoId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador interno del estado',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del estado',
  PRIMARY KEY (`estadoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Estados en los que se puede encontrar una oferta';

/*Table structure for table `grupos_actividades` */

DROP TABLE IF EXISTS `grupos_actividades`;

CREATE TABLE `grupos_actividades` (
  `grupoActividadId` int(11) NOT NULL COMMENT 'Identificador único del grupo de actividad',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del grupo de actividad',
  PRIMARY KEY (`grupoActividadId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Agrupaciones de tipos de actividad';

/*Table structure for table `grupos_usuarios` */

DROP TABLE IF EXISTS `grupos_usuarios`;

CREATE TABLE `grupos_usuarios` (
  `grupoUsuarioId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único del grupo de usuario',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del grupo',
  PRIMARY KEY (`grupoUsuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Esta es la tabla que contiene los grupos de usuarios';

/*Table structure for table `ofertas` */

DROP TABLE IF EXISTS `ofertas`;

CREATE TABLE `ofertas` (
  `ofertaId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único del tipo de oferta',
  `numeroOferta` varchar(255) DEFAULT NULL COMMENT 'Número de la oferta',
  `fechaOferta` date DEFAULT NULL COMMENT 'Fecha original de la oferta',
  `fechaLimiteProyecto` date DEFAULT NULL COMMENT 'Fecha estimada para el proyecto ofertado',
  `fechaAceptacion` date DEFAULT NULL COMMENT 'Fecha en que la oferta pasó al estado de aceptada',
  `importePresupuesto` decimal(12,2) DEFAULT NULL COMMENT 'Importe presupuestado',
  `importePresupuestoDivisa` decimal(12,2) DEFAULT NULL COMMENT 'Importe presupuestado en otra moneda',
  `codigoDivisa` varchar(255) DEFAULT NULL COMMENT 'Código de la divisa de la otra moneda (ISO 4217)',
  `importeInversion` decimal(12,2) DEFAULT NULL COMMENT 'Importe de la inversión',
  `importeRetorno` decimal(12,2) DEFAULT NULL COMMENT 'Importe retorno de la inversión',
  `descripcion` text COMMENT 'Descripción del servicio',
  `observaciones` text COMMENT 'Observaciones de la oferta',
  `tiempoEmpleado` int(11) DEFAULT NULL COMMENT 'Tiempo empleado (horas)',
  `autorizaciones` text COMMENT 'Campo libre para mostrar autorizaciones',
  `numeroPedido` varchar(255) DEFAULT NULL COMMENT 'Número de pedido asociado a la oferta',
  `personaContacto` varchar(255) DEFAULT NULL COMMENT 'Persona de contacto en el cliente.',
  `empresaId` int(11) DEFAULT NULL COMMENT 'Empresa relacionada',
  `proyectoId` int(11) DEFAULT NULL COMMENT 'Proyecto relacionado',
  `areaId` int(11) DEFAULT NULL COMMENT 'Área relacionada',
  `tipoActividadId` int(11) DEFAULT NULL COMMENT 'Tipo de actividad relacionada',
  `paisId` int(11) DEFAULT NULL COMMENT 'Pais relacionado',
  `estadoId` int(11) DEFAULT NULL COMMENT 'Estado de la oferta',
  `tipoSoporteId` int(11) DEFAULT NULL COMMENT 'Tipo soporte relacionado',
  `reponsableId` int(11) DEFAULT NULL COMMENT 'Responsable de GDES',
  `centroId` int(11) DEFAULT NULL COMMENT 'Centro relacionado',
  PRIMARY KEY (`ofertaId`),
  KEY `oft_proyecto` (`proyectoId`),
  KEY `oft_area` (`areaId`),
  KEY `oft_tipo_actividad` (`tipoActividadId`),
  KEY `oft_pais` (`paisId`),
  KEY `oft_estado` (`estadoId`),
  KEY `oft_tipo_soporte` (`tipoSoporteId`),
  KEY `oft_responsable` (`reponsableId`),
  KEY `oft_centros` (`centroId`),
  KEY `oft_empresa` (`empresaId`),
  CONSTRAINT `oft_area` FOREIGN KEY (`areaId`) REFERENCES `areas` (`areaId`),
  CONSTRAINT `oft_centros` FOREIGN KEY (`centroId`) REFERENCES `centros` (`centroId`),
  CONSTRAINT `oft_empresa` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`empresaId`),
  CONSTRAINT `oft_estado` FOREIGN KEY (`estadoId`) REFERENCES `estados` (`estadoId`),
  CONSTRAINT `oft_pais` FOREIGN KEY (`paisId`) REFERENCES `paises` (`paisId`),
  CONSTRAINT `oft_proyecto` FOREIGN KEY (`proyectoId`) REFERENCES `proyectos` (`proyectoId`),
  CONSTRAINT `oft_responsable` FOREIGN KEY (`reponsableId`) REFERENCES `responsables` (`responsableId`),
  CONSTRAINT `oft_tipo_actividad` FOREIGN KEY (`tipoActividadId`) REFERENCES `tipos_actividades` (`tipoActividadId`),
  CONSTRAINT `oft_tipo_soporte` FOREIGN KEY (`tipoSoporteId`) REFERENCES `tipos_soporte` (`tipoSoporteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla general de ofertas';

/*Table structure for table `paises` */

DROP TABLE IF EXISTS `paises`;

CREATE TABLE `paises` (
  `paisId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador interdo de país',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del país',
  `codPais` varchar(255) DEFAULT NULL COMMENT 'Código de país según ISO 3661-1/2',
  PRIMARY KEY (`paisId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla de paises';

/*Table structure for table `proyectos` */

DROP TABLE IF EXISTS `proyectos`;

CREATE TABLE `proyectos` (
  `proyectoId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de proyecto',
  `nombre` varchar(255) DEFAULT NULL COMMENT 'Nombre del proyecto',
  `referencia` varchar(255) DEFAULT NULL COMMENT 'Referencia de proyecto',
  `numeroProyecto` int(11) DEFAULT NULL COMMENT 'Número de proyecto en GDES',
  PRIMARY KEY (`proyectoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Proyectos a los que pertenecen las ofertas';

/*Table structure for table `responsables` */

DROP TABLE IF EXISTS `responsables`;

CREATE TABLE `responsables` (
  `responsableId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de responsable',
  `userId` int(11) DEFAULT NULL COMMENT 'Usuario relacionado',
  `nombre` varchar(255) DEFAULT NULL COMMENT 'Nombre del responsable',
  PRIMARY KEY (`responsableId`),
  KEY `responsables_usuarios` (`userId`),
  CONSTRAINT `responsables_usuarios` FOREIGN KEY (`userId`) REFERENCES `usuarios` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Responsables de la oferta para GDES';

/*Table structure for table `tipos_actividades` */

DROP TABLE IF EXISTS `tipos_actividades`;

CREATE TABLE `tipos_actividades` (
  `tipoActividadId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único del tipo de actividad',
  `grupoActividadId` int(11) DEFAULT NULL COMMENT 'Grupo al que pertenece el tipo',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del tipo de actividad',
  PRIMARY KEY (`tipoActividadId`),
  KEY `tipos_actividades_grupos` (`grupoActividadId`),
  CONSTRAINT `tipos_actividades_grupos` FOREIGN KEY (`grupoActividadId`) REFERENCES `grupos_actividades` (`grupoActividadId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tipos de actividades';

/*Table structure for table `tipos_soporte` */

DROP TABLE IF EXISTS `tipos_soporte`;

CREATE TABLE `tipos_soporte` (
  `tipoSoporteId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador interno del tipo de soporte',
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del tipo de soporte',
  PRIMARY KEY (`tipoSoporteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tipos de soporte para la oferta';

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `usuarioId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único del usuario',
  `grupoUsuarioId` int(11) DEFAULT NULL COMMENT 'Grupo al que pertenece',
  `nombre` varchar(255) DEFAULT NULL COMMENT 'Nombre del usuario',
  `codigoIdioma` varchar(255) DEFAULT NULL COMMENT 'Codigo de idioma según 639-1',
  PRIMARY KEY (`usuarioId`),
  KEY `usuarios_grupos` (`grupoUsuarioId`),
  CONSTRAINT `usuarios_grupos` FOREIGN KEY (`grupoUsuarioId`) REFERENCES `grupos_usuarios` (`grupoUsuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla de usuarios. Todos los usuarios pertenecen a un grupo';

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
