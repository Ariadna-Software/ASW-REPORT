ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `version` INT(11) NULL COMMENT 'Campo con el número de versión de la oferta. De moemento se incrementa con cada \'Aceptar\' del formulario.' AFTER `cliente`;
ALTER TABLE `gdes_pipeline`.`ofertas`   
  CHANGE `version` `version` INT(11) DEFAULT 0 NULL COMMENT 'Campo con el número de versión de la oferta. De moemento se incrementa con cada \'Aceptar\' del formulario.';
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `multiplicador` DECIMAL(5,2) NULL COMMENT 'Factor multiplicador de divisa' AFTER `version`;  
ALTER TABLE `gdes_pipeline`.`ofertas`   
  ADD COLUMN `fechaDivisa` DATE NULL COMMENT 'Fecha de último cálculo divisa' AFTER `multiplicador`;
ALTER TABLE `gdes_pipeline`.`ofertas`   
  CHANGE `numeroLicitacion` `numeroLicitacion` VARCHAR(255) NULL COMMENT 'Numero licitacion';    