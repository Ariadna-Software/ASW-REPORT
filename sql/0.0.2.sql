CREATE TABLE `gdes_pipeline`.`tipos_oferta`(  
  `tipoOfertaId` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`tipoOfertaId`)
);

ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `tipoOfertaId` INT(11) NULL COMMENT 'Tipo de oferta' AFTER `centroId`,
  ADD CONSTRAINT `oft_tipo_oferta` FOREIGN KEY (`tipoOfertaId`) REFERENCES `gdes_pipeline`.`tipos_oferta`(`tipoOfertaId`);

ALTER TABLE `gdes_pipeline`.`tipos_oferta`   
  CHANGE `tipoOfertaId` `tipoOfertaId` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único del tipo de oferta',
  CHANGE `nombre` `nombre` VARCHAR(255) CHARSET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Nombre del tipo de oferta';

ALTER TABLE `gdes_pipeline`.`proyectos`   
  CHANGE `numeroProyecto` `numeroProyecto` VARCHAR(255) NULL COMMENT 'Número de proyecto en GDES';

ALTER TABLE `gdes_pipeline`.`ofertas` CHANGE `fechaAceptacion` `fechaUltimoEstado` DATE NULL COMMENT 'Fecha en la que se produjo el cambio a estado actual'; 