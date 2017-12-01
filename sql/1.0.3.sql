CREATE TABLE `asw_report`.`informes`(  
  `informeId` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255),
  `url` TEXT,
  `comentarios` TEXT,
  `grupoUsuarioId` INT(11),
  PRIMARY KEY (`informeId`),
  CONSTRAINT `ref_grupo` FOREIGN KEY (`grupoUsuarioId`) REFERENCES `asw_report`.`grupos_usuarios`(`grupoUsuarioId`)
);
