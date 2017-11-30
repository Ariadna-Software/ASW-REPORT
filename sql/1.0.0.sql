ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `ofertaSingular` BOOL DEFAULT FALSE NULL COMMENT 'Caracteriza esta oferta como singular' AFTER `tipoOfertaId`;
ALTER TABLE `gdes_pipeline`.`usuarios`   
  ADD COLUMN `verOfertasGrupo` BOOL DEFAULT FALSE NULL COMMENT 'Indica si el usuario puede ver ofertas de otros responsables pretenecientes a su grupo' AFTER `esAdministrador`;
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `periodo` VARCHAR(255) NULL COMMENT 'Periodo de la oferta' AFTER `ofertaSingular`;
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `fechaEntrega` DATE NULL COMMENT 'Fecha de entrega de la oferta' AFTER `periodo`;  
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `colaboradores` TEXT NULL COMMENT 'Asociaciones / colaboradores que participan en la oferta' AFTER `fechaEntrega`;  
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `margenContribucion` DECIMAL(5,2) NULL COMMENT 'Porcentaje de margen de contribución' AFTER `colaboradores`,
  ADD COLUMN `importeContribucion` DECIMAL(12,2) NULL COMMENT 'Importe contribución' AFTER `margenContribucion`;  

CREATE TABLE `gdes_pipeline`.`centros_establecidos`(  
  `centroEstablecidoId` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de centro establecido',
  `nombre` VARCHAR(255) COMMENT 'Nombre de centro establecido',
  PRIMARY KEY (`centroEstablecidoId`)
);
CREATE TABLE `gdes_pipeline`.`divisas`(  
  `divisaId` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de divisa',
  `nombre` VARCHAR(255) COMMENT 'Nombre de divisa',
  PRIMARY KEY (`divisaId`)
);
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `centroEstablecidoId` INT(11) NULL COMMENT 'Relacion con el centro establecido' AFTER `importeContribucion`,
  ADD COLUMN `divisaId` INT(11) NULL COMMENT 'Relacion con la divisa' AFTER `centroEstablecidoId`,
  ADD CONSTRAINT `oft_centroEstablecido` FOREIGN KEY (`centroEstablecidoId`) REFERENCES `gdes_pipeline`.`centros_establecidos`(`centroEstablecidoId`),
  ADD CONSTRAINT `oft_divisas` FOREIGN KEY (`divisaId`) REFERENCES `gdes_pipeline`.`divisas`(`divisaId`);
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `numeroLicitacion` DECIMAL(12,2) NULL COMMENT 'Numero licitacion';  
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `codigoGdes` DECIMAL(12,2) NULL COMMENT 'Código de oferta GDES';  
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `importeInversionDivisa` DECIMAL(12,2) NULL COMMENT 'Importe de inversión en la divisa' AFTER `codigoGdes`;

ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `nombreCorto` VARCHAR(255) NULL COMMENT 'Nombre corto para la oferta' AFTER `importeInversionDivisa`;
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `cliente` VARCHAR(255) NULL COMMENT 'Nombre del cliente' AFTER `numeroLicitacion`;
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `fechaDivisa` DATE NULL COMMENT 'Fecha en la que se aplicó la última conversión de divisa' AFTER `cliente`;
