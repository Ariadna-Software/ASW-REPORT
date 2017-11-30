ALTER TABLE `gdes_pipeline`.`usuarios`   
  ADD COLUMN `paisId` INT(11) NULL COMMENT 'Pais por defecto para ofertas' AFTER `apiKey`,
  ADD COLUMN `empresaId` INT(11) NULL COMMENT 'Empresa por defecto para ofertas' AFTER `paisId`,
  ADD COLUMN `areaId` INT(11) NULL COMMENT 'Área por defecto para ofertas' AFTER `empresaId`,
  ADD COLUMN `centroId` INT(11) NULL COMMENT 'Centro por defecto para ofertas' AFTER `areaId`,
  ADD CONSTRAINT `usuarios_paises` FOREIGN KEY (`paisId`) REFERENCES `gdes_pipeline`.`paises`(`paisId`),
  ADD CONSTRAINT `usuarios_empresas` FOREIGN KEY (`empresaId`) REFERENCES `gdes_pipeline`.`empresas`(`empresaId`),
  ADD CONSTRAINT `usuarios_areas` FOREIGN KEY (`areaId`) REFERENCES `gdes_pipeline`.`areas`(`areaId`),
  ADD CONSTRAINT `usuarios_centros` FOREIGN KEY (`centroId`) REFERENCES `gdes_pipeline`.`centros`(`centroId`);
